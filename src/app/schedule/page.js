export default function SchedulePage() {
  return (
    <div
      className="min-h-screen w-full bg-[#4b4334] text-[#e6d8cf]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.35), transparent 60%)",
      }}
    >
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-stretch gap-10 px-6 py-16 lg:max-w-none lg:grid-cols-2 lg:gap-0 lg:px-0 lg:py-0">
        <section className="relative flex min-h-[520px] flex-col justify-center overflow-hidden lg:min-h-screen">
          <img
            src="/imgs/schedule.jpeg"
            alt="Reception setting"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4b4334]/70" aria-hidden="true" />
          <div className="relative z-10 px-10 py-12 lg:px-16">
            <h1 className="text-xl uppercase tracking-[0.28em] text-[#e6d8cf] sm:text-2xl">
              Schedule of Events
            </h1>
            <div className="mt-10 space-y-8 text-sm text-[#e6d8cf] sm:text-base">
              {[
                ["5:00 PM", "Welcome Cocktails"],
                ["6:00 PM", "Dinner & Yapping"],
                ["7:00 PM", "Speeches"],
                ["8:00 PM", "Cake Cutting & Photos"],
                ["10:00 PM", "Finish"],
              ].map(([time, label]) => (
                <div
                  className="flex items-center justify-between border-b border-[#e6d8cf]/40 pb-4"
                  key={time}
                >
                  <span className="uppercase tracking-[0.2em]">{time}</span>
                  <span className="text-right">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center gap-8 px-6 py-16 text-[#e6d8cf] lg:px-16 lg:py-0">
          <h2 className="text-2xl uppercase tracking-[0.3em] lg:text-3xl">
            Reception
          </h2>

          <div>
            <h3 className="text-lg uppercase tracking-[0.2em]">Reception Venue</h3>
            <p className="mt-3 text-sm leading-7 text-[#e6d8cf]/90 lg:text-base font-[family-name:var(--font-roboto-mono)]">
              Our indoor reception will take place at L’Olivo Cicchetti &amp;
              Lounge. Please arrive no later than 6:00 pm for a seated dinner and
              speeches.
            </p>
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-[0.2em]">Dress Code</h3>
            <p className="mt-3 text-sm leading-7 text-[#e6d8cf]/90 lg:text-base font-[family-name:var(--font-roboto-mono)]">
              We invite our guests to dress in elevated cocktail attire for a
              summer evening celebration.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["#380203", "#955859", "#848261", "#132207", "#97795e", "#3d2500", "#060029"].map(
                (color) => (
                  <span
                    className="h-12 w-12 rounded-full"
                    key={color}
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-[0.2em]">
              Parking &amp; Directions
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#e6d8cf]/80 lg:text-base">
              TBA
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
