export default function ScheduleHours() {
  const schedule = [
    ["Monday", "09:00 AM - 07:00 PM"],
    ["Tuesday", "09:00 AM - 07:00 PM"],
    ["Wednesday", "09:00 AM - 07:00 PM"],
    ["Thursday", "09:00 AM - 07:00 PM"],
    ["Friday", "09:00 AM - 07:00 PM"],
    ["Saturday", "09:00 AM - 07:00 PM"],
    ["Sunday", "Closed"],
  ];

  return (
    <div className="bg-[#1F2B6C] text-white p-10 rounded-xl w-full shadow-lg">

      {/* Heading */}
      <h3 className="text-3xl font-semibold tracking-wide mb-10">
        Schedule Hours
      </h3>

      {/* Hours List */}
      <div className="space-y-6">
        {schedule.map(([day, hours], index) => (
          <div key={index}>
            <div className="flex justify-between text-lg font-light">
              <span className="flex gap-2 items-center">
                <span className="opacity-70">—</span> {day}
              </span>
              <span className="opacity-90">{hours}</span>
            </div>

            {/* Divider except last */}
            {index !== schedule.length - 1 && (
              <div className="border-b border-white/20 mt-3"></div>
            )}
          </div>
        ))}
      </div>

      {/* Emergency Box */}
      <div className="mt-12 flex items-center gap-4">
        <div className="bg-white/20 p-3 rounded-full">
          <img src="/icons/phone.png" className="w-6" />
        </div>

        <div>
          <p className="text-lg font-semibold">Emergency</p>
          <p className="text-gray-200">(237) 681-812-255</p>
        </div>
      </div>

    </div>
  );
}
