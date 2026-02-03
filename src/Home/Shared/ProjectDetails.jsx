import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projects = [
    {
      name: "Bistro Boss",
      image: "https://i.ibb.co.com/V030cMN4/Screenshot-2025-02-24-170920.png",
      description:
        "An extensive range of sustainable lands and eco-friendly developments designed to foster a green and healthy lifestyle.",
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
        "A one-stop platform for booking hotels, cars, security services, and local attractions. Enjoy seamless reservations, secure payments, and instant confirmations for a hassle-free travel and service experience.",
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
  ];

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-gray-200 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-blue-400 hover:text-blue-600 font-bold"
        >
          ← Back to Projects
        </button>

        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
          <img
            className="w-full h-64 object-cover"
            src={project.image}
            alt={project.name}
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-lg mb-8 text-gray-300">{project.description}</p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.coreFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Used Technologies</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.usedTechnologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Live Link
              </a>
              <a
                href={project.clientGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Client Code
              </a>
              {project.serverGitHub && (
                <a
                  href={project.serverGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Server Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
