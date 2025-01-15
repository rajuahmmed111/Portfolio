/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ name, image, description, coreFeatures, usedTechnologies, liveLink, clientGitHub, serverGitHub }) => {
    return (
        <div className="max-w-lg mx-auto bg-slate-800 text-gray-200 shadow-xl rounded-lg overflow-hidden mb-8 min-h-screen">
            <div className="px-6 py-4">
                <img className="p-4 rounded-lg" src={image} alt="" />
                <h2 className="font-bold text-2xl mb-2 text-gray-200">{name}</h2>
                <p className="text-gray-200 text-base mb-4">{description}</p>
                <div className="mb-4">
                    <h3 className="font-semibold text-lg text-gray-200">Core Features:</h3>
                    <ul className="list-disc list-inside ml-4 text-gray-200">
                        {coreFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold text-lg text-gray-200">Used Technologies:</h3>
                    <ul className="list-disc list-inside ml-4 text-gray-200">
                        {usedTechnologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-6 py-4 bg-slate-300/10 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-green-700 font-bold">Live Link</a>
                    <div className="flex space-x-4">
                        <a href={clientGitHub} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">Client Code</a>
                        <a href={serverGitHub} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-400">Server Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            name: "Eco Domain",
            image: "https://i.ibb.co/dWz8VRq/Screenshot-2024-07-04-143338.png",
            description: "An extensive range of sustainable lands and eco-friendly developments designed to foster a green and healthy lifestyle.",
            coreFeatures: [
                "User authentication and authorization",
                "Each listing provides comprehensive information, including images, descriptions, prices, locations, and available facilities, helping you make informed decisions.",
                " Enjoy a smooth and interactive browsing experience, thanks to intuitive navigation and responsive design."
            ],
            usedTechnologies: ["React", "Javascript", "Tailwind CSS", "Node.js", "Firebase"],
            liveLink: "https://assignment-9-320c5.web.app/",
            clientGitHub: "https://github.com/nusrat3657/make-private-repo-public9"
            // serverGitHub: "https://github.com/username/project-server"
        },
        {
            name: "Dine Genius",
            image: "https://i.ibb.co/1rJYKrr/Screenshot-2024-07-04-144452.png",
            description: "Our website is dedicated to providing innovative solutions that streamline and enhance every aspect of restaurant management.",
            coreFeatures: [
                "User authentication and authorization",
                "Each listing provides comprehensive information, including images, descriptions, prices, locations, and available facilities, helping you make informed decisions.",
                "Product catalog with search and filtering options"
            ],
            usedTechnologies: ["React", "Javascript", "Tailwind CSS", "Node.js", "Firebase", "MongoDB", "Express.js"],
            liveLink: "https://restaurant-management-website.netlify.app",
            clientGitHub: "https://github.com/nusrat3657/restaurant-management-client11",
            serverGitHub: "https://github.com/nusrat3657/restaurant-management-server11"
        },
        {
            name: "Bookworm's Paradise",
            image: "https://i.ibb.co/6Hxjv1d/Screenshot-2024-07-04-144649.png",
            description: "Our website is dedicated to providing in-depth reviews, insightful recommendations, and a vibrant community for book lovers of all genres.",
            coreFeatures: [
                "Intuitive interface designed for easy navigation and interaction.",
                "Mark books as 'Read' or add them to your 'Wishlist' with just a click.",
                " Enjoy seamless browsing experience across all devices, from desktops to smartphones."
            ],
            usedTechnologies: ["React", "Javascript", "Tailwind CSS", "Node.js", "Firebase"],
            liveLink: "https://aquamarine-cucurucho-2055b7.netlify.app/",
            clientGitHub: "https://github.com/nusrat3657/book-review8",
            // serverGitHub: "https://github.com/nusrat3657/restaurant-management-server11"
        },
        // Add more projects here
    ];

    return (
        <div id="projects" className="">
            <h1 className="text-4xl font-bold text-center pt-5 text-gray-200">My Projects</h1>
            <div className="container mx-auto px-5 md:grid grid-cols-3 lg:gap-10 space-y-3 py-14 gap-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;