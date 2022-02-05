/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sayantan",
  logo_name: "<Sayantan />",
  nickname: "Sayantan",
  full_name: "Sayantan Kapat",
  subTitle:
    "Full Stack Developer, ML engineer 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1aMQIlF_447KAMCwimdwL6bYvdjDkeIGU/view?usp=sharing",
  mail: "mailto:ksayantan1821@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sayantan1821",
  linkedin: "https://www.linkedin.com/in/sayantan-kapat-916aa51b2/",
  gmail: "ksayantan1821@gmail.com",
  gitlab: "https://gitlab.com/sayantan21",
  facebook: "https://www.facebook.com/sayantan.kapat.1821/",
  twitter: "https://twitter.com/blueSpy0_0",
  instagram: "https://www.instagram.com/sayantankapat/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express or SpringBoot",
        "⚡ Integration of third party services such as Firebase"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "",
      skills: [
        "⚡ Experience working on multiple Data sets",
        "⚡ Experience hosting managing models",
        "⚡ Experience with Continuous Integration with backend",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "GitHub Actions",
        //   fontAwesomeClassname: "simple-icons:githubactions",
        //   style: {
        //     color: "#5b77ef",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kalinga Institute of Industrial Technology",
      subtitle: "Bachelor in Information Technology",
      logo_path: "kiit.png",
      alt_name: "SSEC",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Computer Networking, Operating System etc.",
        "⚡ I have also completed various online courses for Backend , Web, full stack etc.",
        "⚡ I have also learned numpy, pandas, data preprocessing, Regression, classification, ML Modeling etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://kiit.ac.in/",
    },
    {
      title: "Deulia Hiraram High School",
      subtitle: "Passed Higher Secondary in Science",
      logo_path: "dhhs.png",
      alt_name: "DHHS",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ In Mathematics Relations and Functions, Algebra, Calculus, Probability and Vectors topics was covered.",
        "⚡ In Physics Depth knowledge was gained in basic Electrostatics, Current Electricity, Optics, Atoms and Nuclei etc.",
        "⚡ In Chemistry Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry, Biomolecules was covered."
      ],
      website_link: "https://schools.org.in/purba-medinipur/19190213302/deulia-hiraram-high-school.html",
    },
    {
      title: "Deulia Hiraram High School",
      subtitle: "Passed Higher Secondary in Science",
      logo_path: "dhhs.png",
      alt_name: "DHHS",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ I have studied basic concepts on physical science over some topics like Light, Current electricity, Behavior of Gases etc.",
        "⚡ In mathematics Quadratic equations, simple interest, interest calculation, ratio & proportion had been taught. ",
        "⚡ Control and Coordination in living organisms, Continuity of life, Evolution and adaptation etc. was covered in Life Science",
        "⚡ In history Expansion of British empire in India, Constitution of independent India etc. topcs was covered",
        "⚡ I have studied Geography. Some of the topics like Atmosphere, Hydrosphere, Waste management etc."
      
      ],
      website_link: "https://schools.org.in/purba-medinipur/19190213302/deulia-hiraram-high-school.html",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "M0001: MongoDB Basics",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "I've completed three internship. I've mostly done projects on my own and I am actively looking for internships. I love love to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend Developer (Intern)",
          company: "Lejhro Technology Pvt. Ltd.",
          company_url: "https://lejhro.com/",
          logo_path: "lejhro.png",
          duration: "Jun 2021 - Sep 2021",
          location: "Work from Home",
          description:
          `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0093FF",
        },
        {
          title: "Full Stack Developer (Intern)",
          company: "Adwaita Educare Pvt. Ltd.",
          company_url: "https://adwaitaeducare.com/",
          logo_path: "adwaita.png",
          duration: "Jul 2021 - Sep 2021",
          location: "Work From Home",
          description:
          `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer (Intern)",
          company: "Skillablers Technology Pvt. Ltd.",
          company_url: "https://www.skillablers.com/",
          logo_path: "skillablers.png",
          duration: "Oct 2021 - Dec 2021",
          location: "Work From Home",
          description:
          `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#39e667",
        }
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Web Developer (Intern)",
    //       company: "Skillablers Technologies PVT. LTD.",
    //       company_url: "https://www.skillablers.com/",
    //       logo_path: "cwoc.png",
    //       duration: "Oct 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Hustler",
    //       company: "Skillenza",
    //       company_url: "https://skillenza.com/",
    //       logo_path: "skillenza.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work from Home",
    //       description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //       "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sayantan.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/blueSpy0_0",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      id: "0",
      name: "Royal Clothing",
      url: "https://github.com/sayantan1821/Royal-cotton-Ecommerce-app-working",
      visit: "https://admiring-northcutt-cbfc79.netlify.app/",
      description: "This is a E-commerce fashion Website. Here user can login with google or email and buy clothes. A fake payment system is also there.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
