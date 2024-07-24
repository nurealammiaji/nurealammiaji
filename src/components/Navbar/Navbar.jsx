import { Link } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li className="hover:text-secondary"><a href={"/#features"}>Features</a></li>
        <li className="hover:text-secondary"><a href={"/#projects"}>Projects</a></li>
        <li className="hover:text-secondary"><a href={"/#skills"}>Skills</a></li>
        <li className="hover:text-secondary"><a href={"/#education"}>Education</a></li>
        {/* <li>
            <details>
                <summary className="hover:text-secondary">Projects</summary>
                <ul className="w-full p-2 md:w-28 md:bg-neutral">
                    <li className="hover:text-secondary"><a href={"/#project1"}>Project 1</a></li>
                    <li className="hover:text-secondary"><a href={"/#project2"}>Project 2</a></li>
                </ul>
            </details>
        </li> */}
        <li className="hover:text-secondary"><a href={"/#contact"}>Contact</a></li>
    </>

    return (
        <nav>
            <div className="px-3 rounded-t-xl navbar bg-neutral">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <details className="dropdown">
                        <summary tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </summary>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-40 p-2 shadow font-medium">
                            {links}
                        </ul>
                    </details>
                    <Link to={"/"} className="hidden my-auto text-xl font-semibold text-transparent lg:block bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 bg-clip-text">Nure Alam Miaji</Link>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:block navbar-center lg:flex">
                    <ul className="px-1 font-medium menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"https://www.fiverr.com/nurealammiaji"} className="transition-colors ease-in-out delay-0 btn btn-sm bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500">Hire Me</Link>
                </div>
            </div>
            <br /><br />
        </nav>
    );
};

export default Navbar;