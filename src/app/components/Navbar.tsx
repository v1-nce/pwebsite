"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
] as const;

export function Navbar() {
    const path = usePathname();

    return (
        <div className="flex gap-1">
            {links.map((l) => {
                const active = path === l.href;
                return (
                    <Link
                        key={l.href}
                        href={l.href}
                        className={`relative px-3 py-1 rounded text-xs no-underline transition-colors ${active
                            ? "text-term-accent"
                            : "text-term-dim hover:text-term-text"
                            }`}
                    >
                        {active && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 rounded bg-term-border/50"
                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                            />
                        )}
                        <span className="relative z-10">{l.label}</span>
                    </Link>
                );
            })}
        </div>
    );
}
