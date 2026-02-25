"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
    to: number;
    from?: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
}

export function CountUp({
    to,
    from = 0,
    duration = 2,
    suffix = "",
    prefix = "",
    decimals = 0,
    className,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
            }
        });
    }, [springValue, prefix, suffix, decimals]);

    return <span ref={ref} className={className} />;
}
