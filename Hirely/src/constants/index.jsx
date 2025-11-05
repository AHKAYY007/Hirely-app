import { Users, UserCheck, Search, TrendingUp, Shield, BarChart3 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "James Whitmore",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Harper van Leeuwen",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Marcus O.",
    company: "HR Manager, FinEdge",
    image: user3,
    text: "Their hiring process is pure wizardry. Every candidate felt like a perfect puzzle piece for our team.",
  },
  {
    user: "Bohdan Kryvtsov",
    company: "Founder, BoldTech",
    image: user4,
    text: "A complete game-changer! We scaled operations faster than expected and onboarded talent that boosted our revenue within months.",
  },
  {
    user: "Ewan McCallister",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Lydia M.",
    company: "COO, CrestLine Group",
    image: user6,
    text: "Consultants who actually understand growth. They delivered strategies that aligned with our vision and made execution seamless.",
  },
];

export const features = [
  {
    icon: <Users />,
    text: "Smart Talent Matching",
    description:
      "Advanced algorithms connect you with the perfect candidates based on skills, culture fit, and experience.",
  },
  {
    icon: <Search />,
    text: "Global Talent Pool",
    description:
      "Access a diverse network of qualified professionals from around the world across all industries.",
  },
  {
    icon: <UserCheck />,
    text: "Expert Consultants",
    description:
      "Work with seasoned consultants who provide strategic guidance tailored to your business needs.",
  },
  {
    icon: <TrendingUp />,
    text: "Scalable Solutions",
    description:
      "Build and expand your team quickly with our streamlined hiring process designed for growth.",
  },
  {
    icon: <Shield />,
    text: "Quality Assurance",
    description:
      "Rigorous vetting process ensures you only get the best talent that meets your quality standards.",
  },
  {
    icon: <BarChart3 />,
    text: "Performance Analytics",
    description:
      "Track hiring metrics and ROI with comprehensive dashboards and detailed insights.",
  },
];

export const checklistItems = [
  {
    title: "Quick Candidate Screening",
    description:
      "Automated pre-screening filters candidates efficiently, saving you time and resources.",
  },
  {
    title: "Direct Communication Channels",
    description:
      "Connect directly with candidates and consultants through integrated messaging and video calls.",
  },
  {
    title: "AI-Powered Matchmaking",
    description:
      "Smart matching algorithms analyze compatibility to ensure you find the right fit faster.",
  },
  {
    title: "Instant Onboarding Support",
    description:
      "Seamless onboarding tools and resources get your new hires productive from day one.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Our Courses" },
  { href: "#", text: "Course Catalog" },
  { href: "#", text: "Training Calendar" },
  { href: "#", text: "Resources" },
  { href: "#", text: "FAQs" },
];

export const platformLinks = [
  { href: "#", text: "For Learners" },
  { href: "#", text: "For Organizations" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Register Online" },
  { href: "#", text: "Contact Us" },
];

export const communityLinks = [
  { href: "#", text: "Training Programs" },
  { href: "#", text: "CPD Courses" },
  { href: "#", text: "Consultancy Services" },
  { href: "#", text: "Student Portal" },
  { href: "#", text: "Support" },
];