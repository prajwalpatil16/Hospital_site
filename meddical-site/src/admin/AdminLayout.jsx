import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

export default function AdminLayout() {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN AREA */}
      <div className="flex-1">
        <AdminTopbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
