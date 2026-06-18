const portfolioData = {
  name: "Kasi Thanmayee Anjana",
  role: "B.Tech Student",
  college: "Shri Vishnu Engineering College for Women",
  graduationYear: "2028",

  about:
    "I'm a B.Tech student passionate about technology, software development, and problem-solving. I enjoy building real-world projects, exploring new technologies, and continuously improving my technical skills. With a strong interest in innovation and creating impactful solutions, I aim to develop user-focused applications that make a difference.",

  email: "thanmyeeanjana@gmail.com",
  phone: "8639077131",

  github: "https://github.com/ThanmayeeAnjana",
  linkedin: "https://www.linkedin.com/in/kasi-thanmayee-anjana-951151327/",
  leetcode: "https://leetcode.com/u/49P7OX3Y9t/",
  codeforces: "https://codeforces.com/profile/Thanmayee_Anjana",
  codechef: "https://www.codechef.com/users/anju_223102",

  skills: [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "DBMS",
    "Operating Systems",
    "GitHub"
  ],

  projects: [
    {
  title: "MaidConnect",
  description:
    "A web-based platform that connects domestic workers with households seeking trusted services. Features worker profiles, skill showcases, location-based discovery, and seamless user-worker matching.",
  tech: ["HTML", "CSS", "JavaScript", "Firestore DB"],
  github: "https://github.com/ThanmayeeAnjana/MaidConnect",
  featured: true
},
    {
      title: "To-Do List App",
      description: "A responsive task management application that enables users to add, edit, delete, and track tasks with features such as voice input, dark mode, task filtering, and local storage for seamless productivity and organization.",
      tech: ["HTML", "JavaScript"],
      github: "https://github.com/ThanmayeeAnjana/To-do-App",
      featured: true
    }
  ],

  certifications: [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    file: "/certificates/nptel.pdf",
  },
  {
    title: "Java OOP : Role of Constructors in Inheritance",
    issuer: "Infosys Springboard",
    file: "/certificates/infosys.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    file: "/certificates/cyber.pdf",
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco",
    file: "/certificates/network.pdf",
  },
],

hackathons: [
  {
    name: "Google Developer Group Hackathon",
    project: "MaidConnect",
    description:
      "A platform connecting domestic workers with households seeking trusted services.",
  },

  {
    name: "Pivot Hackathon",
    project: "ToxFree Solutions",
    description:
      "ToxFree Solutions converts cigarette waste into eco-friendly bricks, creating sustainable materials while reducing pollution.",
  },
]

};

export default portfolioData;