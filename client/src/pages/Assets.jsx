const Assets = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Assets</h1>

            <table className="w-full border rounded">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3">Asset</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="p-3">Dell Laptop</td>
                        <td className="p-3">Electronics</td>
                        <td className="p-3 text-green-600">Available</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Assets;