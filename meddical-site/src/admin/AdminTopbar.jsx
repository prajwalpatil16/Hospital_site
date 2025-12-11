export default function AdminTopbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-end items-center">
      <div className="flex items-center gap-3">
        <span className="text-gray-600 font-semibold">Admin</span>
        <img
          src="/images/admin-avatar.png"
          alt="admin"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
}
