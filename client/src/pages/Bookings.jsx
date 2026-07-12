import React, { useState } from "react";

const bookings = [
    { id: 1, resource: "Conference Room A", type: "Room",      bookedBy: "Madhav Sharma",  date: "2026-07-12", time: "10:00 - 11:00", status: "Confirmed" },
    { id: 2, resource: "Toyota Corolla",    type: "Vehicle",   bookedBy: "Mihir Bansal",   date: "2026-07-12", time: "14:00 - 16:00", status: "Pending"   },
    { id: 3, resource: "Projector HD 4K",   type: "Equipment", bookedBy: "Satyam Kumar",   date: "2026-07-13", time: "09:00 - 10:30", status: "Confirmed" },
    { id: 4, resource: "Conference Room B", type: "Room",      bookedBy: "Shrseth Gupta",  date: "2026-07-13", time: "11:00 - 12:00", status: "Cancelled" },
    { id: 5, resource: "Honda City",        type: "Vehicle",   bookedBy: "Madhav Sharma",  date: "2026-07-14", time: "08:00 - 18:00", status: "Confirmed" },
];

const statusColors = {
    Confirmed: "bg-green-100 text-green-700",
    Pending:   "bg-amber-100 text-amber-700",
    Cancelled: "bg-red-100 text-red-700",
};

const Bookings = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("All");

    const filtered = activeTab === "All" ? bookings : bookings.filter(b => b.type === activeTab);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Resource Booking</h1>
                    <p className="text-slate-500 text-sm mt-1">Book rooms, vehicles, and equipment</p>
                </div>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition">
                    + New Booking
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    { label: "Rooms",      icon: "🏢", count: bookings.filter(b=>b.type==="Room").length,      color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { label: "Vehicles",   icon: "🚗", count: bookings.filter(b=>b.type==="Vehicle").length,   color: "bg-green-50 border-green-200 text-green-700" },
                    { label: "Equipment",  icon: "🔧", count: bookings.filter(b=>b.type==="Equipment").length, color: "bg-purple-50 border-purple-200 text-purple-700" },
                ].map(c => (
                    <div key={c.label} className={`rounded-xl border p-5 flex items-center gap-4 ${c.color}`}>
                        <span className="text-3xl">{c.icon}</span>
                        <div>
                            <p className="text-2xl font-bold">{c.count}</p>
                            <p className="text-sm font-medium">{c.label} Booked</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
                {["All","Room","Vehicle","Equipment"].map(t => (
                    <button key={t} onClick={() => setActiveTab(t)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === t ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                        {t}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            {["Resource","Type","Booked By","Date","Time Slot","Status","Action"].map(h => (
                                <th key={h} className="px-4 py-3 text-left font-semibold text-slate-600">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filtered.map(b => (
                            <tr key={b.id} className="hover:bg-slate-50 transition">
                                <td className="px-4 py-3 font-medium text-slate-800">{b.resource}</td>
                                <td className="px-4 py-3"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{b.type}</span></td>
                                <td className="px-4 py-3 text-slate-600">{b.bookedBy}</td>
                                <td className="px-4 py-3 text-slate-600">{b.date}</td>
                                <td className="px-4 py-3 text-slate-600 font-mono text-xs">{b.time}</td>
                                <td className="px-4 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[b.status]}`}>{b.status}</span></td>
                                <td className="px-4 py-3"><button className="text-red-500 hover:underline text-xs">Cancel</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* New Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-slate-800 mb-4">New Booking</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Resource Type</label>
                                <select className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Room</option><option>Vehicle</option><option>Equipment</option>
                                </select>
                            </div>
                            {["Resource Name","Booking Date","Start Time","End Time"].map(f => (
                                <div key={f}>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">{f}</label>
                                    <input type={f.includes("Time") ? "time" : f.includes("Date") ? "date" : "text"} className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-5">
                            <button onClick={() => setShowModal(false)} className="flex-1 border border-slate-300 py-2 rounded-lg text-sm hover:bg-slate-50">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">Book Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bookings;
