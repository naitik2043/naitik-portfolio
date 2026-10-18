const navLinks = [
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Achievements", link: "#achievements" },
  { name: "Certifications", link: "#certifications" },
];

const counterItems = [
  { value: "834", suffix: "", label: "Questions solved · Codolio" },
  { value: "51", suffix: "", label: "Contests attended · Codolio" },
  { value: "1740", suffix: "", label: "Peak LeetCode contest rating" },
  { value: "8.27", suffix: "/10", label: "B.Tech CSE CGPA" },
];

const abilities = [
  {
    imgPath: "/images/frontend.png",
    title: "Software Engineering",
    desc: "Build responsive web applications with React.js and Next.js, using TypeScript, REST APIs, reusable components, and state management.",
  },
  {
    imgPath: "/images/dsa.png",
    title: "AI Agent Governance",
    desc: "Built Abhed, a gateway that applies deterministic policies to agent tool calls, routes high-risk actions for human approval, and records decisions in a signed, hash-chained audit ledger.",
  },
  {
    imgPath: "/images/learning.png",
    title: "Data Science & Machine Learning",
    desc: "Work through data cleaning, exploratory analysis, feature engineering, and model evaluation. A TensorFlow/Keras MNIST classifier achieved 97.78% test accuracy.",
  },
];

const projects = [
  {
    title: "Abhed",
    category: "AI Agent Governance Platform",
    summary:
      "An AI-agent governance gateway that checks tool calls against deterministic policies before execution and records decisions for traceability.",
    highlights: [
      "Added human approval for high-risk actions and SHA-256 binding to the approved action.",
      "Built a signed, hash-chained audit ledger, a no-code OpenAI-compatible integration, and a JavaScript SDK.",
      "Deployed with Supabase Postgres for shared state; the repository includes 62 automated tests.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://abhed.vercel.app/",
    repoUrl: "https://github.com/naitik2043/Abhed",
  },
  {
    title: "PasteApp",
    category: "Code & Text Sharing Platform",
    summary:
      "A responsive paste manager for creating, organizing, searching, and reviewing code and text snippets.",
    highlights: [
      "Implemented create, read, update, and delete workflows with Redux Toolkit state and Local Storage persistence.",
      "Added title and content search, pinning, view counters, dashboard analytics, and dark mode.",
    ],
    technologies: ["React", "JavaScript", "Redux Toolkit", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://paste-app-wine.vercel.app/",
    repoUrl: "https://github.com/naitik2043/Paste-App",
  },
  {
    title: "ReUnix",
    category: "Alumni Connection Platform",
    summary:
      "Collaborated on a responsive frontend that connects students and alumni through role-based dashboards and community features.",
    highlights: [
      "Built student, alumni, and admin dashboard interfaces with protected routes.",
      "Implemented demo authentication with React Context and Local Storage, plus interfaces for mentorship, jobs, and events.",
    ],
    technologies: ["React", "TypeScript", "React Router", "Tailwind CSS", "React Context"],
    liveUrl: "https://reunix.vercel.app/",
    repoUrl: "https://github.com/naitik2043/ReUnix",
  },
  {
    title: "Data Science & ML Projects",
    category: "Python · Data Analysis · Machine Learning",
    summary:
      "A learning portfolio with 50+ Jupyter notebooks covering Python, statistics, exploratory data analysis, data preparation, and machine-learning workflows.",
    highlights: [
      "Built a California Housing regression workflow with missing-value handling, categorical encoding, feature scaling, and Scikit-learn preprocessing pipelines.",
      "Trained a TensorFlow/Keras MNIST digit classifier with 97.78% test accuracy; also implemented Iris and smartphone classifiers.",
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Jupyter"],
    repoUrl: "https://github.com/naitik2043/data-science-journey",
  },
];

const education = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "KIET Deemed to be University",
  location: "Ghaziabad",
  period: "2024–2028",
  cgpa: "8.27/10",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Probability and Statistics",
  ],
};

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "PL/SQL"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "React Hooks",
      "React Router",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend, APIs & State",
    skills: [
      "Node.js (foundational)",
      "REST APIs",
      "API Gateway",
      "Redux Toolkit",
      "React Context",
      "JavaScript SDKs",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Supabase", "MySQL", "MongoDB"],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Scikit-learn",
      "Regression",
      "Classification",
      "Cross-Validation",
      "Preprocessing Pipelines",
      "Model Evaluation",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Deep Learning & AI",
    skills: [
      "TensorFlow",
      "Keras",
      "Artificial Neural Networks",
      "LLM and RAG fundamentals (learning)",
    ],
  },
  {
    category: "AI Systems & Governance",
    skills: [
      "Deterministic Policy Evaluation",
      "AI Agent Tool-Call Governance",
      "Human-in-the-Loop Approval Workflows",
      "SHA-256 Action Binding",
      "Signed, Hash-Chained Audit Ledgers",
    ],
  },
  {
    category: "Computer Science & Tools",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Git",
      "GitHub",
      "Vercel",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
    ],
  },
];

const achievements = [
  {
    title: "CodeX 3.0 Winner",
    detail:
      "Received the Best Innovators Award for Problem Statement 5: AI Agent Governance and Human Accountability Operating System.",
  },
  {
    title: "834 Questions Solved",
    detail:
      "Current total displayed on the Codolio coding profile across linked problem-solving platforms.",
  },
  {
    title: "LeetCode Peak Contest Rating: 1740",
    detail: "Peak contest rating listed in the submitted resumes.",
  },
  {
    title: "CodeChef 2-Star",
    detail: "Peak rating: 1461.",
  },
  {
    title: "51 Coding Contests",
    detail: "Contest attendance total displayed on the Codolio profile.",
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    date: "May 2026",
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    date: "November 2025",
  },
  {
    name: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "September 2025",
  },
  {
    name: "ECMAScript ES6 JavaScript Tutorials",
    issuer: "Infosys Springboard",
    date: "April 2026",
  },
];

const profileLinks = [
  { name: "GitHub", link: "https://github.com/naitik2043" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/naitik2043/" },
  { name: "Codolio", link: "https://codolio.com/profile/Naitik_Gupta" },
  { name: "LeetCode", link: "https://leetcode.com/u/Naitik_Gupta/" },
  { name: "CodeChef", link: "https://www.codechef.com/users/naitik_gupta" },
  { name: "Codeforces", link: "https://codeforces.com/profile/Naitik_Gupta" },
];

export {
  navLinks,
  counterItems,
  abilities,
  projects,
  education,
  skillGroups,
  achievements,
  certifications,
  profileLinks,
};