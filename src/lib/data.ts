import { Linkedin, HardDrive, Waves, Bot, Share2, Camera } from "lucide-react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiDocker, SiGit, SiFlask, SiWebrtc, SiGithub, SiTailwindcss, SiCss3, SiFirebase, SiAutodesk } from "react-icons/si";
import type { IconType } from "react-icons";

export const personalInfo = {
    name: "Jaydeep Gowda KB",
    title: "Visionary Robotics & AI Engineer and Full-Stack Development Architect",
    location: "Bangalore, India",
    phone: "+91 8310491224",
    email: "jayadeepgowda24@gmail.com",
    socials: [
        { name: "LinkedIn", url: "https://linkedin.com/in/jay7788", icon: Linkedin },
        { name: "GitHub", url: "https://github.com/jay7-tech", icon: SiGithub },
    ],
    summary: "An impact-focused Engineering undergraduate specializing in Robotics and Artificial Intelligence. I drive innovation by fusing cutting-edge technology with an entrepreneurial mindset to architect sustainable solutions with tangible real-world impact. Proficient across the MERN stack, advanced machine learning, and autonomous hardware, I am a strategic communicator who excels at mastering complex technical challenges through excellence and strategic communication.",
};

export const skills = [
      { name: "MongoDB", description: "Database", icon: SiMongodb },
      { name: "Express.js", description: "Backend framework", icon: SiExpress },
      { name: "React", description: "Frontend library", icon: SiReact },
      { name: "Node.js", description: "Runtime environment", icon: SiNodedotjs },
      { name: "JavaScript", description: "", icon: SiJavascript },
      { name: "TypeScript", description: "", icon: SiTypescript },
      { name: "Tailwind CSS", description: "Styling", icon: SiTailwindcss },
      { name: "CSS", description: "Foundational styling", icon: SiCss3 },
      { name: "Python", description: "", icon: SiPython },
      { name: "Machine Learning", description: "", icon: Share2 },
      { name: "Computer Vision", description: "", icon: Camera },
      { name: "ABB Robot Simulation", description: "Industrial arm operation and simulation", icon: Bot },
      { name: "Autodesk", description: "Engineering and design", icon: SiAutodesk },
      { name: "Firebase", description: "Cloud services and deployment", icon: SiFirebase },
      { name: "Docker", description: "Containerization", icon: SiDocker },
      { name: "Git", description: "Version control", icon: SiGit },
      { name: "GitHub", description: "Repository hosting", icon: SiGithub },
      { name: "WebRTC", description: "Real-time communication", icon: SiWebrtc },
      { name: "Flask", description: "Python web framework", icon: SiFlask },
];

type Project = {
    title: string;
    recognition: string | null;
    image: string;
    description: {
        paragraph: string;
        features: string[];
    };
    githubUrl: string;
    tags: { name: string; icon: IconType | ((props: any) => JSX.Element) }[];
}

export const projects: Project[] = [
    {
        title: "YoloMart | Smart Retail Ecosystem",
        recognition: "Secured 2nd Place at GlitchVerse 2k25 Project Expo at BIT.",
        image: "yolomart",
        description: {
            paragraph: "Pioneered an intelligent agent for product reasoning and an ML-driven camera system for autonomous user tracking, creating a seamless and futuristic shopping experience.",
            features: [
                "Engineered a synchronized Smart Cart with high-speed QR/Barcode scanning.",
                "Integrated allergy-safe filtering and behavior-based recommendations.",
                "Developed smart in-store navigation mapping for optimized shopping routes."
            ]
        },
        githubUrl: "https://github.com/jay7-tech/yolomart",
        tags: [
            { name: "React", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Python", icon: SiPython },
        ],
    },
    {
        title: "High Five | Real-Time Social Platform",
        recognition: null,
        image: "highfive",
        description: {
            paragraph: "Conceptualized and deployed a high-energy platform for anonymous voice connections using Flask and WebSockets, fostering spontaneous social interactions.",
            features: [
                "Deployed a robust WebRTC engine with STUN/TURN servers for reliable connections.",
                "Revolutionized UX with an audio-reactive interface that pulses with voice frequency.",
                "Championed a 'Consent-First' architecture for revealing social handles."
            ]
        },
        githubUrl: "https://github.com/jay7-tech/high-five",
        tags: [
            { name: "Flask", icon: SiFlask },
            { name: "WebSockets", icon: Waves },
            { name: "WebRTC", icon: SiWebrtc },
            { name: "JavaScript", icon: SiJavascript },
        ],
    },
    {
        title: "Movifi | Online Show Booking Website",
        recognition: null,
        image: "movifi",
        description: {
            paragraph: "Developed a modern, online show booking website using TypeScript, focusing on a clean user interface and robust booking functionality for a seamless user experience.",
            features: [
                "Implemented a type-safe backend with Express.js and MongoDB.",
                "Designed a responsive and intuitive front-end with React.",
                "Ensured secure and efficient booking and payment processing."
            ]
        },
        githubUrl: "https://github.com/jay7-tech/movifi",
        tags: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Express.js", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
        ],
    },
    {
        title: "Anveshana-2024 (National Finalist)",
        recognition: "Secured National Finalist status, placing among the top 28 teams in India.",
        image: "anveshana",
        description: {
            paragraph: "Spearheaded the development of innovative hardware solutions focused on energy harvesting and personal safety, showcasing a commitment to impactful engineering.",
            features: [
                "Developed a piezoelectric footstep power generation system.",
                "Designed a fall-sensing alert smart jacket for enhanced personal safety.",
                "Presented the project at a national level, competing against top engineering talent."
            ]
        },
        githubUrl: "https://github.com/jay7-tech/anveshana-2024",
        tags: [
            { name: "Hardware", icon: HardDrive },
        ]
    },
];

export const experiences = [
    {
        role: "Core Organizer",
        organization: "IDEATHON 2025",
        details: [
            "Spearheaded the orchestration of a national-level hackathon, hosting over 200+ teams and engaging 50+ colleges.",
            "Directed large-scale operational logistics, crisis resolution, and led a dynamic core team.",
        ],
    },
    {
        role: "Technical Event Moderator",
        organization: "Poster Presentation",
        details: [
            "Arbitrated technical events, expertly coordinating communication between participants, esteemed judges, and organizing teams.",
            "Managed critical event timelines and presenter introductions, demonstrating impeccable time management skills.",
        ],
    },
    {
        role: "Intern",
        organization: "Frillory Design House",
        details: [
            "Collaborated with the Co-Founder on strategic design outreach and digital content narratives.",
            "Catalyzed firm presence by curating high-impact social media creatives and marketing materials.",
        ],
    },
];

export const marqueeSkills = ["INTERACTIVE", "SECURE", "RELIABLE", "ENGAGING", "ACCESSIBLE", "RESPONSIVE", "DYNAMIC", "SCALABLE", "SEARCH OPTIMIZED"];

export const skills_old = {
    "Full-Stack Development": ["MERN Stack", "JavaScript", "Python", "TypeScript", "React", "Node.js", "MongoDB", "Express.js", "Flask"],
    "Autonomous Systems & AI": ["Computer Vision", "YOLO", "Autonomous Systems", "Robotics Simulation", "ABB Arm Robot"],
    "Tools & Platforms": ["WebSockets", "WebRTC", "Git", "GitHub", "Docker"],
};
