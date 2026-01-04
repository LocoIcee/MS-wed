const leafStroke = "#6f6a4a";

const cornerLeaf = (
  <svg
    viewBox="0 0 400 400"
    className="h-full w-full"
    fill="none"
    stroke={leafStroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M48 340c48-94 128-158 236-190" />
    <path d="M90 310c22-6 42-6 60 4" />
    <path d="M130 270c20-4 38-2 52 8" />
    <path d="M174 232c22-2 40 4 52 16" />
    <path d="M220 196c22 0 40 8 50 22" />
    <path d="M100 250c-10-22-10-46 2-68" />
    <path d="M146 214c-8-18-8-36 0-54" />
    <path d="M192 182c-8-16-8-32 0-48" />
    <path d="M240 150c-6-16-6-30 2-44" />
    <circle cx="120" cy="298" r="5" />
    <circle cx="168" cy="260" r="4" />
    <circle cx="214" cy="220" r="4" />
  </svg>
);

export default function RsvpPage() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-[#373328] text-[#f1e9d8]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.35), transparent 60%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-20 h-[360px] w-[360px] opacity-60">
          {cornerLeaf}
        </div>
        <div className="absolute -bottom-24 -left-20 h-[360px] w-[360px] -scale-x-100 opacity-55">
          {cornerLeaf}
        </div>
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <p className="page-title font-[family-name:var(--font-pinyon-script)] text-4xl text-[#f1e9d8] drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
          Be Our Guest
        </p>
        <h1 className="page-subtitle mt-4 text-2xl uppercase tracking-[0.35em] text-[#efe6d4] drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-4xl">
          July 23, 2026, 5:00pm
        </h1>
        <p className="page-lede mt-4 font-[family-name:var(--font-pinyon-script)] text-2xl text-[#efe6d4]/90 sm:text-3xl lg:text-4xl">
          Let us know if you can make it
        </p>

        <form className="page-content mt-10 w-full max-w-md">
          <label className="sr-only" htmlFor="rsvp-email">
            Email address
          </label>
          <input
            id="rsvp-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="w-full border border-[#f1e9d8]/40 bg-transparent px-5 py-3 text-center text-sm uppercase tracking-[0.35em] text-[#f1e9d8] placeholder:text-[#f1e9d8]/45 focus:border-[#f1e9d8]/70 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
}
