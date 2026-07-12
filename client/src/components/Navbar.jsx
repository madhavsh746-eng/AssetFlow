import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        AssetFlow
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-semibold">
          U
        </div>
      </div>
    </header>
  );
};

export default Navbar;
