// import { Link as ScrollLink } from 'react-scroll'
// // const ScrollLink = Scroll.ScrollLink

// const NavBar = () => {

//     const navlinks = <>
//         <li><ScrollLink
//             to="about"
//             smooth={true}
//             duration={500}>About Me</ScrollLink></li>
//         <li><ScrollLink
//             to="skills"
//             smooth={true}
//             duration={500}>Skills</ScrollLink></li>
//         <li><ScrollLink
//             to="education"
//             smooth={true}
//             duration={500}>Education</ScrollLink></li>

//         <li><ScrollLink
//             to="projects"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className='some-class'
//             activeClass='some-active-class'
//         >
//             Projects
//         </ScrollLink></li>

//         <li><ScrollLink
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className='some-class'
//             activeClass='some-active-class'
//         >
//             Contact Me
//         </ScrollLink></li>
//     </>

//     return (
//         // <div className="navbar bg-sky-900 text-white">
//         //     <div className="flex-1">
//         //         <a className="btn btn-ghost text-xl">Nusrat Jahan</a>
//         //     </div>
//         //     <div className="flex-none">
//         //         <ul className="menu menu-horizontal px-1">
//         //             <li><a>About Me</a></li>
//         //             <li><a>Skills</a></li>
//         //             <li><a>Contact Me</a></li>
//         //         </ul>
//         //     </div>
//         // </div>

//         <div className="navbar bg-green-900/60 text-white">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-sky-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {navlinks}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">Nusrat Jahan</a>
//             </div>
//             <div className="navbar-end hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navlinks}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default NavBar;






// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


const Navbar = () => {

    const navlink = (
        <>
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
            <li >
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
            <li >
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass='text-[#10cc7b] underline font-bold'
                    className="text-white font-bold hover:text-emerald-400 cursor-pointer"
                >
                    Projects
                </Link>
            </li>
            <li >
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
            <li >
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
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 ">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-arimo text-emerald-400 font-extrabold hover:bg-transparent">Nusrat<span className='text-emerald-400'>.</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="flex gap-6 px-1">
                    {navlink}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;