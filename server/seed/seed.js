const mongoose = require('mongoose');
const Profile = require('../src/models/Profile');
require('dotenv').config();

const seedData = {
  name: "Piyush Kumar",
  email: "piyushkumarofficial980@gmail.com",
  education: "Bachelor of Technology in Electrical and Electronics Engineering, NIT Nagaland",
  skills: {
    languages: ["C", "CPP", "HTML", "CSS", "JavaScript", "SQL"],
    frameworks: ["React.js", "Express.js", "Tailwind CSS"],
    backendAndDatabase: ["Node.js", "MongoDB"],
    toolsAndPlatforms: ["GitHub", "Postman", "VS Code"],
    cloudDevOps: ["AWS (EC2, S3, Lambda)"],
    operatingSystems: ["Windows"],
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Web Development", "Database Management Systems", "Operating Systems"]
  },
  projects: [
    {
      title: "Netflix Clone",
      description: "Built a full-stack OTT platform using React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, video streaming, movie categorization, and a multi-lingual UI (Hindi/English). API endpoints were tested with Postman.",
      links: {
        github: "https://github.com/piyushkumar980/NETFLIX_",
        live: "https://netflix-nvcs.onrender.com/"
      }
    },
    {
      title: "RazorPay",
      description: "Recreated the Razorpay homepage UI using HTML, Tailwind CSS, and JavaScript. Implemented interactive sections, payment UI components, and smooth scrolling animations.",
      links: {
        github: "https://github.com/piyushkumar980/RAZORPAY",
        live: "https://calm-dasik-7e2788.netlify.app/"
      }
    },
    {
      title: "Paste App",
      description: "Developed a web app for storing and sharing code/text snippets with a minimalistic design and smooth copy-share functionality.",
      links: {
        github: "https://github.com/piyushkumar980/PASTE_APP",
        live: "https://paste-app-three-amber.vercel.app/"
      }
    },
    {
      title: "Price Watcher App",
      description: "Built a full-stack crop advisory and price-tracking app using React.js, Node.js, Express.js, and MongoDB. The app provides region-based crop suggestions, analyzes price trends, and connects users with verified crop buyers.",
      links: {
        github: "https://github.com/piyushkumar980/price_watcher",
        live: "https://price-watcher.onrender.com/"
      }
    }
  ],
  work: [
    {
      company: "First Contact",
      role: "Full-Stack Developer Intern",
      startDate: "Aug 2024",
      endDate: "Nov 2024",
      description: "Developed and maintained responsive websites using Wix and JavaScript. Implemented interactive tooltips and dynamic smart labels for user guidance. Collaborated with teams to resolve technical issues and improve user experience.",
      links: {
        certificate: "https://drive.google.com/file/d/1-SWJ6HLHXO4-wTsfU6WCHTEHsQOOBkND/view?usp=sharing",
        lor: "https://drive.google.com/file/d/17X-ciidghLOZpJtBFlzwl97mtZ9i77Z5/view?usp=sharing"
      }
    },
    {
      company: "Coding Samurai",
      role: "Frontend Developer Intern",
      startDate: "June 2025",
      endDate: "July 2025",
      description: "Built responsive user interfaces using React.js and Tailwind CSS. Implemented reusable UI components and collaborated with teams to resolve technical issues and optimize user experience.",
      links: {
        offerLetter: "https://drive.google.com/file/d/1YhmEYan2Ge9xwtit8mN_vBN13xuCW2Co/view?usp=sharing"
      }
    }
  ],
  links: {
    github: "https://github.com/piyushkumar980",
    linkedin: null,
    portfolio: "https://scintillating-cucurucho-38f849.netlify.app/"
  },
  resume: "https://drive.google.com/file/d/1XrkoDZY-4tbUcKhmzGb8i0a5CyNvUuwJ/view?usp=sharing"
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  await connectDB();
  try {
    await Profile.deleteMany({});
    await Profile.create(seedData);
    console.log('Database seeded successfully with new data.');
  } catch (err) {
    console.error('Error seeding database:', err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();