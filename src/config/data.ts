export const config = {
    name: "Vincent",
    fullName: "Vincent Ong",
    subtitle: "Software Engineer · NUS Computer Science",
    bio: "I'm a developer passionate about software engineering, quantum computing, and machine learning. Beyond tech, I enjoy drawing manga, Brazilian Jiu-Jitsu, Tennis, Taekwondo — and I'm a big anime fan.",
    contact: {
        phone: "(+65) 89078626",
        email: "vincentongkaisen6@gmail.com",
        linkedin: "https://www.linkedin.com/in/vincentoks/",
        linkedinHandle: "vincentoks",
        github: "https://github.com/v1-nce",
        githubHandle: "v1-nce"
    },
    education: {
        school: "National University of Singapore",
        degree: "Bachelor of Computing in Computer Science",
        term: "Present"
    },
    experience: [
        {
            role: "Software Engineer Intern",
            company: "Sonzai Labs · Internship",
            term: "Mar 2025 - Jun 2025 · 4 mos",
            description: "As a Software Engineer Intern at Sonzai Labs, I contributed to the development of the startup's flagship game, \"Telemafia\", as an engineer working directly on production. I engineered scalable features, high-performance data pipelines and UI UX while ensuring production stability through rapid bug resolution on CI/CD workflows. As my first internship, I learned what taking ownership really means, had to adapt fast to new technologies on the fly, and grew a lot as a software engineer — it was intense, insane, and genuinely one of the most fun learning experiences I've had!",
            bullets: [
                "Created clan systems on both frontend and backend using Go and RESTful APIs, optimizing atomic CQL queries for ScyllaDB while implementing Redis caching for high-concurrency performance.",
                "Engineered core gameplay UI UX production features, UI screen responsiveness, game state management (Zustand) and internationalization (i18n) strategies to support global users using React, Typescript and TailwindCSS on the frontend.",
                "Led frontend development for Sonzai's NFT minting event, integrating smart contracts, Web3 wallet authentication while configuring Cloudflare (WAF/Rate Limiting) to mitigate DDoS and XSS attacks; launched and minted 500 NFTs.",
                "Engineered an automated leaderboard and data reconciliation system using Python on Windmill Orchestrator, utilizing Apache Pulsar (Pub/Sub) and ScyllaDB for real-time processing.",
            ]
        },
        {
            role: "National Service",
            company: "Singapore Army · Full-time",
            term: "Mar 2023 - Jan 2025 · 1 yr 11 mos",
            description: "Served as a 3rd Sergeant (3SG) Infantry Specialist in the Singapore Armed Forces. Led and trained recruits as a commander, oversaw firearms accountability, and resolved conflicts as a role model.",
            bullets: []
        }
    ],
    skills: [
        { category: "Languages", items: "Java, Python, Go, TypeScript, JavaScript, SQL, R" },
        { category: "Frameworks", items: "React, Gin, Next.js, LangGraph, PyTorch, FastAPI, Express.js" },
        { category: "Infrastructure", items: "PostgreSQL, Docker, Git, AWS, Redis, GCP, AWS Bedrock" },
        { category: "Certifications", items: "Google Cloud Professional ML Engineer" },
        { category: "Interests", items: "Art & drawing, BJJ, tennis, taekwondo" }
    ],
    projects: [
        {
            name: "ThreadTalk",
            date: "Dec 2025 – Present",
            image: "/images/threadtalk.png",
            description: "ThreadTalk is a serverless, Reddit-inspired forum REST API built with Go and PostgreSQL, containerized with Docker, and deployed to AWS Lambda. The backend utilizes a secure CI/CD pipeline via GitHub Actions and OIDC for keyless deployments. Concurrent processing is used for infinite scroll and recursive comment nesting, supported by golang-migrate schema management.",
            links: [
                { label: "Backend", url: "https://github.com/v1-nce/threadtalk-backend" },
                { label: "Frontend", url: "https://github.com/v1-nce/threadtalk-frontend" },
            ],
        },
        {
            name: "SignalSkin – TinyFish Hackathon 2026",
            date: "Apr 2026",
            description: "Built an autonomous cosmetic intelligence agent for the TinyFish x OpenAI hackathon to deliver personalized, evidence-backed skincare recommendations. Utilized TinyFish's provider-based agentic web extraction engine using Next.js and TypeScript. Users receive transparent reasoning on product fit, potential ingredient risks, and a variety of product options.",
            links: [],
        },
        {
            name: "Pocket Change – NUS Fintech Summit 2026",
            date: "Jan 2026",
            image: "/images/pocket_change.png",
            description: "Pocket Change is an XRP Ledger-based cross-border lending platform that lowers collateral requirements to under 30% to unlock funds for immediate investment. Built with FastAPI, the system eliminates 100% pre-funding requirements by deploying XRPL escrows and agent-driven credit underwriting for efficient conditional settlement.",
            links: [
                { label: "Live Demo", url: "https://pocketchange-app.vercel.app" },
            ],
        },
        {
            name: "Reporot – Hack&Roll 2026",
            date: "Jan 2026",
            image: "/images/reporot.png",
            description: "Reporot is an AI-powered tool that transforms GitHub repositories into engaging TikTok-style videos via a FastAPI, OpenAI, and FFmpeg video-generation pipeline. The platform features a scroll-optimized frontend built with Next.js and PostgreSQL, allowing users to seamlessly browse synthesized reels.",
            links: [
                { label: "Demo Video", url: "https://www.youtube.com/watch?v=Jo7y_JhRX7k&t=15s" },
            ],
        },
        {
            name: "Visente",
            date: "Dec 2022 – Mar 2023",
            image: "/images/visente.png",
            description: "Visente was an entrepreneurial fragrance decanting venture providing affordable access to diverse luxury scents. I conducted strategic market research on competitor pricing and consumer trends to identify high-margin opportunities. Selling over 40 units for a $100 profit in just 2 months.",
            links: [],
        },
    ]
} as const;
