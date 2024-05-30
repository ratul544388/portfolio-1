import {
  FaBriefcase,
  FaCode,
  FaFacebook,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoHomeOutline, IoRocketOutline } from "react-icons/io5";
import { TbBrandFiverr, TbMailShare } from "react-icons/tb";
import { TfiUser } from "react-icons/tfi";

import Review_1_image from "@/../public/reviews/user-1.jpg";
import Review_2_image from "@/../public/reviews/user-2.jpg";
import Review_3_image from "@/../public/reviews/user-3.jpg";
import Review_4_image from "@/../public/reviews/user-4.jpg";
import Review_5_image from "@/../public/reviews/user-5.jpg";

import DigitalMarketplace_1 from "@/../public/projects/digital-marketplace/1.png";
import DigitalMarketplace_2 from "@/../public/projects/digital-marketplace/2.png";
import DigitalMarketplace_3 from "@/../public/projects/digital-marketplace/3.png";

import Twitter_1 from "@/../public/projects/twitter/1.png";
import Twitter_2 from "@/../public/projects/twitter/2.png";
import Twitter_3 from "@/../public/projects/twitter/3.png";

import Gym_1 from "@/../public/projects/gym/1.png";
import Gym_2 from "@/../public/projects/gym/2.png";
import Gym_3 from "@/../public/projects/gym/3.png";

import MernBlogApp_1 from "@/../public/projects/mern-blog-app/1.png";
import MernBlogApp_2 from "@/../public/projects/mern-blog-app/2.png";
import MernBlogApp_3 from "@/../public/projects/mern-blog-app/3.png";

import MernNoteApp_1 from "@/../public/projects/mern-note-app/1.png";

import Waffle_1 from "@/../public/projects/waffles/1.png";
import Waffle_2 from "@/../public/projects/waffles/2.png";
import Waffle_3 from "@/../public/projects/waffles/3.png";

import Portfolio_3_1 from "@/../public/projects/portfolio-3/1.png";
import Portfolio_3_2 from "@/../public/projects/portfolio-3/2.png";
import Portfolio_3_3 from "@/../public/projects/portfolio-3/3.png";

import BlogApp_1 from "@/../public/projects/blog-app/1.png";
import BlogApp_2 from "@/../public/projects/blog-app/2.png";
import BlogApp_3 from "@/../public/projects/blog-app/3.png";

import Ecommerce_1 from "@/../public/projects/ecommerce/1.png";
import Ecommerce_2 from "@/../public/projects/ecommerce/2.png";
import Ecommerce_3 from "@/../public/projects/ecommerce/3.png";

import FoodApp_1 from "@/../public/projects/food-app/1.png";
import FoodApp_2 from "@/../public/projects/food-app/2.png";
import FoodApp_3 from "@/../public/projects/food-app/3.png";

import CarInfo_1 from "@/../public/projects/car-info/1.png";
import CarInfo_2 from "@/../public/projects/car-info/2.png";
import CarInfo_3 from "@/../public/projects/car-info/3.png";

import Portfolio_1 from "@/../public/projects/portfolio/1.png";
import Portfolio_2 from "@/../public/projects/portfolio/2.png";
import Portfolio_3 from "@/../public/projects/portfolio/3.png";

import DoctorBooking_1 from "@/../public/projects/doctor-booking/1.png";
import DoctorBooking_2 from "@/../public/projects/doctor-booking/2.png";
import DoctorBooking_3 from "@/../public/projects/doctor-booking/3.png";

import MiniProjects_1 from "@/../public/projects/mini-projects/1.png";
import MiniProjects_2 from "@/../public/projects/mini-projects/2.png";
import MiniProjects_3 from "@/../public/projects/mini-projects/3.png";

import CalmLandingPage_1 from "@/../public/projects/calm-landing-page/1.png";
import CalmLandingPage_2 from "@/../public/projects/calm-landing-page/2.png";
import CalmLandingPage_3 from "@/../public/projects/calm-landing-page/3.png";

import UniversityLandingPage_1 from "@/../public/projects/university-landing-page/1.png";
import UniversityLandingPage_2 from "@/../public/projects/university-landing-page/2.png";
import UniversityLandingPage_3 from "@/../public/projects/university-landing-page/3.png";

