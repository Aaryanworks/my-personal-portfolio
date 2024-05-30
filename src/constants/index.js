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
    meta,
    starbucks,
    tesla,
    shopify,
    
    jobit,
    tripguide,
    threejs,
    
    gym,
    
    
    
    
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "redux",
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
    
    
  ];
  
  const experiences = [
   /* {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
   /* {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
    {
      title: "Web Developer",
      company_name: "teachnook",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Interned at Teachnook, gaining valuable hands-on experience in web development.", 
        "Contributed to various projects, honing skills in HTML, CSS, and JavaScript.",
        " Developed a solid understanding of front-end development principles and techniques."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Prodigy Infotech",
      icon: git,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
 /* const testimonials = [
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
  */
  const projects = [
    {
      name: "HEALTH MANAGEMENT FULL STACK WEBSITE",
      description:
        "I created a comprehensive gym management application using the MERN stack (MongoDB, Express, React, and Node.js) responsive and interactive frontend developed with React.js,  To improve communication and user engagement, I integrated Nodemailer for efficient email tranfer, the application includes a feature to calculate the Body Mass Index (BMI) of users, providing personalized health condition insights and recommendations based on the BMI results.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name:"express",
          color:"blue-text-gradient",
        }
      ],
      image: gym,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job Seeking application",
      description:
        "Developed a feature-rich web application for job seekers using the MERN stack (MongoDB, Express, React, Node.js, boosted user engagement by 40% and slashed job search time by 25%.Through the website, employers and job seekers can connect and streamline the job search, application, and hiring procedures.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postman",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },{
          name:"nodejs"
          ,color:"green-text-gradient",
        },
          
        
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Event Planning App",
      description:
        "significantly increased engagement .Enables users to schedule and manage their daily tasks, providing features such as adding, deleting, and marking task completions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Aaryanworks/",
    },
  ];
  
  export { services, technologies, experiences,  projects };