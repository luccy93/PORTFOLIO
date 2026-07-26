// ============================================================
// portfolioData.js — Centralized configuration for DEVENDRA PRASAD K's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "DEVENDRA PRASAD K",
  firstName: "DEVENDRA PRASAD K",
  brandName: "DEVENDRA PRASAD K",
  title: "AI Engineer | Full Stack Developer",
  location: "Tamil Nadu, India",
  phone: "+91 7418146995",
  emails: {
    primary: "devadraprasadkumar@gmail.com",
    secondary: "",
  },
  summary:
    "Computer Science and Engineering undergraduate passionate about Artificial Intelligence, Generative AI, Large Language Models, Retrieval-Augmented Generation (RAG), Full Stack Development, Backend Engineering, and Cloud-Native Applications. I build production-ready AI systems, scalable web applications, enterprise backend services, and modern user experiences.",
  resumeUrl: "/Devendra_Prasad_K_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/luccy93",
  linkedin: "https://www.linkedin.com/in/devedraprasad-kumar-20ab52339/",
  email: "mailto:devadraprasadkumar@gmail.com",
  phone: "tel:+917418146995",
};

export const heroContent = {
  greeting: "Hi, I'm DEVENDRA PRASAD K",
  titleHighlight: "AI Engineer | Full Stack Developer",
  subtitle:
    "Building intelligent AI systems, LLM pipelines, and scalable full-stack applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:devadraprasadkumar@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello DEVENDRA PRASAD K,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Devendra_Prasad_K_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I am a <span class="text-black font-black">Computer Science and Engineering undergraduate</span> at <span class="text-black font-black">SRM Institute of Science and Technology</span>.<br/><br/>My primary interests include:<br/>• <span class="text-black font-bold">Artificial Intelligence</span><br/>• <span class="text-black font-bold">Generative AI</span><br/>• <span class="text-black font-bold">Large Language Models (LLMs)</span><br/>• <span class="text-black font-bold">Retrieval-Augmented Generation (RAG)</span><br/>• <span class="text-black font-bold">Backend Engineering</span><br/>• <span class="text-black font-bold">Full Stack Development</span><br/>• <span class="text-black font-bold">Cloud Native Systems</span><br/><br/>I enjoy building enterprise-grade software using modern technologies including <span class="text-black font-bold">Python, FastAPI, Next.js, React, TypeScript, PostgreSQL, Docker, and Kubernetes</span>.<br/><br/>I build production-ready AI systems, scalable web applications, enterprise backend services, and modern user experiences.`,
  techStack: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AI / RAG"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world AI & web applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust AI systems and full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research & Design",
      text: "Understanding requirements, architecture design, selecting optimal LLM/RAG pipelines or full stack data models.",
    },
    {
      number: "02",
      title: "AI Integration & Backend",
      text: "Building scalable REST APIs with FastAPI/Node, configuring vector databases (Qdrant/Redis), multi-agent workflows, and database schemas.",
    },
    {
      number: "03",
      title: "Frontend & UX",
      text: "Crafting modern, highly responsive user interfaces using Next.js, React, and TypeScript with sleek animations.",
    },
    {
      number: "04",
      title: "Deploy & Scale",
      text: "Containerizing with Docker, orchestrating with Kubernetes, automated CI/CD pipelines, and cloud monitoring.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 88 },
        { name: "C", level: 82 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "HTML & CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js & Next.js", level: 92 },
        { name: "Node.js & FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "LangChain", level: 90 },
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Scikit-learn & OpenCV", level: 85 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 85 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Docker & Kubernetes", level: 88 },
        { name: "Firebase & Vercel", level: 90 },
        { name: "Linux & Bash", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Google Colab & Jupyter", level: 90 },
        { name: "Streamlit", level: 88 }
      ]
    },
    {
      title: "AI & ML",
      skills: [
        { name: "Generative AI & LLMs", level: 95 },
        { name: "Prompt Engineering", level: 95 },
        { name: "RAG & Vector Embeddings", level: 92 },
        { name: "Machine Learning & Deep Learning", level: 88 },
        { name: "NLP", level: 88 }
      ]
    },
    {
      title: "Backend & Core CS",
      skills: [
        { name: "REST APIs & JWT Auth", level: 95 },
        { name: "Database Design & CI/CD", level: 90 },
        { name: "Performance Optimization", level: 88 },
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "OOP & DBMS", level: 92 },
        { name: "Operating Systems & Networks", level: 85 },
        { name: "System Design & Distributed Systems", level: 85 }
      ]
    }
  ]
};

// Content Creation / Engineering Case Studies
export const contentCreation = {
  badge: "Creative Engineering",
  heading: "Technical Insights & Visual Storytelling",
  description: "Combining technical depth with visual polish, creative direction, and interactive user experiences.",
  categories: [
    {
      title: "AI Architecture Demos",
      description: "Visual breakdowns of RAG pipelines, multi-agent LLM systems, and vector search strategies.",
      stats: "Interactive Demos",
      icon: "🤖"
    },
    {
      title: "Full Stack Case Studies",
      description: "In-depth walkthroughs of modern web applications, API design, and containerized deployments.",
      stats: "Production Code",
      icon: "💻"
    },
    {
      title: "Tech & ML Tutorials",
      description: "Simplifying complex computer science topics, ML algorithms, and modern frontend techniques.",
      stats: "Open Source",
      icon: "🧠"
    },
    {
      title: "UI/UX & Creative Engineering",
      description: "Crafting fluid animations, glassmorphism UI, dynamic themes, and immersive web experiences.",
      stats: "Design Engineering",
      icon: "⚡"
    }
  ]
};

