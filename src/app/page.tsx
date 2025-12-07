import { Section } from './components/Section';
import { RetroImage } from './components/RetroImage';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--tos-bg)] py-4 md:py-6">
      <div className="w-full max-w-3xl mx-auto px-4 md:px-6 space-y-2.5">
        
        <Section title="VINCENT ONG" color="blue">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="w-24 md:w-28 shrink-0">
              <RetroImage 
                src="/images/profile.jpg" 
                alt="Profile Picture" 
                width={112} 
                height={112} 
                color="blue"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-base md:text-lg font-bold mb-1" style={{ color: 'var(--tos-red)' }}>
                SOFTWARE ENGINEER / DEVELOPER
              </h1>
              <p className="text-sm md:text-base">
                Hi, I'm Vincent! I'm a developer passionate in software engineering, quantum computing, 
                and machine learning. Beyond tech, I enjoy creative work like drawing manga as well as sports
                such as Brazilian Jiu-Jitsu, Tennis, and Taekwondo - and I'm a big anime fan!
              </p>
            </div>
          </div>
        </Section>

        <Section title="ABOUT" color="green">
          <p className="text-sm md:text-base mb-2">
            I enjoy building full-stack applications and exploring new technologies. Currently,
            I am exploring how to implement and deploy a full scale authentication and authorisation
            system as an ongoing project! Check out my CV below:
          </p>
          <a 
            href="/cv/Vincent_Ong_CV.pdf" 
            download
            className="inline-block px-4 py-2 font-bold uppercase tracking-wider border-2 text-sm transition-colors border-[var(--tos-green)] bg-[var(--tos-green)] text-white hover:bg-white hover:text-[var(--tos-green)]"
          >
            [DOWNLOAD CV]
          </a>
        </Section>

        <Section title="EXPERIENCE" color="yellow">
          <div className="space-y-2.5">
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-sm md:text-base font-bold">Junior Software Engineer / Sonzai Labs</h3>
                <p className="text-xs md:text-sm italic text-gray-600">March 2025 - June 2025</p>
              </div>
              <p className="text-sm md:text-base mt-1"> Shipped new, clean and robust full-stack production features including UI UX with React 
                Native and logic with a backend stack comprising Redis, ScyllaDB and Windmill in 
                Python and Golang. Swiftly diagnosed and resolved production bugs on a CI/CD workflow with Git for 
                version control. Led frontend development for the startup's NFT minting event, integrating crypto wallets 
                with smart contract; launched and minted 500 NFTs</p>
            </div>
          </div>
        </Section>

        <Section title="PROJECTS" color="red">
          <div className="space-y-2.5">
            <div>
              <h3 className="text-sm md:text-base font-bold mb-0.5">VERIDIAN</h3>
              <p className="text-sm md:text-base">A fullstack web application with authentication that allows users to create their own books, encouraging 
                both story-telling and journaling.
              </p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold mb-0.5">VISENTE</h3>
              <p className="text-sm md:text-base">Launched a fragrance decanting side hustle, selling 40+ bottles with ~$100 profit by 
                leveraging demand for affordable access to diverse scents.</p>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold mb-0.5">AsrFoodMood</h3>
              <p className="text-sm md:text-base">Initiated and spearheaded a food wastage awareness campaign at ASRJC, engaging 
                students through multiple media platforms and delivering significant donations to 
                FoodBank.</p>
            </div>
          </div>
        </Section>

        <Section title="EDUCATION" color="purple">
          <h3 className="text-sm md:text-base font-bold mb-0.5">Bachelor of Computer Science / National University of Singapore</h3>
          <p className="text-sm md:text-base">Modules Taken: CS1010X, CS2030S, MA1522, CS1231S, ST1131, IS1108</p>
        </Section>

        <Section title="SKILLS" color="lightblue">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">LANGUAGES:</span> Python, Java, Javascript, Golang</p>
            <p><span className="font-bold">FRAMEWORKS:</span> Gin, Next.js, Express.js, Node.js, React Native</p>
            <p><span className="font-bold">TECHNOLOGIES:</span> PostgreSQL, Docker, Postman, Git, Vercel</p>
          </div>
        </Section>

        <Section title="CONTACT" color="green">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">EMAIL:</span> vincentongkaisen6@gmail.com</p>
            <p>
              <span className="font-bold">GITHUB:</span>{' '}
              <a href="https://github.com/v1-nce" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--tos-red)]">
                https://github.com/v1-nce
              </a>
            </p>
            <p>
              <span className="font-bold">LINKEDIN:</span>{' '}
              <a href="https://github.com/v1-nce" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--tos-red)]">
                https://github.com/v1-nce
              </a>
            </p>
          </div>
        </Section>

      </div>
    </main>
  );
}