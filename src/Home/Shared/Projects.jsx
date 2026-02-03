/* eslint-disable react/prop-types */

// project card
const ProjectCard = ({
  name,
  image,
  description,
  liveLink,
  clientGitHub,
  serverGitHub,
  projectId,
}) => {
  return (
    <div className="max-w-lg mx-auto bg-slate-800 text-gray-200 shadow-xl rounded-lg overflow-hidden mb-8 h-[520px] flex flex-col">
      <div className="px-6 py-4 flex-grow">
        <img className="p-4 rounded-lg" src={image} alt="" />
        <h2 className="font-bold text-2xl mb-2 text-gray-200">{name}</h2>
        <p className="text-gray-200 text-base mb-4">{description}</p>
        <button
          onClick={() => (window.location.href = `/project/${projectId}`)}
          className="text-blue-400 hover:text-blue-600 font-bold mb-4"
        >
          View Details
        </button>
      </div>
      <div className="px-6 py-4 bg-slate-300/10 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-green-700 font-bold"
          >
            Live Link
          </a>
          <div className="flex space-x-4">
            <a
              href={clientGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              Client Code
            </a>
            {serverGitHub && (
              <a
                href={serverGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-400"
              >
                Server Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Bistro Boss",
      image: "https://i.ibb.co.com/V030cMN4/Screenshot-2025-02-24-170920.png",
      description:
        "A modern restaurant management system with comprehensive ordering, payment, and inventory management features. Built for seamless restaurant operations with real-time updates and analytics.",
      coreFeatures: [
        "User authentication and authorization",
        "Payment using Stripe",
        "Each listing provides comprehensive information, including images, descriptions, prices, locations, and available facilities, helping you make informed decisions.",
        " Enjoy a smooth and interactive browsing experience, thanks to intuitive navigation and responsive design.",
      ],
      usedTechnologies: [
        "React",
        "Javascript",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express.js",
      ],
      liveLink: "https://bistro-boss-da382.web.app/",
      clientGitHub: "https://github.com/rajuahmmed111/bistro-boss-client",
      serverGitHub: "https://github.com/rajuahmmed111/bistro-boss-server",
    },
    {
      name: "Fasify Booking Website",
      image: "https://i.ibb.co.com/xSrsC3yn/Screenshot-2026-02-03-000449.png",
      description:
        "A comprehensive booking platform that connects users with hotels, cars, security services, and local attractions. Features dynamic pricing, secure payments, and instant confirmations for a seamless travel experience.",
      coreFeatures: [
        "User authentication and authorization",
        "Each listing provides comprehensive information, including images, descriptions, prices, locations, and available facilities, helping you make informed decisions.",
        "Enjoy a smooth and interactive browsing experience, thanks to intuitive navigation and responsive design.",
        "User-friendly search and filter functionality",
        "Google login",
        "Google Maps integration",
        "Book hotels, cars, security services, and attractions seamlessly",
        "Instant booking confirmation",
        "Dynamic country-wise pricing based on user location",
        "Secure, multi-option payments (Stripe, PayPal, Paystack, SSLCommerz, Flutterwave, Payoneer)",
        "User dashboard to manage bookings, favorites, and history",
        "Ratings and reviews for services",
        "Admin panel for content, booking, and analytics management",
      ],

      usedTechnologies: [
        // Frontend
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Redux",
        "ShadCN",

        // Backend
        "Node.js",
        "Express.js",
        "MongoDB",
        "Prisma (ORM)",
        "WebSocket",
        "Multer",
        "Node-Cron",
        "Google Maps integration with country-wise pricing and country-specific payment gateways",

        // Authentication
        "JWT",
        "OAuth",

        // Payment Gateway
        "Stripe",
        "Paystack",

        // Deployment
        "AWS",
      ],

      liveLink: "https://assignment-9-320c5.web.app/",
      clientGitHub: "https://github.com/rajuahmmed111/timothy-frontend",
      serverGitHub: "https://github.com/rajuahmmed111/timothy-backend",
    },

    {
      name: "Counta App",
      image: "https://i.ibb.co.com/Qv4Lv9vM/Screenshot-2026-02-03-121031.png",
      description:
        "A comprehensive service delivery platform for call tracking, billing management, and customer communication. Provides maintainable services with automated billing processes and real-time updates.",
      coreFeatures: [
        "Intuitive interface designed for easy navigation and interaction.",
        "Mark books as 'Read' or add them to your 'Wishlist' with just a click.",
        " Enjoy seamless browsing experience across all devices, from desktops to smartphones.",
        "User authentication and authorization system.",
        "User-friendly search and filter functionality.",
      ],
      usedTechnologies: [
        // Frontend
        "Flutter",
        "Dart",

        // Backend
        "Node.js",
        "Express.js",
        "MongoDB",
        "Prisma (ORM)",
        "JWT",
        "OAuth",

        // Payment Gateway
        "PayPal",

        // Deployment
        "AWS",
      ],
      liveLink:
        "https://play.google.com/store/apps/details?id=com.rita.counta_app",
      clientGitHub: "https://github.com/rajuahmmed111/therapist-frontend",
      serverGitHub: "https://github.com/rajuahmmed111/therapist-backend",
    },
    // Add more projects here
  ];

  return (
    <div id="projects" className="">
      <h1 className="text-4xl font-bold text-center pt-5 text-gray-200">
        My Projects
      </h1>
      <div className="container mx-auto px-5 md:grid grid-cols-3 lg:gap-10 space-y-3 py-14 gap-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} projectId={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
