const AssetTable = () => {

  const assets = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      status: "Assigned"
    },
    {
      id: 2,
      name: "Monitor",
      category: "Electronics",
      status: "Available"
    }
  ];

  return (
    <div className="mt-8 overflow-x-auto">

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Asset</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>

        <tbody>

          {assets.map((asset) => (
            <tr key={asset.id}>

              <td className="p-3 border">
                {asset.id}
              </td>

              <td className="p-3 border">
                {asset.name}
              </td>

              <td className="p-3 border">
                {asset.category}
              </td>

              <td className="p-3 border">
                {asset.status}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};


export default AssetTable;