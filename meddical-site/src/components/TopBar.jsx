export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="flex items-center">
          <img src="/images/Meddical.svg" alt="Logo" className="h-10" />
        </div>

        {/* RIGHT INFO (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-10">

          {/* Emergency */}
          <div className="flex items-center gap-2">
            <img src="/icons/phone.png" className="w-5" />
            <div>
              <p className="text-xs font-semibold text-gray-700">Emergency</p>
              <p className="text-sm font-bold text-blue-600">(237) 681-812-255</p>
            </div>
          </div>

          {/* Work Hour */}
          <div className="flex items-center gap-2">
            <img src="/icons/clock.png" className="w-5" />
            <div>
              <p className="text-xs font-semibold text-gray-700">Work Hour</p>
              <p className="text-sm font-bold text-blue-600">09:00 - 20:00</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <img src="/icons/location.png" className="w-5" />
            <div>
              <p className="text-xs font-semibold text-gray-700">Location</p>
              <p className="text-sm font-bold text-blue-600">0123 Some Place</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE INFO BLOCKS */}
      <div className="md:hidden px-4 pb-3 space-y-3">

        <div className="flex items-center gap-2">
          <img src="/icons/phone.png" className="w-5" />
          <p className="text-sm font-semibold text-blue-600">(237) 681-812-255</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/clock.png" className="w-5" />
          <p className="text-sm font-semibold text-blue-600">09:00 - 20:00 Everyday</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="/icons/location.png" className="w-5" />
          <p className="text-sm font-semibold text-blue-600">0123 Some Place</p>
        </div>

      </div>
    </div>
  );
}
