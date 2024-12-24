import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-[3%] right-[5%] w-[90%] mx-auto z-50 backdrop-blur-md rounded-xl border border-gray-200 font-bold font-roboto-slab ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className=" hover:text-gray-700 flex justify-center items-center link-dark"
            onClick={handleNavLinkClick}
          >
            <img
              src="/HMT-logo.png"
              alt="HMT Logo"
              className="h-16 rounded-md"
            />
          </NavLink>
        </div>

        <svg
          className="h-6 w-6 text-black cursor-pointer transition-colors duration-300 md:hidden scale-x-[-1]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h12M4 18h8"}
          />
        </svg>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 text-lg font-normal   tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-black" : ""} hover:text-gray-700`
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `${isActive ? "text-black" : ""} hover:text-gray-700`
            }
            onClick={handleNavLinkClick}
          >
            Our Gallery
          </NavLink>
          {["Services", "About", "Contact"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className={({ isActive }) =>
                `${isActive ? "text-black" : ""} hover:text-gray-700`
              }
              onClick={handleNavLinkClick}
            >
              {link}
            </NavLink>
          ))}
          {/* <div className="relative " ref={projectsDropdownRef}>
            <button
              onClick={toggleProjectsDropdown}
              className=" hover:text-gray-700 flex items-center "
            >
              Projects
              <IoIosArrowDown
                className={`ml-1 transition-transform duration-300 ${
                  isProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isProjectsOpen && (
              <div className="absolute bg-[#faf7f5] text-black shadow-lg mt-2 rounded-lg">
                <NavLink
                  to="/residential"
                  className="block py-3 px-6 rounded-lg"
                >
                  Residential
                </NavLink>
                <NavLink
                  to="/government"
                  className="block py-3 px-6 rounded-lg"
                >
                  Government
                </NavLink>
              </div>
            )}
          </div> */}
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          {[
            {
              href: "https://www.instagram.com/hmt_hassan/",
              icon: FaInstagram,
            },
            { href: "https://facebook.com", icon: FaFacebookF },
            { href: "https://wa.me/7259963334?text=Hello", icon: FaWhatsapp },
          ].map(({ href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-gray-700 transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          ref={menuRef}
          className="lg:hidden mt-2 rounded-lg shadow-lg transition-transform duration-1000 text-center space-y-4 font-normal text-xl  tracking-wider"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-black" : ""} hover:text-gray-700 `
            }
            onClick={handleNavLinkClick}
          >
            Home
          </NavLink>
          {["Our Gallery", "Services", "About", "Contact"].map(
            (link, index) => (
              <NavLink
                key={index}
                to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? "text-black" : ""}`
                }
                onClick={handleNavLinkClick}
              >
                {link}
              </NavLink>
            )
          )}
          {/* <div className="relative w-full " ref={projectsDropdownRef}>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={toggleProjectsDropdown}
                className=" hover:text-gray-700 flex items-center  tracking-wider"
              >
                Projects
                <IoIosArrowDown
                  className={`ml-1 transition-transform duration-300 ${
                    isProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            {isProjectsOpen && (
              <div className="relative left-1/2 transform -translate-x-1/2 shadow-lg mt-2 rounded-lg bg-black/40">
                <NavLink
                  to="/residential"
                  className="block py-4 px-6 rounded-lg  hover:text-gray-700"
                  onClick={handleNavLinkClick}
                >
                  Residential
                </NavLink>
                <NavLink
                  to="/government"
                  className="block py-4 px-6 rounded-lg  hover:text-gray-700"
                  onClick={handleNavLinkClick}
                >
                  Government
                </NavLink>
              </div>
            )}
          </div> */}
          <div className="flex md:hidden justify-evenly w-full text-center p-6">
            {[
              {
                href: "https://www.instagram.com/hmt_hassan/",
                icon: FaInstagram,
              },
              { href: "https://facebook.com", icon: FaFacebookF },
              {
                href: "https://wa.me/7259963334?text=Hello",
                icon: FaWhatsapp,
              },
            ].map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black hover:"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
