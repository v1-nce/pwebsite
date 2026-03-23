import Image from "next/image";
import Link from "next/link";
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
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="w-20 h-20 shrink-0 rounded border border-term-border overflow-hidden">
            <Image
              src="/images/profile.png"
              alt={config.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(0.3) contrast(1.1)" }}
            />
          </div>
          <div>
            <p className="mb-3 text-sm sm:text-base leading-relaxed">
              Hi, I&apos;m <span className="text-term-accent font-semibold">{config.name}</span>. {config.bio}
            </p>
            <a
              href="/cv/Vincent_Ong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs border border-term-accent/50 px-3 py-1 rounded text-term-accent hover:bg-term-accent hover:text-term-bg transition-colors no-underline"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </TerminalWindow>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/about" className="no-underline">
          <TerminalWindow title="About">
            <p className="text-term-dim text-xs sm:text-sm">
              Education, experience, skills, and contact information.
            </p>
          </TerminalWindow>
        </Link>
        <Link href="/projects" className="no-underline">
          <TerminalWindow title="Projects">
            <p className="text-term-dim text-xs sm:text-sm">
              ThreadTalk, Visente, NUS Fintech Hackathon, and more.
            </p>
          </TerminalWindow>
        </Link>
      </div>

      <Footer />
    </div>
  );
}