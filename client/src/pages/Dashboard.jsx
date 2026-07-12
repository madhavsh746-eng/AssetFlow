import DashboardCard from "../components/dashboard/DashboardCard";
import Input from "../components/forms/Input";

const Dashboard = () => {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Asset Dashboard
      </h1>

      <DashboardCard />

      <div className="mt-8">
        <Input
          label="Search Asset"
          placeholder="Enter asset name"
        />
      </div>

    </div>
  );
};

export default Dashboard;