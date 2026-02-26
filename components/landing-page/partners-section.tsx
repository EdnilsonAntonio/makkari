
"use client";

import LogoLoop from "./LogoLoop";
import Image from "next/image";

type Testimonial = {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar: string;
    color: string;
    photo?: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Ana Oliveira",
        role: "Owner",
        company: "Ana's Bistro",
        text: "Since we started using Makkari, online reservations have tripled. Managing everything became so much simpler and more organized!",
        avatar: "AO",
        color: "bg-orange-500",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "David Thompson",
        role: "Manager",
        company: "Savour & Art Restaurant",
        text: "Our team reduced order errors by over 80%. The system is intuitive and the support team is outstanding.",
        avatar: "DT",
        color: "bg-emerald-500",
    },
    {
        name: "Sofia Rodrigues",
        role: "Director",
        company: "Modern Café",
        text: "We love the reporting features. We can now see which dishes are most popular and optimize our menu accordingly.",
        avatar: "SR",
        color: "bg-blue-500",
    },
    {
        name: "James Carter",
        role: "Chef & Founder",
        company: "Carter's Kitchen",
        text: "Makkari transformed the way we manage our restaurant. I recommend it to any food service business without hesitation.",
        avatar: "JC",
        color: "bg-purple-500",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emily Walsh",
        role: "Co-owner",
        company: "The Family Tavern",
        text: "We finally have full control over stock, tables, and billing in one place. We save hours of work every single week!",
        avatar: "EW",
        color: "bg-rose-500",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const TestimonialCard = ({ name, role, company, text, avatar, color, photo }: Testimonial) => (
    <div className="w-[300px] bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col gap-3 select-none">
        <p className="text-gray-600 text-sm leading-relaxed">
            &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
            {photo ? (
                <img
                    src={photo}
                    alt={name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    draggable={false}
                />
            ) : (
                <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {avatar}
                </div>
            )}
            <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{name}</p>
                <p className="text-xs text-gray-500">{role} · {company}</p>
            </div>
        </div>
    </div>
);

const testimonialLogos = testimonials.map((t) => ({
    node: <TestimonialCard {...t} />,
    title: t.name,
}));

export function PartnersSection() {
    return (
        <section className="py-16 bg-gray-50 border-b border-gray-100">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mb-10">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    What our customers say
                </p>
            </div>
            <div className="py-4" style={{ overflowX: "clip" }}>
                <LogoLoop
                    logos={testimonialLogos}
                    speed={35}
                    direction="left"
                    logoHeight={1}
                    gap={24}
                    hoverSpeed={0}
                    scaleOnHover={false}
                    fadeOut={true}
                    fadeOutColor="#f9fafb"
                    ariaLabel="Customer testimonials"
                />
            </div>
        </section>
    );
}
