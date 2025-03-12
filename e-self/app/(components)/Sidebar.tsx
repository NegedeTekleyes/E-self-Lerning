export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 hidden md:block">
      <nav>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-400">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-400">My Courses</li>
          <li className="cursor-pointer hover:text-blue-400">Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
