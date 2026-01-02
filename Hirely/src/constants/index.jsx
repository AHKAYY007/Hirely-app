import { Users, BookOpen, Award } from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: <BookOpen />,
    text: "In-depth Tutoring",
    description: "Learners supported from start to finish with comprehensive guidance and personalised attention.",
  },
  {
    icon: <Users />,
    text: "Dedicated Tutors",
    description: "Our tutors are dedicated professionals, reachable and available after class hours for support.",
  },
  {
    icon: <Award />,
    text: "Online & On-site Exams",
    description: "Test your knowledge via our secure on-site or online exams portal with complete flexibility.",
  },
];

export const checklistItems = [
  {
    title: "NCFE CACHE Accredited",
    description: "All courses are NCFE CACHE accredited and CPD certified, recognised nationally.",
  },
  {
    title: "Blended Learning",
    description: "From January 2026, courses delivered via blended learning combining virtual and face-to-face sessions.",
  },
  {
    title: "Work Placements",
    description: "The Centre provides work placements to enable learners to complete their course successfully.",
  },
  {
    title: "Funding & Loans",
    description: "Access Advanced Learner Loans and funding for Levels 2, 3, 4, and 5 qualifications.",
  },
  {
    title: "Laser e-Portfolio",
    description: "Learn and track progress using Laser e-Portfolio: https://cftconsult.laserlearning.co.uk",
  },
  {
    title: "CPD Online Platform",
    description: "Access courses via our comprehensive online CPD learning platform with flexible scheduling.",
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

// Courses by Category
export const courseCategories = [
  {
    name: "Leadership",
    courses: [
      { title: "NCFE CACHE Level 5 Diploma in Leadership for Health and Social Care and Children and Young People's Services (England)", code: "601/4312/5/CYPM" },
      { title: "NCFE CACHE Level 5 Diploma for the Early Years Senior Practitioner", code: "603/3907/X" },
    ],
  },
  {
    name: "Early Years",
    courses: [
      { title: "NCFE CACHE Level 3 Diploma for Working in the Early Years Sector (Early Years Educator)", code: "610/4164/6" },
      { title: "NCFE CACHE Level 3 Diploma for Residential Childcare (England)", code: "601/4852/4" },
      { title: "NCFE CACHE Level 2 Certificate for the Children and Young People's Workforce (England)", code: "601/3395/8" },
      { title: "NCFE CACHE Level 2 Diploma for the Early Years Practitioner", code: "603/3723/0" },
      { title: "NCFE CACHE Level 2 Diploma Introducing Caring for Children and Young People", code: "603/3477/0" },
      { title: "NCFE CACHE Level 3 Diploma for the Children and Young People's Workforce (England) (Social Care)", code: "601/3474/4/SC" },
    ],
  },
  {
    name: "Childminding and Babysitting",
    courses: [
      { title: "NCFE CACHE Level 3 Award in Preparing to Work in Home Based Childcare", code: "603/3642/0" },
      { title: "Caring for Young Children in A Babysitting Environment", code: "R/502/6962/UNITCACHE" },
    ],
  },
  {
    name: "Paediatric First Aid",
    courses: [
      { title: "NCFE CACHE Level 3 Award in Paediatric First Aid", code: "603/0752/3" },
    ],
  },
  {
    name: "Autism",
    courses: [
      { title: "NCFE CACHE Level 3 Certificate in Understanding Autism", code: "603/1935/5" },
    ],
  },
  {
    name: "Health & Social Care",
    courses: [
      { title: "NCFE CACHE Level 4 Diploma in Adult Care", code: "603/2614/1" },
      { title: "NCFE CACHE Level 3 Diploma in Adult Care", code: "610/0498/4" },
      { title: "NCFE CACHE Level 2 Diploma in Care", code: "603/2611/6" },
    ],
  },
  {
    name: "Counselling",
    courses: [
      { title: "NCFE CACHE Level 3 Diploma in Counselling Skills", code: "600/0727/8" },
      { title: "NCFE CACHE Level 2 Certificate in Counselling Skills", code: "600/0728/X" },
    ],
  },
  {
    name: "Safeguarding",
    courses: [
      { title: "NCFE CACHE Level 2 Certificate in Understanding Safeguarding and Prevent", code: "603/2818/6" },
      { title: "NCFE CACHE Level 2 Award in Food Safety in Health and Social Care and Early Years and Childcare Settings", code: "600/2540/2" },
      { title: "NCFE CACHE Level 4 Certificate in Working with Parents", code: "603/4985/2" },
      { title: "Understand How to Support Bilingual Learners", code: "Y/616/5971/UNITCACHE" },
    ],
  },
  {
    name: "Education & Training",
    courses: [
      { title: "NCFE Level 4 Certificate in Education and Training", code: "601/1621/3" },
      { title: "NCFE Level 4 Certificate in Leading the Internal Quality Assurance of Assessment Processes and Practice", code: "501/0890/6" },
      { title: "NCFE Level 3 Certificate in Assessing Vocational Achievement", code: "501/0885/2" },
      { title: "NCFE Level 3 Award in Education and Training", code: "601/1620/1" },
      { title: "NCFE Level 5 Diploma in Education and Training", code: "601/1622/5" },
      { title: "NCFE CACHE Level 4 Certificate for the Advanced Practitioner in Schools and Colleges", code: "603/2474/0" },
      { title: "NCFE CACHE Level 2 Certificate in Supporting Teaching and Learning", code: "603/2476/4" },
      { title: "NCFE CACHE Level 3 Diploma in Supporting Teaching and Learning", code: "603/2496/X" },
      { title: "NCFE CACHE Level 4 Certificate for the Early Years Advanced Practitioner", code: "601/8424/3" },
    ],
  },
];

// CPD Calendar 2026
export const cpdCalendarItems = [
  { title: "How to plan using Birth to Five Matters", month: "Monthly" },
  { title: "Observation in the early years", month: "Monthly" },
  { title: "Health and safety in early years setting", month: "Monthly" },
  { title: "Infection Prevention and Control in early years setting", month: "Monthly" },
  { title: "Child and Young Person Development (0-19 Years)", month: "Monthly" },
  { title: "Paediatric First Aid Ofsted recognised", month: "Monthly" },
  { title: "Manual Handling", month: "Monthly" },
  { title: "Safeguarding Children", month: "Monthly" },
  { title: "Leadership in the early years", month: "Monthly" },
  { title: "Inclusive practice in the early years", month: "Monthly" },
  { title: "Food safety in early years setting", month: "Monthly" },
  { title: "Female genital Multilation Awareness", month: "Monthly" },
  { title: "Managing Behaviour", month: "Monthly" },
];

// Consultancy Services
export const consultancyServices = [
  { title: "Support the process of becoming a childminder or babysitter", description: "Guidance and support through the registration process" },
  { title: "Quality assure in different early year sectors", description: "Quality assurance across nurseries and childminders" },
  { title: "Deliver continuous professional development", description: "CPD courses and supply of early years practitioners (managers, room leaders, practitioners) on long or short term" },
  { title: "Support nurseries with self-assessment", description: "Assistance with self-assessment processes and quality improvement" },
  { title: "Nanny Agency", description: "Trained and qualified nannies available for placement" },
];