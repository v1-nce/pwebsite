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
            Check out my CV below:
          </p>
          <a href="/cv/Vincent_Ong_CV.pdf" download className="retro-btn">
            [DOWNLOAD CV]
          </a>
        </Section>

        {/* --- EDUCATION --- */}
        <Section title="EDUCATION" color="purple">
          <div>
            <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
              <h3 className="text-sm md:text-base font-bold">National University of Singapore (NUS)</h3>
              <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Aug 2025 - Present</span>
            </div>
            <p className="text-sm md:text-base font-bold text-tos-purple">
              Bachelor of Computing in Computer Science
            </p>
            <p className="text-sm md:text-base mt-1">
              Nurtured proficiency in Java, Python, Programming Methodology, OOP, Linear Algebra, 
              Discrete Structures and Statistics in R as a Year 1 student.
            </p>
            <p className="text-sm md:text-base mt-1">
              Relevant Coursework: CS2030S, CS1010X, MA1522, CS1231S, ST1131, IS1108
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
                  Engineered maintainable clan systems for flagship game &quot;Telemafia&quot; using Go and RESTful APIs, 
                  optimizing atomic SQL queries for ScyllaDB and implementing Redis caching for high-concurrency performance.
                </li>
                <li>
                  Built core gameplay UI/UX using React, TypeScript, and TailwindCSS, implementing i18n internationalisation 
                  and ensuring production stability via rapid bug resolution on a CI/CD workflow with QA team.
                </li>
                <li>
                  Led frontend development for launching Sonzai&apos;s NFT minting event, integrating Web3 wallet authentication 
                  while configuring Cloudflare (WAF/Rate Limiting) to mitigate DDoS and XSS attacks; minted 500 NFTs.
                </li>
                <li>
                  Developed an automated data reconciliation system for Telemafia&apos;s Leaderboard using Python on Windmill 
                  Orchestrator, utilizing Apache Pulsar (Pub/Sub) and ScyllaDB for real-time processing.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">IDEATE Hackathon -- Participant</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Aug 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Ideated and pitched an AI companion product designed to alleviate child loneliness and reduce screen time 
                when parental attention and availability is limited.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">SAF Infantry 3rd Sergeant -- Leader</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">March 2023 - Jan 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Demonstrated reliability and trustworthiness in high-stakes environments, overseeing firearms accountability 
                and ensuring the safety and operational readiness of recruits.
              </p>
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
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Dec 2025 - Present</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Architected a scalable forum application inspired by Reddit utilizing Go (Gin) for RESTful APIs and 
                  Next.js, Typescript and React for the frontend, backed by a PostgreSQL relational database.
                </li>
                <li>
                  Implemented infinite scroll and recursive hierarchical comment nesting, optimized with concurrent retrieval.
                </li>
                <li>
                  Deployed the serverless backend infrastructure using Docker containerization and AWS Lambda, creating a 
                  secure CI/CD pipeline with GitHub Actions and OIDC for automated keyless deployments to Amazon ECR.
                </li>
                <li>
                  Enforced production-grade security via strict VPC isolation, IAM least-privilege policies, and stateless 
                  JWT authentication, while managing PostgreSQL (RDS) schemas with database migrations.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Project Visente -- Entrepreneurship</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Dec 2022 - Mar 2023</span>
              </div>
              <ul className="text-sm md:text-base list-disc list-inside space-y-1">
                <li>
                  Launched a fragrance decanting side hustle, selling 40+ bottles gaining approximately $100 profit by 
                  leveraging demand for affordable access to diverse scents.
                </li>
                <li>
                  Executed strategic market research on competitor pricing and consumer trends, utilizing fragrance 
                  profiling to identify high-margin opportunities and cost efficiency for profits.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">AsrFoodMood -- Entrepreneurship & Volunteering</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Oct 2021 - Dec 2021</span>
              </div>
              <p className="text-sm md:text-base">
                Initiated and spearheaded a food wastage awareness campaign at ASRJC, engaging students through various 
                social media platforms and delivering significant donations to FoodBank.
              </p>
            </div>

            {/* --- NEW VISUAL SHOWCASE --- */}
            <ProjectShowcase />

          </div>
        </Section>

        {/* --- TECHNICAL SKILLS --- */}
        <Section title="TECHNICAL SKILLS" color="lightblue">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">LANGUAGES:</span> Java, Python, Go, React, JavaScript/TypeScript, SQL, HTML, CSS.</p>
            <p><span className="font-bold">FRAMEWORKS:</span> Gin, Next.js, Node.js, Express.js, LangGraph.</p>
            <p><span className="font-bold">DEVELOPER TOOLS:</span> PostgreSQL, Docker, Git, Postman, AWS, Github Actions, Vercel, GCP.</p>
          </div>
        </Section>

        {/* --- CERTIFICATIONS & INTERESTS --- */}
        <Section title="CERTIFICATIONS & INTERESTS" color="yellow">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">CERTIFICATIONS:</span> Google Professional Machine Learning Engineer Certification (GCP).</p>
            <p><span className="font-bold">INTERESTS:</span> Art and drawing, brazilian jiujitsu, tennis and taekwondo.</p>
            <p><span className="font-bold">SKILLS:</span> Duty-oriented, ownership, public speaking, leadership, an awesome team-player, optimism.</p>
          </div>
        </Section>

        {/* --- CONTACT --- */}
        <Section title="CONTACT" color="green">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">EMAIL:</span> vincentongkaisen6@gmail.com</p>
            <p>
              <span className="font-bold">GITHUB:</span>{' '}
              <a href="https://github.com/v1-nce" target="_blank" rel="noopener noreferrer" className="underline hover:text-tos-red">
                github.com/v1-nce
              </a>
            </p>
            <p>
              <span className="font-bold">LINKEDIN:</span>{' '}
              <a href="https://www.linkedin.com/in/vincentoks/" target="_blank" rel="noopener noreferrer" className="underline hover:text-tos-red">
                linkedin.com/in/vincentoks
              </a>
            </p>
          </div>
        </Section>

      </div>
    </main>
  );
}