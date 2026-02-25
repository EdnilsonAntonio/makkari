import { Bolt, Brain, TrendingUp } from "lucide-react"

export function Features() {
    return (
        <section className="py-24 bg-background-light" id="features">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-accent font-bold text-sm uppercase tracking-wider mb-2">
                        Core Capabilities
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#181111] leading-tight">
                        Built for speed.
                        <br />
                        Designed for efficiency.
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Everything high-performing teams need to move from idea to execution
                        without missing a beat.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Bolt className="h-7 w-7" />
                        </div>
                        <h4 className="mb-3 text-xl font-bold text-[#181111]">
                            Quick Capture
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Lightning fast input for ideas and tasks. Use keyboard shortcuts to
                            add tasks instantly without breaking your flow.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Brain className="h-7 w-7" />
                        </div>
                        <h4 className="mb-3 text-xl font-bold text-[#181111]">
                            Smart Organization
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            AI-assisted sorting automatically categorizes your work, keeping
                            your workspace clutter-free and prioritized.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <TrendingUp className="h-7 w-7" />
                        </div>
                        <h4 className="mb-3 text-xl font-bold text-[#181111]">
                            Progress Tracking
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                            Visual analytics and burndown charts help you monitor momentum and
                            team velocity in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
