"use client";

import { motion } from "motion/react";
import { letterIn, stagger } from "../lib/motion";

type Block = { x: number; y: number; w: number; h: number };
type LetterDef = { width: number; height: number; blocks: Block[] };

const LETTER_HEIGHT = 5;
const BLOCK_INSET = 0.04;
const SHADOW_OFFSETS: readonly [number, number] = [0.25, 0.125];

const letters: Record<string, LetterDef> = {
    A: {
        width: 4, height: 5,
        blocks: [
            { x: 1, y: 0, w: 2, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 3, y: 1, w: 1, h: 1 },
            { x: 0, y: 2, w: 4, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 3, y: 3, w: 1, h: 1 },
            { x: 0, y: 4, w: 1, h: 1 }, { x: 3, y: 4, w: 1, h: 1 },
        ],
    },
    B: {
        width: 3, height: 5,
        blocks: [
            { x: 0, y: 0, w: 2.6, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 2.2, y: 1, w: 0.8, h: 1 },
            { x: 0, y: 2, w: 2.6, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 2.2, y: 3, w: 0.8, h: 1 },
            { x: 0, y: 4, w: 2.6, h: 1 },
        ],
    },
    C: {
        width: 3, height: 5,
        blocks: [
            { x: 0.4, y: 0, w: 2.6, h: 1 },
            { x: 0.4, y: 4, w: 2.6, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 0, y: 2, w: 1, h: 1 }, { x: 0, y: 3, w: 1, h: 1 },
        ],
    },
    E: {
        width: 3, height: 5,
        blocks: [
            { x: 0, y: 0, w: 3, h: 1 },
            { x: 0, y: 2, w: 2.2, h: 1 },
            { x: 0, y: 4, w: 3, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 0, y: 3, w: 1, h: 1 },
        ],
    },
    I: {
        width: 1, height: 5,
        blocks: [
            { x: 0, y: 0, w: 1, h: 1 }, { x: 0, y: 1, w: 1, h: 1 }, { x: 0, y: 2, w: 1, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 0, y: 4, w: 1, h: 1 },
        ],
    },
    J: {
        width: 3, height: 5,
        blocks: [
            { x: 2, y: 0, w: 1, h: 1 }, { x: 2, y: 1, w: 1, h: 1 }, { x: 2, y: 2, w: 1, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 2, y: 3, w: 1, h: 1 },
            { x: 0.4, y: 4, w: 2.6, h: 1 },
        ],
    },
    N: {
        width: 4, height: 5,
        blocks: [
            { x: 0, y: 0, w: 1, h: 1 }, { x: 3, y: 0, w: 1, h: 1 },
            { x: 0, y: 1, w: 2, h: 1 }, { x: 3, y: 1, w: 1, h: 1 },
            { x: 0, y: 2, w: 1, h: 1 }, { x: 2, y: 2, w: 2, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 3, y: 3, w: 1, h: 1 },
            { x: 0, y: 4, w: 1, h: 1 }, { x: 3, y: 4, w: 1, h: 1 },
        ],
    },
    O: {
        width: 4, height: 5,
        blocks: [
            { x: 1, y: 0, w: 2, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 3, y: 1, w: 1, h: 1 },
            { x: 0, y: 2, w: 1, h: 1 }, { x: 3, y: 2, w: 1, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 3, y: 3, w: 1, h: 1 },
            { x: 1, y: 4, w: 2, h: 1 },
        ],
    },
    P: {
        width: 3, height: 5,
        blocks: [
            { x: 0, y: 0, w: 2.6, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 2.2, y: 1, w: 0.8, h: 1 },
            { x: 0, y: 2, w: 2.6, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 },
            { x: 0, y: 4, w: 1, h: 1 },
        ],
    },
    R: {
        width: 3, height: 5,
        blocks: [
            { x: 0, y: 0, w: 2.6, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 2.2, y: 1, w: 0.8, h: 1 },
            { x: 0, y: 2, w: 2.6, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 2, y: 3, w: 1, h: 1 },
            { x: 0, y: 4, w: 1, h: 1 }, { x: 2.5, y: 4, w: 0.8, h: 1 },
        ],
    },
    S: {
        width: 3, height: 5,
        blocks: [
            { x: 0.4, y: 0, w: 2.6, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 },
            { x: 0.4, y: 2, w: 2.2, h: 1 },
            { x: 2, y: 3, w: 1, h: 1 },
            { x: 0, y: 4, w: 2.6, h: 1 },
        ],
    },
    T: {
        width: 4, height: 5,
        blocks: [
            { x: 0, y: 0, w: 4, h: 1 },
            { x: 1.5, y: 1, w: 1, h: 1 }, { x: 1.5, y: 2, w: 1, h: 1 },
            { x: 1.5, y: 3, w: 1, h: 1 }, { x: 1.5, y: 4, w: 1, h: 1 },
        ],
    },
    U: {
        width: 4, height: 5,
        blocks: [
            { x: 0, y: 0, w: 1, h: 1 }, { x: 3, y: 0, w: 1, h: 1 },
            { x: 0, y: 1, w: 1, h: 1 }, { x: 3, y: 1, w: 1, h: 1 },
            { x: 0, y: 2, w: 1, h: 1 }, { x: 3, y: 2, w: 1, h: 1 },
            { x: 0, y: 3, w: 1, h: 1 }, { x: 3, y: 3, w: 1, h: 1 },
            { x: 1, y: 4, w: 2, h: 1 },
        ],
    },
    V: {
        width: 3.9, height: 5,
        blocks: [
            { x: 0, y: 0, w: 1, h: 1 }, { x: 0, y: 1, w: 1, h: 1 }, { x: 0, y: 2, w: 1, h: 1 },
            { x: 3, y: 0, w: 1, h: 1 }, { x: 3, y: 1, w: 1, h: 1 }, { x: 3, y: 2, w: 1, h: 1 },
            { x: 0.8, y: 3, w: 2.4, h: 1 },
            { x: 1.5, y: 4, w: 1, h: 1 },
        ],
    },
};

