import { FaUserFriends, FaComments, FaUserCog, FaBrain } from "react-icons/fa";
import "devicon/devicon.min.css";

// skill
const Skills = () => {
  const backendSkills = [
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
    { name: "Golang", icon: <i className="devicon-go-plain colored"></i> },
    {
      name: "Express.js",
      icon: <i className="devicon-express-original colored"></i>,
    },
    {
      name: "MongoDB",
      icon: <i className="devicon-mongodb-plain colored"></i>,
    },
    {
      name: "PostgreSQL",
      icon: <i className="devicon-postgresql-plain colored"></i>,
    },
    {
      name: "Prisma",
      icon: <i className="devicon-prisma-original colored"></i>,
    },
    {
      name: "Firebase",
      icon: <i className="devicon-firebase-plain colored"></i>,
    },
    {
      name: "WebSocket",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    { name: "Multer", icon: <i className="devicon-nodejs-plain colored"></i> },
    {
      name: "Node-Cron",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    { name: "JWT", icon: <i className="devicon-nodejs-plain colored"></i> },
    { name: "Stripe", icon: <i className="devicon-stripe-plain colored"></i> },
    {
      name: "SSLCommerz",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    { name: "PayPal", icon: <i className="devicon-paypal-plain colored"></i> },
    {
      name: "Paystack",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    {
      name: "Flutterwave",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    {
      name: "Payoneer",
      icon: <i className="devicon-nodejs-plain colored"></i>,
    },
    {
      name: "Google Maps",
      icon: <i className="devicon-google-plain colored"></i>,
    },
    { name: "Docker", icon: <i className="devicon-docker-plain colored"></i> },
    {
      name: "Cloudflare",
      icon: <i className="devicon-cloudflare-plain colored"></i>,
    },
    {
      name: "AWS",
      icon: <i className="devicon-amazonwebservices-original colored"></i>,
    },
    { name: "Vercel", icon: <i className="devicon-vercel-plain colored"></i> },
    { name: "Render", icon: <i className="devicon-nodejs-plain colored"></i> },
    {
      name: "Netlify",
      icon: <i className="devicon-netlify-plain colored"></i>,
    },
  ];

  const frontendSkills = [
    { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
    { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
    {
      name: "JavaScript",
      icon: <i className="devicon-javascript-plain colored"></i>,
    },
    {
      name: "TypeScript",
      icon: <i className="devicon-typescript-plain colored"></i>,
    },
    { name: "React", icon: <i className="devicon-react-original colored"></i> },
    {
      name: "Next.js",
      icon: <i className="devicon-nextjs-original colored"></i>,
    },
    {
      name: "Angular",
      icon: <i className="devicon-angularjs-plain colored"></i>,
    },
    { name: "Redux", icon: <i className="devicon-redux-original colored"></i> },
    {
      name: "Tailwind CSS",
      icon: <i className="devicon-tailwindcss-plain colored"></i>,
    },
    {
      name: "Material UI",
      icon: <i className="devicon-materialui-plain colored"></i>,
    },
    {
      name: "ShadCN",
      icon: <i className="devicon-react-original colored"></i>,
    },
  ];

  const interpersonalSkills = [
    { name: "Communication Skills", icon: <FaUserFriends /> },
    { name: "Teamwork", icon: <FaUserFriends /> },
    { name: "Problem Solving", icon: <FaComments /> },
    { name: "Adaptability", icon: <FaComments /> },
    { name: "Time Management", icon: <FaComments /> },
    { name: "Leadership", icon: <FaUserCog /> },
    { name: "Strategic Thinking", icon: <FaBrain /> },
    { name: "Public Speaking", icon: <FaComments /> },
  ];

  return (
    <div id="skills" className="md:p-24 p-8 mx-auto text-gray-300">
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          Backend & Infrastructure
        </h2>
        <div className="md:flex flex-wrap gap-4 justify-center">
          {backendSkills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2 text-sm">
              <span className="text-xl mr-2">{skill.icon}</span>
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Frontend</h2>
        <div className="md:flex flex-wrap gap-4 justify-center">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="flex items-center mb-2 text-sm">
              <span className="text-xl mr-2">{skill.icon}</span>
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          Interpersonal Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {interpersonalSkills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span className="text-lg mr-2">{skill.icon}</span>
              <span className="text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
