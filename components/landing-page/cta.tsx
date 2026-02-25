
import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="bg-neutral-dark py-20 relative overflow-hidden">
            {/* Skewed decoration */}
            <div className="absolute inset-0 skew-y-3 bg-primary/10 transform origin-bottom-right pointer-events-none"></div>
            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to work at the speed of thought?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
                    Join thousands of professionals who have reclaimed their time with
                    Makkari.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button className="h-12 rounded-lg bg-accent px-8 text-base font-bold text-white shadow-lg hover:bg-[#963c2b] transition-colors">
                        Get Started Now
                    </Button>
                </div>
            </div>
        </section>
    )
}
