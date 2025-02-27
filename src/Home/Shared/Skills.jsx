import { FaUserFriends, FaComments, FaUserCog, FaBrain } from 'react-icons/fa';
import 'devicon/devicon.min.css';

// skills info and icons
const Skills = () => {
    const technicalSkills = [
        { name: "HTML5", icon: <i className="devicon-html5-plain colored"></i> },
        { name: "CSS3", icon: <i className="devicon-css3-plain colored"></i> },
        { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
        { name: "React", icon: <i className="devicon-react-original colored"></i> },
        { name: "React Router", icon: <i className="devicon-reactrouter-plain colored"></i> },
        { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
        { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored"></i> },
        { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
        { name: "Express.js", icon: <i className="devicon-express-original colored"></i> },
        // typescript
        { name: "TypeScript", icon: <i className="devicon-typescript-plain colored"></i> },
        // Next.js
        { name: "Next.js", icon: <i className="devicon-nextjs-original colored"></i> },
        // prisma
        { name: "Prisma", icon: <i className="devicon-prisma-original colored"></i> },
        // PostgreSQL
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
        // Git
        { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
     
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
        <div id='skills' className="md:p-24 p-8 mx-auto text-gray-300">
            <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">Technical Skills</h2>
                <div className="md:flex gap-4 text-4xl justify-center">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <span className=" text-2xl mr-2">{skill.icon}</span>
                            {/* <span className="text-gray-800">{skill.name}</span> */}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">Interpersonal Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                    {interpersonalSkills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-2xl mr-2">{skill.icon}</span>
                            <span className="text-gray-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;