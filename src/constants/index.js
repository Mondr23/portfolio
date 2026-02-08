import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  threejs,
  almadar,
} from "../assets";
import skinCancer from "../assets/skinCancer.png";
import Sooq from "../assets/Sooq.png";
import WaterQA from "../assets/WaterQA.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineering",
    icon: backend,
  },
  {
    title: "Data-Driven Systems",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT & Systems Support Intern",
    company_name: "Almadar Aljadid – Telecommunications Company (Libya)",
    icon: almadar,
    iconBg: "#0a2540",
    date: "Summer 2025",
    points: [
      "Supported data management tasks and assisted in maintaining internal IT systems.",
      "Worked alongside technical teams supporting enterprise-scale telecommunications systems.",
      "Assisted with system operations, monitoring, and basic troubleshooting procedures.",
      "Contributed to IT documentation and gained hands-on exposure to professional IT workflows.",
      "Developed practical understanding of IT operations within a large telecommunications environment.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
      {
      name: "SOOQ – Online Car Marketplace",
      description:
        "A full-stack web application that allows users to buy and sell cars online, featuring user authentication, listings, favourites, messaging, and an admin dashboard.",
      tags: [
        { name: "html", color: "blue-text-gradient" },
        { name: "css", color: "green-text-gradient" },
        { name: "javascript", color: "pink-text-gradient" },
        { name: "php", color: "orange-text-gradient" },
        { name: "mysql", color: "yellow-text-gradient" },
      ],
      image: Sooq, // screenshot of your project
      source_code_link: "https://github.com/yourusername/sooq",
    },

  {
    name: "Water Quality Data Analysis System",
    description:
      "C++ and Qt desktop application for analysing and visualising water quality data using compliance indicators and interactive charts.",
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "qt", color: "green-text-gradient" },
      { name: "cmake", color: "pink-text-gradient" },
      { name: "data-visualisation", color: "orange-text-gradient" },
    ],
    image: WaterQA, // screenshot of the app
    source_code_link: "https://github.com/yourusername/water-dataset-explorer",
  },

  {
  name: "Automated Skin Lesion Classification System",
  description:
    "A deep learning project that classifies skin lesion images using CNNs to assist in the early detection of skin cancer.",
  tags: [
    { name: "python", color: "blue-text-gradient" },
    { name: "deep-learning", color: "green-text-gradient" },
    { name: "computer-vision", color: "pink-text-gradient" },
    { name: "pytorch", color: "orange-text-gradient" },
    { name: "NumPy", color: "orange-text-gradient" },
  ],
  image: skinCancer, // screenshot of results or model output
    //image: jobit,
  source_code_link: "https://github.com/yourusername/skin-cancer-detection",
},
];

export { services, technologies, experiences, testimonials, projects };
// export { services, technologies, experiences, projects };

