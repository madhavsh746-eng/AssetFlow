const Navbar = () => {
    return (
        <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">AssetFlow</h2>

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                    A
                </div>
                <span className="font-medium text-slate-700">Admin</span>
            </div>
        </header>
    );
};

export default Navbar;