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
  Instagram,
  Phone,
  Mail,
  CreditCard,
  MessageCircle,
} from "lucide-react";

import logo from "./logo.svg";

export const assets = {
  logo: logo,
};

// Menu links
export const menuLinks = [
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
  { name: "Blog", path: "#" },
  { name: "Contact", path: "/contact" },
];

// Social links
export const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/Rahul32-code",
    name: "Github",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/rahul-gupta-8497aa249/",
    name: "Linkedin",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/rahul.webdeveloper/",
    name: "Facebook",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/rahuldeveloper/",
    name: "Instagram",
  },
];

export const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    action: "Start Chat",
    color: "bg-green-500",
    link: "https://wa.me/919625968793",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk directly for complex queries",
    action: "Call Now",
    color: "bg-blue-500",
    link: "tel:+919625968793",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed responses within hours",
    action: "Send Email",
    color: "bg-purple-500",
    link: "mailto:info@rahulcode.in",
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

// Services Page
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

export const faqCategories = [
  {
    title: "General Questions",
    icon: Globe,
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "I offer comprehensive web development services including landing pages, e-commerce solutions, blog platforms, CMS development, LMS platforms, and dynamic websites using modern technologies like PHP, React, and Node.js.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on complexity. Landing pages: 1-2 weeks, E-commerce: 3-6 weeks, Custom CMS: 4-8 weeks. I provide detailed timelines during our initial consultation.",
      },
      {
        question: "Do you work with international clients?",
        answer:
          "Yes, I work with clients worldwide. I'm comfortable with different time zones and use tools like Slack, Zoom, and email for smooth communication.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    icon: CreditCard,
    faqs: [
      {
        question: "What's your pricing structure?",
        answer:
          "I offer project-based pricing for clarity. After understanding your requirements, I provide a fixed quote. For ongoing work, I also offer hourly rates and monthly retainers.",
      },
      {
        question: "Do you require upfront payment?",
        answer:
          "I typically require a 50% deposit to start the project, with the remaining 50% due upon completion. For larger projects, we can discuss milestone-based payments.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "I accept bank transfers, UPI, PayPal, and other digital payment methods. All payments are secure and invoiced properly.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: Database,
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "I work with PHP, React, Node.js, MySQL, MongoDB, Tailwind CSS, and various frameworks. I choose the best technology stack based on your project requirements.",
      },
      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes, I offer ongoing maintenance packages that include updates, security patches, backups, and technical support to keep your website running smoothly.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely! All websites I develop are fully responsive and optimized for all devices - desktop, tablet, and mobile.",
      },
    ],
  },
  {
    title: "Support & Communication",
    icon: Users,
    faqs: [
      {
        question: "What's your communication process?",
        answer:
          "I maintain regular communication through your preferred channel (email, WhatsApp, video calls). Weekly progress updates and quick response times are my standard.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes, I offer 30 days of free support after project completion. After that, you can choose from my maintenance plans for ongoing support.",
      },
      {
        question: "What are your working hours?",
        answer:
          "I'm available Monday to Saturday, 9 AM to 6 PM IST. For urgent matters, I'm reachable beyond these hours as well.",
      },
    ],
  },
];

export const termSections = [
    {
      title: "Introduction",
      content: "Welcome to Rahul Developer. These Terms and Conditions govern your use of my website and services. By accessing or using my services, you agree to be bound by these Terms."
    },
    {
      title: "Services Description",
      content: "I provide web development services including but not limited to: website design, e-commerce development, CMS development, LMS platforms, and custom web applications. All services are provided on a project basis as agreed upon in our contract."
    },
    {
      title: "Payment Terms",
      content: "Projects require a 50% advance payment before work begins. The remaining 50% is due upon project completion. For ongoing projects, payment schedules will be outlined in our agreement. All payments are non-refundable once work has commenced.",
      points: [
        "50% advance payment required to start project",
        "Balance 50% due upon project completion",
        "Additional revisions beyond scope may incur extra charges",
        "Payment methods: Bank transfer, UPI, PayPal"
      ]
    },
    {
      title: "Project Timeline",
      content: "Project timelines are estimates and may vary based on project complexity and client responsiveness. I will provide a detailed timeline during our initial consultation and keep you updated on progress.",
      points: [
        "Landing Pages: 1-2 weeks",
        "E-commerce Websites: 3-6 weeks", 
        "Custom CMS: 4-8 weeks",
        "Complex Applications: 8+ weeks"
      ]
    },
    {
      title: "Client Responsibilities",
      content: "As a client, you agree to:",
      points: [
        "Provide all necessary content, images, and information in a timely manner",
        "Respond to queries and feedback within reasonable timeframes",
        "Make timely payments as per agreed schedule",
        "Provide clear and constructive feedback during review phases"
      ]
    },
    {
      title: "Intellectual Property",
      content: "Upon full payment, you will receive full ownership of the delivered website and its code. I retain the right to display the project in my portfolio and marketing materials. Third-party assets (images, fonts, plugins) may have their own licensing terms.",
      points: [
        "Client receives full ownership after final payment",
        "I retain portfolio display rights",
        "Third-party assets subject to their respective licenses",
        "Source code delivered upon project completion"
      ]
    },
    {
      title: "Revisions and Changes",
      content: "Each project includes reasonable revisions as outlined in our agreement. Major changes or additions to the original scope may require additional time and cost, which will be communicated and agreed upon in advance.",
      points: [
        "2-3 rounds of revisions included in standard packages",
        "Additional revisions billed at hourly rate",
        "Scope changes require written approval",
        "Change requests should be consolidated"
      ]
    },
    {
      title: "Warranty and Support",
      content: "I provide 30 days of free support after project delivery for any bugs or issues. This does not cover new features, major changes, or issues caused by client modifications. Extended support plans are available.",
      points: [
        "30 days free bug-fixing support",
        "Support for issues in delivered code",
        "Excludes new features and major changes",
        "Extended support plans available"
      ]
    },
    {
      title: "Limitation of Liability",
      content: "I strive to deliver high-quality services, but I cannot guarantee specific business results. My liability is limited to the project fee paid. I'm not liable for indirect damages, loss of data, or business interruptions."
    },
    {
      title: "Termination",
      content: "Either party may terminate a project with written notice. If terminated by client after work has commenced, payment will be due for work completed up to that point. All materials and code remain my property until full payment is received."
    },
    {
      title: "Governing Law",
      content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Delhi, India."
    },
    {
      title: "Changes to Terms",
      content: "I reserve the right to modify these Terms at any time. Continued use of my services after changes constitutes acceptance of the modified Terms. Significant changes will be communicated to existing clients."
    }
  ];

