"use client";

import {
    Plus,
    Search,
    ChevronDown,
    LayoutGrid,
    List,
    MoreHorizontal,
    History
} from "lucide-react";

export default function TeamDirectoryPage() {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-8 w-full">

            {/* Page Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#181111] dark:text-white">Team Directory</h1>
                    <p className="text-[#8a6060] dark:text-gray-400 max-w-2xl text-base md:text-lg">Manage your team members, view their availability, and track recent activity.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-[#4e0404] hover:bg-[#6e0606] text-white px-6 py-3 rounded-lg font-bold shadow-sm transition-all active:scale-95 whitespace-nowrap">
                    <Plus className="h-5 w-5" />
                    <span>Invite Member</span>
                </button>
            </div>

            {/* Filters & Search Toolbar */}
            <div className="bg-white dark:bg-[#2d1b1b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-0 md:static z-10 transition-colors">

                {/* Search Input */}
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-[#f8f5f5] dark:bg-[#221010] focus:ring-2 focus:ring-[#4e0404] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm text-[#181111] dark:text-white"
                        placeholder="Search by name, role, or email..."
                    />
                </div>

                {/* Filter Chips */}
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f5f5] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-[#4e0404] transition-colors whitespace-nowrap text-[#181111] dark:text-white">
                        <span>Department</span>
                        <ChevronDown className="h-4 w-4" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f8f5f5] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-[#4e0404] transition-colors whitespace-nowrap text-[#181111] dark:text-white">
                        <span>Status</span>
                        <ChevronDown className="h-4 w-4" />
                    </button>

                    <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>

                    <button className="p-2 text-[#4e0404] hover:text-[#4e0404] transition-colors" title="Grid View">
                        <LayoutGrid className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-[#4e0404] transition-colors" title="List View">
                        <List className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* Card 1: Available */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCImvd05KKKU5w_WOq2g5uiT19fd5H5HuZ7LB0yw6v4u5X4aMORmasOXVMJFQZ2pA3YtE7axlEkjS2KMB72S9nl3ZN69y5L8gGGtn6OmQnv3vhFE4m-05xeYhJOHm_s-JW2UQCrsBiVc3rVr69eVznvcRwcIO66PhVB_QyXwXUhYScSuHEC0gq5VJCKBxfTw0BtHvvSyR2DwUOdNQJrwxieH97rPjpdCR_s1PFAwE7a9xAkTs4XIJqoXyXI7sUYneT6A0YhmwQ5zMtC')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#16a34a] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Available"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Sarah Jenkins</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Product Designer</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Available
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Updated Design System
                        </p>
                    </div>
                </div>

                {/* Card 2: Busy */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlesGF3JJ0KrrPlGHPkzDhqLnIi0urDITmDBQZGiPqDT-j2S8ULPkTeYdj9vub8WEUxdshLjmHzLgY7Xs9eDpS9GT9an4d8-YNnXloO_FohUv7U8zh1XoP9yKnuUm1QGKsh6K4XHhLv1M4kvrYU7DBH7NxqEpD2FWv9OQJYq_qV56qhYWfxKOIsoHrdcKpZnrS27eSAF9sdtobJtLZ8mLoEFaj31r03vfjD-SvRA2OjlS8AnCdnDF0KJb1IJ3hSQY-MfZrlSB3m8Wv')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#dc2626] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Busy"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Michael Chen</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Frontend Engineer</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            In Meeting
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Client API Sync
                        </p>
                    </div>
                </div>

                {/* Card 3: Away */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMK-yTRw-w6ckQZXQZFFtsU03xZy_JXjO7Mfh2xBlBZUG16bQh1N920Bgg14cESnDPJr5bNtbzelovyT4leLWupTvxn8jAhMDOMdC_cRZWnHsRFu9YkOfv7jwqosZHLu3ybJLMwku4Ia8_czM2ge2DZynr0_TLDKArFZ49v02ytz0tYx2MA14g9MMVkepCccJGq4FEDuKV8LnXFN57ekFSuNDEqb05ohriUq3xUp4wd9GPYrJRpX5OEYwkSc1d1Bpkvk37Pc1ShMZI')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#eab308] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Away"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Jessica Lee</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Marketing Lead</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                            Away
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Campaign Review
                        </p>
                    </div>
                </div>

                {/* Card 4: Available */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuN4nUEDqASAp68wiXGmyBN_INfQBbWoPG5MjpyoBrvXSTls0G3VYs7it0azU6e5iqKltjm_VDQpBUSpRThgm7T7IHz3G1WkYZ6X_yDQpNMlldtXwyoxNLEoljttzCbmRXPYSphnOQZBomhKpsB1GTJ4qXMDPQUMeVga-KPSE0y-Gs24yxqhaf4Ngc8s7BFi5A0REX3w9_nVAjakZ6DSnBEHffnuzM8QmXnikNXhvNf1Fnm3Cr_ZUqtjPZ_QBHLlZETqEq9HAGZyL0')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#16a34a] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Available"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">David Kim</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Backend Developer</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Available
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: DB Migration
                        </p>
                    </div>
                </div>

                {/* Card 5: Available */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK3AyXdBQT2_gXxY85TwGhqpxNsKYKnS_yAqHNV1spZvy_Dt66GKM8kA2mGg-1LbpXH5WsG_O9aB1IohYqO34e3da35H9DUlRqN3fDAnlvUFcZciHaU6cCH8q4oxrN9ism1HNlh7Zv9kAhSdFN_3nEmI7ABGvABo1wuL-GJbCEQMEJ4Glgeh5iX5WuX4IkHZJGR97VK_b3uEztgch8XgRbmZ5UYikWKOz4mu0hXWdnBfaiL7w4PEAi4xxTe3D7l8FDPtpX0uxtPijw')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#16a34a] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Available"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Amanda Ross</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">HR Manager</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Available
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Team Onboarding
                        </p>
                    </div>
                </div>

                {/* Card 6: Busy */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSt83YBtCV49J-KN9gDmiLTyKbXx-bK2TbakfO7LOZ8rYjU_t61UCbeFGcGW8cdkZQnnFbVrynFuHpS5hBFmcJLRmP3SejPjvl6TXOU4TuEFSIJ8JEmkfubBzJtSd2sDQ93wg8mX3qgpG-2gI_M169803nFZO-gaPVnH0NNIBzDHXI6pULpFMxBmd1adXeW6VxN2cRFTDq-iNb7nqsOmrhWAfxdkD3fsq-amCu4b-3C2asHP9Yrb32VCYm9tf4whDaBN2IYqwQ-GpC')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#dc2626] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Busy"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">James Wilson</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Sales Director</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            In Call
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Q3 Review
                        </p>
                    </div>
                </div>

                {/* Card 7: Available */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASGukwMwGsn4GcqhSNhJ1yvxhe-NR3Mgz5nqdbLVLvwR2QZdiP5lHH71bwGX4Rtx33OYfu6q0cmEDluMCJMr9OVc3BDgLHo02myknmezETK3r5PfsQj9AdI653U_eYRxCZGFZ_75HyzraD2masxSkbMgbZSOLyjNuEJhxjnlWJm0aV2oi19wczxefQNmN6kTaVidI_L9ofSzEhU0iLWoKibzV4Sp7UILG0LGp6jrnBYARiJQ_zI7_YZ75dDoiAjM6Ol8f-eCdhr8k-')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#16a34a] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Available"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Emily White</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">QA Specialist</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Available
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Bug Triage
                        </p>
                    </div>
                </div>

                {/* Card 8: Away */}
                <div className="group bg-white dark:bg-[#2d1b1b] rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex flex-col gap-4 hover:shadow-lg hover:border-[#4e0404]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-400 hover:text-[#4e0404] dark:hover:text-white transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center pt-2">
                        <div className="relative">
                            <div
                                className="w-20 h-20 rounded-full bg-cover bg-center mb-3 ring-4 ring-[#f8f5f5] dark:ring-[#221010] group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFFOUOrLfRXxboJ08w7SurHYqWjEr2__cttaWwRNThuBFYPk4eVgPtAlGOkBK_DsyT5piVGht9-1qjzmzibvzhxkOWt0--PY9i_Qk_RdYGTWWNxfuO0qP6ntRy_TzzkEBhSnvpCM4FVQL_lc8vw1N2xz9mzSdxR7gehIaWVv2tCpDtlh1nM96LEntrh3-WUI9x80Nas6xAF0hi3mLdTISIk0sxq9_7qdMMO_hVRUlbV8q_qCOSruLxFn-CfFRqdf0dTLDSG8BUqNwl')" }}
                            />
                            <div className="absolute bottom-3 right-0 w-5 h-5 bg-[#eab308] rounded-full border-2 border-white dark:border-[#2d1b1b]" title="Away"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight">Robert Brown</h3>
                        <p className="text-[#8a6060] dark:text-gray-400 text-sm font-medium mt-1">Product Manager</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                            Out of Office
                        </span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 justify-center">
                            <History className="h-4 w-4" />
                            Recent: Roadmap Planning
                        </p>
                    </div>
                </div>

            </div>

            {/* Pagination / Load More */}
            <div className="flex justify-center pb-8 pt-4 mb-10">
                <button className="text-[#8a6060] dark:text-gray-400 hover:text-[#4e0404] dark:hover:text-white font-medium text-sm flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-white dark:hover:bg-[#2d1b1b] transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-800">
                    Load More Members
                    <ChevronDown className="h-5 w-5" />
                </button>
            </div>

        </div>
    );
}
