import AssetTable from "../components/table/AssetTable";
import DashboardCard from "../components/dashboard/DashboardCard";
import AssetForm from "../components/forms/AssetForm";

const Dashboard = () => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Asset Dashboard
      </h1>


      {/* Dashboard Statistics Cards */}
      <DashboardCard />


      {/* Add Asset Form */}
      <div className="mt-8">
        <AssetForm />
      </div>


      {/* Asset Table */}
      <div className="mt-8">
        <AssetTable />
      </div>


    </div>
  );
};

export default Dashboard;