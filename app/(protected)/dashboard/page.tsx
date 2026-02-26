"use client";

import {
    Plus,
    UserPlus,
    Share,
    Info,
    TrendingUp,
    AlertTriangle,
    CheckCircle,
    ClipboardList,
    CircleDashed,
    Check,
    AlertCircle,
    FileText,
    Image,
    Calendar,
} from "lucide-react";

// ─── Stat Cards ───────────────────────────────────────────────────────────────

function StatCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Sprint Progress */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#4e0504]/10 p-2 rounded-lg text-[#4e0504]">
                        <CircleDashed className="h-5 w-5" />
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+12%</span>
                </div>
                <div>
                    <p className="text-[#5C5C5C] text-sm font-medium mb-1">Sprint Progress</p>
                    <div className="flex items-baseline gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-[#181111]">68%</h3>
                        <span className="text-sm text-[#8a6160]">Target: 80%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-[#4e0504] h-1.5 rounded-full" style={{ width: "68%" }} />
                    </div>
                </div>
            </div>

            {/* Pending Tasks */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-[#AF4632]/10 p-2 rounded-lg text-[#AF4632]">
                        <ClipboardList className="h-5 w-5" />
                    </div>
                </div>
                <div>
                    <p className="text-[#5C5C5C] text-sm font-medium mb-1">Pending Tasks</p>
                    <h3 className="text-3xl font-bold text-[#181111]">12</h3>
                    <p className="text-sm text-[#8a6160] mt-1">4 high priority</p>
                </div>
            </div>

            {/* Completed */}
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px]">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                        <CheckCircle className="h-5 w-5" />
                    </div>
                </div>
                <div>
                    <p className="text-[#5C5C5C] text-sm font-medium mb-1">Completed</p>
                    <h3 className="text-3xl font-bold text-[#181111]">24</h3>
                    <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        8 more than yesterday
                    </p>
                </div>
            </div>

            {/* Overdue (Alert) */}
            <div className="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[160px] relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-red-100 opacity-40 pointer-events-none">
                    <AlertTriangle className="h-32 w-32" />
                </div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="bg-[#600101] text-white p-2 rounded-lg shadow-sm">
                        <AlertCircle className="h-5 w-5" />
                    </div>
                </div>
                <div className="relative z-10">
                    <p className="text-[#600101] text-sm font-bold mb-1">Overdue Tasks</p>
                    <h3 className="text-3xl font-bold text-[#600101]">3</h3>
                    <p className="text-sm text-[#8a2525] mt-1 font-medium">Action required immediately</p>
                </div>
            </div>
        </div>
    );
}

// ─── Quick Actions ─────────────────────────────────────────────────────────────

