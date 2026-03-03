"use client";

import {
    Plus,
    Filter,
    Search,
    MoreHorizontal,
    CalendarDays,
    CheckSquare,
    AlertTriangle,
    PauseCircle
} from "lucide-react";

export default function ProjectsPage() {
    return (
        <>
            {/* Page Heading & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-3xl font-black text-[#181111] dark:text-white tracking-tight">Projects</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base">Manage and track progress across all active initiatives.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#181111] dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                        <Filter className="h-5 w-5" />
                        <span>Filter</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-[#4e0504] hover:bg-[#70201f] text-white text-sm font-bold shadow-md shadow-[#4e0504]/20 transition-all">
                        <Plus className="h-5 w-5" />
                        <span>Create Project</span>
                    </button>
                </div>
            </div>

            {/* Search & Chips Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-[#1a0b0b] p-2 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm mt-8">
                {/* Tabs */}
                <div className="flex w-full md:w-auto overflow-x-auto no-scrollbar gap-1 p-1">
                    <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#4e0504]/10 text-[#4e0504] dark:text-white dark:bg-[#4e0504]/40 text-sm font-bold transition-colors">
                        All Projects
                    </button>
                    <button className="whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                        Active <span className="ml-1 text-xs bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded-full">5</span>
                    </button>
                    <button className="whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                        Completed
                    </button>
                    <button className="whitespace-nowrap px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors">
                        On Hold
                    </button>
                </div>

                {/* Local Search */}
                <div className="w-full md:w-auto md:min-w-[300px] px-2 pb-2 md:pb-0">
                    <div className="relative flex items-center w-full h-10 rounded-lg bg-[#f8f6f5] dark:bg-white/5 overflow-hidden focus-within:ring-1 focus-within:ring-[#4e0504]/30">
                        <div className="grid place-items-center h-full w-10 text-gray-400">
                            <Search className="h-5 w-5" />
                        </div>
                        <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 dark:text-gray-200 bg-transparent pr-2 placeholder-gray-500 border-none focus:ring-0"
                            id="search"
                            placeholder="Search projects..."
                            type="text"
                        />
                    </div>
                </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-10">
                {/* Card 1 */}
                <div className="group bg-white dark:bg-[#1a0b0b] rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/5 transition-all duration-200 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 w-fit">
                                On Track
                            </span>
                            <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-[#4e0504] transition-colors">Q3 Marketing Campaign</h3>
                        </div>
                        <button className="text-gray-400 hover:text-[#4e0504] transition-colors">
                            <MoreHorizontal className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Comprehensive digital marketing strategy rollout for the upcoming fall season product launch.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4" />
                                <span>Due Oct 24</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckSquare className="h-4 w-4" />
                                <span>12/20 Tasks</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-2 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2m3r3cw4DEGinX4EvjzBCplofsjS6vQ8cCfHQD0m4XTL1m9jbvOTCStVsNJT0j-wRYtRNBs0qgtRuQc7me0qNUrnYtvckwmyoNQW-3RR0z2cSmQu8Oxd71xr_4UKlmo5VWExYIU4GHEIbtgC8Yqp59ymW0zp6auYwXkg9hvnsa4ye4U3E2eeHJFrGkml_zRrndHCaA1HORKAdmJEyRjfTYY2erMekMrJRTUdAv40hkj4jAZL1EHY-IdzeLxqeV6rMBCg02oCSl1m"
                                    alt="Team member"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6WEcw0dUhU9cDo5MyErnwjf0j_Tqul-oabHJf-_X8RJ3E-T6_OhIyaszVaIfuECFF-8x1622Bap5NaNzofIpVhfVtzrxlhP26-3XQe0ymtw_4uUvIXSJi7AzgfIzqsCp7bCWFqAvs5uQUNa1O6bPWSml7SM3LvsU_CoZYH_GfOg4wdPbmW-AKLxYCaRr_c6OJ0L37QndQCXz3ZS4AaEvO0X1ffmBWUNEwl3q2Amh9g1G-mc5BW4p2T2J6XdLbntPKJfkpYPvDHj1"
                                    alt="Team member"
                                />
                                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] bg-gray-100 dark:bg-white/10 text-xs font-bold text-gray-500 dark:text-gray-300">
                                    +3
                                </div>
                            </div>
                            <span className="text-sm font-bold text-[#4e0504] dark:text-white">60%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-[#4e0504] h-2 rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="group bg-white dark:bg-[#1a0b0b] rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/5 transition-all duration-200 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 w-fit">
                                At Risk
                            </span>
                            <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-[#4e0504] transition-colors">Website Redesign</h3>
                        </div>
                        <button className="text-gray-400 hover:text-[#4e0504] transition-colors">
                            <MoreHorizontal className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Overhauling the main corporate website with new branding guidelines and CMS migration.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                                <AlertTriangle className="h-4 w-4" />
                                <span>Due Yesterday</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckSquare className="h-4 w-4" />
                                <span>45/52 Tasks</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-2 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtA4_a4Fi_pnODI0k9Nic3Lgx3bPFiPnjHky5wbHFKcvAL8Th_aG_JxJFI4tpmBffjvVGRK-S76208tLBQhwZx2y6TJcOhLa9tNRRPNJCb8hjmFHd1_4u_zxr8XngRb6TjU3LgV4FIlXR2MQjKcckoa88JmvbQv81GV3KGTIq_hK6eNk9Z-T68AD1kIochbJtgFzwoTLRVmS2sJuU9Ij07ONOBW_nZx7pdBsMvD7l_a8X2PL8y0ihqsGE2EYYgWi_Z8LvM1KNsgoF4"
                                    alt="Team member"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZKYUJLzyrZCT73YFLw7t80zrH2UEncKzdV6YarWJ3LkQlQxwWiTvWIEMqMHUihJA4njw-eHDmTschpuD4IoRkW3bHLyV8aYyFw4pk0kSC0Vl6REo_XxQNL6z3o_-T1Xamxf2KAK6TejVLqM9NXnxkm87jrcc4xcjnHxu07sLOurYStCcJvEDfnKMCLwhUg-YKopW6a0_WYzY0YKU0n6o2IsqWNNtOW4TzwIHRZwFp9ZR3gRbo3xF985qiGgW_ARIzWudg_6cpKzc"
                                    alt="Team member"
                                />
                            </div>
                            <span className="text-sm font-bold text-[#4e0504] dark:text-white">85%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-[#4e0504] h-2 rounded-full transition-all duration-500" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="group bg-white dark:bg-[#1a0b0b] rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/5 transition-all duration-200 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 w-fit">
                                Planning
                            </span>
                            <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-[#4e0504] transition-colors">Mobile App V2</h3>
                        </div>
                        <button className="text-gray-400 hover:text-[#4e0504] transition-colors">
                            <MoreHorizontal className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Initial scoping and wireframing for the next major version of the iOS and Android applications.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4" />
                                <span>Start Nov 01</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckSquare className="h-4 w-4" />
                                <span>0/15 Tasks</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-2 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3hnY-RaDTx8YP2W1_wysiEz-AmpK-AK4fy9rib9XI5gYzzMcamuq1Wcm-u3Bypz-1Tz92PY1CIEnt--LCFU0XAJAP_EG6E4xrX_5yY4RhvGlcxjnjFF447TZhJPoIgjH52NhZEWZc3-kl7ALddLGnhJufyGlj4SP1d9UZHCLKY414MxBhh3AlmCpKY9cruNH86VtpGwzsGSCUuLm2ziW-BAtQmd35Rp26i3jj5eT2r9oR4BZqJUhkS-RkqqP5nwC6nUY1zi9VI2dF"
                                    alt="Team member"
                                />
                            </div>
                            <span className="text-sm font-bold text-[#4e0504] dark:text-white">0%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-[#4e0504] h-2 rounded-full transition-all duration-500" style={{ width: "0%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="group bg-white dark:bg-[#1a0b0b] rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/5 transition-all duration-200 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 w-fit">
                                On Track
                            </span>
                            <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-[#4e0504] transition-colors">Q4 Financial Audit</h3>
                        </div>
                        <button className="text-gray-400 hover:text-[#4e0504] transition-colors">
                            <MoreHorizontal className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Internal and external audit preparation for end-of-year financial reporting.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4" />
                                <span>Due Dec 15</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckSquare className="h-4 w-4" />
                                <span>8/24 Tasks</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-2 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Qc2eoT5YBAn94OVkysG0xuAuPtuK6PhBvs93xqHVGL-6YTStaDVzXq8o_XFyOV4SOuvx3RnPrS1IWV9L97xXa5HIDzY0opiWmFBg1rgZ-KSEzH7vRpO7-q3n50RrmTc05aGmE0pGbFuVsgXxQ0mS0r7EUcoDojrQp_AZa_E70Hs4vNJfXXlHyH73O7DKhVJMfc8v6dprtIW-OKZFofKc61_K1hyE6keJfzjk25JOgSJ4kDEutVh-q4BiuHT3hqmeGz6_XqyvfKN5"
                                    alt="Team member"
                                />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmbW3mQB_DfDt9GdiBiT0ZTnfYh7i7NcBP__A1ng2sIQPcskqhYdMScB9NF0-1nJ6RTrTde0HAvbaAJS4SAUIXYockjcTGBkHYq5_uTty9IiimJgZzZLHhyLHzj3M87JYQPs_WHb5IsauHar6X1ld8OOEKqCcMHfUqNePhGXBtxhdSOvVm-GbE8JubczuhxdtitSpJ8SmJFrqPTBZM1pZCWTFlGwoBtZaJoVIePjYt6m80nJ-6LiNL0eAIQhbauIde7xgj2A7sYoRO"
                                    alt="Team member"
                                />
                                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] bg-gray-100 dark:bg-white/10 text-xs font-bold text-gray-500 dark:text-gray-300">
                                    +1
                                </div>
                            </div>
                            <span className="text-sm font-bold text-[#4e0504] dark:text-white">33%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-[#4e0504] h-2 rounded-full transition-all duration-500" style={{ width: "33%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="group bg-white dark:bg-[#1a0b0b] rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 dark:border-white/5 transition-all duration-200 flex flex-col gap-6 relative">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 w-fit">
                                On Hold
                            </span>
                            <h3 className="text-lg font-bold text-[#181111] dark:text-white leading-tight group-hover:text-[#4e0504] transition-colors">Legacy System Migration</h3>
                        </div>
                        <button className="text-gray-400 hover:text-[#4e0504] transition-colors">
                            <MoreHorizontal className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">Migrating data from the deprecated AS/400 system to the new cloud infrastructure.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                            <div className="flex items-center gap-1.5">
                                <PauseCircle className="h-4 w-4" />
                                <span>Paused</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckSquare className="h-4 w-4" />
                                <span>42/100 Tasks</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-2 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a0b0b] object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJKOldhBPNdK0o7XrzGzonfQXw7EBUh3IHa6fQ-W-RkT312gt9qWvWmEqGXS4h2WYgE38yF8-mzDh__fZW8xyCT9u1nrpmea-SJi6EyKdSE5E0__kT6fXFZvAZDeny759Sd4EMxk1yVMF2C6Hjgl0zFVTMRzt-UavcCNz3XNlZMNnydbClcFKWnHk7BSsZ7ez57WhfC-IR4srUVgQzgE5E4Wa8VJ9kVR-fDCR-OOJj3Y4374J3ho-ke2bCWSwAjOtLW2-JTttNc95-"
                                    alt="Team member"
                                />
                            </div>
                            <span className="text-sm font-bold text-[#4e0504] dark:text-white">42%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                            <div className="bg-gray-400 h-2 rounded-full transition-all duration-500" style={{ width: "42%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Card 6 (Create New Placeholder) */}
                <div className="group bg-transparent border-2 border-dashed border-gray-300 dark:border-white/10 rounded-xl p-6 hover:border-[#4e0504]/50 hover:bg-[#4e0504]/5 transition-all duration-200 flex flex-col items-center justify-center gap-4 cursor-pointer min-h-[280px]">
                    <div className="h-16 w-16 rounded-full bg-[#f8f6f5] dark:bg-white/5 flex items-center justify-center group-hover:bg-[#4e0504]/10 transition-colors">
                        <Plus className="h-8 w-8 text-gray-400 group-hover:text-[#4e0504]" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 group-hover:text-[#4e0504] transition-colors">Create New Project</h3>
                        <p className="text-sm text-gray-400 mt-1">Start a new initiative</p>
                    </div>
                </div>

            </div>
        </>
    );
}
