import { CountUp } from "@/components/ui/count-up"

export function Stats() {
    return (
        <section className="relative z-30 -mb-20 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="mx-auto max-w-[1280px] pointer-events-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                    <div className="flex flex-col gap-1 border-b border-gray-100 md:border-b-0 md:border-r p-4 text-center md:text-left">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Productivity Boost
                        </p>
                        <p className="text-4xl font-black text-primary tracking-tight">
                            <CountUp to={35} suffix="%" />
                        </p>
                        <p className="text-sm text-gray-600">
                            Average increase in team output
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 border-b border-gray-100 md:border-b-0 md:border-r p-4 text-center md:text-left">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Hours Saved
                        </p>
                        <p className="text-4xl font-black text-primary tracking-tight">
                            <CountUp to={20} suffix="h+" />
                        </p>
                        <p className="text-sm text-gray-600">
                            Per employee, every single week
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 p-4 text-center md:text-left">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Task Completion
                        </p>
                        <p className="text-4xl font-black text-primary tracking-tight">
                            <CountUp to={99.9} suffix="%" decimals={1} />
                        </p>
                        <p className="text-sm text-gray-600">Tasks delivered on schedule</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
