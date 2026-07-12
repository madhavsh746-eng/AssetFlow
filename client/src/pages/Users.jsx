const Users = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Users</h1>

            <table className="w-full border rounded">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3">Name</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Assets</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="p-3">John Doe</td>
                        <td className="p-3">IT</td>
                        <td className="p-3">2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;