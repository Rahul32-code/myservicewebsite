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
  Palette,
  Rocket,
  Clock,
  Star,
  Heart,
  Coffee,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";

import logo from "./logo.svg";

export const assets = {
  logo: logo,
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
      { name: "Dynamic Websites", path: "/services/dynamic" },
    ],
  },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

// Social links
export const socialLinks = [
  {
    icon: Github,
    link: "https://github.com",
    name: "Github",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com",
    name: "Linkedin",
  },
  {
    icon: Twitter,
    link: "https://twitter.com",
    name: "Twitter",
  },
  {
    icon: Facebook,
    link: "https://facebook.com",
    name: "Facebook",
  },
];

// Services data
export const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive business growth with modern UI/UX.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Conversion Focused",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete online store solutions including single vendor and multi-vendor marketplaces.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Multi-vendor Support",
      "Admin Dashboard",
    ],
  },
  {
    icon: BookOpen,
    title: "Blog Platforms",
    description:
      "Content management systems tailored for bloggers with intuitive publishing workflows.",
    features: [
      "SEO Friendly",
      "Content Scheduling",
      "Comment Systems",
      "Social Sharing",
    ],
  },
  {
    icon: Database,
    title: "CMS Development",
    description:
      "Custom content management systems that give you full control over your website content.",
    features: [
      "Custom Admin Panels",
      "User Management",
      "Media Libraries",
      "Role-based Access",
    ],
  },
  {
    icon: Users,
    title: "LMS Platforms",
    description:
      "Learning management systems for educational institutions and online course creators.",
    features: [
      "Course Management",
      "Student Progress",
      "Quiz Systems",
      "Certificate Generation",
    ],
  },
  {
    icon: Zap,
    title: "Dynamic Websites",
    description:
      "Interactive websites with real-time features and dynamic content updates.",
    features: [
      "Real-time Updates",
      "API Integration",
      "User Interactions",
      "Dynamic Content",
    ],
  },
];

// Skills data
export const skills = [
  { name: "PHP", level: 90, icon: Code },
  { name: "React", level: 85, icon: Zap },
  { name: "Node.js", level: 80, icon: Database },
  { name: "Responsive Design", level: 95, icon: Smartphone },
  { name: "SEO Optimization", level: 75, icon: Search },
  { name: "UI/UX Design", level: 70, icon: Palette },
];

// Portfolio projects
export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Marketplace",
    category: "E-Commerce",
    image: "/project1.jpg",
    description:
      "Multi-vendor e-commerce platform with advanced vendor management system.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Educational LMS",
    category: "LMS",
    image: "/project2.jpg",
    description:
      "Complete learning management system for online course delivery.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Corporate Blog",
    category: "Blog",
    image: "/project3.jpg",
    description:
      "Modern blog platform with content management and social features.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 4,
    title: "Business Landing Page",
    category: "Landing Page",
    image: "/project4.jpg",
    description: "High-converting landing page for SaaS product launch.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    title: "Custom CMS",
    category: "CMS",
    image: "/project5.jpg",
    description: "Tailored content management system for media company.",
    technologies: ["PHP", "MySQL", "jQuery", "Custom API"],
  },
  {
    id: 6,
    title: "Dynamic Web App",
    category: "Dynamic Website",
    image: "/project6.jpg",
    description: "Interactive web application with real-time data updates.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
];

// Stats Data - Home Page के लिए
export const statsData = [
  {
    number: "50",
    suffix: "+",
    label: "Projects Completed",
    color: "text-blue-600",
    icon: Rocket,
    description: "Successful projects delivered",
  },
  {
    number: "3",
    suffix: "+",
    label: "Years Experience",
    color: "text-purple-600",
    icon: Clock,
    description: "In web development",
  },
  {
    number: "100",
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-green-600",
    icon: Star,
    description: "Happy clients",
  },
  {
    number: "24",
    suffix: "/7",
    label: "Support",
    color: "text-orange-600",
    icon: Users,
    description: "Customer support",
  },
];

export const WhyChooseUsCards = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "I write maintainable, scalable code following best practices and industry standards.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality and attention to detail.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "Your satisfaction is my priority. I work closely with you to understand your vision.",
  },
  {
    icon: Target,
    title: "Result Driven",
    description:
      "Focus on delivering solutions that drive real business results and user engagement.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality checks to ensure bug-free, smooth performance.",
  },
  {
    icon: Heart,
    title: "Passionate",
    description:
      "Genuine love for development that translates into exceptional work quality.",
  },
];

// Services Page के लिए Stats
export const servicesStats = [
  {
    number: "48",
    suffix: "hr",
    label: "Avg Delivery Time",
    color: "text-blue-600",
    icon: Clock,
    description: "Fast turnaround",
  },
  {
    number: "100",
    suffix: "%",
    label: "Code Quality",
    color: "text-green-600",
    icon: Shield,
    description: "Clean & optimized",
  },
  {
    number: "50",
    suffix: "+",
    label: "Components Built",
    color: "text-purple-600",
    icon: Code,
    description: "Reusable components",
  },
  {
    number: "24",
    suffix: "/7",
    label: "Support",
    color: "text-orange-600",
    icon: Users,
    description: "Always available",
  },
];

export const colorSchemes = {
  hero: {
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    bg: "from-blue-50 via-purple-50 to-pink-50",
    text: "text-blue-600",
  },
  services: [
    {
      gradient: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      gradient: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      gradient: "from-green-500 to-green-600",
      text: "text-green-600",
      bg: "bg-green-50",
    },
    {
      gradient: "from-orange-500 to-orange-600",
      text: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      gradient: "from-red-500 to-red-600",
      text: "text-red-600",
      bg: "bg-red-50",
    },
    {
      gradient: "from-indigo-500 to-indigo-600",
      text: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ],
  stats: [
    { color: "text-blue-600", bg: "bg-blue-500" },
    { color: "text-purple-600", bg: "bg-purple-500" },
    { color: "text-green-600", bg: "bg-green-500" },
    { color: "text-orange-600", bg: "bg-orange-500" },
  ],
};
