import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = (
    <>
    {/* home */}
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-emerald-400 underline font-bold"
          className="text-white font-bold hover:text-emerald-400 cursor-pointer"
        >
          Home
        </Link>
      </li>

{/* skills */}
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-emerald-400 underline font-bold"
          className="text-white font-bold hover:text-emerald-400 cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-[#10cc7b] underline font-bold"
          className="text-white font-bold hover:text-emerald-400 cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-emerald-400 underline font-bold"
          className="text-white font-bold hover:text-emerald-400 cursor-pointer"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="underline text-[#10cc7b]"
          className="text-white font-bold hover:text-emerald-400 cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar lg:pl-14 lg:pr-14 lg:pt-8 lg:pb-8  bg-black top-0 h-[78px] sticky z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-neutral lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 "
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-arimo text-emerald-400 font-extrabold hover:bg-transparent">
          RAJU<span className="text-emerald-400">.</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-6 px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
