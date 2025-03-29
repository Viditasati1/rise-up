
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
 // constants.js
 const questionset = {
  questionnaires: [
    {
      age_group: "under_18",
      sections: [
        {
          name: "Self-Perception and Emotional Health",
          questions: [
            {
              text: "How often do you feel overwhelmed by your daily responsibilities?",
              options: ["Rarely", "Sometimes", "Often", "Almost always"]
            },
            {
              text: "How would you rate your overall self-esteem?",
              options: ["Very low", "Low", "Moderate", "High"]
            },
            {
              text: "Do you often feel ashamed about your personal habits or choices (e.g., masturbation, watching porn)?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How frequently do you experience feelings of guilt or self-blame?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you think you set unrealistic expectations for yourself?",
              options: ["No", "Occasionally", "Often", "Almost always"]
            }
          ]
        },
        {
          name: "Social Life and Relationships",
          questions: [
            {
              text: "How often do you feel disconnected from others, even in social settings?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How comfortable are you discussing personal struggles with friends or family?",
              options: ["Very comfortable", "Somewhat comfortable", "Uncomfortable", "Extremely uncomfortable"]
            },
            {
              text: "Do you avoid social interactions due to fear of judgment or shame?",
              options: ["No", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Habits and Coping Mechanisms",
          questions: [
            {
              text: "How frequently do you watch porn or engage in similar activities?",
              options: ["Rarely", "Occasionally", "Often", "Very often"]
            },
            {
              text: "Do you feel that these habits negatively impact your daily life or mental health?",
              options: ["Not at all", "Slightly", "Moderately", "Significantly"]
            },
            {
              text: "When facing stress, what is your primary coping mechanism?",
              options: [
                "Healthy outlets (exercise, talking to someone)",
                "Distracting activities (gaming, TV)",
                "Avoidance (ignoring the issue)",
                "Harmful behaviors (self-harm, substance abuse)"
              ]
            }
          ]
        },
        {
          name: "Career and Financial Stress",
          questions: [
            {
              text: "How often do you feel anxious about your career or future?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How confident are you in managing your financial responsibilities?",
              options: ["Very confident", "Somewhat confident", "Not confident", "Extremely anxious"]
            }
          ]
        },
        {
          name: "Overall Mental Health",
          questions: [
            {
              text: "How often do you feel satisfied with your life?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How frequently do you experience symptoms like insomnia, loss of appetite, or fatigue?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you ever feel hopeless about the future?",
              options: ["No", "Occasionally", "Often", "Always"]
            },
            {
              text: "How would you describe your current level of happiness?",
              options: ["Very happy", "Somewhat happy", "Neutral", "Unhappy"]
            }
          ]
        },
        {
          name: "Thoughts and Self-Control",
          questions: [
            {
              text: "Do you find it challenging to control intrusive or negative thoughts?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you feel you need professional help to manage your mental health?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you feel motivated to make positive changes in your life?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        }
      ]
    },
    {
      age_group: "18_to_25",
      sections: [
        {
          name: "Career and Academic Pressure",
          questions: [
            {
              text: "How often do you feel overwhelmed by academic or career expectations?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel unsure about the career path you’ve chosen?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How frequently do you experience self-doubt about your abilities in academics or work?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel that your academic or career choices align with your passions?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Personal Habits and Coping Mechanisms",
          questions: [
            {
              text: "How frequently do you procrastinate on important tasks?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you use social media or gaming as a way to escape from stress?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you engage in physical exercise as a coping mechanism?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you tried practicing mindfulness, meditation, or therapy for mental wellness?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Relationships and Social Life",
          questions: [
            {
              text: "How often do you feel disconnected from friends or peers?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Are you comfortable discussing your mental health with others?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you ever avoided social situations due to anxiety or fear of judgment?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel comfortable setting boundaries in friendships and relationships?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Financial Stress",
          questions: [
            {
              text: "How confident are you in managing your finances?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you ever felt financial stress affecting your mental health?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel financially dependent on others, and does it cause stress?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you feel guilty about spending money on leisure activities?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Overall Mental Health",
          questions: [
            {
              text: "How frequently do you feel optimistic about your future?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you experience anxiety or panic attacks?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel that your mental health affects your daily life and productivity?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you actively take steps to improve your mental health and well-being?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        }
      ]
    },
    {
      age_group: "25_to_40",
      sections: [
        {
          name: "Career and Life Balance",
          questions: [
            {
              text: "How satisfied are you with your current work-life balance?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel you are achieving your career goals at the expected pace?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do work-related stressors impact your mental health?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you ever faced burnout due to work pressure?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Family and Social Responsibilities",
          questions: [
            {
              text: "How often do you feel overwhelmed by family or social responsibilities?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you find it challenging to balance personal time and family obligations?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel supported by your family in your personal and professional life?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How frequently do you feel guilty for not spending enough time with loved ones?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Stress and Coping Mechanisms",
          questions: [
            {
              text: "How frequently do you feel stressed about financial stability?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you engage in unhealthy habits to cope with stress (e.g., substance use, overeating)?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you prioritize self-care amidst daily responsibilities?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you ever taken a break from work due to mental exhaustion?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Relationships and Emotional Health",
          questions: [
            {
              text: "How often do you feel emotionally disconnected from your partner, family, or friends?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel you are able to openly communicate your feelings and needs in relationships?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Have you faced emotional challenges due to romantic or family relationships?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you feel that your relationships provide emotional support?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        },
        {
          name: "Self-Care and Happiness",
          questions: [
            {
              text: "How frequently do you dedicate time to self-care or hobbies?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you make time for activities that bring you joy?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "How often do you feel satisfied with your current lifestyle?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            },
            {
              text: "Do you feel content with your progress in personal and professional life?",
              options: ["Rarely", "Occasionally", "Often", "Always"]
            }
          ]
        }
      ]
    }
  ]
};

  
  
  
  const services = [
    {
      title: "Personalized Anxiety Assessment",
      description:
      "Understand yourself better with RISEUP powered insights."
    },
    // {
    //   title: "AI-Powered Chat Support",
    //   description:
    //     "Get immediate, judgment-free support.",
    // },
    {
      title: "Virtual Role-Playing Sessions",
      description:
        "Practice social interactions with feedback.",
    },
    {
      title: "Tailored Therapy Modules",
      description:
        "Engage with Cognitive Behavioral Therapy (CBT) exercises and guides to overcome social fears step-by-step.",
    },
    {
      title: "Daily Affirmation Generator",
      description:
        "Receive personalized messages to uplift your day",
    },
  ];

  
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
  // ];
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  
  export { services, questionset };