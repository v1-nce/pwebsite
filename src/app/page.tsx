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
                src="/images/profile.jpg" 
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
              <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Aug 2025 - May 2029 (Expected)</span>
            </div>
            <p className="text-sm md:text-base font-bold text-tos-purple">
              Bachelor of Computing in Computer Science
            </p>
            <p className="text-sm md:text-base mt-1">
              Nurtured proficiency in Java, Python, Programming Methodology, OOP, Linear Algebra, 
              Discrete Structures, and Statistics in R as a year 1 student.
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
              <p className="text-sm md:text-base">
                Engineered scalable full-stack features using React Native, Python, and Go, leveraging Redis and ScyllaDB 
                for high-performance data handling and Windmill for orchestration. Swiftly diagnosed and resolved 
                production bugs on a CI/CD workflow with Git for version control. Led frontend development for 
                Sonzai's NFT minting event, integrating smart contracts and Web3 wallet authentication; 
                launched and minted 500 NFTs.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">IDEATE Hackathon -- Participant</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Aug 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Pitched an AI companion solution designed to engage children, alleviate loneliness, and reduce screen time 
                when parental attention and availability are limited.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">CloudHacks Hackathon -- Participant</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">July 2023</span>
              </div>
              <p className="text-sm md:text-base">
                Led my group in creating and executing a presentation of our project idea which focused on creating 
                a transparent e-commerce environment with VR and AR features.
              </p>
            </div>
            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">SAF Infantry 3rd Sergeant -- Leader</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Mar 2023 - Jan 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Led and trained recruits as a commander, oversaw firearms accountability, and resolved conflicts as a role model.
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
                <h3 className="text-sm md:text-base font-bold">ThreadTalk -- Full Stack Application</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Dec 2025 - Present</span>
              </div>
              <p className="text-sm md:text-base">
                Developed a web application with Go (Gin), Typescript, and React where users create topics, posts, 
                and comments similar to Reddit forums. Implemented infinite scroll, comments nesting with concurrency, 
                and basic JWT authentication and authorization.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Project Veridian -- Full Stack Application</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Jun 2025 - July 2025</span>
              </div>
              <p className="text-sm md:text-base">
                Developed my first full-stack CRUD web application with Express.js and Next.js, deploying the backend 
                on Railway and the frontend on Vercel, providing users a platform to create, edit, and manage 
                personal books and journals.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">Project Visente -- Entrepreneurship</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Dec 2022 - Mar 2023</span>
              </div>
              <p className="text-sm md:text-base">
                Launched a fragrance decanting side hustle, selling 40+ bottles with approximately $100 profit by 
                leveraging demand for affordable access to diverse scents.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline border-b border-dashed border-gray-400 pb-0.5 mb-1">
                <h3 className="text-sm md:text-base font-bold">AsrFoodMood -- Entrepreneurship & Community</h3>
                <span className="text-xs md:text-sm italic text-gray-600 shrink-0 ml-2">Oct 2021 - Dec 2021</span>
              </div>
              <p className="text-sm md:text-base">
                Initiated and spearheaded a food wastage awareness campaign at ASRJC, engaging students through 
                multiple media platforms and delivering significant donations to FoodBank.
              </p>
            </div>

            {/* --- NEW VISUAL SHOWCASE --- */}
            <ProjectShowcase />

          </div>
        </Section>

        {/* --- TECHNICAL SKILLS --- */}
        <Section title="TECHNICAL SKILLS" color="lightblue">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">LANGUAGES:</span> Java, Go, Python, React, JavaScript/TypeScript, SQL</p>
            <p><span className="font-bold">FRAMEWORKS:</span> Gin, Next.js, Node.js, Express.js, React Native</p>
            <p><span className="font-bold">DEVELOPER TOOLS:</span> PostgreSQL, Docker, Postman, Git, Vercel</p>
          </div>
        </Section>

        {/* --- CERTIFICATIONS & INTERESTS --- */}
        <Section title="CERTIFICATIONS & INTERESTS" color="yellow">
          <div className="space-y-1 text-sm md:text-base">
            <p><span className="font-bold">CERTIFICATIONS:</span> Google Professional Machine Learning Engineer Certification (GCP).</p>
            <p><span className="font-bold">INTERESTS:</span> Art and drawing, Brazilian Jiu-Jitsu, Tennis, and Taekwondo.</p>
            <p><span className="font-bold">SKILLS:</span> Public speaking, leadership, teamwork, optimism.</p>
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