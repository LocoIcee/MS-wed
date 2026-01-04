import Image from "next/image";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen w-full bg-[#270a0a] text-[#d9c2ad]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.35), transparent 60%)",
      }}
    >
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col items-center justify-center px-6 py-16 text-center lg:px-16">
          <h1 className="font-[family-name:var(--font-pinyon-script)] text-4xl text-[#c8a588] sm:text-5xl md:text-6xl">
            Contact Us
          </h1>

          <div className="mt-10 space-y-10 text-sm leading-7 text-[#d9c2ad] sm:text-base">
            <div>
              <h2 className="text-base uppercase tracking-[0.2em] text-[#c8a588] sm:text-lg">
                The Bride&apos;s Information
              </h2>
              <p className="mt-4"><a href="tel:403-616-1966">403-616-1966</a></p>
              <p><a href="mailto:monique.anderson@gmail.com">monique.anderson@gmail.com</a></p>
              <p><a href="https://www.instagram.com/moniquue.anderson">@moniquue.anderson</a></p>
            </div>

            <div>
              <h2 className="text-base uppercase tracking-[0.2em] text-[#c8a588] sm:text-lg">
                The Groom&apos;s Information
              </h2>
              <p className="mt-4"><a href="tel:403-804-6828">403-804-6828</a></p>
              <p><a href="mailto:stewart.k.lum@gmail.com">stewart.k.lum@gmail.com</a></p>
              <p><a href="https://www.instagram.com/stewielum">@stewielum</a></p>
            </div>
          </div>
        </section>

        <div className="relative min-h-[360px] w-full lg:min-h-screen">
          <Image
            src="/imgs/contact.JPG"
            alt="Stewart and Monique walking together"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
