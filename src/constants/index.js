const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Expertise",
    link: "#expertise",
  },
  {
    name: "Journey",
    link: "#journey",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 750, suffix: "+", label: "Problems Solved" },
  { value: 12, suffix: "+", label: "Projects Built" },
  { value: 1740, suffix: "", label: "Peak LeetCode Rating" },
  { value: 50, suffix: "+", label: "Coding Contests" },
];

const abilities = [
  {
    imgPath: "/images/frontend.png",
    title: "Frontend Development",
    desc: "Building responsive and interactive web applications using React, JavaScript, and modern UI frameworks with a strong focus on performance and clean user experience.",
  },
  {
    imgPath: "/images/dsa.png",
    title: "Problem Solving",
    desc: "Practicing Data Structures and Algorithms to strengthen logical thinking and develop efficient solutions to complex problems across coding platforms.",
  },
  {
    imgPath: "/images/learning.png",
    title: "Continuous Learning",
    desc: "Continuously exploring new technologies, improving development practices, and building real-world projects to enhance technical and problem-solving skills.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Currently pursuing a Bachelor of Technology in Computer Science with a focus on strengthening fundamentals in programming, software development, and problem solving through academic coursework and hands-on projects.",
    logoPath: "/images/kiet-logo.png",
    title: "B.Tech – Computer Science | KIET Group of Institutions",
    date: "2024 – 2028",
    responsibilities: [
      "Studying core Computer Science subjects including Data Structures, Algorithms, Operating Systems, and Software Development.",
      "Applying theoretical concepts through hands-on academic projects and practical coding experience.",
      "Continuously learning modern technologies while preparing for frontend development and software engineering internships.",
    ],
  },
  {
    review:
      "Focused on building modern and responsive user interfaces using React and Tailwind CSS, emphasizing clean design, performance optimization, and reusable component architecture.",
    logoPath: "/images/react-logo.png",
    title: "Frontend Development Journey",
    date: "2025 – Present",
    responsibilities: [
      "Developed responsive web applications using React, Tailwind CSS, and component-based architecture.",
      "Implemented interactive UI components and smooth scroll-based animations using GSAP.",
      "Built practical projects including a Paste App and a personal developer portfolio.",
    ],
  },
  {
    review:
      "Strengthening analytical thinking and algorithmic problem-solving skills through consistent practice of Data Structures, Algorithms, and competitive programming.",
    logoPath: "/images/leetcode-logo.png",
    title: "Data Structures & Algorithmic Problem Solving",
    date: "2025 – Present",
    responsibilities: [
      "Solved 700+ algorithmic problems across platforms including LeetCode, CodeChef, and Codeforces.",
      "Achieved a 1600+ rating on LeetCode and earned a 2★ rating on CodeChef.",
      "Practiced core topics including arrays, strings, recursion, trees, dynamic programming, and hash-based data structures.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "B.Tech CSE Student, KIET",
    review:
      "Naitik is highly skilled in frontend development and consistently writes well-structured React components. His focus on clean UI design and responsive layouts makes collaboration smooth and efficient during academic projects.",
    imgPath: "/images/peer1.png",
  },
  {
    name: "Aman Verma",
    role: "Web Development Project Teammate",
    review:
      "Working with Naitik was a great experience. He approaches problems logically and ensures that the final product is both user-friendly and responsive. His attention to detail in frontend implementation stands out.",
    imgPath: "/images/peer2.png",
  },
  {
    name: "Priya Singh",
    role: "Hackathon Team Member",
    review:
      "Naitik brings strong problem-solving skills and solid knowledge of React and JavaScript. During team projects he contributes actively, communicates well, and helps deliver high-quality results within deadlines.",
    imgPath: "/images/peer3.png",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.png",
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "Codolio",
    imgPath: "/images/codolio.png",
    link: "https://codolio.com/profile/Naitik_Gupta",
  },
  {
    name: "Instagram",
    imgPath: "/images/insta.png",
    link: "https://instagram.com/naitik.anuj",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
