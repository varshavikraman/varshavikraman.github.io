export const profile = {
  name: 'Varsha Vikraman',
  email: 'varshavikraman97@gmail.com',
  location: 'Thiruvananthapuram, Kerala',
  github: 'https://github.com/varshavikraman',
  linkedin: 'https://www.linkedin.com/in/varshavikraman',
  resume: '/Varsha-Vikraman-Resume.pdf',
}

export const chainTech = ['Solidity', 'Hardhat', 'viem', 'Ethereum', 'Web3.js', 'Hyperledger Fabric']

export const projects = [
  { title: 'Decentralized Energy Trading DApp', cats: ['Blockchain'], featured: true, repo: 'https://github.com/varshavikraman/ENERGY-TRADING-PLATFORM-DAPP',
    blurb: 'Peer-to-peer marketplace connecting renewable producers and consumers through on-chain Energy Tokens, each representing 1 kWh of verified output. Smart contracts give trustless, instant settlement with a full on-chain history and no intermediary.',
    stack: ['React.js', 'Solidity', 'Hardhat', 'viem', 'Ethereum', 'Tailwind CSS'] },
  { title: 'AI Government Assistant', cats: ['AI', 'Full-stack'], featured: true, demo: 'https://ksmart-care-frontend.onrender.com/',
    blurb: 'Human Capital Intelligence platform for Kerala Local Self Government employees. Full RAG pipeline with PDF ingestion, per-page citations, department/district filtering, an AI document classifier and a bilingual Malayalam/English assistant.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas Vector Search', 'LangChain', 'Groq', 'HuggingFace'] },
  { title: 'Telehealth Platform', note: 'Confidential client', cats: ['Full-stack'], featured: true,
    blurb: 'Connects clients with clinicians. Built the therapist dashboard with session scheduling and calendar, JWT-authenticated Jitsi video calls, and chat with emoji, file uploads and voice messages.',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Jitsi'] },
  { title: 'Mindfulness Music Game', note: 'Confidential client', cats: ['Full-stack'], featured: true,
    blurb: 'Music-driven bubble-tapping game with an animated mascot, a Guided Melody Mode with live staff-notation rendering, and canvas sprite-sheet animation.',
    stack: ['React.js', 'PixiJS', 'Tone.js'] },
  { title: 'Personal Finance Advisor', cats: ['Full-stack'], featured: true, repo: 'https://github.com/varshavikraman/Personal-Finance-Advisor',
    blurb: 'Budgeting app with income/expense tracking, savings goals, visual analytics and automated monthly summaries. One-command local setup with Docker.',
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Docker'] },
  { title: 'Blog App (Mobile)', cats: ['Mobile'], featured: true, repo: 'https://github.com/varshavikraman/BlogApp',
    blurb: 'Cross-platform app with full CRUD, offline draft storage and push notifications on a modular NestJS backend.',
    stack: ['React Native (Expo)', 'NestJS', 'TypeORM', 'SQLite'] },
  { title: 'Event Booking System', cats: ['Full-stack'],
    blurb: 'Users browse, book and manage tickets; admins manage events and availability.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Docker'], repo: 'https://github.com/varshavikraman/Event-Booking-System' },
  { title: 'Library Management System', cats: ['Full-stack'],
    blurb: 'Admins manage books, users and lending; members browse, borrow and return.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Docker'], repo: 'https://github.com/varshavikraman/Library-Management-System' },
]

export const skills = {
  Frontend: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'React Native', 'Tailwind CSS', 'HTML5 / CSS3'],
  Backend: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT & RBAC', 'MongoDB', 'SQLite'],
  Blockchain: ['Solidity', 'Ethereum', 'Hardhat', 'Web3.js', 'viem', 'Hyperledger Fabric'],
  'AI / LLM': ['RAG', 'LangChain', 'Prompt Engineering', 'Hugging Face', 'vLLM'],
  'DevOps & Tools': ['Docker', 'Kubernetes', 'GitHub', 'Postman', 'Figma', 'Python'],
}

export const experience = {
  role: 'Full Stack Developer', company: 'ZenturioTech', place: 'Thiruvananthapuram, Kerala', period: 'Mar 2026 – Present',
  points: [
    'Build and maintain production MERN applications across the React UI and Node/Express API layers, with JWT authentication and role-based access control.',
    'Deploy and manage Kubernetes environments running AI inference workloads (ASR, TTS and multimodal LLM pods); containerize services with Docker for consistent dev, staging and prod.',
    'Deliver responsive Tailwind CSS interfaces and cut cross-device layout issues through a systematic component audit.',
    'Fix cross-browser CORS and render-loop bugs on client projects, and polish UI across states and mobile layouts.',
  ],
}

export const education = [
  { degree: 'PG Diploma in Blockchain Technology', school: 'Digital University Kerala', place: 'Thiruvananthapuram', year: '2025' },
  { degree: 'B.Tech in Electronics and Communication Engineering', school: 'Government Engineering College, Kozhikode', place: 'Kozhikode', year: '2023' },
]
