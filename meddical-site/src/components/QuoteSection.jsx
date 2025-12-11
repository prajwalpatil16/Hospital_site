export default function QuoteSection({ text, author }) {
  return (
    <section className="relative w-full py-20 bg-[url('/images/doctor-blur.svg')] bg-cover bg-center bg-no-repeat">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        
        {/* Quote Text */}
        <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
          “{text}”
        </p>

        {/* Author */}
        <h4 className="text-white text-lg font-semibold mb-6">
          {author}
        </h4>

      </div>
    </section>
  );
}
