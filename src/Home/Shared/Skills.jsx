import { FaUserFriends, FaComments } from 'react-icons/fa';
import 'devicon/devicon.min.css';

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
    ];

    const interpersonalSkills = [
        { name: "Communication Skills", icon: <FaUserFriends /> },
        { name: "Teamwork", icon: <FaUserFriends /> },
        { name: "Problem Solving", icon: <FaComments /> },
        { name: "Adaptability", icon: <FaComments /> },
        { name: "Time Management", icon: <FaComments /> },
    ];

    return (
        <div className="container mx-auto px-5 py-10 bg-slate-600/80 text-gray-300">
            <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                <div className="flex gap-4">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <span className=" text-2xl mr-2">{skill.icon}</span>
                            {/* <span className="text-gray-800">{skill.name}</span> */}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Interpersonal Skills</h2>
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