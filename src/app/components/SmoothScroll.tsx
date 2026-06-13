"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

// Inertial smooth scrolling for the whole document. Falls back to native
// scrolling when the user prefers reduced motion.
export function SmoothScroll({ children }: { children: ReactNode }) {
    const reduce = useReducedMotion();
    if (reduce) return <>{children}</>;

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
