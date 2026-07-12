import React from "react";

const assets = [
    {
        id: 1,
        name: "Dell Laptop",
        status: "Assigned",
    },
    {
        id: 2,
        name: "MacBook",
        status: "Available",
    },
    {
        id: 3,
        name: "HP Monitor",
        status: "Maintenance",
    },
];

const RecentAssets = () => {
    return (
        <div className="bg-white rounded-lg shadow mt-8 p-5">

            <h2 className="text-xl font-semibold mb-4">
                Recent Assets
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-2">
                            Asset
                        </th>

                        <th className="text-left py-2">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {assets.map((asset) => (

                        <tr
                            key={asset.id}
                            className="border-b"
                        >

                            <td className="py-3">
                                {asset.name}
                            </td>

                            <td className="py-3">
                                {asset.status}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
};

export default RecentAssets;