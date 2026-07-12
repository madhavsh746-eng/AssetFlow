import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const menuItems = [
    { name: "Dashboard",   path: "/dashboard",   icon: "📊" },
    { name: "Assets",      path: "/assets",       icon: "📦" },
    { name: "Allocation",  path: "/allocation",   icon: "👥" },
    { name: "Bookings",    path: "/bookings",     icon: "📅" },
    { name: "Maintenance", path: "/maintenance",  icon: "🛠" },
    { name: "Audit",       path: "/audit",        icon: "📋" },
    { name: "Reports",     path: "/reports",      icon: "📈" },
    { name: "Users",       path: "/users",        icon: "👤" },
];

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-2xl font-bold text-blue-400">AssetFlow</h1>
                <p className="text-slate-400 text-xs mt-1">Enterprise Asset Management</p>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                                isActive
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        <span>{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-700">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition-all duration-200 text-sm font-medium"
                >
                    🚪 Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;