import { NavLink } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-[90vw] border border-gray-200 rounded-xl mx-auto mt-4
        ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-lg py-4"
            : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center"
            onClick={handleNavLinkClick}
          >
            <img src="/hmt-con.png" alt="HMT Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-lg">
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (link) => (
                <NavLink
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200
                  ${isActive ? "text-black" : "text-gray-600 hover:text-black"}`
                  }
                  onClick={handleNavLinkClick}
                >
                  {link}
                </NavLink>
              )
            )}
          </nav>

          {/* Social Media Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              {
                href: "https://www.instagram.com/hmt_hassan/",
                icon: FaInstagram,
                label: "Instagram",
              },
              {
                href: "mailto:contact@hmtconstructions.com",
                icon: FaRegEnvelope,
                label: "Email",
              },
              {
                href: "https://wa.me/8660620326?text=Hello",
                icon: FaWhatsapp,
                label: "WhatsApp",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-gray-600 hover:text-black transition-colors duration-200"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 scale-x-[-1]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h12M4 18h8"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4"
          >
            <nav className="flex flex-col space-y-4 justify-center items-center w-full">
              {["Home", "Services", "Projects", "About", "Contact"].map(
                (link) => (
                  <NavLink
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-base font-medium transition-colors duration-200 py-2
                    ${
                      isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }`
                    }
                    onClick={handleNavLinkClick}
                  >
                    {link}
                  </NavLink>
                )
              )}

              {/* Social Media Icons - Mobile */}
              <div className="flex justify-center space-x-6 pt-4 border-t">
                {[
                  {
                    href: "https://www.instagram.com/hmt_hassan/",
                    icon: FaInstagram,
                    label: "Instagram",
                  },
                  {
                    href: "mailto:contact@hmtconstructions.com",
                    icon: FaRegEnvelope,
                    label: "Email",
                  },
                  {
                    href: "https://wa.me/8660620326?text=Hello",
                    icon: FaWhatsapp,
                    label: "WhatsApp",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <Icon size={26} />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
