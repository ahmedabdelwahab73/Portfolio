import {
  SiBootstrap,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiReact,
  SiSass,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import {
  MdDns,
  MdColorLens,
  MdFlashOn,
  MdAccountTree,
} from "react-icons/md";
import images from "./images";

// Mapping FontAwesome variable names to React-Icons for compatibility
const faSquareJs = SiJavascript;
const faReact = SiReact;
const faServer = MdDns;
const faHtml5 = SiHtml5;
const faCss3Alt = FaCss3Alt;
const faBolt = MdFlashOn;
const faPalette = MdColorLens;
const faSass = SiSass;
const faBootstrap = SiBootstrap;
const faCodeBranch = MdAccountTree;
const faGithub = SiGithub;
const faGitlab = SiGitlab;

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: faSquareJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: faReact },
      { name: "Next.js", icon: faServer },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: faBolt },
      { name: "Zustand", icon: faBolt },
      { name: "useContext", icon: faReact },
      { name: "RTK Query", icon: faBolt },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: faPalette },
      { name: "Ant Design", icon: faPalette },
      { name: "MUI", icon: faPalette },
      { name: "SASS", icon: faSass },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "Framer Motion", icon: faBolt },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      { name: "RESTful APIs", icon: faServer },
      { name: "Axios", icon: faServer },
      { name: "RTK Query", icon: faBolt },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: faCodeBranch },
      { name: "GitHub", icon: faGithub },
      { name: "GitLab", icon: faGitlab },
    ],
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Icon",
    date: "Sep 2024 - Present",
    location: "Tanta, Egypt",
    type: "Full-time | Remote",
    points: [
      "Developing Icon ERP system with an integrated cashier module for managing sales and transactions.",
      "Building the core frontend architecture for the Kabab Ouzi restaurant system (internal project), focusing on reusable UI components and scalable workflows.",
      "Developed Mimo photography platform (internal project) using Next.js with focus on performance, SEO optimization, responsive image gallery, and modern scalable UI architecture.",
      "Implementing reusable frontend components to ensure a scalable and maintainable system architecture.",
      "Integrating frontend applications with backend APIs to enable real-time data handling and operational features."
    ],
    link: "https://kababouzi.com"
  },

  {
    title: "Frontend Developer",
    company: "CodeyAI",
    date: "Jan 2024 - May 2024",
    location: "New York, USA",
    type: "Part-time | Remote",
    points: [
      "Developed CodeyAI, an AI-powered platform converting intelligent diagrams into fully functional project code.",
      "Designed intuitive UIs for creating and managing diagram-based programming workflows.",
      "Integrated AI features including diagrammatic architecture design, automated code generation, and GPT-style chat.",
      "Enhanced usability, improving user productivity by 30% through optimized project workflows."
    ],
    link: "https://www.codeyai.com"
  },

  {
    title: "Frontend Developer",
    company: "GB TECH ae",
    date: "Dec 2022 - Aug 2024",
    location: "Tanta, Egypt",
    type: "Full-time | On site",
    points: [
      "Developed the Easy Services platform with focus on UX and frontend performance.",
      "Built the Quraa booking platform for scheduling Quran reciters efficiently.",
      "Worked on the company official website with responsive and optimized UI implementation.",
      "Contributed to ERP system development using reusable components and scalable frontend architecture.",
      "Delivered frontend solutions for Rasain Technology (Dubai, UAE) as a client project, integrating IT & Cybersecurity platforms like NinjaOne, SentinelOne, and KnowBe4."
    ],
    link: "https://rasaintech.com/"
  },

  {
    title: "Frontend Developer",
    company: "Prosoft",
    date: "Apr 2022 - Nov 2022",
    location: "Saudi Arabia",
    type: "Full-time | Remote",
    points: [
      "Developed user interfaces for ERP and e-commerce systems using React.",
      "Integrated REST APIs with frontend applications for dynamic data handling.",
      "Improved performance and user experience across multiple enterprise projects.",
      "Collaborated closely with backend teams to ensure stable system integration."
    ]
  },

  {
    title: "Frontend Developer",
    company: "Sintac Code",
    date: "Jan 2022 - Mar 2022",
    location: "Giza, Egypt",
    type: "Part-time | Hybrid",
    points: [
      "Started professional frontend development journey by working on real-world applications.",
      "Built responsive UI components and improved frontend architecture structure.",
      "Gained hands-on experience with React and modern frontend workflows."
    ]
  }
];

const education = [
  {
    title: "Bachelor of Commerce",
    institution: "Higher Institute of Computers and Information",
    year: "2022",
    grade: "Good",
  },
  {
    title: "Fullstack Development",
    institution: "Information Technology Institute (ITI) - Tanta",
    year: "",
    grade: "",
  },
  {
    title: "fullstack Development",
    institution: "YAT ITI School",
    year: "",
    grade: "",
  },
];

const projects = [
  {
    name: "CodeyAi",
    img: images.codeyai,
    github: null,
    website: "https://codeyai.com/",
    featured: true,
    category: "production",
    tech: ["React.js", "TypeScript", "AI"],
  },
  {
    name: "Kababouzi",
    img: images.kababouzi,
    github: null,
    website: "https://kababouzi.com/",
    featured: true,
    category: "production",
    tech: ["React.js"],
  },
  {
    name: "Mimo Photography",
    img: images.mimo,
    github: null,
    website: "https://mimo-flame.vercel.app",
    featured: true,
    category: "production",
    tech: ["React.js", "Next.js"],
  },
  {
    name: "Rasain Technology",
    img: images.Rasain,
    github: null,
    website: "https://rasaintech.com/",
    category: "production",
    tech: ["React.js", "API"],
  },
  {
    name: "Quraa",
    img: images.Quraa,
    github: null,
    website: "https://www.ferghany.com/",
    category: "personal",
    tech: ["React.js"],
  },
  {
    name: "Easy Services",
    img: images.Easy,
    github: null,
    website: "https://easyfast.app/",
    category: "personal",
    tech: ["React.js", "Firebase"],
  },
];

const personalInfo = {
  name: "Ahmed Ibrahim",
  title: "Mid-level Frontend Developer",
  phone: "+201150079720",
  email: "ahmedabdelwahab7356819@gmail.com",
  location: "Naser City, Egypt",
  linkedin: "https://www.linkedin.com/in/ahmed-allam-a425a025a",
  github: "https://github.com/ahmedabdelwahab73",
  birthdate: "1999-03-02",
  bio: "Mid-level Frontend Developer with over 4 years of experience building fast, scalable, and user-centered web applications. Skilled in React.js, Next.js, TypeScript, and performance optimization, with a solid understanding of frontend architecture and micro frontend principles. I enjoy turning complex ideas into clean, intuitive interfaces and delivering products that combine performance, usability, and security.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Conversational" },
  ],
};

const data = { skillCategories, experiences, education, projects, personalInfo };
export { skillCategories, experiences, education, projects, personalInfo, data };
export default data;
