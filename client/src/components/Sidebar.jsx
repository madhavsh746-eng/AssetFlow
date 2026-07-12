import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
      <div className="p-6 font-bold text-xl text-white tracking-wide border-b border-slate-700">
        AssetFlow
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to="/" className="block px-4 py-2 rounded hover:bg-slate-800 hover:text-white transition-colors">
          Dashboard
        </Link>
        <Link to="/assets" className="block px-4 py-2 rounded hover:bg-slate-800 hover:text-white transition-colors">
          Assets
        </Link>
        <Link to="/bookings" className="block px-4 py-2 rounded hover:bg-slate-800 hover:text-white transition-colors">
          Bookings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
