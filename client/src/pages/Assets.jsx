import React, { useState } from "react";

const sampleAssets = [
    { id: 1, name: "Dell Laptop - XPS 15",   category: "Electronics", status: "Available",   dept: "IT",  serial: "DL-001" },
    { id: 2, name: "MacBook Pro 14\"",         category: "Electronics", status: "Allocated",   dept: "HR",  serial: "MB-002" },
    { id: 3, name: "HP Monitor 27\"",          category: "Electronics", status: "Available",   dept: "IT",  serial: "HP-003" },
    { id: 4, name: "Office Chair - Ergonomic", category: "Furniture",   status: "Available",   dept: "Admin", serial: "OC-004" },
    { id: 5, name: "Canon Printer MF3010",     category: "Electronics", status: "Maintenance", dept: "IT",  serial: "CP-005" },
    { id: 6, name: "Toyota Corolla",           category: "Vehicle",     status: "Allocated",   dept: "Sales", serial: "TC-006" },
    { id: 7, name: "Conference Desk",          category: "Furniture",   status: "Available",   dept: "Admin", serial: "CD-007" },
    { id: 8, name: "iPhone 14 Pro",            category: "Electronics", status: "Allocated",   dept: "Management", serial: "IP-008" },
];

const statusColors = {
    Available:   "bg-green-100 text-green-700",
    Allocated:   "bg-blue-100 text-blue-700",
    Maintenance: "bg-amber-100 text-amber-700",
    Retired:     "bg-red-100 text-red-700",
};

const Assets = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);

    const filtered = sampleAssets.filter(a => {
        const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.serial.includes(search);
        const matchFilter = filter === "All" || a.status === filter;
        return matchSearch && matchFilter;
    });

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Asset Management</h1>
                    <p className="text-slate-500 text-sm mt-1">Manage and track all organizational assets</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition"
                >
                    + Register Asset
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Total", value: sampleAssets.length, color: "text-slate-800" },
                    { label: "Available", value: sampleAssets.filter(a=>a.status==="Available").length, color: "text-green-600" },
                    { label: "Allocated", value: sampleAssets.filter(a=>a.status==="Allocated").length, color: "text-blue-600" },
                    { label: "Maintenance", value: sampleAssets.filter(a=>a.status==="Maintenance").length, color: "text-amber-600" },
                ].map(s => (
                    <div key={s.label} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                        <p className="text-slate-500 text-xs uppercase font-medium">{s.label}</p>
                        <p className={`text-3xl font-bold mt-1 ${s.color}`}>{s.value}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4 flex flex-wrap gap-3">
                <input
                    type="text"
                    placeholder="🔍  Search by name or serial..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="flex-1 min-w-48 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {["All","Available","Allocated","Maintenance"].map(s => (
                    <button
                        key={s}
                        onClick={() => setFilter(s)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${filter === s ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            {["Asset Name","Serial No.","Category","Department","Status","Actions"].map(h => (
                                <th key={h} className="px-4 py-3 text-left font-semibold text-slate-600">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map(asset => (
                            <tr key={asset.id} className="hover:bg-slate-50 transition">
                                <td className="px-4 py-3 font-medium text-slate-800">{asset.name}</td>
                                <td className="px-4 py-3 text-slate-500 font-mono">{asset.serial}</td>
                                <td className="px-4 py-3 text-slate-600">{asset.category}</td>
                                <td className="px-4 py-3 text-slate-600">{asset.dept}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[asset.status]}`}>
                                        {asset.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <button className="text-blue-600 hover:underline text-xs mr-3">View</button>
                                    <button className="text-amber-600 hover:underline text-xs">Edit</button>
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr><td colSpan="6" className="text-center py-10 text-slate-400">No assets found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Register Asset Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Register New Asset</h2>
                        <div className="space-y-3">
                            {["Asset Name","Serial Number","Category","Department"].map(field => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{field}</label>
                                    <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={`Enter ${field}`} />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-300 py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Register</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Assets;