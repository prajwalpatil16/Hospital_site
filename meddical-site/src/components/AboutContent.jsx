export default function AboutContent() {
  return (
    <section className="w-full bg-blue-50 py-12">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/welcome-hero.png"
            alt="Hospital Doctors"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5">

          {/* Small Header */}
          <p className="text-blue-700 tracking-wide font-semibold uppercase">
            About Our Hospital
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2B6C] leading-snug">
            Delivering Excellence in  
            <span className="block">Healthcare for Over 25 Years</span>
          </h2>

          {/* INTRO PARAGRAPH */}
          <p className="text-gray-700 leading-relaxed">
            Meddical Hospital is among the region’s most trusted healthcare centers,
            serving over <strong>1.2 million patients</strong> since its establishment.
            Combining advanced medical technology with highly experienced specialists,
            we ensure safe, reliable, and compassionate care for every patient.
          </p>

          {/* ACHIEVEMENTS GRID */}
          <div className="grid grid-cols-2 gap-4">

            <ul className="space-y-1 text-gray-700">
              <li>▪️ <strong>5000+ Surgeries</strong> annually</li>
              <li>▪️ NABH & ISO Certified</li>
              <li>▪️ 24/7 Emergency Care</li>
            </ul>

            <ul className="space-y-1 text-gray-700">
              <li>▪️ Robotics & AI Diagnostics</li>
              <li>▪️ Accredited ICU & Blood Bank</li>
              <li>▪️ 200+ Senior Specialists</li>
            </ul>

          </div>

          {/* MISSION */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2B6C]">Our Mission</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              To offer high-quality, accessible, and patient-centered healthcare through
              modern medical practices—preserving dignity, trust, and compassion.
            </p>
          </div>

          {/* VISION */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2B6C]">Our Vision</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              To become a global benchmark in healthcare excellence through innovation,
              medical research, and a healing environment that prioritizes patient comfort.
            </p>
          </div>

          {/* VALUES */}
          <div>
            <h3 className="text-xl font-bold text-[#1F2B6C]">Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
              <li>Integrity & Ethical Care</li>
              <li>Compassion & Respect</li>
              <li>Innovation & Excellence</li>
              <li>Safety, Trust & Transparency</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
