import { config } from "../../config/data";

type Experience = typeof config.experience[number];

export function ExperienceItem({ exp }: { exp: Experience }) {
    return (
        <div>
            <div className="flex justify-between items-baseline mb-1 flex-wrap gap-1">
                <p className="font-semibold text-sm sm:text-base">{exp.role}</p>
                <span className="text-term-dim text-[10px] sm:text-xs shrink-0">{exp.term}</span>
            </div>
            <ul className="space-y-1 sm:space-y-1.5 text-term-text/85 pl-4 text-xs sm:text-sm">
                {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                        <span className="text-term-dim">•</span>
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
