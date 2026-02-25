"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false)

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="pricing">
            {/* Background element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -right-[10%] top-[20%] w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl"></div>
            </div>
            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-[#181111] sm:text-4xl">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Start for free, scale as you grow.
                    </p>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <span className={cn("text-sm font-medium", !isAnnual ? "text-primary" : "text-gray-500")}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <span
                                className={cn(
                                    "absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out",
                                    isAnnual ? "translate-x-7" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className={cn("text-sm font-medium", isAnnual ? "text-primary" : "text-gray-500")}>
                            Yearly <span className="text-xs text-green-600 font-bold ml-1">Save 17%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-start">
                    {/* Free Tier */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                        <h3 className="text-lg font-semibold text-[#181111]">Free</h3>
                        <p className="mt-4 text-sm text-gray-500 min-h-[40px]">
                            Perfect for individuals just starting out.
                        </p>
                        <p className="mt-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold tracking-tight text-[#181111]">
                                €0
                            </span>
                        </p>
                        <Button
                            variant="outline"
                            className="mt-8 w-full bg-[#f5f0f0] hover:bg-[#e6dbdb] border-transparent text-[#181111]"
                        >
                            Get Started
                        </Button>
                        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-1">
                            {[
                                "3 active projects",
                                "50 active tasks",
                                "30 days history",
                                "Due dates",
                                "3 priority levels",
                            ].map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pro Tier (Highlighted) */}
                    <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl scale-105 z-10 h-full flex flex-col">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white shadow-sm whitespace-nowrap">
                            MOST POPULAR
                        </div>
                        <h3 className="text-lg font-semibold text-[#181111]">Pro</h3>
                        <p className="mt-4 text-sm text-gray-500 min-h-[40px]">
                            For power users who need more control.
                        </p>
                        <p className="mt-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold tracking-tight text-[#181111]">
                                €{isAnnual ? "5" : "6"}
                            </span>
                            <span className="text-sm font-semibold text-gray-500">/mo</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {isAnnual ? "Billed €60 yearly" : "Billed monthly"}
                        </p>
                        <Button className="mt-8 w-full bg-primary hover:bg-[#3a0403] text-white shadow-sm">
                            Start Free Trial
                        </Button>
                        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-1">
                            {[
                                "Unlimited active projects",
                                "Unlimited tasks",
                                "Unlimited history",
                                "Recurring tasks",
                                "Subtasks",
                                "Tags & labels",
                                "Advanced filters",
                                "Data export (CSV/JSON)",
                                "Custom themes",
                                "Priority support (24h)",
                            ].map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Team Tier */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                        <h3 className="text-lg font-semibold text-[#181111]">Team</h3>
                        <p className="mt-4 text-sm text-gray-500 min-h-[40px]">
                            For collaboration and management.
                        </p>
                        <p className="mt-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold tracking-tight text-[#181111]">
                                €{isAnnual ? "6.67" : "8"}
                            </span>
                            <span className="text-sm font-semibold text-gray-500">/user/mo</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {isAnnual ? "Billed €80/user yearly" : "Min. 2 users"}
                        </p>
                        <Button
                            variant="outline"
                            className="mt-8 w-full bg-[#f5f0f0] hover:bg-[#e6dbdb] border-transparent text-[#181111]"
                        >
                            Contact Sales
                        </Button>
                        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 flex-1">
                            {[
                                "Everything in Pro",
                                "Shared Workspace",
                                "Project Collaboration",
                                "Task Comments",
                                "Assign tasks to members",
                                "Team Activity Log",
                                "Permissions (admin/member)",
                                "Team Analytics",
                                "Priority support (12h)",
                            ].map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto">
                    <p>All paid plans include a 7-day free trial. Payments processed via Stripe. Cancel anytime without fees. Full refund if canceled within the first 14 days.</p>
                </div>
            </div>
        </section>
    )
}
