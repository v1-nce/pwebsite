"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// A faint accent-tinted glow that trails the cursor, sitting behind the
// terminal frame. Updates a CSS variable inside a rAF loop so we never
// touch React state on mousemove. No-ops on touch / reduced-motion.
export function CursorSpotlight() {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (reduce) return;
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const el = ref.current;
        if (!el) return;

        let raf = 0;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        const onMove = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    raf = 0;
                    el.style.setProperty("--x", `${x}px`);
                    el.style.setProperty("--y", `${y}px`);
                });
            }
        };

        el.style.opacity = "1";
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [reduce]);

    return <div ref={ref} className="cursor-spotlight" aria-hidden />;
}
