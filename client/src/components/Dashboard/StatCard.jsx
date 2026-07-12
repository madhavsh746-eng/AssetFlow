import React from "react";

const StatCard = ({ title, value, color }) => {
    return (
        <div
            className="rounded-lg p-5 text-white shadow"
            style={{ backgroundColor: color }}
        >
            <h3 className="text-sm">{title}</h3>

            <p className="text-3xl font-bold mt-2">
                {value}
            </p>
        </div>
    );
};

export default StatCard;