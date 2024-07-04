import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import EmailForm from "./EmailForm";

const Contact = () => {
    return (
        <div className="">
            <div className="bg-blue-200 py-10 md:flex justify-between px-5 md:px-0">
                <div className="container mx-auto px-5 md:px-20 ">
                    <h2 className="text-4xl font-bold pb-4">Contact Information</h2>
                    <p>Fill in the form to start a conversation</p>
                    <div className="text-center w-full pt-20 flex text-5xl gap-5 mx-auto"><a href="mailto:nusratjahan3657r@gmail.com" className="text-yellow-600"><IoMdMail></IoMdMail></a>
                        <a href="https://www.linkedin.com/in/nusrat-jahan-b12174307/" target="_blank" rel="noopener noreferrer" className="text-blue-700"><FaLinkedin></FaLinkedin></a>
                        <a href="https://web.facebook.com/afrin.tisha.524934" target="_blank" rel="noopener noreferrer" className="text-blue-500"><FaFacebook></FaFacebook></a>
                        <a href="https://github.com/nusrat3657" target="_blank" rel="noopener noreferrer" className=""><FaGithub></FaGithub></a>
                    </div>
                </div>
                <EmailForm></EmailForm>
            </div>
        </div>
    );
};

export default Contact;