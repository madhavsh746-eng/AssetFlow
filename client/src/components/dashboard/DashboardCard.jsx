import Card from "../ui/Card";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      <Card 
        title="Total Assets"
        value="120"
      />

      <Card
        title="Assigned Assets"
        value="85"
      />

      <Card
        title="Available Assets"
        value="35"
      />

    </div>
  );
};

export default DashboardCard;