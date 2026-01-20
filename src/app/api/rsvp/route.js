import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const normalizeName = (value) => value.trim().toLowerCase();

const sendResendEmail = async ({ guest, attending }) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;

  if (!apiKey || !from || !to) {
    return { ok: false, reason: "missing_env" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `RSVP: ${guest.firstName} ${guest.lastName}`,
      html: `<p>${guest.firstName} ${guest.lastName} responded: <strong>${
        attending ? "Attending" : "Unable to attend"
      }</strong>.</p>`,
    }),
  });

  if (!response.ok) {
    return { ok: false, reason: "send_failed" };
  }

  return { ok: true };
};

export async function POST(request) {
  const payload = await request.json();
  const firstName = payload?.firstName?.trim();
  const lastName = payload?.lastName?.trim();

  if (!firstName || !lastName) {
    return Response.json({ error: "Missing name fields." }, { status: 400 });
  }

  if (!supabase) {
    return Response.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const { data: guest, error: guestError } = await supabase
    .from("guests")
    .select("id, first_name, last_name")
    .eq("first_name_lower", normalizeName(firstName))
    .eq("last_name_lower", normalizeName(lastName))
    .maybeSingle();

  if (guestError) {
    return Response.json({ error: "Guest lookup failed." }, { status: 500 });
  }

  if (!guest) {
    return Response.json({ found: false }, { status: 404 });
  }

  if (payload.action === "lookup") {
    return Response.json({ found: true });
  }

  if (payload.action === "respond") {
    const attending = Boolean(payload.attending);
    const now = new Date().toISOString();

    const { error: rsvpError } = await supabase.from("rsvps").upsert(
      {
        guest_id: guest.id,
        attending,
        responded_at: now,
        updated_at: now,
      },
      { onConflict: "guest_id" }
    );

    if (rsvpError) {
      return Response.json({ error: "RSVP save failed." }, { status: 500 });
    }

    const emailResult = await sendResendEmail({
      guest: {
        firstName: guest.first_name,
        lastName: guest.last_name,
      },
      attending,
    });

    return Response.json({
      saved: true,
      emailSent: emailResult.ok,
      emailReason: emailResult.ok ? null : emailResult.reason,
    });
  }

  return Response.json({ error: "Unsupported action." }, { status: 400 });
}
