"use client";

import { Bell, HelpCircle, Menu, Search } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-8 flex-shrink-0 z-10">
            {/* Mobile menu */}
            <button className="md:hidden p-2 -ml-2 text-gray-600">
                <Menu className="h-5 w-5" />
            </button>

            {/* Search */}
            <div className="flex-1 max-w-xl md:mx-0 mx-auto">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-[#8a6160] group-focus-within:text-[#4e0504] transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search tasks, projects, or team members..."
                        className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-[#f5f0f0] text-[#181111] placeholder-[#8a6160] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#4e0504]/20 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 ml-4">
                <button className="relative p-2 text-[#5C5C5C] hover:bg-gray-100 rounded-full transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-[#AF4632] rounded-full border-2 border-white" />
                </button>
                <button className="p-2 text-[#5C5C5C] hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
                    <HelpCircle className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}
