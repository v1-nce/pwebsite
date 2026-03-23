import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";
import { config } from "../../config/data";

export default function Projects() {
    return (
        <div className="space-y-4 sm:space-y-6 max-w-full overflow-hidden">
            {config.projects.map((p) => (
                <ProjectCard key={p.name} project={p} />
            ))}
            <Footer />
        </div>
    );
}
