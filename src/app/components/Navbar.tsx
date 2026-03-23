"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
] as const;

export function Navbar() {
    const path = usePathname();

    return (
        <div className="flex gap-1">
            {links.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    className={`px-3 py-1 rounded text-xs no-underline transition-colors ${path === l.href
                        ? "text-term-accent bg-term-border/50"
                        : "text-term-dim hover:text-term-text hover:bg-term-border/30"
                        }`}
                >
                    {l.label}
                </Link>
            ))}
        </div>
    );
}
