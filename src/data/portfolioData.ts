export interface TeamMember {
  id: string;
  name: string;
  role: string;
  index: string;
  shortBio: string;
  skills: string[];
  email?: string;
  github?: string;
  linkedin?: string;
  avatarPlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  expandedDetail: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  italicWord?: string;
  subtitle: string;
  category: string;
  description: string;
  featured: boolean;
  year: string;
  techStack: string[];
  mockupType: 'browser' | 'mobile' | 'code' | 'desktop';
  repoUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  challenges: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'creative' | 'devops' | 'ai';
  tag: string;
}

export const BRAND_CONFIG = {
  name: "TECH GENZ",
  tagline: "WE BUILD WHAT'S NEXT.",
  supportingHeadline: "IDEAS ENGINEERED BEYOND LIMITS.",
  descriptor: "Technology Studio // Creative Engineering",
  subDescriptor: "Web, AI, Cloud & Interactive 3D",
  intro: "Four minds. One vision. Technology built to turn ambitious ideas into useful experiences.",
  about: "Tech Genz is a software and technology team formed around innovation, creativity, teamwork, and problem-solving. Associated with the student community of N.B.K.R. Institute of Science & Technology (NBKRIST), Vidyanagar, Andhra Pradesh, India, Tech Genz aims to turn creative ideas into practical digital solutions, explore emerging technologies, and build useful software projects.",
  motive: "To use technology to solve real-world problems, encourage innovation, develop technical skills, and transform ideas into meaningful digital experiences.",
  vision: "To build a smarter digital future through collaboration, continuous learning, and creative software development.",
  motto: "Ideas Engineered Beyond Limits.",
  college: {
    name: "N.B.K.R. Institute of Science & Technology (NBKRIST)",
    shortName: "NBKRIST",
    location: "Vidyanagar, Andhra Pradesh, India",
    association: "Associated with the student community of NBKRIST",
    disclaimer: "Tech Genz is formed by and associated with members of the NBKRIST student community, operating independently as a student developer team.",
    website: "https://nbkrist.org/"
  },
  closing: "Together, the team aims to learn, experiment, collaborate, and create technology-driven projects while growing as developers and innovators.",
  githubOrg: "https://github.com/Tech-Genz",
  githubRepo: "https://github.com/Tech-Genz/techgenz",
  websiteUrl: "https://techgenz.site/",
  contactEmail: "admin@techgenz.site",
  availability: "Available for ambitious collaborations & high-impact projects"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    index: "01",
    title: "WEB APPLICATION DEVELOPMENT",
    description: "High-performance full-stack web applications engineered with modern architectures, resilient frontend frameworks, and robust state management.",
    capabilities: ["React & TypeScript", "Next-gen Bundlers (Vite)", "Responsive Design Systems", "Optimized Core Web Vitals"],
    expandedDetail: "From interactive client interfaces to complex enterprise-grade single page applications, we build fast, scalable, and accessible web experiences engineered to endure high loads."
  },
  {
    id: "ai-automation",
    index: "02",
    title: "AI & AUTOMATION",
    description: "Intelligent workflow automation, generative AI pipelines, and agentic integrations designed to accelerate productivity and streamline operations.",
    capabilities: ["Large Language Model Integration", "Context Retrieval Pipelines", "Automated Task Workflows", "API Connectors"],
    expandedDetail: "We connect modern generative AI models and custom automation scripts into practical software layers that solve real workflow bottlenecks."
  },
  {
    id: "mobile-apps",
    index: "03",
    title: "MOBILE APPLICATIONS",
    description: "Fluid cross-platform mobile experiences for iOS and Android built with modern toolchains and native-like performance.",
    capabilities: ["Cross-platform Architecture", "Offline First Data Sync", "Native Bridge Integration", "Sensory & Gesture Feedback"],
    expandedDetail: "Mobile applications designed with intuitive micro-interactions, efficient memory usage, and responsive gesture-based navigation."
  },
  {
    id: "backend-cloud",
    index: "04",
    title: "BACKEND & CLOUD SYSTEMS",
    description: "Scalable API services, microservice backends, reliable data persistence layers, and secure cloud storage architectures.",
    capabilities: ["RESTful & Realtime APIs", "Relational & Document Databases", "Authentication & Security", "Serverless Deployment"],
    expandedDetail: "High-throughput server environments, structured schema modeling, and zero-trust authentication layers that power mission-critical software."
  },
  {
    id: "creative-3d",
    index: "05",
    title: "CREATIVE CODING & 3D WEB",
    description: "Interactive WebGL, Three.js environments, shader art, and GPU-accelerated particle graphics that elevate brand storytelling.",
    capabilities: ["Three.js & WebGL Renders", "Custom GLSL Shaders", "Procedural Particle Systems", "60 FPS Interactive Canvases"],
    expandedDetail: "Pushing the limits of web browsers through spatial 3D graphics, physics simulations, and generative visuals that captivate audiences."
  },
  {
    id: "prototyping-experimental",
    index: "06",
    title: "PROTOTYPING & EXPERIMENTAL PROJECTS",
    description: "Rapid exploratory prototyping, proof-of-concept builds, and cutting-edge digital sandboxes testing next-generation paradigms.",
    capabilities: ["Rapid Interactive Mockups", "Feasibility Benchmarking", "Experimental Hardware/Software Interfaces", "Iterative Usability Sprints"],
    expandedDetail: "Validating ambitious hypotheses through functional software prototypes, ensuring strategic direction before committing large-scale capital."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "sharepinz",
    index: "01",
    title: "SHAREPINZ",
    italicWord: "file sharing",
    subtitle: "PIN-BASED FILE SHARING PLATFORM",
    category: "Web Application // Cloud System",
    description: "SharePinz is a file-sharing platform designed to let users upload files, generate a unique PIN, and share access with recipients. Built for frictionless transfers without cumbersome account creation.",
    featured: true,
    year: "2026",
    techStack: ["React", "TypeScript", "Node.js", "Express", "Cloud Storage", "REST APIs", "Tailwind CSS"],
    mockupType: "browser",
    repoUrl: "https://github.com/Tech-Genz/SharePinz",
    liveUrl: "https://sharepinz.site/",
    problem: "Traditional file sharing requires either sign-ups with email verifications or yields unwieldy, easily forgotten links with ambiguous security policies.",
    solution: "SharePinz introduces ephemeral PIN codes paired with encrypted cloud storage, allowing immediate sender-to-recipient retrieval with TTL expiration and clean bandwidth limits.",
    keyFeatures: [
      "Instant 6-digit numeric PIN generation upon file upload",
      "Expiring time-to-live (TTL) file purge logic",
      "Bandwidth-efficient multipart streaming",
      "Minimalist, distraction-free responsive upload and download UI"
    ],
    challenges: "Handling concurrent chunked uploads reliably across spotty network connections while maintaining strict PIN access gating and automated storage cleanup."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "guna",
    index: "01",
    name: "V. Gunasekhar",
    role: "Team Leader",
    email: "admin@techgenz.site",
    shortBio: "Architecting core system structures, driving technical strategy, and coordinating engineering pipelines across web, backend, and 3D visual environments.",
    skills: ["Full Stack Architecture", "System Design", "React & TypeScript", "Three.js & Graphics", "Engineering Leadership"],
    github: "https://github.com/Tech-Genz",
    linkedin: "https://www.linkedin.com/in/varikunta-gunasekhar-446997369/",
    avatarPlaceholder: "VG"
  },
  {
    id: "sahithi",
    index: "02",
    name: "CH. Sahithi Sri",
    role: "Team Member 1",
    email: "c.sahithisri@techgenz.site",
    shortBio: "Specializing in intuitive user interfaces, frontend component systems, responsive design aesthetics, and fluid user experiences.",
    skills: ["Frontend Development", "UI/UX Architecture", "React & Modern CSS", "Design Systems", "Web Accessibility"],
    github: "https://github.com/Tech-Genz",
    linkedin: "https://www.linkedin.com/in/sahithi-sri-2b0355386",
    avatarPlaceholder: "SS"
  },
  {
    id: "bhuvan",
    index: "03",
    name: "Kull Bhuvan",
    role: "Team Member 2",
    email: "k.bhuvan@techgenz.site",
    shortBio: "Focused on robust backend services, data modeling, API integration, and cloud deployment pipelines for scalable digital applications.",
    skills: ["Backend Engineering", "Database Modeling", "API Architecture", "Cloud Infrastructure", "Performance Optimization"],
    github: "https://github.com/Tech-Genz",
    linkedin: "https://www.linkedin.com/in/kull-bhuvan-772058440",
    avatarPlaceholder: "KB"
  },
  {
    id: "navaz",
    index: "04",
    name: "SK Mohammad Navaz",
    role: "Team Member 3",
    email: "sk.navaz@techgenz.site",
    shortBio: "Developing full-stack workflows, experimental prototypes, logic integration, and intelligent automation tooling for client and server platforms.",
    skills: ["Full Stack Prototyping", "Automation & Logic", "Node.js & JavaScript", "Mobile Integration", "Testing & QA"],
    github: "https://github.com/Tech-Genz",
    linkedin: "https://www.linkedin.com/in/navaz-sk-523aa735a",
    avatarPlaceholder: "MN"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React", category: "frontend", tag: "Frontend Library" },
  { name: "TypeScript", category: "frontend", tag: "Type Safety" },
  { name: "JavaScript", category: "frontend", tag: "Core Language" },
  { name: "Node.js", category: "backend", tag: "Runtime Environment" },
  { name: "Supabase", category: "backend", tag: "Backend as a Service" },
  { name: "Three.js", category: "creative", tag: "3D & WebGL" },
  { name: "Tailwind CSS", category: "frontend", tag: "Styling Engine" },
  { name: "Flutter", category: "frontend", tag: "Mobile Framework" },
  { name: "GitHub", category: "devops", tag: "Version & CI/CD" },
  { name: "REST APIs", category: "backend", tag: "Interface Protocol" },
  { name: "GLSL Shaders", category: "creative", tag: "GPU Computing" },
  { name: "AI Automation", category: "ai", tag: "Intelligent Systems" },
  { name: "Vite", category: "devops", tag: "Build Tool" },
  { name: "PostgreSQL", category: "backend", tag: "Relational DB" }
];
