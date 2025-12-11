import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const menu = [
    { title: "Dashboard", path: "/admin/dashboard" },
    { title: "Doctors", path: "/admin/doctors" },
    { title: "Patients", path: "/admin/patients" },
    { title: "Appointments", path: "/admin/appointments" },
    { title: "Services", path: "/admin/services" },
    { title: "Specialties", path: "/admin/specialties" },
    { title: "News", path: "/admin/news" },
  ];

  return (
    <aside className="w-64 bg-[#1F2B6C] text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-3">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`block px-4 py-2 rounded-lg transition
              ${pathname === item.path ? "bg-blue-400" : "hover:bg-blue-600"}
            `}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
