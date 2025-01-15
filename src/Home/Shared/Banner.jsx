/* eslint-disable react/no-unescaped-entities */
// // import background from '../../assets/Get started in Canva (1).png'
// import { FaFacebook,  FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import profile from '../../assets/Dark Red Neon Futuristic Instagram Profile Picture.jpg'
// // import profile2 from '../../assets/20240629_155408.jpg'
// import { MdDeveloperMode } from 'react-icons/md';
// import { IoMdMail } from 'react-icons/io';
// import banner from "../../assets/banner.jpg"

// const Banner = () => {
//     return (
//         <div id='home' className="bg-cover bg-center md:h-[450px]"
//             style={{ backgroundImage: `url(${banner})` }}>


//             <div className="container mx-auto md:flex  items-center justify-around h-full p-4">
//                 <img
//                     src={profile}
//                     alt=""
//                     className="rounded-full items-center shadow-lg mb-4"
//                 />
//                 <div className='p-8 md:px-40 rounded-xl'>
//                     <p className='text-xl text-white'>Hey There,</p>
//                     <h1 className="text-6xl font-bold font-ga-maamli-regular text-white">I'm Nusrat <br />Jahan</h1>
//                     <p className="text-green-400 text-xl flex items-center gap-2 mt-2"><MdDeveloperMode />Web Developer...</p>
//                     <div className='text-center text-gray-200 flex  items-center gap-6 mt-4 text-2xl'>
//                         <a className='text-yellow-500' href="mailto:nusratjahan3657r@gmail.com"><IoMdMail/></a>
//                         <a className='text-blue-400' href="https://web.facebook.com/afrin.tisha.524934"><FaFacebook></FaFacebook></a>
//                         <a className='' href="https://github.com/nusrat3657"><FaGithub></FaGithub></a>
//                         <a className='text-blue-600' href="https://www.linkedin.com/in/nusrat-jahan-r7/"><FaLinkedin></FaLinkedin></a>
//                         <a className='text-white' href="https://www.instagram.com/tonoyadiya/"><FaInstagram></FaInstagram></a>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Banner;




// import image from "../assets/20241115_163032.jpg";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import image from "../../assets/profile.png"
import { MdDeveloperMode } from "react-icons/md";
import TextChange from "./TextChange";

const Banner = () => {
    return (
        <section id="home"
            className="hero-section flex items-center justify-center  text-white relative"

        >
            <div className="container mx-auto md:m-8 md:p-8 relative z-10">
                <div className="flex flex-wrap flex-col-reverse md:flex-row lg:flex-row items-center">
                    <div className="w-full md:w-1/2 ">
                        <div className="hero-content-box flex flex-col space-y-5 lg:pl-16 p-5">
                            <div className="lg:w-4/5 md:w-1/2 text-center lg:text-left ">
                                <motion.p
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2, // "Web Developer" প্রথমে আসবে
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                    }}
                                    className="ml-1 text-emerald-400 font-montserrat flex items-center gap-2 justify-center md:justify-start lg:my-0 md:my-0 my-4"><MdDeveloperMode /> Web Developer</motion.p>
                                <motion.p
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 1.2, // "Hello I'm Roksana Akter" পরে আসবে
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                    }}
                                    className="text-5xl font-montserrat tracking-wide font-bold">Hey There I'm <span className=" font-roboto font-bold mb-2 text-[#10cc7b] flex">
                                        <TextChange />
                                    </span></motion.p>

                            </div>


                            <div className=" md:hidden text-center mb-4 w-full md:w-1/2 order-first md:order-last ">
                                <img decoding="async" src={image} alt="ThemeJunction" className="rounded-full  w-[250px] h-[250px] mx-auto border-2 border-emerald-400 shadow-[0_0_50px_rgba(16,185,129,1)] transition-transform duration-300" />
                            </div>

                            {/* <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 1.4, // Description আরও পরে আসবে
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 1 },
                                }}
                                className="lead mb-6 font-montserrat text-center lg:text-left">
                                I'm a skilled web developer specializing in crafting responsive, dynamic, and intuitive digital solutions. With expertise in HTML, CSS, JavaScript, React, and Node.js, I create seamless user experiences that align with client objectives. Passionate about leveraging innovative frameworks to drive business growth through impactful web development.
                            </motion.p> */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 0.5,
                                }}
                                className="button-box flex flex-wrap justify-center md:justify-start ">
                                <a href="/WebDeveloper_Resume_of_Nusrat.pdf" className="btn border-2 border-[#10cc7b] bg-neutral-900 text-white hover:bg-[#10cc7b] hover:text-black hover:border-[#10cc7b]" download={"WebDeveloper_Resume_of_Nusrat.pdf"}>
                                    Download Resume <span className="text-xl"><IoMdDownload /></span>
                                    <i aria-hidden="true" className="tj flaticon flaticon-download ml-2"></i>
                                </a>
                                <div className='flex gap-4 lg:ml-4 lg:my-0 md:my-4 my-4'>
                                    <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://web.facebook.com/afrin.tisha.524934" className="text-blue-400 "><FaFacebook className='text-2xl text-white' /></a></p>

                                    <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://github.com/nusrat3657" className="text-blue-400"><FaGithub className='text-2xl text-white' /></a></p>
                                    <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://www.linkedin.com/in/nusrat-jahan-r7/" className="text-blue-400"><FaLinkedin className='text-2xl text-white' /></a></p>
                                    {/* <p className="mb-2 border-2 border-[#10cc7b] p-2 rounded-full"> <a href="https://www.instagram.com/tonoyadiya/" className="text-blue-400"><FaInstagram className='text-2xl text-white' /></a></p> */}

                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className="hidden md:block md:w-1/2">
                        <div className="hero-image-box text-center">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    x: { type: "spring", stiffness: 60 },
                                    opacity: { duration: 1 },
                                    ease: "easeIn",
                                    duration: 0.5,
                                }}
                                decoding="async" src={image} alt="ThemeJunction" className="rounded-full  w-[350px] h-[350px] mx-auto border-2 border-emerald-400   transition-transform duration-300 shadow-[0_0_50px_rgba(16,185,129,1)]" />

                        </div>

                    </div>
                </div>
            </div>
        </section>


    );
};

export default Banner;