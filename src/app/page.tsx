import Image from "next/image";
import { AsciiHeader } from "./components/AsciiHeader";
import { TerminalWindow } from "./components/TerminalWindow";
import { Footer } from "./components/Footer";
import { config } from "../config/data";

export default function Home() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <AsciiHeader />
      <p className="text-term-dim text-xs sm:text-sm text-center -mt-2 mb-1">
        {config.subtitle}
      </p>

      <TerminalWindow title="Profile">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
          <div className="w-24 h-24 sm:w-20 sm:h-20 shrink-0 rounded border border-term-border overflow-hidden">
            <Image
              src="/images/profile.png"
              alt={config.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(0.3) contrast(1.1)" }}
            />
          </div>
          <div>
            <p className="mb-4 sm:mb-3 text-sm sm:text-base leading-relaxed">
              Hi, I&apos;m <span className="text-term-accent font-semibold">{config.name}</span>. {config.bio}
            </p>
            <a
              href="/cv/Vincent_Ong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs border border-term-accent/50 px-4 py-1.5 sm:px-3 sm:py-1 rounded text-term-accent hover:bg-term-accent hover:text-term-bg transition-colors no-underline"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </TerminalWindow>

      <Footer />
    </div>
  );
}