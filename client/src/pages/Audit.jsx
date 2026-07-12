import React, { useState } from "react";

const auditData = [
    { id: "AUD-001", asset: "Dell Laptop - XPS 15",  serial: "DL-001", expected: "IT Dept",   found: "IT Dept",   condition: "Good",      status: "Matched" },
    { id: "AUD-002", asset: "MacBook Pro 14\"",        serial: "MB-002", expected: "HR Dept",   found: "HR Dept",   condition: "Good",      status: "Matched" },
    { id: "AUD-003", asset: "HP Monitor 27\"",         serial: "HP-003", expected: "IT Dept",   found: "Not Found", condition: "—",          status: "Missing" },
    { id: "AUD-004", asset: "Office Chair",            serial: "OC-004", expected: "Admin",     found: "Admin",     condition: "Fair",      status: "Matched" },
    { id: "AUD-005", asset: "Canon Printer",           serial: "CP-005", expected: "IT Dept",   found: "Finance",   condition: "Poor",      status: "Discrepancy" },
    { id: "AUD-006", asset: "Toyota Corolla",          serial: "TC-006", expected: "Sales",     found: "Sales",     condition: "Good",      status: "Matched" },
];

const statusColors = {
    Matched:     "bg-green-100 text-green-700",
    Missing:     "bg-red-100 text-red-700",
    Discrepancy: "bg-amber-100 text-amber-700",
};

const Audit = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Asset Audit</h1>
                    <p className="text-slate-500 text-sm mt-1">Current Audit Cycle: Q2 2026 — July 12, 2026</p>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition">
                    + New Audit Cycle
                </button>
            </div>

            {/* Audit Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Total Audited",   value: auditData.length,                                          color: "bg-slate-700" },
                    { label: "Matched",         value: auditData.filter(a=>a.status==="Matched").length,          color: "bg-green-600" },
                    { label: "Missing",         value: auditData.filter(a=>a.status==="Missing").length,          color: "bg-red-600" },
                    { label: "Discrepancies",   value: auditData.filter(a=>a.status==="Discrepancy").length,      color: "bg-amber-500" },
                ].map(s => (
                    <div key={s.label} className={`${s.color} text-white rounded-xl p-5 shadow-sm`}>
                        <p className="text-3xl font-bold">{s.value}</p>
                        <p className="text-sm opacity-90 mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-5">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Audit Progress</span>
                    <span className="text-sm font-bold text-blue-600">{Math.round((auditData.filter(a=>a.status==="Matched").length / auditData.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${(auditData.filter(a=>a.status==="Matched").length / auditData.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Audit Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            {["Audit ID","Asset","Serial No.","Expected Location","Found At","Condition","Status"].map(h => (
                                <th key={h} className="px-4 py-3 text-left font-semibold text-slate-600">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {auditData.map(a => (
                            <tr key={a.id} className="hover:bg-slate-50 transition">
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{a.id}</td>
                                <td className="px-4 py-3 font-medium text-slate-800">{a.asset}</td>
                                <td className="px-4 py-3 font-mono text-xs text-slate-500">{a.serial}</td>
                                <td className="px-4 py-3 text-slate-600">{a.expected}</td>
                                <td className="px-4 py-3 text-slate-600">{a.found}</td>
                                <td className="px-4 py-3 text-slate-600">{a.condition}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[a.status]}`}>{a.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">Start New Audit Cycle</h2>
                        <div className="space-y-3">
                            {["Audit Name","Department","Start Date","End Date"].map(f => (
                                <div key={f}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f}</label>
                                    <input type={f.includes("Date") ? "date" : "text"} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-300 py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Start Audit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Audit;
