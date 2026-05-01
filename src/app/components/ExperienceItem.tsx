import { config } from "../../config/data";

type Experience = (typeof config.experience)[number];

export function ExperienceItem({ exp }: { exp: Experience }) {
    const description = "description" in exp ? exp.description : undefined;
    const company = "company" in exp ? exp.company : undefined;

    return (
        <div>
            <div className="flex justify-between items-baseline mb-0.5 flex-wrap gap-1">
                <p className="font-semibold text-sm sm:text-base">{exp.role}</p>
                <span className="text-term-dim text-[10px] sm:text-xs shrink-0">{exp.term}</span>
            </div>
            {company && (
                <p className="text-term-dim text-xs sm:text-sm mb-2">{company}</p>
            )}
            {description && (
                <p className="text-term-text/85 text-xs sm:text-sm leading-relaxed mb-2">{description}</p>
            )}
            {exp.bullets.length > 0 && (
                <ul className="space-y-1 sm:space-y-1.5 text-term-text/85 pl-4 text-xs sm:text-sm">
                    {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="text-term-dim">•</span>
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
