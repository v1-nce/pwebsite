import { Section } from './components/Section';
import { RetroImage } from './components/RetroImage';
import { DecryptedText } from './components/DecryptedText';
import { Typewriter } from './components/Typewriter';
import { Scanline } from './components/Scanline';
import { ProjectShowcase } from './components/ProjectShowcase';

export default function Home() {
  const bioText = "Hi, I'm Vincent! I'm a developer passionate in software engineering, quantum computing, and machine learning. Beyond tech, I enjoy creative work like drawing manga as well as sports such as Brazilian Jiu-Jitsu, Tennis, and Taekwondo - and I'm a big anime fan!";

  return (
    <main className="min-h-screen bg-tos-bg py-4 md:py-6 relative">
      <Scanline />
      <div className="w-full max-w-3xl mx-auto px-4 md:px-6 space-y-2.5 relative z-10">
        
        {/* --- PROFILE --- */}
        <Section title="VINCENT ONG" color="blue">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="w-24 md:w-28 shrink-0">
              <RetroImage 
                src="/images/profile.png" 
                alt="Profile Picture" 
                width={112} 
                height={112} 
                color="blue"
                caption="ME"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-base md:text-lg font-bold mb-1 text-tos-red">
                <DecryptedText 
                  text="SOFTWARE ENGINEER / DEVELOPER" 
                  animateOn="view" 
                  speed={80} 
                  maxIterations={20}
                  className="inline-block"
                />
              </h1>
              <Typewriter 
                text={bioText} 
                speed={20} 
                className="text-sm md:text-base min-h-[80px]"
              />
            </div>
          </div>
        </Section>

        {/* --- ABOUT --- */}
        <Section title="ABOUT" color="green">
          <p className="text-sm md:text-base mb-2">
            I enjoy building full-stack applications and exploring new technologies. Currently,
            I am exploring how to implement and deploy a full scale authentication and authorisation
            system. Additionally, I am currently working on ThreadTalk, an ongoing personal project! 
            Check out my resume below:
          </p>
          <a href="/cv/Vincent_Ong_Resume.pdf" target="_blank" rel="noopener noreferrer" className="retro-btn">
            [VIEW RESUME]
          </a>
        </Section>

        {/* --- EDUCATION --- */}
        <Section title="EDUCATION" color="purple">
          <div>
            <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
              <h3 className="text-sm md:text-base font-bold">National University of Singapore, Singapore</h3>
              <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Present</span>
            </div>
            <p className="text-sm md:text-base font-bold text-tos-purple">
              Bachelor of Computing in Computer Science
            </p>
          </div>
        </Section>

        {/* --- INTERNSHIPS & EXPERIENCES --- */}
        <Section title="INTERNSHIPS & EXPERIENCES" color="yellow">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Sonzai Labs -- Software Engineering Intern</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Mar 2025 - Jun 2025</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Created a high-concurrency clan system for the startup&apos;s flagship game &quot;Telemafia&quot; using Go and RESTful APIs, 
                  reducing database load with Redis caching and atomic ScyllaDB CQL queries.
                </li>
                <li>
                  Engineered responsive and performant game features for global users by building core gameplay UI/UX using React, 
                  Typescript, Tailwind CSS, i18n for internationalization and rapid bug resolution on a CI/CD workflow with QA team.
                </li>
                <li>
                  Led frontend development for the secure launch and minting of 500 NFTs by integrating smart contracts with Web3 
                  wallet authentication and configuring Cloudflare WAF to mitigate DDoS and XSS attacks.
                </li>
                <li>
                  Developed a leaderboard system to ensure real-time ranking accuracy by creating Python pipelines on Windmill 
                  Orchestrator and utilizing Apache Pulsar (Pub/Sub) and ScyllaDB for automated data reconciliation.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">SAF Infantry 3rd Sergeant</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Mar 2023 - Jan 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Demonstrated reliability and trustworthiness in high-stakes environments, overseeing firearms accountability and 
                taking ownership of the safety and operational readiness of recruits while leading as a section commander.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Veridien -- Full Stack Application</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Jun 2025 - Jul 2025</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Built a full-stack CRUD journalling platform using Next.js, Express.js and PostgreSQL, promoting creative expression.
                </li>
                <li>
                  Enabled seamless writing by implementing email authentication and real-time autosave to preserve user drafts.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* --- PROJECTS --- */}
        <Section title="PROJECTS" color="red">
          <div className="space-y-4">
            
            {/* List of Projects */}
            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-bold">ThreadTalk -- Full Stack Application</h3>
                    <a 
                      href="https://threadtalk-app.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-tos-red hover:underline border border-tos-red px-1"
                    >
                      [LIVE DEMO]
                    </a>
                </div>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Dec 2025</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Architected a scalable, Reddit-inspired forum application by integrating Go (Gin) RESTful APIs with a Next.js, Typescript 
                  and React frontend, backed by a PostgreSQL relational database.
                </li>
                <li>
                  Optimized data retrieval for deep discussion threads using recursive hierarchical comment nesting and infinite scroll 
                  with concurrent processing for speed.
                </li>
                <li>
                  Automated secure production deployments by containerizing the serverless backend with Docker for AWS Lambda, 
                  establishing a CI/CD pipeline via GitHub Actions and OIDC for keyless Amazon ECR integration.
                </li>
                <li>
                  Hardened application security and data integrity using AWS VPC isolation, IAM least-privilege policies and JWT 
                  authentication while automating RDS schema migrations with Go.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Visente -- Entrepreneurship</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Nov 2022 - Mar 2023</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Generated approximately $100 profit by launching a niche fragrance decanting venture, selling 40+ bottles by leveraging 
                  consumer demand for affordable access to diverse scents.
                </li>
                <li>
                  Identified high-margin opportunities by executing strategic market research on competitor pricing and consumer 
                  trends, using fragrance profiling to optimize cost efficiency and production selection.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">NUS Fintech Summit Hackathon</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Jan 2026</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Architected blockchain rails on XRP Ledger via FastAPI, by automating credential verification and transaction signing.
                </li>
                <li>
                  Eliminated 100% pre-funding requirements by deploying XRPL escrows and agent-driven credit underwriting, 
                  replacing idle collateral locks with efficient conditional settlement.
                </li>
              </ul>
            </div>

            {/* --- NEW VISUAL SHOWCASE --- */}
            <ProjectShowcase />

          </div>
        </Section>

        {/* --- TECHNICAL SKILLS --- */}
        <Section title="TECHNICAL SKILLS" color="lightblue">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">PROGRAMMING LANGUAGES:</span> Java, Python, Go, Typescript, Javascript, SQL, R.</p>
            <p><span className="font-bold">FRAMEWORKS:</span> React, Gin, Next.js, LangGraph, PyTorch, FastAPI, Express.js.</p>
            <p><span className="font-bold">TECHNOLOGIES:</span> PostgreSQL, Docker, Git, AWS, Redis, GCP, AWS Bedrock.</p>
          </div>
        </Section>

        {/* --- CERTIFICATIONS & INTERESTS --- */}
        <Section title="CERTIFICATIONS & INTERESTS" color="yellow">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">CERTIFICATIONS:</span> Google Cloud Professional Machine Learning Engineer Certification.</p>
            <p><span className="font-bold">INTERESTS:</span> Art and drawing, brazilian jiujitsu, tennis and taekwondo.</p>
            <p><span className="font-bold">SKILLS:</span> Duty-oriented, ownership, public speaking, leadership, an awesome team-player, optimism.</p>
          </div>
        </Section>

        {/* --- CONTACT --- */}
        <Section title="CONTACT" color="green">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">PHONE:</span> (+65) 89078626</p>
            <p><span className="font-bold">EMAIL:</span> vincentongkaisen6@gmail.com</p>
            <p>
              <span className="font-bold">LINKEDIN:</span>{' '}
              <a href="https://www.linkedin.com/in/vincentoks/" target="_blank" rel="noopener noreferrer" className="underline hover:text-tos-red">
                linkedin.com/in/vincentoks
              </a>
            </p>
            <p>
              <span className="font-bold">GITHUB:</span>{' '}
              <a href="https://github.com/v1-nce" target="_blank" rel="noopener noreferrer" className="underline hover:text-tos-red">
                github.com/v1-nce
              </a>
            </p>
          </div>
        </Section>

      </div>
    </main>
  );
}