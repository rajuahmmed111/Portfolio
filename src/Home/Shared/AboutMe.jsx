/* eslint-disable react/no-unescaped-entities */
import image2 from "../../assets/DSC_0195 - Copy.png";

const AboutMe = () => {
  return (
    <div id="about" className="bg-opacity-20  md:p-24 p-8">
      {/* about */}
      <div className="lg:w-full  w-full  text-slate-300">
        <h2 className="text-4xl font-bold text-emerald-400 md:mb-10 mb-8 lg:ml-14">
          About Me
        </h2>
        <div className="mx-auto md:flex items-center justify-around">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <p className="text-lg mb-4">
              Hello! I'm{" "}
              <strong className="text-emerald-400">RAJU AHMMED</strong>, a
              passionate full-stack web developer focused on building scalable
              and responsive web applications.
            </p>

            <p className="text-lg mb-4">
              <strong className="text-emerald-400">Frontend:</strong> HTML5,
              CSS3, Tailwind CSS, Material UI, JavaScript, React.js, Redux,
              Next.js, ShadCN, TanStack Query, TypeScript.
            </p>

            <p className="text-lg mb-4">
              <strong className="text-emerald-400">Backend:</strong> Node.js,
              Express.js, TypeScript, WebSockets, Multer, Node-Cron, JWT, OAuth.
            </p>

            <p className="text-lg mb-4">
              <strong className="text-emerald-400">Databases:</strong> MongoDB,
              Mongoose (ODM), PostgreSQL, Prisma (ORM).
            </p>

            <p className="text-lg mb-4">
              <strong className="text-emerald-400">Deployment & DevOps:</strong>{" "}
              AWS, Cloudflare, Vercel, Render, Netlify, Docker, CI/CD pipelines.
            </p>

            <p className="text-lg mb-4">
              I love coding, constantly learning new tools, and creating
              intuitive user experiences. In my free time, I enjoy exploring
              technologies, reading, and contributing to open-source projects.
            </p>

            <p className="text-lg mb-4">
              Let's build something great together!
            </p>
          </div>

          <div>
            <img
              className="md:h-[200px] lg:h-[350px] h-[200px] md:pl-10"
              src={image2}
              alt="Raju Ahmmed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
