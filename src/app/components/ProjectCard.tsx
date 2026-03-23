import { TerminalWindow } from "./TerminalWindow";
import { config } from "../../config/data";

type Project = typeof config.projects[number];

export function ProjectCard({ project }: { project: Project }) {
    return (
        <TerminalWindow title={project.name}>
            <div className="flex justify-between items-baseline gap-3 mb-2 flex-wrap">
                <span className="text-term-accent font-semibold text-sm sm:text-base">{project.name}</span>
                <span className="text-term-dim text-[10px] sm:text-xs">{project.date}</span>
            </div>
            <p className="text-term-text/90 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>
            <ul className="space-y-1 sm:space-y-1.5 text-term-text/80 pl-4 text-xs sm:text-sm">
                {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                        <span className="text-term-dim">•</span>
                        <span>{b}</span>
                    </li>
                ))}
            </ul>
        </TerminalWindow>
    );
}
