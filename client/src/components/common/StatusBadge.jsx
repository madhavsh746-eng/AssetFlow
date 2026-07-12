const StatusBadge = ({ status }) => {

  const styles = {
    Available: "bg-green-100 text-green-700",
    Assigned: "bg-blue-100 text-blue-700",
    Maintenance: "bg-yellow-100 text-yellow-700"
  };


  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium 
      ${styles[status] || "bg-gray-100 text-gray-700"}`}
    >
      {status}
    </span>
  );
};


export default StatusBadge;