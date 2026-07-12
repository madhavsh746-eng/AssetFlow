import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { token } = useContext(AuthContext);

    // Extract user info from token if available
    const userInitial = "A";

    return (
        <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
            <div>
                <p className="text-sm text-slate-500">Welcome back 👋</p>
            </div>

            <div className="flex items-center gap-3">
                {/* Notification bell */}
                <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition">
                    <span className="text-lg">🔔</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Avatar */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {userInitial}
                    </div>
                    <div className="hidden md:block">
                        <p className="text-sm font-semibold text-slate-800">Admin</p>
                        <p className="text-xs text-slate-500">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;