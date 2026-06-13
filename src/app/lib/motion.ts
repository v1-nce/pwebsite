import type { Variants, Transition } from "motion/react";

// Shared easing — a soft, slightly overshooting curve that feels "premium".
export const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

// Section/card entrance: fade + rise, revealed on scroll-into-view.
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease },
    },
};

// Letter-by-letter reveal for the ASCII header.
export const letterIn: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease },
    },
};

// Parent that staggers its children's reveal.
export const stagger = (gap = 0.06, delay = 0): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

// Hover lift used by interactive surfaces.
export const hover = {
    transition: { duration: 0.25, ease },
} as const;

// When to fire a scroll reveal: once, when ~15% is on screen.
export const viewport = { once: true, amount: 0.15 } as const;
