// import image from '../../assets/about me.jpg'
import image2 from '../../assets/20240629_155408.jpg'

const AboutMe = () => {
    return (
        <div className="bg-slate-600  container mx-auto md:flex  items-center justify-around md:p-24 p-4">
            <div className="w-full md:w-2/3  text-slate-300">
                <h2 className="text-4xl font-bold  md:mb-20 mb-8">About Me</h2>
                <p className="text-lg mb-4">
                    Hello! I'm Nusrat Jahan, a passionate web developer with experience in creating dynamic and responsive web applications. I specialize in HTML, CSS, Javascript, React, Tailwind CSS, Node.js, Express.js, Firebase, MongoDB and other modern web development technologies.
                </p>
                <p className="text-lg mb-4">
                    I love coding, and I am constantly learning and experimenting with new tools and techniques. My goal is to create intuitive and engaging user experiences. In my free time, I enjoy exploring new technologies, reading, and contributing to open-source projects.
                </p>
                <p className="text-lg mb-4">
                    Let's build something great together!
                </p>
                {/* <div className="flex mt-6">
                        <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">View My Projects</a>
                        <a href="#contact" className="ml-4 bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600">Contact Me</a>
                    </div> */}
            </div>
            <div>
                <img className='md:h-[500px] h-[200px] md:pl-10' src={image2} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;