import GrassRootLandingPage_1 from "@/../public/projects/grass-root-landing-page/1.png";
import GrassRootLandingPage_2 from "@/../public/projects/grass-root-landing-page/2.png";
import GrassRootLandingPage_3 from "@/../public/projects/grass-root-landing-page/3.png";

export const myTwitterLink = "https://twitter.com/Ratul2582";
export const myGithubLink = "https://github.com/ratul544388";
export const MyLinkdinLink =
  "https://www.linkedin.com/in/ratul-islam-a0774521a";
export const myFacebookLink = "https://www.facebook.com/ratul544388";
export const myEmail = "ratulislam544388@gmail.com";
export const myAddress = "Keranigonj Dhaka 1310, Bangladesh";
export const myPhone = "+8801815555105";
export const myFiverrLink = "https://www.fiverr.com/ratul544";

export const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: IoRocketOutline,
  },
  {
    label: "About",
    href: "/about",
    icon: TfiUser,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: FaCode,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: TbMailShare,
  },
];

export const socialIcons = [
  {
    icon: FaGithub,
    href: myGithubLink,
  },
  {
    icon: FaLinkedin,
    href: MyLinkdinLink,
  },
  {
    icon: FaTwitter,
    href: myTwitterLink,
  },
  {
    icon: FaFacebook,
    href: myFacebookLink,
  },
  {
    icon: TbBrandFiverr,
    href: myFiverrLink,
  },
];

