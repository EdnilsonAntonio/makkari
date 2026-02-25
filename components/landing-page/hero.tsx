"use client"

import { Button } from "@/components/ui/button"
import { PlayCircle, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <section className="relative bg-neutral-dark pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
            {/* Geometric Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl pointer-events-none"></div>

            {/* Skewed stripe */}
            <div className="absolute top-0 right-1/4 h-full w-[1px] bg-white/5 skew-x-12 pointer-events-none"></div>
            <div className="absolute top-0 right-1/3 h-full w-[1px] bg-white/5 skew-x-12 pointer-events-none"></div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 mb-6">
                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>{" "}
                            v2.0 is now live
                        </div>
                        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                            Work Faster.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Stay Organized.
                            </span>
                            <br />
                            <span className="text-accent">Accomplish More.</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            The task management platform built for high-velocity teams. Eliminate
                            friction, automate organization, and keep your momentum flowing.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button className="w-full sm:w-auto h-12 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-[#3a0403] hover:scale-105 transition-all duration-200">
                                Start Free Trial
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto h-12 gap-2 rounded-lg border-white/20 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10 hover:text-white transition-colors backdrop-blur-sm group"
                            >
                                <PlayCircle className="h-5 w-5 group-hover:text-accent transition-colors" />
                                Watch Demo
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                            <div className="flex -space-x-2">
                                {[
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBChO1ZAKS55uzNqu5kASlnXUkWs6fPFM-xgSuZK9w-W1TH-tIibfC4hu1hiKXbOevFyWwzWRVAAqz2gclIfaWsqHWrQ9gRR6ystJTju4DyzR9oB_h-dggTd13dURXyWQzOlnfx7NxezhQ0qjNM5UVvyJS1ZMTmw3ZBcEYGdZGURw9u1758soYNml9l021rki_G7F2JyG7fzq6QV2YeVjUWvKR6vNb4R3rVOrysnCCFoVnOSdIrW5F9XDfNhDc2DEFAXK7EhMOfbkIB",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBH_arx1thonU1rIzzzqvyRl1XATH2mHitwzelTJWRkAXpidKy9E3Zpccu1eHExFXXwMAeOy1WvUXO8An6nzC7Tq4xwZgdwymGgXyWpHyb-aiLcjCdj-ho4GhnxOUF8yHcRQ0acsoZlKKoZa1zbmsWmwwFQojmooGF3gYWJ_ryDu65bDPyzElzE1eFyT3szept1-2JRU5vQFrW08J46tY_O6-GB9_FuhBcPEMQ4lcTzxaTiUMFCd7Q1xGQnnlYElydnEO7HxaruYGyx",
                                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWVrqzlk6lbt2vZS3NcQMSikoy3hf4-_ScHzrj1ySltEnhSyohgXS5xhaaTfbyY69-6I_m1Klz1J_nBIvfq2EIlBMzDnyiQY9ZzuY8iiRyh7c7W43F24v4h3-SZ_666mQT5tbbLetk6omFv6sXv7ajSmr69K7zMVTZKvk42l08t12mdh8laij2mB4fzSZTnOHgJArC0VF_pAijlVyhbV6usWIaTLUrErn_4R7mQuyIvPiA1PE9LinbU1GB9cogVahsfs2A7cWFijk",
                                ].map((src, i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 rounded-full bg-gray-500 border-2 border-neutral-dark bg-cover"
                                        style={{ backgroundImage: `url('${src}')` }}
                                    />
                                ))}
                            </div>
                            <span>Trusted by 10,000+ fast-moving teams</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                        {/* Abstract Dashboard UI Mockup */}
                        <div className="relative rounded-xl border border-white/10 bg-[#252525] p-2 shadow-2xl backdrop-blur-xl">
                            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl animate-pulse pointer-events-none"></div>
                            <div className="relative overflow-hidden rounded-lg bg-[#1e1e1e] aspect-[4/3] group">
                                {/* Fake UI Elements */}
                                <div className="flex items-center gap-4 border-b border-white/5 p-4">
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="h-2 w-32 rounded-full bg-white/10"></div>
                                </div>
                                <div className="p-6 grid grid-cols-12 gap-4">
                                    <div className="col-span-3 space-y-3">
                                        <div className="h-2 w-full rounded-full bg-white/10"></div>
                                        <div className="h-2 w-2/3 rounded-full bg-white/10"></div>
                                        <div className="h-2 w-3/4 rounded-full bg-white/10"></div>
                                    </div>
                                    <div className="col-span-9 space-y-4">
                                        <div className="flex gap-4">
                                            {[1, 2, 3].map((i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "h-24 w-1/3 rounded bg-white/5 p-3 hover:bg-white/10 transition-colors cursor-pointer",
                                                        i === 1 && "border-l-2 border-accent"
                                                    )}
                                                >
                                                    <div className="h-2 w-1/2 mb-2 bg-white/20 rounded"></div>
                                                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Graph representation */}
                                        <div className="h-32 w-full rounded bg-white/5 relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                                            <div className="w-full bg-primary/40 h-[40%] rounded-t-sm"></div>
                                            <div className="w-full bg-primary/60 h-[60%] rounded-t-sm"></div>
                                            <div className="w-full bg-primary/80 h-[50%] rounded-t-sm"></div>
                                            <div className="w-full bg-accent h-[80%] rounded-t-sm shadow-[0_0_15px_rgba(175,70,50,0.5)]"></div>
                                            <div className="w-full bg-primary/50 h-[65%] rounded-t-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI Card */}
                                <div className="absolute bottom-6 right-6 w-48 rounded-lg bg-[#2a2a2a] p-3 shadow-xl border border-white/10 animate-[bounce_3s_infinite]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="h-4 w-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                            <Check className="h-2.5 w-2.5" />
                                        </div>
                                        <span className="text-[10px] text-white font-bold">
                                            Task Completed
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
