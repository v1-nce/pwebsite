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
            role: "Sonzai Labs — Software Engineering Intern",
            term: "Mar – Jun 2025",
            bullets: [
                "Built high-concurrency clan system for \"Telemafia\" using Go, RESTful APIs, Redis caching and ScyllaDB.",
                "Engineered responsive game UI/UX with React, TypeScript, Tailwind CSS and i18n.",
                "Led frontend for secure NFT minting of 500 tokens with Web3 wallet auth and Cloudflare WAF.",
                "Developed real-time leaderboard via Python pipelines, Apache Pulsar and ScyllaDB reconciliation."
            ]
        },
        {
            role: "SAF Infantry — 3rd Sergeant",
            term: "Mar 2023 – Jan 2025",
            bullets: [
                "Oversaw firearms accountability and operational readiness as section commander."
            ]
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
            date: "Dec 2025",
            description: "Reddit-inspired forum with deep discussion threading and fully automated serverless deployment.",
            bullets: [
                "Architected with Go (Gin) RESTful APIs, Next.js frontend, and PostgreSQL.",
                "Recursive hierarchical comment nesting with infinite scroll and concurrent processing.",
                "Dockerized serverless backend on AWS Lambda with CI/CD via GitHub Actions and OIDC.",
                "Hardened with AWS VPC isolation, IAM least-privilege policies, and JWT authentication.",
            ]
        },
        {
            name: "Visente",
            date: "Nov 2022 – Mar 2023",
            description: "Niche fragrance decanting venture combining market research with entrepreneurship.",
            bullets: [
                "Generated ~$100 profit selling 40+ bottles via strategic consumer demand analysis.",
                "Optimized cost efficiency through fragrance profiling and competitor pricing research.",
            ]
        },
        {
            name: "NUS Fintech Summit Hackathon",
            date: "Jan 2026",
            description: "Blockchain-based trade finance solution eliminating pre-funding requirements.",
            bullets: [
                "Architected blockchain rails on XRP Ledger via FastAPI with automated credential verification.",
                "Deployed XRPL escrows and agent-driven credit underwriting, replacing idle collateral locks.",
            ]
        },
        {
            name: "Veridien",
            date: "Jun – Jul 2025",
            description: "Full-stack journalling platform promoting creative expression with seamless writing tools.",
            bullets: [
                "Built with Next.js, Express.js, and PostgreSQL for a complete CRUD experience.",
                "Email authentication and real-time autosave to preserve user drafts.",
            ]
        }
    ]
} as const;