export const projects = [
  {
    name: "Gym Admin Management",
    images: [Gym_1, Gym_2, Gym_3],
    features: [
      "👥 Enroll new members",
      "📝 Define and manage membership plans",
      "🔄 Renew memberships",
      "🔍 View and filter member list",
      "📊 Track member status (active, expiring, expired)",
      "🔍 Access detailed member profiles",
      "📈 Dashboard overview with key metrics",
      "📊 Visualize data with charts",
      "🔒 Ensure data security and privacy",
    ],
    tags: [],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Crips",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
    ],
    githubLink: "https://github.com/ratul544388/gym-admin-management",
    deployedLink: "https://afsg.vercel.app/",
  },
  {
    name: "Waffle & Muscle Juice Bar",
    images: [Waffle_1, Waffle_2, Waffle_3],
    tags: ["latest", "ecommerce"],
    features: [
      "🍽️ Create, update, delete food items",
      "🥞 Two categories of food: waffle and drinks",
      "🛒 Add to cart functionality",
      "📋 Order food",
      "🔍 Search and filter food items",
      "💬 Real-time chat with Scrips SDK",
    ],
    technologies: [
      "React",
      "Framer Motion",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
    ],
    githubLink: "https://github.com/ratul544388/waffle",
    deployedLink: "https://waffle-two.vercel.app/",
  },
  {
    name: "Mern Blog App",
    images: [MernBlogApp_1, MernBlogApp_2, MernBlogApp_3],
    tags: ["blog", "latest"],
    features: [
      "📝 CRUD functionality for blogs (Create, Read, Update, Delete)",
      "🔒 Only admin can post blogs",
      "👍 Like & dislike functionality for blogs",
      "💬 Comments on blogs",
      "🖥️ Admin dashboard to manage posts and users",
      "🔐 Secure authentication with JWT (JSON Web Tokens)",
    ],
    technologies: ["React", "Express", "Node.js", "Mongodb"],
    githubLink: "https://github.com/ratul544388/mern-blog-app",
    deployedLink: "https://mern-blog-app-kij0.onrender.com/",
  },
  {
    name: "Digital Marketplace",
    images: [DigitalMarketplace_1, DigitalMarketplace_2, DigitalMarketplace_3],
    tags: ["ecommerce", "latest"],
    features: [
      "🛒 Multi-vendor platform for selling digital products",
      "📝 User registration as both buyer and seller",
      "💻 Purchase and sell digital products like icon packs or UI kits",
      "🛍️ Add to cart functionality for buyers",
      "📦 Instant delivery of purchased items through email",
      "💳 Secure payment processing with Stripe integration",
      "📊 Seller dashboard for managing products and analysis",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Node Mailer",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/digital-marketplace",
    deployedLink: "https://digital-marketplace-rouge.vercel.app",
  },
  {
    name: "Aniated Glowing Portfolio",
    images: [Portfolio_3_1, Portfolio_3_2, Portfolio_3_3],
    tags: ["portfolio", "latest"],
    features: [
      "🖼️ Interactive portfolio showcasing projects and skills",
      "🎨 Smooth animations and transitions with Framer Motion",
      "✨ Advanced animations and effects with GSAP",
      "📱 Responsive design for mobile and desktop",
      "📝 About section highlighting personal information and background",
      "🔗 Links to social media profiles and contact information",
      "🔍 Dynamic filtering or sorting of projects",
      "📄 Downloadable resume or CV",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "ShadcnUI",
      "Framer motion",
      "Gsap",
    ],
    githubLink: "https://github.com/ratul544388/portfolio-1",
    deployedLink: "https://portfolio-1-lime-xi.vercel.app/",
  },
  {
    name: "Twitter clone",
    images: [Twitter_1, Twitter_2, Twitter_3],
    tags: ["social media"],
    features: [
      "🐦 User signup and tweet functionality",
      "👥 Follow or get followed by other users",
      "❤️ Like, retweet, share, and reply to tweets",
      "💬 View a tweet and its replies",
      "📝 Create, edit, or delete tweets",
      "👥 Communities page with public and private communities",
      "🔒 Community privacy settings (public/private)",
      "👨‍👩‍👦‍👦 Community roles: admin, moderators, members",
      "📰 Private posts within communities",
      "💳 Subscription with Stripe for blue badge",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/Twitter-clone-next-14",
    deployedLink: "https://twitter-clone-next-14.vercel.app",
  },
  {
    name: "Food Delivery App",
    images: [FoodApp_1, FoodApp_2, FoodApp_3],
    tags: ["ecommerce"],
    features: [
      "🍔 User registration and authentication",
      "📦 Browse and search for food items",
      "🛒 Add to cart functionality for users",
      "🚚 Track orders in real-time",
      "📝 Admin dashboard for managing food items",
      "📊 Dashboard analytics for revenue analysis",
      "📋 Create, update, and delete food items (admin)",
      "💳 Secure payment processing with Stripe",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/quick-bite",
    deployedLink: "https://quick-bite-eosin.vercel.app",
  },
  {
    name: "Portfolio Website",
    images: [Portfolio_1, Portfolio_2, Portfolio_3],
    tags: ["portfolio", "latest"],
    features: [
      "🖼️ Interactive portfolio showcasing projects and skills",
      "🎨 Smooth animations and transitions with Framer Motion",
      "✨ Advanced animations and effects with GSAP",
      "📱 Responsive design for mobile and desktop",
      "📝 About section highlighting personal information and background",
      "🔗 Links to social media profiles and contact information",
      "🔍 Dynamic filtering or sorting of projects",
      "📄 Downloadable resume or CV",
    ],
    technologies: ["React", "Next.js", "TypeScript", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Shopping App",
    images: [Ecommerce_1, Ecommerce_2, Ecommerce_3],
    tags: ["ecommerce", "latest"],
    features: [
      "👗 User registration and authentication",
      "👀 Browse and search for trendy clothing items",
      "🛒 Add to cart functionality for users",
      "📦 Wishlist feature for saving favorite items",
      "👚 Filter options by category, size, color, etc.",
      "📱 Responsive design for mobile and desktop",
      "💳 Secure payment processing",
      "🚚 Track orders in real-time",
      "📝 Admin dashboard for managing clothing items",
      "📊 Dashboard analytics for sales and inventory management",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/ecommerce",
    deployedLink: "https://ecommerce-coral-delta.vercel.app",
  },
  {
    name: "Blog app",
    images: [BlogApp_1, BlogApp_2, BlogApp_3],
    tags: ["social media"],
    features: [
      "📝 CRUD functionality for blogs (Create, Read, Update, Delete)",
      "🔒 Only admin can post blogs",
      "👍 Like & dislike functionality for blogs",
      "💬 Comments on blogs",
      "🖥️ Admin dashboard to manage posts and users",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
      "Tanstack Query",
    ],
    githubLink: "https://github.com/ratul544388/blog-app",
    deployedLink: "https://blog-app-chi-drab.vercel.app",
  },
  {
    name: "Doctor Booking App",
    images: [DoctorBooking_1, DoctorBooking_2, DoctorBooking_3],
    tags: ["booking"],
    features: [
      "👩‍⚕️ User registration and authentication",
      "📅 View doctor availability and schedule appointments",
      "📝 Book appointments with preferred doctors",
      "🔍 Search for doctors by specialty, location, etc.",
      "🚶‍♂️ Manage appointments and view booking history",
      "👨‍⚕️ Admin dashboard for adding new doctors",
      "📊 Dashboard analytics for appointment statistics",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "ShadcnUI",
      "Mongodb",
      "Prisma",
      "Stripe",
    ],
    githubLink: "https://github.com/ratul544388/Doctor-Booking-App",
    deployedLink: "https://doctor-booking-app.vercel.app",
  },
  {
    name: "Mini Projects & games",
    images: [MiniProjects_1, MiniProjects_2, MiniProjects_3],
    tags: [],
    features: [
      "📝 Todo List App",
      "⭕ Tic Tac Toe Game",
      "🌍 Country Capital Finder Game",
      "🎲 Hangman Game",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/mini-projects",
    deployedLink: "https://mini-projects-zeta.vercel.app",
  },
  {
    name: "Car Booking App",
    images: [CarInfo_1, CarInfo_2, CarInfo_3],
    tags: ["booking"],
    features: [
      "🚗 Browse and search for available cars",
      "📅 Schedule car rentals for specific dates",
      "📝 Book cars with preferred features and specifications",
      "🔍 Search for cars by make, model, or price range",
    ],
    technologies: ["TypeScript", "Next.js", "React", "ShadcnUI"],
    githubLink: "https://github.com/ratul544388/car-hub",
    deployedLink:
      "https://portfolio-two-sepia-49.vercel.app/https://car-hub-dusky-eta.vercel.app",
  },
  {
    name: "Calm Landing Page",
    images: [CalmLandingPage_1, CalmLandingPage_2, CalmLandingPage_3],
    features: [
      "🌅 Beautiful, calming imagery and visuals",
      "🧘‍♂️ Guided meditation or mindfulness exercises",
      "🌊 Animated effects to create a sense of calmness",
      "📱 Responsive design for seamless viewing on all devices",
      "🎨 Clean and minimalist design inspired by nature",
    ],
    tags: ["landing page", "latest"],
    technologies: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/calm-landing-page",
    deployedLink: "https://calm-landing-page.vercel.app/",
  },
  {
    name: "University Landing Page",
    images: [
      UniversityLandingPage_1,
      UniversityLandingPage_2,
      UniversityLandingPage_3,
    ],
    tags: ["landing page"],
    features: [
      "🎓 University Logo Animation",
      "🏫 Campus Overview Animation",
      "📚 Interactive Program Highlights",
      "🎓 Faculty and Student",
      "🎨 Aesthetic Design Transitions",
      "📱 Responsive Layout for all Devices",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink: "https://github.com/ratul544388/university-landing-page",
    deployedLink:
      "https://university-landing-page-7jiet8en9-ratul544388.vercel.app/",
  },
  {
    name: "Mern Note App",
    images: [MernNoteApp_1],
    features: [
      "📝 Create, read, update, and delete notes",
      "🔒 User authentication and authorization",
      "📱 Responsive design for mobile and desktop use",
    ],
    tags: [],
    technologies: ["TypeScript", "Note.js", "Express", "React"],
    githubLink: "https://github.com/ratul544388/mern-note-app",
    deployedLink: "https://mern-note-app-qyl8.onrender.com/",
  },
  {
    name: "Grass Root Landing Page",
    images: [
      GrassRootLandingPage_1,
      GrassRootLandingPage_2,
      GrassRootLandingPage_3,
    ],
    tags: ["landing page"],
    features: [
      "🌱 Simple and clean design",
      "🌿 Nature-inspired visuals",
      "🌳 Green color palette",
      "📰 Latest news or updates",
      "🌍 Information about grassroots initiatives",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Framer motion"],
    githubLink:
      "https://github.com/ratul544388/grass-root-farmers-landing-page",
    deployedLink: "https://grass-root-farmers-landing-page.vercel.app/",
  },
];

export const tags = [
  "all projects",
  "latest",
  "ecommerce",
  "social media",
  "blog",
  "booking",
  "portfolio",
  "landing page",
] as const;

export const skills = [
  {
    label: "Html",
    image: "/skills/html.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "css",
    image: "/skills/css.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "Tailwind CSS",
    image: "/skills/tailwind-css.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "JavaScript",
    image: "/skills/javascript.png",
    fontend: true,
    skillPercentage: 100,
  },
  {
    label: "TypeScript",
    image: "/skills/typescript.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "Shadcn UI",
    image: "/skills/shadcn-ui.png",
    frontend: true,
    skillPercentage: 100,
  },
  {
    label: "Framer Motion",
    image: "/skills/framer-motion.png",
    frontend: true,
    skillPercentage: 90,
  },
  {
    label: "Next Js",
    image: "/skills/framer-motion.png",
    frontend: true,
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "Express",
    image: "/skills/express.png",
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "MySQL",
    image: "/skills/mysql.png",
    backend: true,
    skillPercentage: 90,
  },
  {
    label: "MongoDB",
    image: "/skills/mongodb.png",
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "Prisma",
    image: "/skills/prisma.png",
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "Tanstack Query",
    image: "/skills/tanstack-query.png",
    backend: true,
    skillPercentage: 100,
  },
  {
    label: "Stripe",
    image: "/skills/stripe.png",
    backend: true,
    skillPercentage: 50,
  },
];

export const reviews = [
  {
    name: "John Doe",
    username: "john_doe123",
    image: Review_1_image,
    comment:
      "As a fellow developer, I must say your work is impressive! Your attention to detail and problem-solving skills are top-notch.",
  },
  {
    name: "Alex Johnson",
    username: "alex_johnson789",
    image: Review_2_image,
    comment:
      "Your projects are inspiring! Your ability to create seamless user experiences is commendable.",
  },
  {
    name: "Jane Smith",
    username: "jane_smith456",
    image: Review_3_image,
    comment:
      "Wow, your coding skills are incredible! I'm amazed at how efficiently you handle both front-end and back-end development.",
  },
  {
    name: "Emily Brown",
    username: "emily_brown321",
    image: Review_4_image,
    comment:
      "Your problem-solving skills are next level! It's evident that you're dedicated to delivering high-quality work.",
  },
  {
    name: "Michael Lee",
    username: "michael_lee654",
    image: Review_5_image,
    comment:
      "Impressive work, as always! Your expertise in both front-end and back-end development shines through in every project.",
  },
];

export const experiences = [
  {
    title: "Self-Taught Full Stack Developer",
    icon: FaGraduationCap,
    location: "Dhaka, Bangladesh",
    description:
      "I embarked on a self-learning journey to become a full-stack web developer. I dedicated my time to learning various technologiesnologies, including TypeScript, React, Tailwind CSS, Node.js, Next.js, MongoDB, and more. Through online courses, tutorials, and personal projects, I gained hands-on experience in building web applications from scratch.",
    date: "2022",
  },
  {
    title: "Personal Projects",
    icon: FaLaptopCode,
    location: "Dhaka",
    description:
      "Throughout my learning journey, I worked on several personal projects to apply and reinforce my skills. These projects include (mention some of your projects along with a brief description of each). Through these projects, I honed my problem-solving abilities, improved my coding skills, and gained valuable experience in software development.",
    date: "2023 - 2024",
  },
  {
    title: "Freelance Web Developer",
    icon: FaBriefcase,
    location: "Remote",
    description:
      "As a freelance web developer, I collaborated with clients to bring their ideas to life. I specialized in creating custom websites and web applications tailored to their specific needs. From conceptualization to deployment, I provided end-to-end development services, ensuring high-quality solutions that met client requirements and exceeded expectations.",
    date: "2024",
  },
];

export const services = [
  {
    title: "Design",
    description:
      "Our design services focus on bringing creativity to life, crafting visually stunning and functional designs that captivate your audience and enhance your brand identity. From conceptualization to execution, we ensure every detail is meticulously crafted to convey your message effectively and leave a lasting impression.",
    image: "/services/design.png",
  },
  {
    title: "Developer",
    description:
      "As developers, we transform ideas into reality, leveraging cutting-edge technologiesnologies to build robust and scalable solutions tailored to your specific needs. Our expertise spans across various platforms and frameworks, ensuring seamless performance and user satisfaction while adhering to industry best practices and standards.",
    image: "/services/developer.png",
  },
  {
    title: "UI/UX",
    description:
      "Our UI/UX services are dedicated to elevating user experiences, combining intuitive interfaces with engaging interactions to create seamless journeys that delight and retain your audience. Through meticulous research and testing, we ensure every design decision is guided by user needs and behaviors, resulting in a product that not only looks great but also delivers exceptional usability and satisfaction.",
    image: "/services/ui-ux.png",
  },
];
