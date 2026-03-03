"use client";

import {
    Plus,
    ListFilter,
    Calendar,
    Users,
    List,
    Grid,
    ChevronDown,
    ChevronRight,
    CheckCircle2,
    CalendarDays,
    MoreHorizontal,
    AlertTriangle,
    CircleDot
} from "lucide-react";

export default function TasksPage() {
    return (
        <>
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-[#300303] dark:text-white tracking-tight">My Tasks</h1>
                    <p className="text-[#8a6060] text-sm mt-1">Keep track of your daily activities</p>
                </div>
                <button className="flex items-center gap-2 bg-[#4e0504] hover:bg-[#600101] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors shrink-0">
                    <Plus className="h-5 w-5" />
                    New Task
                </button>
            </div>

            {/* Filters & Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white dark:bg-[#2d1616] p-2 rounded-xl shadow-sm border border-[#f5f0f0] dark:border-[#3e2424]">
                <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f8f5f5] dark:bg-[#3e2424] hover:bg-gray-100 dark:hover:bg-[#4a2e2e] text-sm font-medium text-[#300303] dark:text-gray-200 transition-colors">
                        <ListFilter className="h-4 w-4" />
                        Filter by Priority
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f8f5f5] dark:bg-[#3e2424] hover:bg-gray-100 dark:hover:bg-[#4a2e2e] text-sm font-medium text-[#300303] dark:text-gray-200 transition-colors">
                        <Calendar className="h-4 w-4" />
                        Due Date
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f8f5f5] dark:bg-[#3e2424] hover:bg-gray-100 dark:hover:bg-[#4a2e2e] text-sm font-medium text-[#300303] dark:text-gray-200 transition-colors">
                        <Users className="h-4 w-4" />
                        Assignee
                        <ChevronDown className="h-4 w-4" />
                    </button>
                </div>
                <div className="flex items-center bg-[#f8f5f5] dark:bg-[#3e2424] rounded-lg p-1 mr-1">
                    <button className="p-1.5 rounded bg-white dark:bg-[#2d1616] shadow-sm text-[#300303] dark:text-white">
                        <List className="h-5 w-5" />
                    </button>
                    <button className="p-1.5 rounded text-gray-500 hover:text-[#300303] dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Grid className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Tasks List Container */}
            <div className="flex flex-col gap-6 mt-2">

                {/* Section: To Do */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-2">
                        <button className="text-gray-400 hover:text-[#300303] transition-colors">
                            <ChevronDown className="h-5 w-5" />
                        </button>
                        <h3 className="text-lg font-bold text-[#300303] dark:text-white">To Do</h3>
                        <span className="bg-gray-100 dark:bg-[#3e2424] text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                    </div>

                    <div className="bg-white dark:bg-[#2d1616] rounded-xl border border-[#f5f0f0] dark:border-[#3e2424] shadow-sm overflow-hidden divide-y divide-[#f5f0f0] dark:divide-[#3e2424]">

                        {/* Task Row 1 */}
                        <div className="group flex items-center gap-4 p-4 hover:bg-[#f8f5f5] dark:hover:bg-[#3e2424]/50 transition-colors cursor-pointer">
                            <button className="text-gray-300 hover:text-[#300303] dark:text-gray-600 dark:hover:text-white">
                                <CheckCircle2 className="h-6 w-6" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-base font-bold text-[#300303] dark:text-white truncate">Q3 Financial Report</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#600101] text-white">High</span>
                                </div>
                                <p className="text-sm text-[#8a6060] dark:text-gray-400 truncate mt-0.5">Prepare consolidation of all regional sales data.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 text-[#8a6060] dark:text-gray-400 text-sm">
                                <CalendarDays className="h-4 w-4" />
                                <span>Oct 24</span>
                            </div>
                            <div className="hidden md:flex -space-x-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2d1616] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYyZxK5zgzjGiyhx6xl8preirqrgnIw__1a3dxxWgNz95TFb5NPb7iwCIeWqXZ373wB9Tj5gTMVGlnPOV3P3Wq4Z4zeF9siCt55z65ZSHUscu9Q-XtBAc1HyLl9nWSSjIoH0obMn7ND0QrEwvHvzVsJxBIpqApd87LD6x3owMtkpEmGSjGrHIcytzcloqiIyKMPcn9ohXSXyIZ1jMnu5RTtrauulK3hE6cfoSytVgywIifkjnokULsDhTBjW3CkTIM2UJVl8DctFNX"
                                    alt="Team member"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2d1616] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu2GP3xvMqJAuP0l-mvTOjfr-FMF1wru2RY1y1I3Qgp7Wkv6HH_BticqP7z_Ko651St0hr2I6PxPZjZ8h8OqFW5-F39UfZ_o8_p7b-X2py4At7xl_w6o_F-DPgOUUyHJDkN3GpTqfgqJZ73B1AdUlnNFmU7eGK_L-XQftTL5RLPpKpWeKmBfF1zGDimAC98oOtotM3BWGZsUdQpsFwaI2zBfb9gATZ1v4Sc-xwWfGg3k1Ik6lnOlWs-MEBXdeDQANTlvAQav5WEqSL"
                                    alt="Team member"
                                />
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#300303] dark:hover:text-white transition-opacity p-1">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Task Row 2 */}
                        <div className="group flex items-center gap-4 p-4 hover:bg-[#f8f5f5] dark:hover:bg-[#3e2424]/50 transition-colors cursor-pointer">
                            <button className="text-gray-300 hover:text-[#300303] dark:text-gray-600 dark:hover:text-white">
                                <CheckCircle2 className="h-6 w-6" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-base font-bold text-[#300303] dark:text-white truncate">Update Brand Guidelines</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#AF4632] text-white">Medium</span>
                                </div>
                                <p className="text-sm text-[#8a6060] dark:text-gray-400 truncate mt-0.5">Refresh the color palette usage in the web docs.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 text-[#8a6060] dark:text-gray-400 text-sm">
                                <CalendarDays className="h-4 w-4" />
                                <span>Oct 26</span>
                            </div>
                            <div className="hidden md:flex -space-x-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2d1616] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUx7z2dcH9p9uW0XTa0cbL8_36UsNZO__o0sqwGAVZoJ8Qe4p5v-SrTiPWFrbuEY1wdrJhQoTlyoM-_pWwIet4C2Ulo8FD_ctCaTyAm2O6AVYd4_LCdB3KcG5ByYrRy6KKzFSHWydimGfIGmGaTrZkd696EjHDnAqisURASl79G_IUQz-i-ykLeOHThoN1xfjgaBMDe3H_aU3_S4jR2J2YxfnDjX28MjkTN3zH5pH0HUFyycLBqzhRVcl1NP_FcBfqYSMyqNJDPxcO"
                                    alt="Team member"
                                />
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#300303] dark:hover:text-white transition-opacity p-1">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Task Row 3 */}
                        <div className="group flex items-center gap-4 p-4 hover:bg-[#f8f5f5] dark:hover:bg-[#3e2424]/50 transition-colors cursor-pointer">
                            <button className="text-gray-300 hover:text-[#300303] dark:text-gray-600 dark:hover:text-white">
                                <CheckCircle2 className="h-6 w-6" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-base font-bold text-[#300303] dark:text-white truncate">Review Q4 Marketing Plan</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#600101] text-white">High</span>
                                </div>
                                <p className="text-sm text-[#8a6060] dark:text-gray-400 truncate mt-0.5">Meeting with the strategy team on Monday.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 text-[#d63434] font-medium text-sm">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Tomorrow</span>
                            </div>
                            <div className="hidden md:flex -space-x-2">
                                <div className="h-8 w-8 rounded-full bg-[#300303] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-[#2d1616]">JD</div>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#300303] dark:hover:text-white transition-opacity p-1">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Section: In Progress */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 px-2">
                        <button className="text-gray-400 hover:text-[#300303] transition-colors">
                            <ChevronDown className="h-5 w-5" />
                        </button>
                        <h3 className="text-lg font-bold text-[#300303] dark:text-white">In Progress</h3>
                        <span className="bg-gray-100 dark:bg-[#3e2424] text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">2</span>
                    </div>

                    <div className="bg-white dark:bg-[#2d1616] rounded-xl border border-[#f5f0f0] dark:border-[#3e2424] shadow-sm overflow-hidden divide-y divide-[#f5f0f0] dark:divide-[#3e2424]">

                        {/* Task Row 4 */}
                        <div className="group flex items-center gap-4 p-4 hover:bg-[#f8f5f5] dark:hover:bg-[#3e2424]/50 transition-colors cursor-pointer bg-[#300303]/5 dark:bg-[#300303]/40">
                            <button className="text-[#300303] hover:text-[#4F0504] dark:text-white/70 dark:hover:text-white">
                                <CircleDot className="h-6 w-6" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-base font-bold text-[#300303] dark:text-white truncate">Website Redesign Mockups</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#AF4632] text-white">Medium</span>
                                </div>
                                <p className="text-sm text-[#8a6060] dark:text-gray-400 truncate mt-0.5">Finalizing the homepage hero section.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 text-[#8a6060] dark:text-gray-400 text-sm">
                                <CalendarDays className="h-4 w-4" />
                                <span>Oct 30</span>
                            </div>
                            <div className="hidden md:flex -space-x-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2d1616] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFFISpcgoi9SzVkabY5RkQsBFLYp3PcqNvWA9yyDfj2qiZyLiSYjZWp0XzFVkDfrBtxT-EuV0DzI5jVPy5zdTT-uNmUlPTCAGVHQC5yqpS9gjgIRlcP_2iwhnucVxx5aJBL1a2jvy3iBAfjD8SKGPCjTWb8rwC0fS7mhhSHuPVJECyntnGK_DhsepKFnGjH0bX-_TlIMoVTnsZKtPvXtlH6PY6yRoXU9V-ekc_Gd5Q5ImE2_bYkZ82IWmHRr0jERgdRuKR5rsFyGKI"
                                    alt="Team member"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#2d1616] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzpD51Bqa-xE2cbkLrdqbKfVMCE1Uip1nB1cHNgmh5JEkdYMYwHuNKcaB9v0ik3h2vFNKVwgr8hgPAH9EH5uRfeDh-8UN33MNoNHbEmlqJ-QSS-PJVHbGwrNlMhgO6RBSospmD4xtebJzjzmxhPfoiLorjJuOm_WN6NQCL37UWTB6dKAyUQUVCjKMgJedgd9nolg_wqELTxKX2cKS4QE2YRHX5Ha7H8P-XrznHETcHAspW9LQQPe0-9YSJ9Gpls5f1RfORcDvTidgw"
                                    alt="Team member"
                                />
                                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-[#2d1616]">+2</div>
                            </div>
                            <button className="opacity-100 sm:opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#300303] dark:hover:text-white transition-opacity p-1">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Task Row 5 */}
                        <div className="group flex items-center gap-4 p-4 hover:bg-[#f8f5f5] dark:hover:bg-[#3e2424]/50 transition-colors cursor-pointer bg-[#300303]/5 dark:bg-[#300303]/40">
                            <button className="text-[#300303] hover:text-[#4F0504] dark:text-white/70 dark:hover:text-white">
                                <CircleDot className="h-6 w-6" />
                            </button>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                    <p className="text-base font-bold text-[#300303] dark:text-white truncate">Database Migration</p>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-gray-500 text-white">Low</span>
                                </div>
                                <p className="text-sm text-[#8a6060] dark:text-gray-400 truncate mt-0.5">Running test scripts on staging.</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-1 text-[#8a6060] dark:text-gray-400 text-sm">
                                <CalendarDays className="h-4 w-4" />
                                <span>Nov 02</span>
                            </div>
                            <div className="hidden md:flex -space-x-2">
                                <div className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white dark:ring-[#2d1616]">IT</div>
                            </div>
                            <button className="opacity-100 sm:opacity-0 group-hover:opacity-100 text-gray-400 hover:text-[#300303] dark:hover:text-white transition-opacity p-1">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Section: Done */}
                <div className="flex flex-col gap-3 opacity-70 mt-2">
                    <div className="flex items-center gap-3 px-2">
                        <button className="text-gray-400 hover:text-[#300303] transition-colors">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                        <h3 className="text-lg font-bold text-[#300303] dark:text-white">Done</h3>
                        <span className="bg-gray-100 dark:bg-[#3e2424] text-gray-600 dark:text-gray-300 text-xs font-bold px-2 py-0.5 rounded-full">5</span>
                    </div>

                    {/* Collapsed placeholder look */}
                    <div className="h-1 bg-gray-200 dark:bg-[#3e2424] rounded-full w-full"></div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-4" />
        </>
    );
}
