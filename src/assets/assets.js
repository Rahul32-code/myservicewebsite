// assets/assets.js
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook,
  Code,
  ShoppingCart,
  BookOpen,
  Globe,
  Users,
  Database,
  Zap,
  Shield,
  Smartphone,
  Search,
  Palette
} from "lucide-react";

// assets/assets.js
import logo from './logo.svg';

export const asset = {
  logo: logo
};

// Menu links
export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    dropdown: [
      { name: "Landing Pages", path: "/services/landing-pages" },
      { name: "E-Commerce", path: "/services/ecommerce" },
      { name: "Blog Websites", path: "/services/blog" },
      { name: "CMS Development", path: "/services/cms" },
      { name: "LMS Platforms", path: "/services/lms" },
      { name: "Dynamic Websites", path: "/services/dynamic" }
    ]
  },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" }
];

// Social links
export const socialLinks = [
  { 
    icon: Github, 
    link: "https://github.com",
    name: "Github"
  },
  { 
    icon: Linkedin, 
    link: "https://linkedin.com",
    name: "Linkedin"
  },
  { 
    icon: Twitter, 
    link: "https://twitter.com", 
    name: "Twitter"
  },
  { 
    icon: Facebook, 
    link: "https://facebook.com",
    name: "Facebook"
  }
];

// Services data
export const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive business growth with modern UI/UX.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Conversion Focused"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store solutions including single vendor and multi-vendor marketplaces.",
    features: ["Payment Integration", "Inventory Management", "Multi-vendor Support", "Admin Dashboard"]
  },
  {
    icon: BookOpen,
    title: "Blog Platforms",
    description: "Content management systems tailored for bloggers with intuitive publishing workflows.",
    features: ["SEO Friendly", "Content Scheduling", "Comment Systems", "Social Sharing"]
  },
  {
    icon: Database,
    title: "CMS Development",
    description: "Custom content management systems that give you full control over your website content.",
    features: ["Custom Admin Panels", "User Management", "Media Libraries", "Role-based Access"]
  },
  {
    icon: Users,
    title: "LMS Platforms",
    description: "Learning management systems for educational institutions and online course creators.",
    features: ["Course Management", "Student Progress", "Quiz Systems", "Certificate Generation"]
  },
  {
    icon: Zap,
    title: "Dynamic Websites",
    description: "Interactive websites with real-time features and dynamic content updates.",
    features: ["Real-time Updates", "API Integration", "User Interactions", "Dynamic Content"]
  }
];

// Skills data
export const skills = [
  { name: "PHP", level: 90, icon: Code },
  { name: "React", level: 85, icon: Zap },
  { name: "Node.js", level: 80, icon: Database },
  { name: "Responsive Design", level: 95, icon: Smartphone },
  { name: "SEO Optimization", level: 75, icon: Search },
  { name: "UI/UX Design", level: 70, icon: Palette }
];

// Portfolio projects
export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Marketplace",
    category: "E-Commerce",
    image: "/project1.jpg",
    description: "Multi-vendor e-commerce platform with advanced vendor management system.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Educational LMS",
    category: "LMS",
    image: "/project2.jpg",
    description: "Complete learning management system for online course delivery.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
  },
  {
    id: 3,
    title: "Corporate Blog",
    category: "Blog",
    image: "/project3.jpg",
    description: "Modern blog platform with content management and social features.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 4,
    title: "Business Landing Page",
    category: "Landing Page",
    image: "/project4.jpg",
    description: "High-converting landing page for SaaS product launch.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 5,
    title: "Custom CMS",
    category: "CMS",
    image: "/project5.jpg",
    description: "Tailored content management system for media company.",
    technologies: ["PHP", "MySQL", "jQuery", "Custom API"]
  },
  {
    id: 6,
    title: "Dynamic Web App",
    category: "Dynamic Website",
    image: "/project6.jpg",
    description: "Interactive web application with real-time data updates.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"]
  }
];

export const assets = {
  logo
};