export const leadershipList = [
  {
    title: "AI & Full Stack Open Source Developer",
    description: "Building production-grade AI platforms, multi-agent workflows, RAG engines, and cloud-native backend integrations.",
    role: "Core Developer",
    badge: "Open Source"
  },
  {
    title: "SRM Institute of Science and Technology",
    description: "B.Tech Computer Science & Engineering Undergraduate. CGPA: 8.3 / 10.",
    role: "B.Tech CSE Student",
    badge: "Academic Excellence"
  },
  {
    title: "Technical Project Lead",
    description: "Leading development for enterprise AI platforms, managing repository architecture, vector DB configurations, and containerized deployments.",
    role: "Project Lead",
    badge: "Leadership"
  }
];

export const internshipsList = [
  {
    organization: "SRM Institute of Science and Technology",
    role: "AI & Software Systems Developer",
    duration: "Present",
    skills: ["Generative AI", "RAG Systems", "Full Stack Development", "FastAPI & Next.js", "Cloud Native"],
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker", "Kubernetes"]
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Deconstructing complex algorithmic and architectural challenges into modular, efficient code." },
  { name: "Technical Leadership", icon: "👑", desc: "Leading projects from initial concept through system design, execution, and deployment." },
  { name: "Adaptability", icon: "🌟", desc: "Rapidly mastering emerging AI technologies, frameworks, and engineering paradigms." },
  { name: "Communication", icon: "💬", desc: "Conveying technical architecture and complex AI models clearly to both technical and non-technical stakeholders." },
  { name: "System Thinking", icon: "⚙️", desc: "Designing end-to-end applications with scalability, reliability, and security in mind." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional teams, version control workflows, and peer reviews." },
  { name: "Creative Engineering", icon: "🎨", desc: "Blending modern aesthetics and UI micro-interactions with high-performance backend systems." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech studies at SRM with high-impact software project delivery." }
];

export const projects = [
  {
    id: "novaforge-ai",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "NovaForge AI",
    description:
      "Enterprise AI Code Intelligence Platform. Built an enterprise AI platform for GitHub repository analysis using Large Language Models and Retrieval-Augmented Generation (RAG). Key features include Semantic Code Search, Hybrid Retrieval, Vector Embeddings, Streaming AI Chat, Multi-Agent Workflows, Repository Analysis, Secure Authentication, CI/CD, Docker Deployment, and Kubernetes.",
    techTags: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "Redis",
      "PostgreSQL",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/luccy93",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "sagadrop",
    number: "02",
    badge: "AI Powered E-Commerce",
    title: "SagaDrop",
    description:
      "Premium AI Powered E-Commerce Platform. Built a production-ready AI-powered e-commerce platform with secure authentication, shopping cart, wishlist, payment integration, responsive UI, scalable backend services, and PostgreSQL architecture.",
    techTags: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Prisma ORM",
      "JWT Authentication",
      "Stripe",
      "Razorpay",
      "Docker",
    ],
    links: {
      github: "https://github.com/luccy93",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "flight-fare-prediction",
    number: "03",
    badge: "ML & Cloud Native",
    title: "Flight Fare Prediction Platform",
    description:
      "Developed a full-stack machine learning platform for flight fare prediction with secure APIs, automated deployment, monitoring, and cloud-native infrastructure.",
    techTags: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "Machine Learning",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/luccy93",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "aegisxai",
    number: "04",
    badge: "Explainable AI",
    title: "AegisXAI",
    description:
      "Enterprise Risk Command Engine. Developed an Explainable AI platform for enterprise risk prediction with interpretable ML models using SHAP and LIME.",
    techTags: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "SHAP",
      "LIME",
      "SQLAlchemy",
      "Docker",
    ],
    links: {
      github: "https://github.com/luccy93",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Artificial Intelligence Learning Path",
      issuer: "Infosys Springboard",
      icon: "🤖",
    },
  ],
  viewAllUrl: "/Devendra_Prasad_K_Resume.pdf",
};

export const education = {
  institution: "SRM Institute of Science and Technology",
  degree: "B.Tech Computer Science and Engineering",
  cgpa: "8.3 / 10",
  graduation: "2023 – 2027",
  location: "Tamil Nadu, India",
  languages: ["English", "Tamil"],
};

export const footerContent = {
  taglines: [
    "AI Systems & Full Stack Engineering",
    "Generative AI · LLMs · RAG · FastAPI · Next.js",
    "Scalable Cloud-Native Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.3 / 10",
  copyright: `© ${new Date().getFullYear()} DEVENDRA PRASAD K | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
