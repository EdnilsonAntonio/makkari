
import TrueFocus from "./TrueFocus";

export function FocusSection() {
    return (
        <section className="pt-32 pb-24 bg-neutral-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-12">
                    Focus on what matters
                </h2>

                <div className="flex justify-center items-center py-12">
                    <TrueFocus
                        sentence="True Focus"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#af4632"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                    />
                </div>

                <p className="mt-12 text-lg text-gray-400 max-w-2xl mx-auto">
                    Experience a distraction-free environment that helps you stay in the flow state longer.
                </p>
            </div>
        </section>
    );
}
