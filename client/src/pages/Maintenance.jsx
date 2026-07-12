import React, { useState } from "react";

const tickets = [
    { id: "MNT-001", asset: "Canon Printer MF3010",   issue: "Paper jam frequently",         priority: "High",   status: "Open",        assignee: "Tech Team A", date: "2026-07-10" },
    { id: "MNT-002", asset: "Dell Laptop - XPS 15",    issue: "Battery not charging",         priority: "Medium", status: "In Progress",  assignee: "Tech Team B", date: "2026-07-11" },
    { id: "MNT-003", asset: "AC Unit - Floor 2",       issue: "Not cooling properly",         priority: "High",   status: "Open",        assignee: "Unassigned",  date: "2026-07-11" },
    { id: "MNT-004", asset: "Honda City",              issue: "Brake pads worn out",          priority: "Critical","status": "In Progress", assignee: "Garage Team", date: "2026-07-09" },
    { id: "MNT-005", asset: "Projector HD 4K",         issue: "Bulb replacement needed",      priority: "Low",    status: "Resolved",    assignee: "Tech Team A", date: "2026-07-08" },
];

const priorityColors = { Critical: "bg-red-100 text-red-700",   High: "bg-orange-100 text-orange-700", Medium: "bg-amber-100 text-amber-700", Low: "bg-green-100 text-green-700" };
const statusColors   = { "Open": "bg-blue-100 text-blue-700", "In Progress": "bg-purple-100 text-purple-700", "Resolved": "bg-green-100 text-green-700" };

const Maintenance = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Maintenance</h1>
                    <p className="text-slate-500 text-sm mt-1">Track and manage asset maintenance requests</p>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition">
                    + Raise Request
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Open",        value: tickets.filter(t=>t.status==="Open").length,        color: "bg-blue-600" },
                    { label: "In Progress", value: tickets.filter(t=>t.status==="In Progress").length, color: "bg-purple-600" },
                    { label: "Resolved",    value: tickets.filter(t=>t.status==="Resolved").length,    color: "bg-green-600" },
                    { label: "Critical",    value: tickets.filter(t=>t.priority==="Critical").length,  color: "bg-red-600" },
                ].map(s => (
                    <div key={s.label} className={`${s.color} text-white rounded-xl p-5 shadow-sm`}>
                        <p className="text-3xl font-bold">{s.value}</p>
                        <p className="text-sm opacity-90 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Ticket Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            {["Ticket ID","Asset","Issue","Priority","Status","Assignee","Date","Actions"].map(h => (
                                <th key={h} className="px-4 py-3 text-left font-semibold text-slate-600">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {tickets.map(t => (
                            <tr key={t.id} className="hover:bg-slate-50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{t.id}</td>
                                <td className="px-4 py-3 font-medium text-slate-800">{t.asset}</td>
                                <td className="px-4 py-3 text-slate-600 max-w-xs truncate">{t.issue}</td>
                                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${priorityColors[t.priority]}`}>{t.priority}</span></td>
                                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[t.status]}`}>{t.status}</span></td>
                                <td className="px-4 py-3 text-slate-600">{t.assignee}</td>
                                <td className="px-4 py-3 text-slate-500 text-xs">{t.date}</td>
                                <td className="px-4 py-3 flex gap-2">
                                    <button className="text-blue-600 hover:underline text-xs">Assign</button>
                                    <button className="text-green-600 hover:underline text-xs">Resolve</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Raise Maintenance Request</h2>
                        <div className="space-y-3">
                            {["Asset Name","Issue Description"].map(f => (
                                <div key={f}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f}</label>
                                    {f === "Issue Description" ? <textarea rows={3} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the issue..." /> : <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={`Enter ${f}`} />}
                                </div>
                            ))}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
                                <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Low</option><option>Medium</option><option>High</option><option>Critical</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-300 py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Maintenance;
