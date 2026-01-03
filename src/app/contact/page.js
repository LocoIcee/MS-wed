export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#270a0a] text-[#d9c2ad]">
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
              <p className="mt-4">403-616-1966</p>
              <p>monique.anderson@gmail.com</p>
              <p>@monique.anderson</p>
            </div>

            <div>
              <h2 className="text-base uppercase tracking-[0.2em] text-[#c8a588] sm:text-lg">
                The Groom&apos;s Information
              </h2>
              <p className="mt-4">403-804-6828</p>
              <p>stewart.k.lum@gmail.com</p>
              <p>@stewielum</p>
            </div>
          </div>
        </section>

        <div className="relative min-h-[360px] w-full lg:min-h-screen">
          <img
            src="/imgs/contact.JPG"
            alt="Stewart and Monique walking together"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
