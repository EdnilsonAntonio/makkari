
import LogoLoop from "./LogoLoop";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiGithub } from "react-icons/si";

const techLogos = [
    { node: <SiReact className="text-blue-500" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-black" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-blue-600" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-cyan-500" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiVercel className="text-black" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGithub className="text-black" />, title: "GitHub", href: "https://github.com" },
];

export function PartnersSection() {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                    Powered by modern technologies
                </p>
                <div className="h-[100px] relative overflow-hidden">
                    <LogoLoop
                        logos={techLogos}
                        speed={40}
                        direction="left"
                        logoHeight={40}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover={true}
                        fadeOut={true}
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    );
}