function QuickActions() {
    return (
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-1 sm:pb-0">
                <button className="bg-[#4e0504] hover:bg-[#3a0403] text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95 whitespace-nowrap">
                    <Plus className="h-4 w-4" />
                    New Task
                </button>
                <div className="w-px h-8 bg-gray-200 hidden sm:block" />
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[#181111] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <UserPlus className="h-4 w-4 text-[#5C5C5C]" />
                    Invite Team
                </button>
                <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[#181111] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors whitespace-nowrap">
                    <Share className="h-4 w-4 text-[#5C5C5C]" />
                    Export Report
                </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#5C5C5C]">
                <Info className="h-4 w-4" />
                <span>Last synced 2 mins ago</span>
            </div>
        </div>
    );
}

// ─── Productivity Chart ────────────────────────────────────────────────────────

const chartBars = [
    { day: "Mon", height: "40%", fill: "60%", tasks: 12 },
    { day: "Tue", height: "65%", fill: "70%", tasks: 18 },
    { day: "Wed", height: "50%", fill: "40%", tasks: 14 },
    { day: "Thu", height: "85%", fill: "80%", tasks: 24 },
    { day: "Fri", height: "60%", fill: "30%", tasks: 16, accent: true },
    { day: "Sat", height: "30%", fill: "100%", tasks: 8 },
    { day: "Sun", height: "45%", fill: "50%", tasks: 10 },
];

function ProductivityChart() {
    return (
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-[#181111]">Productivity</h3>
                    <p className="text-sm text-[#8a6160]">Tasks completed over the last 7 days</p>
                </div>
                <select className="bg-gray-50 border-none text-sm font-medium rounded-lg text-[#181111] py-1 px-3 focus:ring-0 cursor-pointer focus:outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                </select>
            </div>

            {/* Chart area */}
            <div className="flex-1 flex items-end gap-2 sm:gap-4 md:gap-6 justify-between px-2 pb-2 border-b border-gray-100 relative">
                {/* Y-axis dashed lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="w-full border-t border-dashed border-gray-100" />
                    ))}
                    <div />
                </div>

                {chartBars.map(({ day, height, fill, tasks, accent }) => (
                    <div key={day} className="flex flex-col items-center gap-2 group w-full z-10">
                        <div
                            className="w-full max-w-[40px] bg-[#4e0504]/20 rounded-t-sm relative group-hover:bg-[#4e0504]/30 transition-colors"
                            style={{ height }}
                        >
                            <div
                                className={`absolute bottom-0 w-full rounded-t-sm transition-all`}
                                style={{
                                    height: fill,
                                    backgroundColor: accent ? "#AF4632" : "#4e0504",
                                }}
                            />
                            {/* Tooltip */}
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#181111] text-white text-xs py-1 px-2 rounded transition-opacity pointer-events-none whitespace-nowrap z-20">
                                {tasks} Tasks
                            </div>
                        </div>
                        <span className="text-xs text-[#8a6160] font-medium">{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Activity Timeline ─────────────────────────────────────────────────────────

function ActivityTimeline() {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#181111]">Activity Timeline</h3>
                <button className="text-xs font-bold text-[#4e0504] hover:text-[#3a0403]">View All</button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 relative">
                {/* Vertical line */}
                <div className="absolute left-[19px] top-2 bottom-0 w-0.5 bg-gray-100" />

                {/* Item 1 */}
                <div className="flex gap-4 mb-6 relative z-10">
                    <div
                        className="h-10 w-10 rounded-full border-2 border-white shadow-sm flex-shrink-0 bg-cover bg-center bg-gray-300"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaTcidptcd2q8uJ2m49R6mFoyA3bEO1EWecr4yzd8rY2zR3BP-EaD1DkUWL0VWihLQ-kd7knFMirfGdG16HRvGlH6ljUPKJhqVOasLHLFJJg3OCtoMYEmVvDCebQqbcKug5oNSg6_V3uRxxC9XQlZJyLc9Ux3cK6Ew_1Bbsy4o-UpPv4ZWFz0UQvMkmkXpnCmXT7FqDg49qIIu90aZbbFGkkhbDz2Et4C4J6D7HLEuBlz-qxLTvgLmDpBp8fHGC98nAzGhcKsInGQj")`,
                        }}
                    />
                    <div className="pt-1">
                        <p className="text-sm text-[#181111] font-medium">
                            <span className="font-bold">Alex M.</span> commented on{" "}
                            <a href="#" className="text-[#4e0504] hover:underline">Design System</a>
                        </p>
                        <p className="text-xs text-[#8a6160] mt-1">2 mins ago</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4 mb-6 relative z-10">
                    <div className="h-10 w-10 rounded-full bg-green-100 border-2 border-white shadow-sm flex-shrink-0 flex items-center justify-center text-green-700">
                        <Check className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                        <p className="text-sm text-[#181111] font-medium">
                            Task <span className="font-bold">&ldquo;Homepage Hero&rdquo;</span> marked as complete
                        </p>
                        <p className="text-xs text-[#8a6160] mt-1">1 hour ago</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 mb-6 relative z-10">
                    <div
                        className="h-10 w-10 rounded-full border-2 border-white shadow-sm flex-shrink-0 bg-cover bg-center bg-gray-300"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8W-OjYCh8pjtYzDqMKJOOtFbYrhPEkH-sEtGVP2xfdnol5RHuKrkd3Pqpjn7ymU_d9tSUXRyUx0f_5zMzaVf2axrdls7DB_AEMpWdzZfx8-Lam_8MN7l4PtAPRcFqx2926eIQXDUrh49-kAZiXZvWgky4PyhhekGp-_FxW9P2iQT3D94GL93EBHTc78pdnVp9bEQM3GcI-4yivS8uGDYQZdmV1bsqGGXcsXAYlgvEfFFOJKwS1S8BwExSXPF4CzsiexhN8pqQreIU")`,
                        }}
                    />
                    <div className="pt-1">
                        <p className="text-sm text-[#181111] font-medium">
                            <span className="font-bold">Sarah K.</span> attached 3 files to{" "}
                            <a href="#" className="text-[#4e0504] hover:underline">Q4 Marketing</a>
                        </p>
                        <div className="flex gap-2 mt-2">
                            <div className="h-8 w-8 bg-blue-50 rounded border border-blue-100 flex items-center justify-center text-blue-500">
                                <FileText className="h-4 w-4" />
                            </div>
                            <div className="h-8 w-8 bg-blue-50 rounded border border-blue-100 flex items-center justify-center text-blue-500">
                                <Image className="h-4 w-4" />
                            </div>
                        </div>
                        <p className="text-xs text-[#8a6160] mt-2">3 hours ago</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4 mb-2 relative z-10">
                    <div className="h-10 w-10 rounded-full bg-red-100 border-2 border-white shadow-sm flex-shrink-0 flex items-center justify-center text-red-700">
                        <AlertCircle className="h-5 w-5" />
                    </div>
                    <div className="pt-1">
                        <p className="text-sm text-[#181111] font-medium">
                            Task <span className="font-bold">&ldquo;Server Migration&rdquo;</span> is overdue
                        </p>
                        <p className="text-xs text-[#8a6160] mt-1">Yesterday</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
    const today = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <>
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-[#181111] tracking-tight">Dashboard</h2>
                    <p className="text-[#5C5C5C] mt-1">Welcome back, here&apos;s what&apos;s happening today.</p>
                </div>
                <div className="text-sm font-medium text-[#5C5C5C] bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{today}</span>
                </div>
            </div>

            <StatCards />
            <QuickActions />

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ProductivityChart />
                <ActivityTimeline />
            </div>

            {/* Spacer */}
            <div className="h-4" />
        </>
    );
}
