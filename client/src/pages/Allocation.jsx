import React, { useState } from "react";

const allocations = [
    { id: "AL-001", asset: "Dell Laptop - XPS 15",   serial: "DL-001", assignedTo: "Madhav Sharma",  dept: "IT",    date: "2026-06-01", returnDate: "—",           status: "Active" },
    { id: "AL-002", asset: "MacBook Pro 14\"",         serial: "MB-002", assignedTo: "Mihir Bansal",   dept: "IT",    date: "2026-06-10", returnDate: "—",           status: "Active" },
    { id: "AL-003", asset: "iPhone 14 Pro",            serial: "IP-008", assignedTo: "Satyam Kumar",   dept: "Mgmt",  date: "2026-05-15", returnDate: "—",           status: "Active" },
    { id: "AL-004", asset: "Toyota Corolla",           serial: "TC-006", assignedTo: "Shrseth Gupta",  dept: "Sales", date: "2026-07-01", returnDate: "2026-07-10",  status: "Returned" },
];

const statusColors = { Active: "bg-green-100 text-green-700", Returned: "bg-slate-100 text-slate-600", Overdue: "bg-red-100 text-red-700" };

const Allocation = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Asset Allocation</h1>
                    <p className="text-slate-500 text-sm mt-1">Assign and track asset allocation to employees</p>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition">
                    + Allocate Asset
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    { label: "Active Allocations", value: allocations.filter(a=>a.status==="Active").length,   color: "bg-green-600" },
                    { label: "Returned",           value: allocations.filter(a=>a.status==="Returned").length, color: "bg-slate-600" },
                    { label: "Overdue",            value: 0,                                                    color: "bg-red-600" },
                ].map(s => (
                    <div key={s.label} className={`${s.color} text-white rounded-xl p-5 shadow-sm`}>
                        <p className="text-3xl font-bold">{s.value}</p>
                        <p className="text-sm opacity-90 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            {["ID","Asset","Serial","Assigned To","Department","Alloc. Date","Return Date","Status","Actions"].map(h => (
                                <th key={h} className="px-4 py-3 text-left font-semibold text-slate-600">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {allocations.map(a => (
                            <tr key={a.id} className="hover:bg-slate-50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{a.id}</td>
                                <td className="px-4 py-3 font-medium text-slate-800">{a.asset}</td>
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{a.serial}</td>
                                <td className="px-4 py-3 text-slate-700">{a.assignedTo}</td>
                                <td className="px-4 py-3 text-slate-600">{a.dept}</td>
                                <td className="px-4 py-3 text-slate-600 text-xs">{a.date}</td>
                                <td className="px-4 py-3 text-slate-500 text-xs">{a.returnDate}</td>
                                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[a.status]}`}>{a.status}</span></td>
                                <td className="px-4 py-3">
                                    {a.status === "Active" && <button className="text-red-500 hover:underline text-xs">Return</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Allocate Asset</h2>
                        <div className="space-y-3">
                            {["Asset Serial No.","Assign To (Employee)","Department","Allocation Date"].map(f => (
                                <div key={f}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f}</label>
                                    <input type={f.includes("Date") ? "date" : "text"} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={`Enter ${f}`} />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-300 py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Allocate</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Allocation;
