import { TerminalWindow } from "../components/TerminalWindow";
import { ExperienceItem } from "../components/ExperienceItem";
import { Footer } from "../components/Footer";
import { config } from "../../config/data";

export default function About() {
    return (
        <div className="space-y-4 sm:space-y-6">
            <TerminalWindow title="Education">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <div>
                        <p className="font-semibold text-sm sm:text-base">{config.education.school}</p>
                        <p className="text-term-dim text-xs sm:text-sm">{config.education.degree}</p>
                    </div>
                    <span className="text-term-dim text-[10px] sm:text-xs shrink-0 pt-1">{config.education.term}</span>
                </div>
            </TerminalWindow>

            <TerminalWindow title="Experience">
                <div className="space-y-5">
                    {config.experience.map((exp, i) => (
                        <ExperienceItem key={i} exp={exp} />
                    ))}
                </div>
            </TerminalWindow>

            <TerminalWindow title="Skills">
                <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
                    {config.skills.map(skill => (
                        <p key={skill.category}>
                            <span className="text-term-accent font-semibold">{skill.category}:</span> {skill.items}
                        </p>
                    ))}
                </div>
            </TerminalWindow>

            <TerminalWindow title="Contact">
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-mono">
                    <p><span className="text-term-dim">phone</span>  {config.contact.phone}</p>
                    <p><span className="text-term-dim">email</span>  {config.contact.email}</p>
                    <p><span className="text-term-dim">linkedin</span>  <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline no-underline">{config.contact.linkedinHandle}</a></p>
                    <p><span className="text-term-dim">github</span>  <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="text-term-accent hover:underline no-underline">{config.contact.githubHandle}</a></p>
                </div>
            </TerminalWindow>

            <Footer />
        </div>
    );
}
