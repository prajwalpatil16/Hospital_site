export default function DashboardHome() {
  return (
    <div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-[#1F2B6C] mb-6">Dashboard Overview</h1>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-lg font-semibold">Doctors</h3>
          <p className="text-3xl font-bold text-blue-600">24</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-lg font-semibold">Patients</h3>
          <p className="text-3xl font-bold text-green-600">480</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-3xl font-bold text-orange-600">143</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-lg font-semibold">Services</h3>
          <p className="text-3xl font-bold text-purple-600">18</p>
        </div>

      </div>

      {/* CHART & STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white shadow rounded-xl p-6 h-80 flex items-center justify-center text-gray-500">
          Chart Placeholder (Appointments Overview)
        </div>

        <div className="bg-white shadow rounded-xl p-6 h-80 flex items-center justify-center text-gray-500">
          Chart Placeholder (Patients Growth)
        </div>

      </div>

    </div>
  );
}
