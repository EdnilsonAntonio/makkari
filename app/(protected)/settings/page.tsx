"use client";

import {
    ChevronRight,
    User,
    BadgeCheck,
    Bell,
    Palette,
    CreditCard,
    Blocks,
    Camera
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [publicProfileVisibility, setPublicProfileVisibility] = useState(false);
    const [showOnlineStatus, setShowOnlineStatus] = useState(true);

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-6 w-full">

            {/* Breadcrumbs & Header */}
            <div>
                <div className="flex items-center gap-2 mb-2 text-sm">
                    <span className="text-[#8a6160] hover:text-[#4e0504] transition-colors font-medium cursor-pointer">Settings</span>
                    <ChevronRight className="h-4 w-4 text-[#e6dbdb]" />
                    <span className="text-[#181111] font-medium">Profile</span>
                </div>
                <h1 className="text-[#181111] tracking-tight text-3xl font-bold dark:text-white">Settings</h1>
                <p className="text-[#8a6160] mt-1 text-base dark:text-[#bcaaa9]">Manage your personal details and workspace preferences.</p>
            </div>

            {/* Settings Layout Grid */}
            <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">

                {/* Secondary Sidebar (Settings Menu) */}
                <aside className="w-full lg:w-64 flex-shrink-0">
                    <nav className="flex flex-col gap-1">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-[#2d1f1f] border-l-4 border-[#4e0504] shadow-sm text-[#4e0504] dark:text-white transition-all cursor-pointer">
                            <User className="h-5 w-5" />
                            <span className="text-sm font-bold">Profile</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5c4a4a] dark:text-[#bcaaa9] hover:bg-white dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white hover:shadow-sm border-l-4 border-transparent transition-all cursor-pointer">
                            <BadgeCheck className="h-5 w-5" />
                            <span className="text-sm font-medium">Account</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5c4a4a] dark:text-[#bcaaa9] hover:bg-white dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white hover:shadow-sm border-l-4 border-transparent transition-all cursor-pointer">
                            <Bell className="h-5 w-5" />
                            <span className="text-sm font-medium">Notifications</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5c4a4a] dark:text-[#bcaaa9] hover:bg-white dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white hover:shadow-sm border-l-4 border-transparent transition-all cursor-pointer">
                            <Palette className="h-5 w-5" />
                            <span className="text-sm font-medium">Appearance</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5c4a4a] dark:text-[#bcaaa9] hover:bg-white dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white hover:shadow-sm border-l-4 border-transparent transition-all cursor-pointer">
                            <CreditCard className="h-5 w-5" />
                            <span className="text-sm font-medium">Billing</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#5c4a4a] dark:text-[#bcaaa9] hover:bg-white dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white hover:shadow-sm border-l-4 border-transparent transition-all cursor-pointer">
                            <Blocks className="h-5 w-5" />
                            <span className="text-sm font-medium">Integrations</span>
                        </a>
                    </nav>
                </aside>

                {/* Main Content Panel */}
                <div className="flex-1 w-full flex flex-col gap-6">

                    {/* Profile Card */}
                    <div className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#f5f0f0] dark:border-[#3a1d1d] shadow-sm overflow-hidden flex flex-col">
                        <div className="px-6 py-5 border-b border-[#f5f0f0] dark:border-[#3a1d1d] flex justify-between items-center bg-gray-50/50 dark:bg-[#221010]/50">
                            <div>
                                <h2 className="text-lg font-bold text-[#181111] dark:text-white">Public Profile</h2>
                                <p className="text-sm text-[#8a6160] dark:text-[#bcaaa9]">This information will be displayed publicly to your team.</p>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 flex flex-col gap-8 flex-1">
                            {/* Avatar Section */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <div className="relative group cursor-pointer">
                                    <div
                                        className="h-24 w-24 rounded-full bg-cover bg-center border-4 border-[#f8f6f5] dark:border-[#221010] shadow-inner bg-gray-300"
                                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaTcidptcd2q8uJ2m49R6mFoyA3bEO1EWecr4yzd8rY2zR3BP-EaD1DkUWL0VWihLQ-kd7knFMirfGdG16HRvGlH6ljUPKJhqVOasLHLFJJg3OCtoMYEmVvDCebQqbcKug5oNSg6_V3uRxxC9XQlZJyLc9Ux3cK6Ew_1Bbsy4o-UpPv4ZWFz0UQvMkmkXpnCmXT7FqDg49qIIu90aZbbFGkkhbDz2Et4C4J6D7HLEuBlz-qxLTvgLmDpBp8fHGC98nAzGhcKsInGQj")` }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Camera className="text-white h-6 w-6" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center sm:items-start gap-3 pt-2">
                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white dark:bg-[#2d1f1f] border border-[#e6dbdb] dark:border-[#3a1d1d] rounded-lg text-[#181111] dark:text-white text-sm font-bold shadow-sm hover:bg-[#f8f6f5] dark:hover:bg-[#3d2b2b] transition-colors">Change Photo</button>
                                        <button className="px-4 py-2 text-[#8a6160] dark:text-[#bcaaa9] text-sm font-medium hover:text-[#4e0504] dark:hover:text-red-400 transition-colors">Remove</button>
                                    </div>
                                    <p className="text-xs text-[#8a6160] dark:text-[#bcaaa9] font-normal">Recommended: Square JPG, PNG, or GIF, at least 1000 pixels per side.</p>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-sm font-semibold text-[#181111] dark:text-white">First Name</span>
                                    <input
                                        type="text"
                                        defaultValue="Elara"
                                        className="rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#fcfbfb] dark:bg-[#150a0a] text-[#181111] dark:text-white px-4 py-2.5 text-sm focus:border-[#4e0504] focus:ring-1 focus:ring-[#4e0504] transition-colors placeholder:text-[#a08a8a] outline-none"
                                        placeholder="Enter your first name"
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-sm font-semibold text-[#181111] dark:text-white">Last Name</span>
                                    <input
                                        type="text"
                                        defaultValue="V."
                                        className="rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#fcfbfb] dark:bg-[#150a0a] text-[#181111] dark:text-white px-4 py-2.5 text-sm focus:border-[#4e0504] focus:ring-1 focus:ring-[#4e0504] transition-colors placeholder:text-[#a08a8a] outline-none"
                                        placeholder="Enter your last name"
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5 md:col-span-2">
                                    <span className="text-sm font-semibold text-[#181111] dark:text-white">Email Address</span>
                                    <input
                                        type="email"
                                        defaultValue="elara.v@makkari.app"
                                        className="w-full rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#fcfbfb] dark:bg-[#150a0a] text-[#181111] dark:text-white px-4 py-2.5 text-sm focus:border-[#4e0504] focus:ring-1 focus:ring-[#4e0504] transition-colors placeholder:text-[#a08a8a] outline-none"
                                        placeholder="name@company.com"
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5 md:col-span-2">
                                    <span className="text-sm font-semibold text-[#181111] dark:text-white">Job Title</span>
                                    <input
                                        type="text"
                                        defaultValue="Pro Workspace Owner"
                                        className="w-full rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#fcfbfb] dark:bg-[#150a0a] text-[#181111] dark:text-white px-4 py-2.5 text-sm focus:border-[#4e0504] focus:ring-1 focus:ring-[#4e0504] transition-colors placeholder:text-[#a08a8a] outline-none"
                                        placeholder="e.g. Senior Product Designer"
                                    />
                                </label>
                                <label className="flex flex-col gap-1.5 md:col-span-2">
                                    <span className="text-sm font-semibold text-[#181111] dark:text-white">Bio</span>
                                    <textarea
                                        className="w-full rounded-lg border border-[#e6dbdb] dark:border-[#3a1d1d] bg-[#fcfbfb] dark:bg-[#150a0a] text-[#181111] dark:text-white px-4 py-3 text-sm focus:border-[#4e0504] focus:ring-1 focus:ring-[#4e0504] transition-colors placeholder:text-[#a08a8a] min-h-[120px] outline-none resize-none"
                                        placeholder="Tell us a little about yourself..."
                                        defaultValue="Passionate about building tools that help teams work better together. Based in San Francisco."
                                    />
                                    <span className="text-xs text-[#8a6160] dark:text-[#bcaaa9] self-end">240 characters left</span>
                                </label>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-[#fcfbfb] dark:bg-[#150a0a] border-t border-[#f5f0f0] dark:border-[#3a1d1d] flex justify-end gap-3 mt-auto">
                            <button className="px-5 py-2.5 rounded-lg border border-transparent text-[#5c4a4a] dark:text-[#bcaaa9] text-sm font-bold hover:bg-[#e6dbdb] dark:hover:bg-[#2d1f1f] hover:text-[#181111] dark:hover:text-white transition-colors">Cancel</button>
                            <button className="px-6 py-2.5 rounded-lg bg-[#4e0504] text-white text-sm font-bold shadow-md hover:bg-[#3a0403] focus:ring-4 focus:ring-[#4e0504]/20 transition-all">Save Changes</button>
                        </div>
                    </div>

                    {/* Profile Preferences */}
                    <div className="bg-white dark:bg-[#1a0b0b] rounded-xl border border-[#f5f0f0] dark:border-[#3a1d1d] shadow-sm overflow-hidden flex flex-col mb-10">
                        <div className="px-6 py-5 border-b border-[#f5f0f0] dark:border-[#3a1d1d]">
                            <h2 className="text-lg font-bold text-[#181111] dark:text-white">Profile Privacy</h2>
                        </div>
                        <div className="p-6 flex flex-col gap-6">

                            {/* Toggle 1 */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col pr-4">
                                    <p className="text-[#181111] dark:text-white text-sm font-bold">Public Profile Visibility</p>
                                    <p className="text-[#8a6160] dark:text-[#bcaaa9] text-sm mt-0.5">Allow people outside your team to view your basic profile information.</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setPublicProfileVisibility(!publicProfileVisibility)}
                                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${publicProfileVisibility ? 'bg-[#4e0504]' : 'bg-gray-200 dark:bg-gray-700'
                                        }`}
                                >
                                    <span
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${publicProfileVisibility ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="h-px bg-[#f5f0f0] dark:bg-[#3a1d1d] w-full" />

                            {/* Toggle 2 */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col pr-4">
                                    <p className="text-[#181111] dark:text-white text-sm font-bold">Show Online Status</p>
                                    <p className="text-[#8a6160] dark:text-[#bcaaa9] text-sm mt-0.5">Let your teammates know when you are active on Makkari.</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowOnlineStatus(!showOnlineStatus)}
                                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${showOnlineStatus ? 'bg-[#4e0504]' : 'bg-gray-200 dark:bg-gray-700'
                                        }`}
                                >
                                    <span
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${showOnlineStatus ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#8a6160] dark:text-[#bcaaa9] pb-8">
                <p>© 2023 Makkari Inc. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a className="hover:text-[#4e0504] dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                    <a className="hover:text-[#4e0504] dark:hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                    <a className="hover:text-[#4e0504] dark:hover:text-white transition-colors cursor-pointer">Contact Support</a>
                </div>
            </footer>
        </div>
    );
}
