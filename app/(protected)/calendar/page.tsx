"use client";

import {
    ChevronLeft,
    ChevronRight,
    Search,
    Bell,
    HelpCircle,
    Settings,
    CalendarDays,
    Timer
} from "lucide-react";

export default function CalendarPage() {
    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] overflow-hidden bg-white dark:bg-[#1a0b0b] rounded-xl border border-gray-100 dark:border-white/5 shadow-sm">

            {/* Main Calendar Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Calendar Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 pb-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-[#181111] dark:text-white text-3xl font-extrabold leading-tight tracking-tight">October 2023</h1>
                            <div className="flex gap-1 ml-2">
                                <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-[#181111] dark:text-white transition-colors">
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-[#181111] dark:text-white transition-colors">
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <p className="text-[#8a6160] dark:text-[#bcaaa9] text-sm font-medium">Monthly Overview</p>
                    </div>

                    <div className="flex gap-3 items-center self-end sm:self-center">
                        <div className="flex bg-[#f5f0f0] dark:bg-[#2d1f1f] p-1 rounded-lg">
                            <button className="px-4 py-1.5 rounded-md text-sm font-bold text-[#181111] dark:text-white/80 hover:bg-white dark:hover:bg-white/10 transition-all">Day</button>
                            <button className="px-4 py-1.5 rounded-md text-sm font-bold text-[#181111] dark:text-white/80 hover:bg-white dark:hover:bg-white/10 transition-all">Week</button>
                            <button className="px-4 py-1.5 rounded-md text-sm font-bold bg-white dark:bg-[#3d2b2b] text-[#c20d0a] shadow-sm">Month</button>
                            <button className="px-4 py-1.5 rounded-md text-sm font-bold text-[#181111] dark:text-white/80 hover:bg-white dark:hover:bg-white/10 transition-all">List</button>
                        </div>
                        <button className="flex items-center justify-center rounded-lg h-9 px-3 bg-[#f5f0f0] dark:bg-[#2d1f1f] text-[#181111] dark:text-white hover:bg-gray-200 dark:hover:bg-[#3d2b2b] transition-colors gap-2 text-sm font-medium">
                            <Settings className="h-4 w-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </button>
                    </div>
                </div>

                {/* Calendar Grid Container */}
                <div className="flex-1 px-6 pb-6 overflow-hidden flex flex-col min-h-0">
                    <div className="h-full flex flex-col border border-[#e6dbdb] dark:border-[#3a1d1d] rounded-xl overflow-hidden shadow-sm bg-white dark:bg-[#1a0b0b]">

                        {/* Weekday Header */}
                        <div className="grid grid-cols-7 border-b border-[#e6dbdb] dark:border-[#3a1d1d] bg-gray-50 dark:bg-[#221010] shrink-0">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="py-3 text-center text-sm font-bold text-[#8a6160] dark:text-[#bcaaa9] uppercase tracking-wider">{day}</div>
                            ))}
                        </div>

                        {/* Days Grid - Scrollable area */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-[#e6dbdb] dark:divide-[#3a1d1d] h-full">

                                {/* Week 1 */}
                                {['25', '26', '27', '28', '29', '30'].map(day => (
                                    <div key={`prev-${day}`} className="bg-gray-50/30 dark:bg-transparent min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                        <span className="text-gray-400 font-medium text-sm">{day}</span>
                                    </div>
                                ))}
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">1</span>
                                </div>

                                {/* Week 2 */}
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">2</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#4F0504] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Q3 Financial Report
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">3</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#AF4632] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Team Sync
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">4</span>
                                </div>
                                <div className="min-h-[100px] p-2 bg-[#c20d0a]/5 dark:bg-[#c20d0a]/10 hover:bg-[#c20d0a]/10 dark:hover:bg-[#c20d0a]/20 transition-colors relative">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c20d0a] text-white font-bold text-sm shadow-md">5</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#f5f0f0] border border-gray-200 text-[#181111] text-xs font-medium shadow-sm cursor-pointer hover:brightness-95 truncate">
                                            Client Onboarding
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">6</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#4F0504] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Server Maintenance
                                        </div>
                                        <div className="px-2 py-1 rounded bg-[#AF4632] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Design Critique
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">7</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">8</span>
                                </div>

                                {/* Week 3 */}
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">9</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">10</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#f5f0f0] border border-gray-200 text-[#181111] text-xs font-medium shadow-sm cursor-pointer hover:brightness-95 truncate">
                                            Blog Post Draft
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">11</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">12</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#AF4632] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Sprint Planning
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">13</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">14</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">15</span>
                                </div>

                                {/* Week 4 */}
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">16</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#4F0504] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Board Meeting Prep
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">17</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">18</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">19</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#f5f0f0] border border-gray-200 text-[#181111] text-xs font-medium shadow-sm cursor-pointer hover:brightness-95 truncate">
                                            Update Documentation
                                        </div>
                                        <div className="px-2 py-1 rounded bg-[#AF4632] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            API Review
                                        </div>
                                    </div>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">20</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">21</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">22</span>
                                </div>

                                {/* Week 5 */}
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">23</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">24</span>
                                </div>
                                <div className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-[#181111] dark:text-white font-medium text-sm">25</span>
                                    <div className="mt-1 flex flex-col gap-1">
                                        <div className="px-2 py-1 rounded bg-[#4F0504] text-white text-xs font-medium shadow-sm cursor-pointer hover:brightness-110 truncate">
                                            Product Launch
                                        </div>
                                    </div>
                                </div>
                                {['26', '27', '28', '29'].map(day => (
                                    <div key={day} className="min-h-[100px] p-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors relative">
                                        <span className="text-[#181111] dark:text-white font-medium text-sm">{day}</span>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Sidebar Right */}
            <aside className="w-80 border-l border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#FDFCFB] dark:bg-[#150a0a] flex-col h-full overflow-y-auto hidden xl:flex shrink-0">

                {/* Mini Calendar */}
                <div className="p-6 border-b border-[#e6dbdb] dark:border-[#3a1d1d]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[#181111] dark:text-white font-bold text-sm">October 2023</span>
                        <div className="flex gap-2">
                            <button className="text-[#8a6160] hover:text-[#c20d0a]"><ChevronLeft className="h-4 w-4" /></button>
                            <button className="text-[#8a6160] hover:text-[#c20d0a]"><ChevronRight className="h-4 w-4" /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-xs gap-y-3">
                        <span className="text-[#8a6160]">S</span><span className="text-[#8a6160]">M</span><span className="text-[#8a6160]">T</span><span className="text-[#8a6160]">W</span><span className="text-[#8a6160]">T</span><span className="text-[#8a6160]">F</span><span className="text-[#8a6160]">S</span>

                        {['25', '26', '27', '28', '29', '30'].map(day => (
                            <span key={`prev-${day}`} className="text-gray-300">{day}</span>
                        ))}

                        {['1', '2', '3', '4'].map(day => (
                            <span key={day} className="text-[#181111] dark:text-white">{day}</span>
                        ))}

                        <span className="bg-[#c20d0a] text-white rounded-full size-6 flex items-center justify-center mx-auto">5</span>

                        {Array.from({ length: 25 }, (_, i) => i + 6).map(day => (
                            <span key={day} className="text-[#181111] dark:text-white">{day}</span>
                        ))}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="p-6 flex flex-col gap-6">
                    <div>
                        <h3 className="text-[#181111] dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <CalendarDays className="text-[#c20d0a] h-5 w-5" />
                            Upcoming Events
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 items-start group cursor-pointer p-2 rounded-lg hover:bg-white dark:hover:bg-[#221010] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-transparent">
                                <div className="w-1 rounded-full h-10 bg-[#8a6160]"></div>
                                <div className="flex flex-col">
                                    <span className="text-[#181111] dark:text-white font-bold text-sm">Design Review</span>
                                    <span className="text-[#8a6160] text-xs">Today, 10:00 AM</span>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start group cursor-pointer p-2 rounded-lg hover:bg-white dark:hover:bg-[#221010] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-transparent">
                                <div className="w-1 rounded-full h-10 bg-[#c20d0a]"></div>
                                <div className="flex flex-col">
                                    <span className="text-[#181111] dark:text-white font-bold text-sm">Product Demo</span>
                                    <span className="text-[#8a6160] text-xs">Today, 02:00 PM</span>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start group cursor-pointer p-2 rounded-lg hover:bg-white dark:hover:bg-[#221010] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-transparent">
                                <div className="w-1 rounded-full h-10 bg-[#8a6160]"></div>
                                <div className="flex flex-col">
                                    <span className="text-[#181111] dark:text-white font-bold text-sm">Strategy Workshop</span>
                                    <span className="text-[#8a6160] text-xs">Tomorrow, 11:00 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deadlines */}
                    <div>
                        <h3 className="text-[#181111] dark:text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <Timer className="text-[#c20d0a] h-5 w-5" />
                            Deadlines
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="p-3 bg-white dark:bg-[#221010] rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[#181111] dark:text-white font-semibold text-sm">Submit Tax Forms</span>
                                    <span className="text-[#4F0504] dark:text-red-400 text-xs font-bold">High</span>
                                </div>
                                <p className="text-[#8a6160] text-xs mb-2">Due Tomorrow</p>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#4F0504] h-1.5 rounded-full" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                            <div className="p-3 bg-white dark:bg-[#221010] rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[#181111] dark:text-white font-semibold text-sm">Update Landing Page</span>
                                    <span className="text-[#AF4632] dark:text-orange-400 text-xs font-bold">Med</span>
                                </div>
                                <p className="text-[#8a6160] text-xs mb-2">Due Friday</p>
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#AF4632] h-1.5 rounded-full" style={{ width: "45%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ad/Pro Tip/Footer Area */}
                <div className="mt-auto p-6">
                    <div className="bg-gradient-to-br from-[#221010] to-[#4F0504] p-4 rounded-xl text-white">
                        <p className="text-sm font-bold mb-1">Pro Tip</p>
                        <p className="text-xs text-gray-200 opacity-90 leading-relaxed">Drag and drop tasks to quickly reschedule them for a different day.</p>
                    </div>
                </div>
            </aside>

        </div>
    );
}
