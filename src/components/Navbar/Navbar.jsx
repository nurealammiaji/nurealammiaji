import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li>
            <details>
                <summary>Projects</summary>
                <ul className="p-2">
                    <li><Link to={"/projects#1"}>Project 1</Link></li>
                    <li><Link to={"/projects#2"}>Project 2</Link></li>
                </ul>
            </details>
        </li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <details className="dropdown">
                        <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        </summary>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </details>
                    <NavLink to={"/"} className="btn btn-ghost md:text-xl">Nure Alam Miaji</NavLink>
                </div>
                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"https://www.fiverr.com/nurealammiaji"} className="btn">Hire Me</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;