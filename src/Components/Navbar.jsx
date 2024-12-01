import { useEffect, useState } from "react";
import logo from '../assets/Icon.svg'
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggleMenu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });
    // navitems arrau
    const navItems = [
        { link: "Home", Path: "/" },
        { link: "Services", Path: "/services" },
        { link: "About", Path: "/about" },
        { link: "Testimonial", Path: "/testimonial" },
        { link: "FAQ", Path: "/faq" },
    ]

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-8 left-0 right-0">
            <nav>
                <div>
                    <a href="" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center" /><span className="text-[#263238]">NEXCENT</span></a>
                    {/* NavItems for large devices */}
                    <ul className="md:flex space-x-12 hidden">
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path}>
                                {link}
                            </Link>
                        ))}
                    </ul>
                    {/* <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map((link, path) => <Link key={path} to={path}>{link}</Link>)
                        }
                    </ul> */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;