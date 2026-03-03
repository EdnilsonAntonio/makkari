"use client";

import {
    ChevronLeft,
    ChevronRight,
    Download,
    ClipboardCheck,
    TrendingUp,
    Timer,
    ArrowDown,
    Megaphone,
    Code,
    Database,
    Activity,
    Moon,
    Sun
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function AnalyticsReportsPage() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={`${isDark ? "dark" : ""} -m-6 lg:-m-8`}>
            <div className={`p-6 lg:p-8 min-h-[calc(100vh-80px)] transition-colors ${isDark ? "bg-[#181111] text-white" : "bg-[#f8f6f5] text-[#181111]"}`}>
                <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-6">

                    {/* Top Header Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h2 className="text-[#181111] dark:text-white text-3xl font-bold tracking-tight">Analytics Reports</h2>
                            <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm mt-1">Track your team's velocity and project health.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggleTheme}
                                className="flex items-center justify-center h-10 w-10 bg-white dark:bg-[#251a1a] rounded-lg border border-gray-200 dark:border-[#392828] text-[#8a6060] dark:text-[#ba9c9c] hover:text-[#181111] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#392828] transition-colors shadow-sm"
                                title="Toggle Dark Mode"
                            >
                                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>

                            {/* Date Range Picker (Simplified) */}
                            <div className="flex items-center bg-white dark:bg-[#251a1a] rounded-lg border border-gray-200 dark:border-[#392828] p-1 h-10 shadow-sm">
                                <button className="flex items-center justify-center h-8 w-8 text-[#8a6060] dark:text-[#ba9c9c] hover:text-[#181111] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#392828] rounded transition-colors">
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <span className="px-3 text-sm font-medium text-[#181111] dark:text-white min-w-[120px] text-center">Last 30 Days</span>
                                <button className="flex items-center justify-center h-8 w-8 text-[#8a6060] dark:text-[#ba9c9c] hover:text-[#181111] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#392828] rounded transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>

                            <button className="flex items-center gap-2 h-10 px-4 bg-[#f2110d] hover:bg-[#d10e0b] text-white text-sm font-bold rounded-lg transition-colors shadow-sm">
                                <Download className="h-4 w-4" />
                                <span className="hidden sm:inline">Export Report</span>
                            </button>
                        </div>
                    </div>

                    {/* KPI Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">

                        {/* Stat Card 1 */}
                        <div className="bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl p-5 flex flex-col justify-between hover:border-[#f2110d]/30 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#392828] text-[#181111] dark:text-white">
                                    <ClipboardCheck className="h-5 w-5" />
                                </div>
                                <span className="flex items-center text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium bg-gray-100 dark:bg-[#392828]/50 px-2 py-1 rounded">On Track</span>
                            </div>
                            <div>
                                <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm font-medium mb-1">Total Tasks Completed</p>
                                <div className="flex items-end gap-3">
                                    <h3 className="text-3xl font-bold text-[#181111] dark:text-white tracking-tight">1,240</h3>
                                    <p className="text-[#0bda0b] text-sm font-semibold mb-1 flex items-center">
                                        <TrendingUp className="h-4 w-4 mr-1" />
                                        8.2%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl p-5 flex flex-col justify-between hover:border-[#f2110d]/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#392828] text-[#181111] dark:text-white">
                                    <Timer className="h-5 w-5" />
                                </div>
                                <span className="flex items-center text-[#0bda0b] text-xs font-medium bg-[#0bda0b]/10 border border-[#0bda0b]/20 px-2 py-1 rounded">Optimal</span>
                            </div>
                            <div>
                                <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm font-medium mb-1">Avg. Completion Time</p>
                                <div className="flex items-end gap-3">
                                    <h3 className="text-3xl font-bold text-[#181111] dark:text-white tracking-tight">2.4 Days</h3>
                                    <p className="text-[#0bda0b] text-sm font-semibold mb-1 flex items-center">
                                        <ArrowDown className="h-4 w-4 mr-1" />
                                        12%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div className="bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl p-5 flex flex-col justify-between hover:border-[#f2110d]/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#392828] text-[#181111] dark:text-white">
                                    <Activity className="h-5 w-5" />
                                </div>
                                <span className="flex items-center text-[#f2110d] text-xs font-medium bg-[#f2110d]/10 border border-[#f2110d]/20 px-2 py-1 rounded">Action Needed</span>
                            </div>
                            <div>
                                <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm font-medium mb-1">Efficiency Score</p>
                                <div className="flex items-end gap-3">
                                    <h3 className="text-3xl font-bold text-[#181111] dark:text-white tracking-tight">88<span className="text-xl text-[#8a6060] dark:text-[#ba9c9c] font-normal">/100</span></h3>
                                    <p className="text-[#f2110d] text-sm font-semibold mb-1 flex items-center">
                                        <ArrowDown className="h-4 w-4 mr-1" />
                                        2%
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Main Bar Chart (Takes up 2/3) */}
                        <div className="lg:col-span-2 bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl p-6 flex flex-col">
                            <div className="flex flex-wrap justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-[#181111] dark:text-white text-lg font-bold">Task Velocity</h3>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">Completed vs. Planned Tasks</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-[#AF4632]"></div>
                                        <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Completed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-[#f2110d]"></div>
                                        <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Planned</span>
                                    </div>
                                </div>
                            </div>

                            {/* Custom CSS Bar Chart Implementation */}
                            <div className="flex-1 min-h-[300px] w-full flex items-end justify-between gap-4 px-2 relative">
                                {/* Y-axis grid lines (visual only) */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                                    <div className="w-full border-t border-gray-100 dark:border-[#392828] border-dashed"></div>
                                    <div className="w-full border-t border-gray-100 dark:border-[#392828] border-dashed"></div>
                                    <div className="w-full border-t border-gray-100 dark:border-[#392828] border-dashed"></div>
                                    <div className="w-full border-t border-gray-100 dark:border-[#392828] border-dashed"></div>
                                    <div className="w-full border-t border-gray-200 dark:border-[#392828]"></div>
                                </div>

                                {/* Bars Config */}

                                {/* Week 1 */}
                                <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-[65%]">
                                        <div className="w-1/2 bg-[#AF4632] rounded-t-sm h-[80%] group-hover:bg-[#c95942] transition-colors relative"></div>
                                        <div className="w-1/2 bg-[#f2110d] rounded-t-sm h-full group-hover:bg-[#ff3b38] transition-colors"></div>
                                    </div>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium mt-3">Week 1</p>

                                    {/* Tooltip */}
                                    <div className="absolute -top-10 bg-gray-900 dark:bg-[#392828] text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-lg border border-gray-700 dark:border-[#600101]/50">
                                        Planned: 45 / Completed: 36
                                    </div>
                                </div>

                                {/* Week 2 */}
                                <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-[85%]">
                                        <div className="w-1/2 bg-[#AF4632] rounded-t-sm h-[90%] group-hover:bg-[#c95942] transition-colors"></div>
                                        <div className="w-1/2 bg-[#f2110d] rounded-t-sm h-full group-hover:bg-[#ff3b38] transition-colors"></div>
                                    </div>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium mt-3">Week 2</p>
                                </div>

                                {/* Week 3 */}
                                <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-[55%]">
                                        <div className="w-1/2 bg-[#AF4632] rounded-t-sm h-[110%] group-hover:bg-[#c95942] transition-colors"></div>
                                        <div className="w-1/2 bg-[#f2110d] rounded-t-sm h-full group-hover:bg-[#ff3b38] transition-colors"></div>
                                    </div>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium mt-3">Week 3</p>
                                </div>

                                {/* Week 4 */}
                                <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-[90%]">
                                        <div className="w-1/2 bg-[#AF4632] rounded-t-sm h-[75%] group-hover:bg-[#c95942] transition-colors"></div>
                                        <div className="w-1/2 bg-[#f2110d] rounded-t-sm h-full group-hover:bg-[#ff3b38] transition-colors"></div>
                                    </div>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium mt-3">Week 4</p>
                                </div>

                                {/* Current */}
                                <div className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                                    <div className="w-full max-w-[40px] flex items-end justify-center gap-1 h-[40%]">
                                        <div className="w-1/2 bg-[#AF4632] rounded-t-sm h-[60%] group-hover:bg-[#c95942] transition-colors"></div>
                                        <div className="w-1/2 bg-[#f2110d] rounded-t-sm h-full group-hover:bg-[#ff3b38] transition-colors"></div>
                                    </div>
                                    <p className="text-[#8a6060] dark:text-[#ba9c9c] text-xs font-medium mt-3">Current</p>
                                </div>

                            </div>
                        </div>

                        {/* Secondary Chart (Donut/Pie) */}
                        <div className="lg:col-span-1 bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl p-6 flex flex-col">
                            <div className="mb-6">
                                <h3 className="text-[#181111] dark:text-white text-lg font-bold">Project Distribution</h3>
                                <p className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">Active tasks by project</p>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center relative">
                                {/* CSS Conic Gradient Pie Chart */}
                                <div
                                    className="relative h-48 w-48 rounded-full"
                                    style={{
                                        background: `conic-gradient(
                                    #f2110d 0% 35%, 
                                    #AF4632 35% 60%, 
                                    #600101 60% 85%, 
                                    #4F0504 85% 100%
                                )`
                                    }}
                                >
                                    {/* Inner Hole for Donut Effect */}
                                    <div className="absolute inset-0 m-auto h-32 w-32 bg-white dark:bg-[#251a1a] rounded-full flex flex-col items-center justify-center shadow-inner">
                                        <span className="text-[#181111] dark:text-white text-2xl font-bold">Total</span>
                                        <span className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">4 Projects</span>
                                    </div>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#f2110d]"></div>
                                    <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Marketing (35%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#AF4632]"></div>
                                    <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Product (25%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#600101]"></div>
                                    <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Sales (25%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#4F0504]"></div>
                                    <span className="text-xs text-[#8a6060] dark:text-[#ba9c9c]">Internal (15%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Table Section */}
                    <div className="bg-white dark:bg-[#251a1a] border border-gray-200 dark:border-[#392828] shadow-sm rounded-xl overflow-hidden mb-10">
                        <div className="p-6 border-b border-gray-200 dark:border-[#392828] flex justify-between items-center">
                            <h3 className="text-[#181111] dark:text-white text-lg font-bold">Recent Task Performance</h3>
                            <button className="text-[#f2110d] text-sm font-semibold hover:underline">View All</button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-[#2a1e1e] text-[#8a6060] dark:text-[#ba9c9c] text-xs uppercase tracking-wider">
                                        <th className="p-4 font-semibold">Project Name</th>
                                        <th className="p-4 font-semibold">Lead</th>
                                        <th className="p-4 font-semibold">Status</th>
                                        <th className="p-4 font-semibold">Progress</th>
                                        <th className="p-4 font-semibold text-right">Deadline</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-[#392828]">

                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#2f2222] transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded bg-[#AF4632]/10 dark:bg-[#AF4632]/20 flex items-center justify-center text-[#AF4632]">
                                                    <Megaphone className="h-4 w-4" />
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-sm font-medium">Q4 Marketing Campaign</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">AS</div>
                                                <span className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">Alex Smith</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0bda0b]/10 text-[#0bda0b] border border-[#0bda0b]/20">
                                                On Schedule
                                            </span>
                                        </td>
                                        <td className="p-4 w-1/4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-1.5 bg-gray-100 dark:bg-[#392828] rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#f2110d] rounded-full w-[75%]"></div>
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-xs font-medium">75%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right text-[#181111] dark:text-white text-sm">Nov 15, 2023</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#2f2222] transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded bg-[#AF4632]/10 dark:bg-[#AF4632]/20 flex items-center justify-center text-[#AF4632]">
                                                    <Code className="h-4 w-4" />
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-sm font-medium">Mobile App Redesign</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white font-bold">MK</div>
                                                <span className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">Mike K.</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                                At Risk
                                            </span>
                                        </td>
                                        <td className="p-4 w-1/4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-1.5 bg-gray-100 dark:bg-[#392828] rounded-full overflow-hidden">
                                                    <div className="h-full bg-amber-500 rounded-full w-[40%]"></div>
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-xs font-medium">40%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right text-[#181111] dark:text-white text-sm">Dec 01, 2023</td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 dark:hover:bg-[#2f2222] transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded bg-[#AF4632]/10 dark:bg-[#AF4632]/20 flex items-center justify-center text-[#AF4632]">
                                                    <Database className="h-4 w-4" />
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-sm font-medium">Database Migration</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-[10px] text-white font-bold">SJ</div>
                                                <span className="text-[#8a6060] dark:text-[#ba9c9c] text-sm">Sarah J.</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0bda0b]/10 text-[#0bda0b] border border-[#0bda0b]/20">
                                                Completed
                                            </span>
                                        </td>
                                        <td className="p-4 w-1/4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-1.5 bg-gray-100 dark:bg-[#392828] rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#0bda0b] rounded-full w-[100%]"></div>
                                                </div>
                                                <span className="text-[#181111] dark:text-white text-xs font-medium">100%</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-right text-[#181111] dark:text-white text-sm">Oct 28, 2023</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
