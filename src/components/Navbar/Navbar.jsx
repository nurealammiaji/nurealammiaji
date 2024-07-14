import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/#about"}>About</Link></li>
        <li>
            <details>
                <summary>Projects</summary>
                <ul className="w-full p-2 lg:w-28">
                    <li><Link to={"/#project1"}>Project 1</Link></li>
                    <li><Link to={"/#project2"}>Project 2</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to={"/#contact"}>Contact</Link></li>
    </>

    return (
        <nav>
            <div className="navbar bg-neutral">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <details className="dropdown">
                        <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                            {links}
                        </ul>
                    </details>
                    <NavLink to={"/"} className="btn btn-ghost text-secondary md:text-xl">Nure Alam Miaji</NavLink>
                </div>
                {/* Desktop Menu */}
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"https://www.fiverr.com/nurealammiaji"} className="btn btn-secondary btn-sm">Hire Me</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;