// Rasterizes block geometry into a unified SVG trace outline.
function generateOuterPath(blocks: Block[]): string {
    const S = 10;

    let gw = 0, gh = 0;
    for (const b of blocks) {
        gw = Math.max(gw, Math.round((b.x + b.w) * S));
        gh = Math.max(gh, Math.round((b.y + b.h) * S));
    }

    const grid: boolean[][] = Array.from({ length: gh }, () => Array(gw).fill(false));
    for (const b of blocks) {
        const x0 = Math.round(b.x * S), y0 = Math.round(b.y * S);
        const x1 = Math.round((b.x + b.w) * S), y1 = Math.round((b.y + b.h) * S);
        for (let y = y0; y < y1; y++)
            for (let x = x0; x < x1; x++)
                grid[y][x] = true;
    }

    const filled = (x: number, y: number) =>
        x >= 0 && x < gw && y >= 0 && y < gh && grid[y][x];

    const edges: number[][] = [];
    for (let cy = 0; cy < gh; cy++) {
        for (let cx = 0; cx < gw; cx++) {
            if (!grid[cy][cx]) continue;
            if (!filled(cx, cy - 1)) edges.push([cx, cy, cx + 1, cy]);
            if (!filled(cx + 1, cy)) edges.push([cx + 1, cy, cx + 1, cy + 1]);
            if (!filled(cx, cy + 1)) edges.push([cx + 1, cy + 1, cx, cy + 1]);
            if (!filled(cx - 1, cy)) edges.push([cx, cy + 1, cx, cy]);
        }
    }

    const adj = new Map<string, number[]>();
    edges.forEach((e, i) => {
        const k = `${e[0]},${e[1]}`;
        if (!adj.has(k)) adj.set(k, []);
        adj.get(k)!.push(i);
    });

    const used = new Set<number>();
    const parts: string[] = [];

    for (let i = 0; i < edges.length; i++) {
        if (used.has(i)) continue;
        used.add(i);

        const pts: number[][] = [[edges[i][0], edges[i][1]], [edges[i][2], edges[i][3]]];
        let cx = edges[i][2], cy = edges[i][3];
        const sx = edges[i][0], sy = edges[i][1];

        while (cx !== sx || cy !== sy) {
            const cands = adj.get(`${cx},${cy}`);
            if (!cands) break;
            const next = cands.find(j => !used.has(j));
            if (next === undefined) break;
            used.add(next);
            cx = edges[next][2];
            cy = edges[next][3];
            pts.push([cx, cy]);
        }

        const simp: number[][] = [pts[0]];
        for (let j = 1; j < pts.length - 1; j++) {
            const [px, py] = simp[simp.length - 1];
            const [mx, my] = pts[j];
            const [nx, ny] = pts[j + 1];
            if ((px === mx && mx === nx) || (py === my && my === ny)) continue;
            simp.push(pts[j]);
        }

        parts.push(
            simp.map(([x, y], j) => `${j ? 'L' : 'M'}${x / S} ${y / S}`).join('') + 'Z'
        );
    }

    return parts.join(' ');
}

// Pre-compute shadow paths for all defined letters
const shadowPaths: Record<string, string> = {};
for (const [char, def] of Object.entries(letters)) {
    shadowPaths[char] = generateOuterPath(def.blocks);
}

export function AsciiHeader({ text = "VINCENT" }: { text?: string }) {
    const entries = text.split("").map((char, i) => ({
        key: `${char}-${i}`,
        def: letters[char],
        shadowPath: shadowPaths[char],
    }));

    return (
        <motion.div
            className="flex justify-center items-end py-4 sm:py-6 mb-1 gap-[clamp(0.2rem,1vw,0.75rem)] text-term-accent"
            aria-label={text}
            role="img"
            variants={stagger(0.07)}
            initial="hidden"
            animate="visible"
        >
            {entries.map(({ key, def, shadowPath }) => (
                <motion.svg
                    key={key}
                    variants={letterIn}
                    viewBox={`0 0 ${def.width} ${LETTER_HEIGHT}`}
                    className="w-auto overflow-visible shrink-0"
                    style={{ height: 'clamp(2.5rem, 8vw, 5rem)' }}
                    role="presentation"
                >
                    {SHADOW_OFFSETS.map((offset) => (
                        <g key={`shadow-${offset}`} transform={`translate(${offset}, ${offset})`}>
                            <path d={shadowPath} fill="none" stroke="currentColor" strokeWidth="0.05" />
                        </g>
                    ))}
                    <g>
                        {def.blocks.map((b, idx) => (
                            <rect
                                key={`fill-${idx}`}
                                x={b.x + BLOCK_INSET}
                                y={b.y + BLOCK_INSET}
                                width={b.w - (BLOCK_INSET * 2)}
                                height={b.h - (BLOCK_INSET * 2)}
                                fill="currentColor"
                            />
                        ))}
                    </g>
                </motion.svg>
            ))}
        </motion.div>
    );
}