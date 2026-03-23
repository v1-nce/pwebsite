import { config } from "../../config/data";

export function Footer() {
    return (
        <footer className="border-t border-term-border pt-3 flex justify-between text-[10px] sm:text-xs text-term-dim">
            <span>{config.fullName.toLowerCase()}</span>
            <span>© {new Date().getFullYear()}</span>
        </footer>
    );
}
