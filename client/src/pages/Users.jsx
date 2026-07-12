import React from "react";
import UserTable from "../components/Users/UserTable";

const Users = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-6">User Management</h1>

            <div className="mt-5 bg-white p-5 rounded-lg shadow border border-slate-200">
                <UserTable />
            </div>
        </div>
    );
};

export default Users;