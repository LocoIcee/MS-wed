export default function FaqPage() {
  return (
    <div className="min-h-screen w-full bg-[#281d0c] text-[#e6d8cf]">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16">
        <section className="space-y-8">
          <div>
            <h1 className="text-4xl uppercase tracking-[0.35em]">
              FAQ
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-base font-semibold text-[#e6d8cf] sm:text-lg">
                Can I bring a +1 or kids?
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#e6d8cf]/90 sm:text-base">
                While we would love to celebrate with everyone, we&rsquo;re keeping
                our wedding intimate and are only able to invite those named on
                the invitation.
              </p>
              <div className="mt-6 h-px w-full bg-[#e6d8cf]/35" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#e6d8cf] sm:text-lg">
                Do you have a wedding registry?
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#e6d8cf]/90 sm:text-base">
                We are so grateful for your love and support. Should you wish to
                give a gift, a monetary contribution toward our future together
                would mean so much to us.
              </p>
              <div className="mt-6 h-px w-full bg-[#e6d8cf]/35" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#e6d8cf] sm:text-lg">
                Will there be a formal ceremony?
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#e6d8cf]/90 sm:text-base">
                Our celebration will focus on being fully present together—sharing
                great food, drinks, and time with the people we love as we gather
                for a reception-only evening.
              </p>
              <div className="mt-6 h-px w-full bg-[#e6d8cf]/35" />
            </div>
          </div>
        </section>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/imgs/faq.JPG"
            alt="Stewart and Monique on the train"
            className="w-full object-cover shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}
