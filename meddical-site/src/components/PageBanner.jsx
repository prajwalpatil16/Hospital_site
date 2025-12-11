export default function PageBanner({ title, breadcrumb, image }) {
  return (
    <div className="relative w-full h-[110px] md:h-[250px] overflow-hidden">

      {/* Background Image */}
      <img
        src={image}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10">
        <p className="text-xs md:text-base text-blue-900 font-medium mb-1">
          {breadcrumb}
        </p>

        <h1 className="text-2xl md:text-4xl font-bold text-[#1F2B6C] leading-tight">
          {title}
        </h1>
      </div>

    </div>
  );
}
