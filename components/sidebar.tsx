"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import {
    LayoutDashboard,
    CheckCircle,
    Folder,
    Calendar,
    Users,
    BarChart2,
    Zap,
    ChevronDown,
    Settings,
} from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/tasks", label: "My Tasks", icon: CheckCircle },
    { href: "/projects", label: "Projects", icon: Folder },
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/team", label: "Team", icon: Users },
    { href: "/reports", label: "Reports", icon: BarChart2 },
    { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const { theme } = useTheme();

    const isDarkPage = theme === "dark" && pathname === "/reports";

    return (
        <div className={`${isDarkPage ? "dark" : ""} w-64 flex-shrink-0 hidden md:flex flex-col z-20`}>
            <aside className="w-full h-full bg-white dark:bg-[#181111] border-r border-gray-100 dark:border-[#392828] flex flex-col justify-between transition-colors">
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-[#392828]">
                        <div className="flex items-center gap-3">
                            <img className="w-30 block dark:hidden" src="/assets/branding/Makkari Colored Symbol Transparent.png" alt="Makkari" />
                            <img className="w-30 hidden dark:block" src="/assets/branding/Makkari Dark Logo Transparent.png" alt="Makkari" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
                        {navItems.map(({ href, label, icon: Icon }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                                        ? "bg-[#4e0504]/10 dark:bg-[#4e0504]/30 text-[#4e0504] dark:text-white font-bold"
                                        : "text-[#5C5C5C] dark:text-[#ba9c9c] hover:bg-gray-50 dark:hover:bg-[#251a1a] hover:text-[#181111] dark:hover:text-white font-medium"
                                        }`}
                                >
                                    <Icon
                                        className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-[#4e0504] dark:text-white" : ""}`}
                                    />
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile */}
                    <div className="p-4 border-t border-gray-100 dark:border-[#392828]">
                        <button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#251a1a] cursor-pointer transition-colors">
                            <div
                                className="h-9 w-9 rounded-full bg-cover bg-center flex-shrink-0 bg-gray-300 dark:border dark:border-[#392828]"
                                style={{
                                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkizVjg4PA9cPv7GuH8-obBPPYCwSmHqRTFKg_wz52u2X_0Jyf-zH62tnaInrN7rRvuOFDkfoi8Xh8i3EJfAopPcfqfQ-KTUa_-WhU2gl1p9kgZRnKQHgP4oxN43bpMiv1uHTM-F8ftR-QraDue8nyZe_wRTmgYWUcz0ISvVzKZs655Jh4-8P6XjJQxSS18ORX4ptbpxMi2ghOhCLR6SD8_QnRGfjk6ePNa4tNmPN2338OmcssjH2zW5exaZTTFC_uNS-JCbI-lage")`,
                                }}
                            />
                            <div className="flex flex-col flex-1 min-w-0 text-left">
                                <p className="text-sm font-bold text-[#181111] dark:text-white truncate">Elara V.</p>
                                <p className="text-xs text-[#8a6160] dark:text-[#ba9c9c] truncate">Pro Workspace</p>
                            </div>
                            <ChevronDown className="h-4 w-4 text-gray-400 dark:text-[#ba9c9c] flex-shrink-0" />
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
