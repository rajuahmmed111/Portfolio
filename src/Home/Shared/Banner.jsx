// import background from '../../assets/Get started in Canva (1).png'
import { FaFacebook,  FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profile from '../../assets/Blue Minimalist Instagram Profile Picture.png'
// import profile2 from '../../assets/20240629_155408.jpg'
import { MdDeveloperMode } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="bg-cover bg-center  md:h-[450px]"
            style={{ backgroundImage: `url('https://i.ibb.co/K6gFG07/Landing-Page.png')` }}>


            <div className="container mx-auto md:flex  items-center justify-around h-full p-4">
                <img
                    src={profile}
                    alt=""
                    className=" items-center shadow-lg mb-4"
                />
                <div className='bg-white/20 p-8 md:px-40 rounded-xl'>
                    <p className='text-lg text-white'>Hey There,</p>
                    <h1 className="text-5xl font-bold font-ga-maamli-regular text-white">I'm Nusrat <br />Jahan</h1>
                    <p className="text-red-400 text-lg flex items-center gap-2 mt-2"><MdDeveloperMode />Web Developer...</p>
                    <div className='text-center  flex  items-center gap-6 mt-4 text-2xl'>
                        <a className='text-yellow-500' href="mailto:nusratjahan3657r@gmail.com"><IoMdMail/></a>
                        <a className='text-blue-400' href="https://web.facebook.com/afrin.tisha.524934"><FaFacebook></FaFacebook></a>
                        <a className='text-black' href="https://github.com/nusrat3657"><FaGithub></FaGithub></a>
                        <a className='text-blue-600' href="https://www.linkedin.com/in/nusrat-jahan-b12174307/"><FaLinkedin></FaLinkedin></a>
                        <a className='text-white' href="https://www.instagram.com/tonoyadiya/"><FaInstagram></FaInstagram></a>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;