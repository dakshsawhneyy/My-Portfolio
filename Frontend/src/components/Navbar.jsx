import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon } from "react-icons/fi"
import { FiHome, FiUser, FiBriefcase, FiEdit3, FiMail, 	FiBarChart2} from "react-icons/fi"
import { useEffect, useState } from 'react'
import Starfield from './Starfield'


const Navbar = ({darkMode, setDarkMode, toggleDarkMode}) => {

    // Creating useLocation for highlighting current route icon
    const location = useLocation()
    // Helper function to see if path matches
    const isActive = (path) => {
        location.pathname === path;
    }


    const [showExtras, setShowExtras] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
        setShowExtras(false); // scrolling down
        } else {
        setShowExtras(true); // scrolling up
        }
        lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-6xl w-full px-6 justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className={`text-2xl font-grotesk font-bold text-primary dark:text-success transition-all duration-300 ${showExtras ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>Daksh</Link>
                    
                    {/* Nav Links */}
                    <div className="flex gap-6 px-10 py-3 backdrop-blur-md bg-white/30 dark:bg-bgDark/40 shadow-lg rounded-full border border-white/20 dark:border-gray-700 transition-all duration-300">
                        <Link to="/" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"}  transition-all duration-300`}>Home <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                        <Link to="/about" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/about") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"} transition-all duration-300`}>About <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/about" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                        <Link to="/blog" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/blog") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"} transition-all duration-300`}>Blogs <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/blog" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                        <Link to="/projects" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/projects") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"} transition-all duration-300`}>Projects <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/projects" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                        <Link to="/metrics" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/metrics") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"} transition-all duration-300`}>Metrics <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/metrics" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                        <Link to="/contact" className={`relative text-sm font-semibold uppercase tracking-wide ${isActive("/contact") ? "text-primary" : "text-gray-800 dark:text-white hover:text-primary"} transition-all duration-300`}>Contact <span className={`absolute left-0 -bottom-1 h-0.5 w-0 bg-primary dark:bg-success transition-all duration-300 ${location.pathname === "/contact" ? "w-full" : "group-hover:w-full"}`}></span></Link>
                    </div>

                    {/* Dark Mode Button */}
                    <button onClick={toggleDarkMode} className={`text-2xl transition-all duration-300 ${showExtras ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"} text-gray-800 dark:text-white hover:text-primary`}>
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
            </nav>

            {/* For Mobile Screen */}
            <nav className='md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/30 dark:bg-bgDark/30 backdrop-blur-3xl shadow-lg rounded-full px-5 sm:px-6 py-3 z-50 flex items-center justify-between gap-5'>
                <div className='flex justify-between items-center gap-5 sm:gap-6'>
                    <Link to={"/"} className={`text-xl ${isActive("/") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiHome/> </Link>
                    <Link to={"/about"} className={`text-xl ${isActive("/about") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiUser/> </Link>
                    <Link to={"/blog"} className={`text-xl ${isActive("/blog") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiEdit3/> </Link>
                    <Link to={"/projects"} className={`text-xl ${isActive("/projects") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiBriefcase/> </Link>
                    <Link to={"/metrics"} className={`text-xl ${isActive("/metrics") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiBarChart2/> </Link>
                    <Link to={"/contact"} className={`text-xl ${isActive("/contact") ? "text-primary dark:text-success" : "text-gray-800 dark:text-white hover:text-primary hover:dark:text-success"}`}> <FiMail/> </Link>
                </div>

                {/* Dark Mode Toggle */}
                <button onClick={toggleDarkMode} className=" text-xl text-gray-800 dark:text-white hover:text-primary transition-all">
                    {darkMode ? <FiSun /> : <FiMoon />}
                </button>
            </nav>
        </>
    )
}

export default Navbar
