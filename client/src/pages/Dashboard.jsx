import AssetTable from "../components/table/AssetTable";
import DashboardCard from "../components/dashboard/DashboardCard";
import AssetForm from "../components/forms/AssetForm";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Asset Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage and track all company assets efficiently
        </p>
      </div>


      {/* Dashboard Content */}
      <div className="space-y-8">

        {/* Statistics Cards */}
        <section>
          <DashboardCard />
        </section>


        {/* Add Asset Form */}
        <section className="
          bg-white 
          rounded-xl 
          shadow-md 
          p-4 
          sm:p-6
        ">
          <AssetForm />
        </section>


        {/* Asset Management Table */}
        <section>
          <AssetTable />
        </section>


      </div>

    </div>
  );
};

export default Dashboard;