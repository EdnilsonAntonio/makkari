"use client";

import { Bell, HelpCircle, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

export function Header() {
    const pathname = usePathname();
    const { theme } = useTheme();

    const isDarkPage = theme === "dark" && pathname === "/reports";

    return (
        <div className={`${isDarkPage ? "dark" : ""} flex-shrink-0 z-10`}>
            <header className="h-16 bg-white dark:bg-[#181111] border-b border-gray-100 dark:border-[#392828] flex items-center justify-between px-6 lg:px-8 transition-colors">
                {/* Mobile menu */}
                <button className="md:hidden p-2 -ml-2 text-gray-600 dark:text-[#ba9c9c]">
                    <Menu className="h-5 w-5" />
                </button>

                {/* Search */}
                <div className="flex-1 max-w-xl md:mx-0 mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-[#8a6160] dark:text-[#ba9c9c] group-focus-within:text-[#4e0504] dark:group-focus-within:text-white transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search tasks, projects, or team members..."
                            className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-[#f5f0f0] dark:bg-[#251a1a] text-[#181111] dark:text-white placeholder-[#8a6160] dark:placeholder-[#ba9c9c] focus:outline-none focus:bg-white dark:focus:bg-[#181111] focus:ring-2 focus:ring-[#4e0504]/20 dark:focus:ring-[#4e0504]/50 transition-all text-sm"
                        />
                    </div>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2 ml-4">
                    <button className="relative p-2 text-[#5C5C5C] dark:text-[#ba9c9c] hover:bg-gray-100 dark:hover:bg-[#251a1a] rounded-full transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 bg-[#AF4632] rounded-full border-2 border-white dark:border-[#181111]" />
                    </button>
                    <button className="p-2 text-[#5C5C5C] dark:text-[#ba9c9c] hover:bg-gray-100 dark:hover:bg-[#251a1a] rounded-full transition-colors hidden sm:block">
                        <HelpCircle className="h-5 w-5" />
                    </button>
                </div>
            </header>
        </div>
    );
}
