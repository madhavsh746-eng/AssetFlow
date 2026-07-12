import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Assets",
      path: "/assets",
    },
    {
      name: "Users",
      path: "/users",
    },
    {
      name: "Bookings",
      path: "/bookings",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        AssetFlow
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-lg transition-all duration-200 ${location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;