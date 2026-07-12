import StatusBadge from "../common/StatusBadge";

const assets = [
  {
    id: 1,
    name: "Dell Laptop",
    category: "Laptop",
    serial: "DL101",
    assigned: "Rahul",
    status: "Available",
  },
  {
    id: 2,
    name: "iPhone 15",
    category: "Mobile",
    serial: "IP202",
    assigned: "Amit",
    status: "Assigned",
  },
  {
    id: 3,
    name: "HP Monitor",
    category: "Monitor",
    serial: "HP303",
    assigned: "-",
    status: "Maintenance",
  },
];


const AssetTable = () => {
  return (
    <div className="
      bg-white
      rounded-xl
      shadow-md
      p-4
      sm:p-6
    ">

      <h2 className="text-xl font-bold mb-4">
        Asset Management
      </h2>


      <div className="overflow-x-auto">

        <table className="w-full min-w-[700px]">

          <thead>
            <tr className="border-b bg-gray-50">

              <th className="text-left p-3">
                Asset
              </th>

              <th className="text-left p-3">
                Category
              </th>

              <th className="text-left p-3">
                Serial Number
              </th>

              <th className="text-left p-3">
                Assigned To
              </th>

              <th className="text-left p-3">
                Status
              </th>

              <th className="text-left p-3">
                Action
              </th>

            </tr>
          </thead>


          <tbody>

            {assets.map((asset) => (

              <tr 
                key={asset.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-3">
                  {asset.name}
                </td>


                <td className="p-3">
                  {asset.category}
                </td>


                <td className="p-3">
                  {asset.serial}
                </td>


                <td className="p-3">
                  {asset.assigned}
                </td>


                <td className="p-3">
                  <StatusBadge status={asset.status} />
                </td>


                <td className="p-3">

                  <button
                    className="
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-lg
                    hover:bg-blue-700
                    transition
                    "
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};


export default AssetTable;