import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    iot,
    reactjs,
    tailwind,
    nodejs,
    bmw,
    mongodb,
    git,
    sklearn,
    python,
    ashnni,
    indrail,
    hab,
    tensorflow,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "CAD Developer",
      icon: web,
    },
    {
      title: "Ansys simulation",
      icon: mobile,
    },
    {
      title: "CAD Analysis",
      icon: backend,
    },
    {
      title: "ML Engineer",
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
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sklearn",
      icon: sklearn,
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
      name: "Python",
      icon: python,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    
  ];
  
  const experiences = [
    {
      title: "junior engineer",
      company_name: "Indian Railways",
      icon: indrail,
      iconBg: "#E6DEDD",
      date: "30 Jun, 2023 - 29 Jul, 2023",
      points: [
        "Explored maintenance of coaching and goods stock in IOH and ROH.",
        "Learned about Air Brake and Disc Braking Systems of LHB Coaches.",
        "Engaged in hands-on activities, gaining valuable insights into the railway industry's operations during the internship.",
        "Acquired knowledge and skills, fostering a deeper passion for railways and transportation systems",
      ],
    },
    {
      title: "Service Manager",
      company_name: "BMW",
      icon: bmw,
      iconBg: "#383E56",
      date: "01 May, 2022 - 01 Jun, 2022",
      points: [
        "Manage vehicle maintenance and repair for optimal performance and customer satisfaction.",
        "Diagnose technical issues and implement solutions according to manufacturer specifications.",
        "Collaborate with technicians to deliver high-quality service and uphold BMW's standards.",
        "Provide technical support, address inquiries, and offer guidance on vehicle care to enhance customer experience."
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
      name: "Battery Automated Car ",
      description:
        "Battery Automated Cars face security challenges due to wireless communication and software contamination risks. They utilize Radar sensors, Lidar sensors, GPS systems, etc., to perceive surroundings.",
      tags: [
        {
          name: "IOT",
          color: "blue-text-gradient",
        },
        {
          name: "arduino",
          color: "green-text-gradient",
        },
      ],
      image: iot,
      source_code_link: "https://ashnni.com/",
    },
    {
      name: "Microstructure Prediction",
      description:
        "A highly accurate machine learning model has been developed to meticulously analyze microscopic structures present in metallic materials, demonstrating sophisticated capabilities in materials science and analysis.",
      tags: [
        {
          name: "CV",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "JupyterNotebook",
          color: "pink-text-gradient",
        },
      ],
      image: tensorflow,
      source_code_link: "https://github.com/Arrnv/Microstructure_cv.git",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };