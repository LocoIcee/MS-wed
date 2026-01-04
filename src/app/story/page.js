import Image from "next/image";

export default function StoryPage() {
  return (
    <div
      className="min-h-screen w-full bg-[#270a0a] text-[#e6d8cf]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.35), transparent 60%)",
      }}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16">
        <div className="flex w-full items-center justify-center">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
            <div className="text-center text-4xl uppercase tracking-[0.35em] text-[#e6d8cf] lg:block font-[family-name:var(--font-quattrocento)]">
              Love
            </div>
            <div className="flex justify-center">
              <Image
                src="/imgs/story.JPG"
                alt="Stewart and Monique"
                width={512}
                height={640}
                className="w-64 max-w-full shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:w-100"
                sizes="(min-width: 1024px) 33vw, 60vw"
              />
            </div>
            <div className="text-center text-4xl uppercase tracking-[0.35em] text-[#e6d8cf] lg:block font-[family-name:var(--font-quattrocento)]">
              Story
            </div>
          </div>
        </div>
        <div className="max-w-4xl text-center text-sm lg:text-base leading-7 text-[#e6d8cf] font-[family-name:var(--font-roboto-mono)]">
          <p>
            Stewart &amp; Monique met in 2020 and had no idea they would be so
            compatible. What started as a joke became a beautiful and strong
            relationship. They are truly inseparable and can&apos;t do anything without
            each other. Now they are focusing on travelling the world with each
            other and their lives with their dog Tobi. Maybe another dog soon. There
            is so much love and passion for each other and they want to celebrate
            this love with you.
          </p>
        </div>
      </div>
    </div>
  );
}
