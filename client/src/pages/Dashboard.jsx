const Dashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-gray-500">Total Assets</h2>
                    <p className="text-3xl font-bold">125</p>
                </div>

                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-gray-500">Available</h2>
                    <p className="text-3xl font-bold text-green-600">80</p>
                </div>

                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-gray-500">Allocated</h2>
                    <p className="text-3xl font-bold text-blue-600">35</p>
                </div>

                <div className="bg-white shadow rounded-lg p-5">
                    <h2 className="text-gray-500">Departments</h2>
                    <p className="text-3xl font-bold">10</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;