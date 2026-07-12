import React from "react";
import StatCard from "../components/Dashboard/StatCard";
import RecentAssets from "../components/Dashboard/RecentAssets";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 20,
                    marginTop: 20,
                }}
            >
                <StatCard
                    title="Total Assets"
                    value="120"
                    color="#2563eb"
                />

                <StatCard
                    title="Assigned"
                    value="80"
                    color="#16a34a"
                />

                <StatCard
                    title="Available"
                    value="25"
                    color="#f59e0b"
                />

                <StatCard
                    title="Maintenance"
                    value="15"
                    color="#dc2626"
                />
            </div>

            <RecentAssets />
        </div>
    );
};

export default Dashboard;