import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const guestsFile = path.join(dataDir, "guests.json");
const rsvpsFile = path.join(dataDir, "rsvps.json");

const normalizeName = (value) => value.trim().toLowerCase();

const readJson = async (filePath, fallback) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") {
      return fallback;
    }
    throw error;
  }
};

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

  const guests = await readJson(guestsFile, []);
  const guest = guests.find(
    (entry) =>
      normalizeName(entry.firstName) === normalizeName(firstName) &&
      normalizeName(entry.lastName) === normalizeName(lastName)
  );

  if (!guest) {
    return Response.json({ found: false }, { status: 404 });
  }

  if (payload.action === "lookup") {
    return Response.json({ found: true });
  }

  if (payload.action === "respond") {
    const attending = Boolean(payload.attending);
    const nextEntry = {
      firstName: guest.firstName,
      lastName: guest.lastName,
      attending,
      respondedAt: new Date().toISOString(),
    };

    await fs.mkdir(dataDir, { recursive: true });
    const existing = await readJson(rsvpsFile, []);
    const filtered = existing.filter(
      (entry) =>
        !(
          normalizeName(entry.firstName) === normalizeName(guest.firstName) &&
          normalizeName(entry.lastName) === normalizeName(guest.lastName)
        )
    );
    filtered.push(nextEntry);
    await fs.writeFile(rsvpsFile, JSON.stringify(filtered, null, 2));

    const emailResult = await sendResendEmail({
      guest: nextEntry,
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
