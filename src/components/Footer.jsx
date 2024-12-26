import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <img
              src="/hmt-con.png"
              alt="HMT Logo"
              className="h-14 rounded-md"
            />
            <div className="flex space-x-4 pt-2">
              {[
                {
                  href: "https://www.instagram.com/hmt_hassan/",
                  icon: FaInstagram,
                },
                {
                  href: "mailto:contact@hmtconstructions.com",
                  icon: FaRegEnvelope,
                },
                {
                  href: "https://wa.me/8660620326?text=Hello",
                  icon: FaWhatsapp,
                },
              ].map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-gray-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Oppsite to BSNL twin tower, Hosakoppalu, H N pura road,
                  Hassan, Karnataka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-gray-500 flex-shrink-0" />
                <a
                  href="tel:+918660620326"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  +91 8660620326
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:contact@hmtconstructions.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  contact@hmtconstructions.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 w-[90%] mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} HMT Construction. All rights
              reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
