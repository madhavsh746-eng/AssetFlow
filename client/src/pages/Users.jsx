import React from "react";
import UserTable from "../components/Users/UserTable";

const Users = () => {
    return (
        <div>
            <h1>User Management</h1>

            <div
                style={{
                    marginTop: 20,
                    background: "#fff",
                    padding: 20,
                    borderRadius: 10,
                }}
            >
                <UserTable />
            </div>
        </div>
    );
};

export default Users;