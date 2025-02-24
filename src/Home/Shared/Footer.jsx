import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-400/20 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            <p className="text-sm">
              I am Raju Ahmmed, a web developer passionate about creating
              meaningful web applications.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className=" flex mx-auto gap-2">
              <IoMdMail />{" "}
              <a
                href="mailto:nusratjahan3657r@gmail.com"
                className="text-gray-300 hover:text-gray-400 -mt-1"
              >
                ahraju2003@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Social</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/md-raju-ahmed-91830a285/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition duration-300 text-3xl"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href="https://github.com/rajuahmmed111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition duration-300 text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/tonoyadiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition duration-300 text-3xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          {/* dynamic date time */}© {new Date().getFullYear()} Raju Ahmmed. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
