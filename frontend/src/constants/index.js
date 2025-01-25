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
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Features",
    },
    
    
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "FAQ",
      title: "FAQ",
    },
  ];
  const questionSets = {
    YoungAdults: [
      {
        section: "Career and Academic Pressure",
        questions: [
          {
            question: "How often do you feel pressured to perform academically or professionally?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you feel your achievements are good enough compared to your peers?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          },
          {
            question: "How often do you experience anxiety about your future career?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          }
        ]
      },
      {
        section: "Personal Habits and Technology Use",
        questions: [
          {
            question: "How much time do you spend on social media daily?",
            options: ["Less than 1 hour", "1–3 hours", "3–5 hours", "More than 5 hours"]
          },
          {
            question: "Do you use porn or masturbation as a stress-relief method?",
            options: ["Never", "Occasionally", "Often", "Always"]
          },
          {
            question: "How do you feel about your body image or appearance?",
            options: ["Very satisfied", "Somewhat satisfied", "Dissatisfied", "Very dissatisfied"]
          },
          {
            question: "How often do you feel guilty or ashamed about any personal habit (e.g., gaming, eating, or porn use)?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          }
        ]
      },
      {
        section: "Relationships and Emotional Health",
        questions: [
          {
            question: "Do you feel supported by your friends and family?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          },
          {
            question: "How comfortable are you expressing your emotions?",
            options: ["Very comfortable", "Somewhat comfortable", "Uncomfortable", "Very uncomfortable"]
          },
          {
            question: "Do you avoid certain social situations because of fear or anxiety?",
            options: ["Never", "Rarely", "Occasionally", "Often"]
          },
          {
            question: "How often do you feel lonely even when surrounded by people?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          }
        ]
      },
      {
        section: "Self-Care and Coping Mechanisms",
        questions: [
          {
            question: "How often do you engage in self-care activities (e.g., exercise, hobbies, meditation)?",
            options: ["Daily", "Weekly", "Occasionally", "Rarely"]
          },
          {
            question: "Do you turn to unhealthy coping mechanisms like binge eating, substance use, or excessive screen time?",
            options: ["Never", "Occasionally", "Often", "Always"]
          },
          {
            question: "How frequently do you feel optimistic about your future?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          }
        ]
      },
      {
        section: "Mental Health Awareness and Support",
        questions: [
          {
            question: "How aware are you of mental health resources available to you?",
            options: ["Very aware", "Somewhat aware", "Not aware", "Completely unaware"]
          },
          {
            question: "How comfortable are you seeking help from a professional (e.g., therapist)?",
            options: ["Very comfortable", "Somewhat comfortable", "Uncomfortable", "Very uncomfortable"]
          }
        ]
      },
      {
        section: "Financial Stress",
        questions: [
          {
            question: "How often do you worry about student loans or personal debt?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you feel financially independent?",
            options: ["Yes, completely", "Somewhat", "Not yet", "Not at all"]
          }
        ]
      },
      {
        section: "Work-Life Balance",
        questions: [
          {
            question: "How much time do you spend on activities you genuinely enjoy?",
            options: ["A lot", "Some", "Very little", "None"]
          },
          {
            question: "Do you feel you can maintain a healthy balance between work, study, and personal life?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          }
        ]
      }
    ],
    Adults: [
      {
        section: "Career and Professional Life",
        questions: [
          {
            question: "Do you feel satisfied with your current job or career path?",
            options: ["Very satisfied", "Somewhat satisfied", "Dissatisfied", "Very dissatisfied"]
          },
          {
            question: "How often do you feel burned out at work?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you believe your job allows room for personal growth?",
            options: ["Yes, a lot", "Somewhat", "Very little", "Not at all"]
          }
        ]
      },
      {
        section: "Financial Stability",
        questions: [
          {
            question: "How confident are you in managing your finances?",
            options: ["Very confident", "Somewhat confident", "Not confident", "Extremely anxious"]
          },
          {
            question: "Do you have a financial safety net for emergencies?",
            options: ["Yes, completely", "Partially", "Very little", "None"]
          }
        ]
      },
      {
        section: "Relationships and Family",
        questions: [
          {
            question: "How often do you feel emotionally supported by your partner or family?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          },
          {
            question: "Do you struggle with setting boundaries in relationships?",
            options: ["Never", "Rarely", "Occasionally", "Often"]
          }
        ]
      },
      {
        section: "Stress and Coping Mechanisms",
        questions: [
          {
            question: "How often do you experience stress about meeting life expectations?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you engage in activities that help you unwind or relax?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          }
        ]
      },
      {
        section: "Self-Worth and Mental Well-Being",
        questions: [
          {
            question: "How often do you doubt your self-worth or abilities?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you feel guilt or shame related to personal habits or lifestyle choices?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "How aware are you of your mental health needs?",
            options: ["Very aware", "Somewhat aware", "Slightly aware", "Not aware"]
          }
        ]
      },
      {
        section: "Hobbies and Self-Care",
        questions: [
          {
            question: "How frequently do you dedicate time to hobbies or passions?",
            options: ["Daily", "Weekly", "Occasionally", "Rarely"]
          },
          {
            question: "Do you feel guilty about taking time off for yourself?",
            options: ["Never", "Rarely", "Occasionally", "Often"]
          }
        ]
      },
      {
        section: "Seeking Help",
        questions: [
          {
            question: "How comfortable are you discussing personal issues with a professional?",
            options: ["Very comfortable", "Somewhat comfortable", "Uncomfortable", "Very uncomfortable"]
          },
          {
            question: "Have you ever sought professional help for mental health concerns?",
            options: ["Yes, and it helped", "Yes, but it didn’t help", "No, but I’m considering it", "No, and I wouldn’t consider it"]
          }
        ]
      },
      {
        section: "Future Goals and Aspirations",
        questions: [
          {
            question: "Do you have clear goals for the next 5 years?",
            options: ["Yes, very clear", "Somewhat clear", "Slightly unclear", "Not clear at all"]
          },
          {
            question: "How optimistic are you about achieving those goals?",
            options: ["Very optimistic", "Somewhat optimistic", "Not optimistic", "Very pessimistic"]
          },
          {
            question: "How often do you think about making major life changes?",
            options: ["Rarely", "Occasionally", "Often", "Always"]
          },
          {
            question: "Do you feel content with the balance between your aspirations and current life?",
            options: ["Always", "Often", "Occasionally", "Rarely"]
          }
        ]
      }
    ]
  };
  

  
  
  
  
  const services = [
    {
      title: "Personalized Anxiety Assessment",
      description:
      "Understand yourself better with AI-powered insights."
    },
    {
      title: "AI-Powered Chat Support",
      description:
        "Get immediate, judgment-free support.",
    },
    {
      title: "Virtual Role-Playing Sessions",
      description:
        "Practice social interactions with feedback.",
    },
    {
      title: "Tailored Therapy Modules",
      description:
        "Engage with AI-based Cognitive Behavioral Therapy (CBT) exercises and guides to overcome social fears step-by-step.",
    },
    {
      title: "Daily Affirmation Generator",
      description:
        "Receive personalized messages to uplift your day",
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
    },
    {
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
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Property Hub",
      description:
        "The Property Hub Website is a dynamic platform designed to streamline property transactions, offering features for buying, selling, and renting properties. Built using HTML, CSS, PHP, and SQL as the database system, this platform provides a robust and user-friendly solution for managing property listings and inquiries.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "HTML5 & CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "NaruProd",
      description:
        "A creative and engaging task management app inspired by the Naruto universe. Featuring a responsive design and a Naruto-themed UI, it combines functionality with a fun, visually appealing experience.",
      tags: [
        {
          name: "Cloud-Hosted",
          color: "blue-text-gradient",
        },
        {
          name: "Web-First Design",
          color: "green-text-gradient",
        },
        {
          name: "UI/UX Design",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Driving School Website",
      description:
"A clean and responsive driving school website designed to showcase various courses, such as Beginner's Training, Defensive Driving, and License Test Preparation."   ,   tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Responsive Design",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, questionSets };