import React from "react";

const deptData = [
    { dept: "IT",         assets: 45, allocated: 38, available: 7  },
    { dept: "HR",         assets: 20, allocated: 18, available: 2  },
    { dept: "Finance",    assets: 15, allocated: 12, available: 3  },
    { dept: "Sales",      assets: 25, allocated: 20, available: 5  },
    { dept: "Admin",      assets: 30, allocated: 22, available: 8  },
];

const recentActivity = [
    { action: "Asset Allocated",  detail: "Dell Laptop → Madhav Sharma", time: "2 hrs ago",  icon: "📦", color: "bg-blue-100 text-blue-600" },
    { action: "Booking Confirmed",detail: "Conference Room A booked",      time: "3 hrs ago",  icon: "📅", color: "bg-green-100 text-green-600" },
    { action: "Maintenance Raised",detail: "Canon Printer issue reported", time: "5 hrs ago",  icon: "🛠", color: "bg-amber-100 text-amber-600" },
    { action: "Asset Returned",   detail: "iPhone 14 Pro returned by HR",  time: "Yesterday",  icon: "🔄", color: "bg-purple-100 text-purple-600" },
    { action: "Audit Completed",  detail: "Q1 IT Department Audit done",   time: "2 days ago", icon: "✅", color: "bg-green-100 text-green-600" },
];

const Reports = () => {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Reports & Analytics</h1>
                <p className="text-slate-500 text-sm mt-1">Overview of asset utilization and department reports</p>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { label: "Total Assets",      value: "135", change: "+5 this month",  color: "bg-blue-600" },
                    { label: "Utilization Rate",  value: "84%",  change: "+2% from last month", color: "bg-green-600" },
                    { label: "Pending Requests",  value: "12",   change: "3 critical",    color: "bg-amber-500" },
                    { label: "Audit Score",       value: "91%",  change: "Q2 2026",       color: "bg-purple-600" },
                ].map(k => (
                    <div key={k.label} className={`${k.color} text-white rounded-xl p-5 shadow-sm`}>
                        <p className="text-xs font-medium opacity-80 uppercase">{k.label}</p>
                        <p className="text-4xl font-bold mt-1">{k.value}</p>
                        <p className="text-xs opacity-70 mt-2">{k.change}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Department Utilization Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Department Utilization</h2>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="text-left py-2 text-slate-500 font-medium">Department</th>
                                <th className="text-right py-2 text-slate-500 font-medium">Total</th>
                                <th className="text-right py-2 text-slate-500 font-medium">Allocated</th>
                                <th className="text-right py-2 text-slate-500 font-medium">Util %</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {deptData.map(d => (
                                <tr key={d.dept}>
                                    <td className="py-3 font-medium text-slate-700">{d.dept}</td>
                                    <td className="py-3 text-right text-slate-600">{d.assets}</td>
                                    <td className="py-3 text-right text-slate-600">{d.allocated}</td>
                                    <td className="py-3 text-right">
                                        <span className="text-green-600 font-semibold">{Math.round((d.allocated/d.assets)*100)}%</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bar Chart (CSS) */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4">Assets by Department</h2>
                    <div className="space-y-4">
                        {deptData.map(d => (
                            <div key={d.dept}>
                                <div className="flex justify-between text-xs text-slate-500 mb-1">
                                    <span className="font-medium text-slate-700">{d.dept}</span>
                                    <span>{d.assets} assets</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(d.assets / 50) * 100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-slate-800">Recent Activity</h2>
                    <button className="text-blue-600 text-sm hover:underline">Export CSV</button>
                </div>
                <div className="space-y-3">
                    {recentActivity.map((a, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${a.color}`}>
                                {a.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-slate-800">{a.action}</p>
                                <p className="text-xs text-slate-500">{a.detail}</p>
                            </div>
                            <span className="text-xs text-slate-400">{a.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reports;
