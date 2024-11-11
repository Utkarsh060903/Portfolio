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
    shopify,
    threejs,
    newrhyno,
    guestHouse,
    foodDelievery,
    Podcast,
    LNMIIT,
    airbnb,
    music,
    RhynoEV,
    WhatBytes,
    webdev,
  } from "../assets";
  
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

    {
      id: "skills",
      title: "Skills",
    }
  ];
  
  const services = [
    {
      title: "Full stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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

    // {
    //   name: "shopify",
    //   icon: shopify
    // }
  ];
  
  const experiences = [
    {
      title: "Created Personal Projects",
      // company_name: "Shopify",
      icon: webdev,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Tomato: A full-stack food delivery platform with secure Stripe payments, real-time content management, and a responsive user interface.",
        "LNMIIT Guest House: A booking system for managing room reservations with automated email approvals and a dynamic room availability feature.",
        "Podstream: A podcast platform featuring OTP-enabled registration, podcast categorization, and a streamlined user experience.",
      ],
    },

    {
      title: "Web Developer Intern",
      company_name: "RhynoEV",
      icon: RhynoEV,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed the frontend website for Rhyno EV startup using React.js.",
        "Implemented GSAP and various CSS libraries to ensure a smooth, clean, and responsive UI.",
        "Added an admin panel to manage queries for pre-book registrations of electric vehicles.",
      ],
    },

    {
      title: "Frontend Intern",
      company_name: "WhatBytes",
      icon: WhatBytes,
      iconBg: "#E6DEDD",
      date: "September 2024 - Present",
      points: [
        "Greenmile App UI: Developed a responsive UI in Shopify Remix for Greenmile, a U.S. manufacturer app, based on Figma designs.",
        "API & Dynamic Pricing: Integrated APIs to connect stores to Greenmile, implemented dynamic pricing using Shopify Liquid.",
        "UI Revamp at LoginRadius: Enhanced UI with advanced animations and SVGs, increasing traffic and customer satisfaction. ",
        "ReportGen Project: Managing authorization, responsive UI, and API integration to generate reports from Excel data." 
      ],
    },
    
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Guest House Website",
      description:
        "Developed a comprehensive guest house booking platform for LNMIIT. The platform streamlines the booking process by enabling users to check room availability on specific dates and proceed with bookings, ensuring a smooth user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Authentication",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: LNMIIT,
      source_code_link: "https://github.com/Utkarsh060903/lnmiit2",
    },
    {
      name: "Tomato",
      description:
        "Created a full stack food delivery app with secure JWT authentication, dynamic cart functionality, and an admin panel for managing dishes. Integrated Stripe for seamless payment processing and order tracking for both users and admins.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: foodDelievery,
      source_code_link: "https://github.com/Utkarsh060903/Food_Delievery_App",
    },
    {
      name: "Podstream",
      description:"Developed a responsive frontend podcast uploading website using Material UI, featuring JWT authentication and Google Mail OTP registration. Added podcast categorization, search functionality, and support for audio/video uploads, with the option to mark favorite podcasts.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: Podcast,
      source_code_link: "https://github.com/Utkarsh060903/Podcast_Streaming_App",
    },

    {
      name: "ByAirBnB",
      description: "Developed a user-friendly property listing interface with customizable photo highlights and intuitive input for descriptions, features, and pricing.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: airbnb,
      source_code_link: "https://github.com/Utkarsh060903/airbnb_clone",
    },

    // {
    //   name: "Music_class",
    //   description: "Developed a UI for a music learning website using Nextjs, shadcn and TailwindCSS.",
    //   tags: [
    //     {
    //       name: "Nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "shadcn",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "UI",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: music,
    //   source_code_link: "https://github.com/Utkarsh060903/music",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };