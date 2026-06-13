import Image from "next/image";
import { TerminalWindow } from "./TerminalWindow";
import { config } from "../../config/data";

type Project = (typeof config.projects)[number];

export function ProjectCard({ project }: { project: Project }) {
    const image = "image" in project ? project.image : undefined;

    return (
        <TerminalWindow title={project.name}>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline gap-3 mb-2 flex-wrap">
                        <span className="text-term-accent font-semibold text-sm sm:text-base">{project.name}</span>
                        <span className="text-term-dim text-[10px] sm:text-xs">{project.date}</span>
                    </div>
                    <p className="text-term-text/90 mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    {project.links.length > 0 && (
                        <div className="flex gap-3 mt-3 flex-wrap">
                            {project.links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-lift text-xs border border-term-accent/50 px-3 py-1 rounded text-term-accent hover:bg-term-accent hover:text-term-bg no-underline"
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                {image && (
                    <div className="w-full max-w-[180px] sm:max-w-none sm:w-40 shrink-0 rounded border border-term-border overflow-hidden self-center sm:self-start aspect-square">
                        <Image
                            src={image}
                            alt={project.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </TerminalWindow>
    );
}
