import { Linkedin, HardDrive, Waves } from "lucide-react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiDocker, SiGit, SiFlask, SiWebrtc } from "react-icons/si";
import type { IconType } from "react-icons";

export const personalInfo = {
    name: "Jaydeep Gowda KB",
    title: "Visionary Robotics & AI Engineer | Full-Stack Development Architect",
    location: "Bangalore, India",
    phone: "+91 8310491224",
    email: "jayadeepgowda24@gmail.com",
    socials: [
        { name: "LinkedIn", url: "https://linkedin.com/in/jay7788", icon: Linkedin },
        { name: "GitHub", url: "https://github.com/jay7-tech", icon: SiGit },
    ],
    summary: "An impact-focused Engineering undergraduate specializing in Robotics and Artificial Intelligence. I drive innovation by fusing cutting-edge technology with an entrepreneurial mindset to architect sustainable solutions with tangible real-world impact. Proficient across the MERN stack, advanced machine learning, and autonomous hardware, I am a strategic communicator who excels at mastering complex technical challenges through excellence and strategic communication.",
};

export const skills = {
    "Full-Stack Development": ["MERN Stack", "JavaScript", "Python", "TypeScript", "React", "Node.js", "MongoDB", "Express.js"],
    "Autonomous Systems & AI": ["Machine Learning", "Computer Vision", "Autonomous Systems", "Robotics Simulation", "ABB Arm Robot"],
    "Tools & Platforms": ["WebSockets", "WebRTC", "Git", "Docker"],
    "Professional Skills": ["Strategic Thinking", "Networking", "Negotiation", "Effective Communication", "Languages"],
};

type Project = {
    title: string;
    recognition: string | null;
    image: string;
    description: string[];
    githubUrl: string;
    tags: { name: string; icon: IconType | ((props: any) => JSX.Element) }[];
}

export const projects: Project[] = [
    {
        title: "YoloMart | Smart Retail Ecosystem",
        recognition: "Secured 2nd Place at GlitchVerse 2k25 Project Expo at BIT.",
        image: "yolomart",
        description: [
            "Pioneered an intelligent agent for product reasoning and an ML-driven camera system for autonomous user tracking.",
            "Engineered a synchronized Smart Cart featuring high-speed QR/Barcode scanning and real-time data retrieval.",
            "Integrated allergy-safe filtering, behavior-based recommendations, and smart in-store navigation mapping.",
        ],
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
        description: [
            "Conceptualized and deployed a high-energy platform for anonymous voice connections using Flask and WebSockets.",
            "Deployed a robust WebRTC engine with STUN/TURN servers to ensure seamless and reliable exchange across restrictive networks.",
            "Revolutionized the user experience with an audio-reactive interface that pulses based on real-time voice frequency data.",
            "Championed a 'Consent-First' architecture where social handles are only revealed upon mutual, explicit agreement.",
        ],
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
        description: [
            "Developed a modern, online show booking website using TypeScript, focusing on a clean user interface and robust booking functionality.",
        ],
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
        description: [
            "Spearheaded the development of a piezoelectric footstep power generation system.",
            "Designed a fall-sensing alert smart jacket for enhanced personal safety.",
        ],
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

export const marqueeSkills = ["ACCESSIBLE", "RESPONSIVE", "DYNAMIC", "INNOVATIVE", "FULL-STACK", "AI-POWERED", "ROBOTICS", "STRATEGIC"];
