// import images
import Hero_person from "./assets/images/Hero/main.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import js from "./assets/images/Skills/js.png";
import ts from "./assets/images/Skills/typescript.png";
import tailwind from "./assets/images/Skills/Tailwind.png";
import redux from "./assets/images/Skills/redux.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/hitecmart.png";
import project2 from "./assets/images/Projects/food.png";
import project3 from "./assets/images/projects/todo.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/hire.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  // HERO SECTION
  hero: {
    title: "Frontend Developer",
    firstName: "MISHAL",
    LastName: "BHARTI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Frontend development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },

  // SKILLS
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "I have been using it for 1.5 years",
        logo: reactjs,
      },
      {
        name: "Javascript",
        para: "I have been using it for 2 years",
        logo: js,
      },
      {
        name: "Typescript",
        para: "I have been using it for 6 months",
        logo: ts,
      },
      {
        name: "Tailwind css",
        para: "I have been using it for 1 year",
        logo: tailwind,
      },

      {
        name: "Redux Toolkit",
        para: "I have been using it for 7 months",
        logo: redux,
      },
      {
        name: "nodejs",
        para: "I have been using it for 6 months",
        logo: nodejs,
      },
    ],
    icon: MdArrowForward,
  },

  // SERVICES
  services: {
    title: "Services",
    subtitle: "WHAT I CAN DO",
    service_content: [
      {
        title: "Frontend Development",
        para: "A frontend developer focuses on creating the visual and interactive elements of websites or web applications.",
        logo: services_logo1,
      },
      {
        title: "Full Stack Development",
        para: "A full stack developer excels in both frontend and backend development, creating complete and seamless web applications.",
        logo: services_logo2,
      },
      {
        title: "App Development",
        para: "An app developer designs and builds software applications for mobile devices or desktops, utilizing programming languages and frameworks to create functional and user-friendly solutions.",
        logo: services_logo3,
      },
    ],
  },

  // PROJECTS SECTION
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "HiTech Mart - An ecommerce Website",
        image: project1,
        content: {
          point1:
            "Played a key role in the development of Hitech Mart, an e-commerce project enabling sellers to list products and  providing buyers with essential features like return policies, sorting, and filtering.",
          point2:
            " Implemented and optimized functionalities to enhance user experience, contributing to the project's overall success.",
          laiba: "https://hitecmart.com/",
        },
      },
      {
        title: "Food Delivery web Application",
        image: project2,
        content: {
          point1: "Created Foodie - An innovative food delivery platform integrating Tailwind CSS for dynamic UI, Swiggy API for diverse restaurant options, Redux Toolkit for streamlined data flow.",
          point2: "Tech Stack: React Router Dom , Custom Hooks, API Integration, State Management- Redux toolkit , Reactjsaxios ,Responsive Web Design , Tailwind CSS",
          laiba: "https://earnest-gumdrop-180cf9.netlify.app/",
        },
      },
      {
        title: "Todo App With Redux Toolkit",
        image: project3,
        content: {
          point1: "Task Management: Easily create, edit, and organize your tasks with a simple and intuitive interface. Mark as Completed: Stay motivated by checking off completed tasks, and watch your progress grow.",
          point2: "Effortless Editing: Made a mistake or want to update a task? No problem! You can effortlessly edit task details.Delete with Confidence: Say goodbye to clutter! Our app allows you to delete tasks you no longer need",
          laiba: "https://react-redux-todo-app-lac.vercel.app/",
        },
      },
      {
        title: "Event Booking System",
        image: project1,
        content: {
          point1: "sumaiya jsdfada mdskmdlwdkwodwodjwxhdhsidhwidbbc",
          point2: "lorem djwhdeweui",
          laiba: "https://hitecmart.com/",
        },
      },
    ],
  },

  Hireme: {
    title: "Hire Me",
    subtitle: "About me",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm a Frontend Developer with a flair for creating visually appealing and user-centric websites. Proficient in cutting-edge technologies, I bring a design-focused approach to deliver seamless and responsive user experiences. Let's build something exceptional together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mishal.bharti0@gmail.com",
        icon: GrMail,
        link: "mailto:mishal.bharti0@gmail.com",
      },
      {
        text: "+91 7488084505",
        icon: MdCall,
        link: "https://wa.me/7488084505",
      },
      {
        text: "Mishal Bharti",
        icon: ImLinkedin2,
        link: "https://www.linkedin.com/in/mishal-bharti-86b26a227/",
      },
      {
        text: "Mishal Bharti",
        icon: FaGithub,
        link: "https://github.com/mishalbharti",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
