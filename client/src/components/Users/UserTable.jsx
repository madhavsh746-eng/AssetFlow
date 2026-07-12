import React from "react";

const users = [
    {
        id: 1,
        name: "Madhav Sharma",
        email: "madhav@gmail.com",
        role: "Admin",
    },
    {
        id: 2,
        name: "Mihir Bansal",
        email: "mihir@gmail.com",
        role: "Employee",
    },
    {
        id: 3,
        name: "Rahul Singh",
        email: "rahul@gmail.com",
        role: "Manager",
    },
];

const UserTable = () => {
    return (
        <table className="w-full">

            <thead>

                <tr className="border-b">

                    <th className="text-left py-3">Name</th>

                    <th className="text-left py-3">Email</th>

                    <th className="text-left py-3">Role</th>

                </tr>

            </thead>

            <tbody>

                {users.map((user) => (

                    <tr
                        key={user.id}
                        className="border-b"
                    >

                        <td className="py-3">
                            {user.name}
                        </td>

                        <td className="py-3">
                            {user.email}
                        </td>

                        <td className="py-3">
                            {user.role}
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
};

export default UserTable;