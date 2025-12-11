export default function Welcome() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#F6FBFF] to-[#E8F1FF]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/welcome-hero.png"
            alt="Hospital Team"
            className="w-full max-w-lg drop-shadow-xl rounded-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
            WELCOME TO MEDDICAL
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2B6C] leading-tight">
            Compassionate Care, Trusted by Thousands
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            With over 25 years of trusted service, Meddical combines advanced
            medical technology with a highly experienced healthcare team to deliver
            world-class treatment across all specialties.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            From preventive screenings to life-saving procedures, our dedicated
            doctors ensure every patient receives personalized attention in a
            safe and comfortable environment.
          </p>
        </div>
      </div>

    </section>
  );
}
