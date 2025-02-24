/* eslint-disable react/no-unescaped-entities */
import image2 from "../../assets/DSC_0195 - Copy.png";

const AboutMe = () => {
  return (
    <div id="about" className="bg-opacity-20  md:p-24 p-8">
      <div className="lg:w-full  w-full  text-slate-300">
        <h2 className="text-4xl font-bold text-emerald-400 md:mb-10 mb-8 lg:ml-14">
          About Me
        </h2>
        <div className="mx-auto md:flex  items-center justify-around ">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <p className="text-lg mb-4">
              Hello! I'm RAJU AHMMED, a passionate web developer with experience
              in creating dynamic and responsive web applications. I specialize
              in HTML, CSS, Javascript, React, Tailwind CSS, Node.js,
              Express.js, Firebase, MongoDB and other modern web development
              technologies.
            </p>
            <p className="text-lg mb-4">
              I love coding, and I am constantly learning and experimenting with
              new tools and techniques. My goal is to create intuitive and
              engaging user experiences. In my free time, I enjoy exploring new
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
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
