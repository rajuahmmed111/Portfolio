import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import EmailForm from "./EmailForm";

const Contact = () => {
  return (
    <div id="contact">
      <div className=" py-10 md:flex justify-between px-5 md:px-0">
        <div className="container mx-auto px-5 md:px-20 text-gray-200">
          <h2 className="text-4xl text-emerald-400 font-bold pb-4">
            Contact Information
          </h2>
          <p>Fill in the form to start a conversation</p>

          {/* social */}
          <div className="text-center w-full pt-20 flex text-5xl gap-5 mx-auto">
            <a href="mailto:ahraju2003@gmail.com" className="text-yellow-600">
              <IoMdMail></IoMdMail>
            </a>
            <a
              href="https://www.linkedin.com/in/md-raju-ahmed-91830a285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100033792314596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="https://github.com/rajuahmmed111"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
        <EmailForm></EmailForm>
      </div>
    </div>
  );
};

export default Contact;
