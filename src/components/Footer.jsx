import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8 text-center md:text-left">
          {/* Job & Internships Section */}
          <div className="lg:pr-8 border-b pb-6 md:border-r md:border-b-0 border-gray-400 text-lg">
            <h3 className="text-lg md:text-2xl font-bold font-roboto-slab underline">
              For Job & Internships
            </h3>
            <p className="mt-2 font-pop ">
              Mobile:{" "}
              <a
                href="tel:+917259963334"
                className="text-gray-600 hover:underline"
              >
                +91 72599 63334
              </a>
            </p>
            <p className="font-pop">
              Email:{" "}
              <a
                href="mailto:contact@hmtconstruction.com"
                className="text-gray-600 hover:underline"
              >
                contact@hmtconstruction.com
              </a>
            </p>
            <ul className=" mt-4 space-y-1 font-pop">
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="lg:px-8 border-b pb-6 md:border-r border-gray-400 md:border-b-0">
            <h3 className="text-lg lg:text-2xl font-bold font-roboto-slab underline">
              Quick Links
            </h3>
            <ul className="font-pop space-y-2 mt-2">
              {[
                { title: "Home", link: "/" },
                { title: "About", link: "/about" },
                { title: "Contact", link: "/contact" },
                { title: "Residential projects", link: "/residential" },
                { title: "Government projects", link: "/government" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:underline text-lg"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Social Media Section */}
          <div className="lg:pl-8">
            <h3 className="text-lg lg:text-2xl font-bold font-roboto-slab underline">
              HMT Construction Office
            </h3>
            <p className="font-pop mt-2 text-lg">
              Oppsite to BSNL twin tower, Hosakoppalu, H N pura road, Hassan,
              Karnataka
            </p>
            <div className="mt-4">
              <h4 className="text-lg lg:text-2xl font-bold font-roboto-slab">
                Social Media
              </h4>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <div className="flex space-x-4">
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
                      className="transition-transform duration-300 transform hover:scale-110 hover:rotate-3 hover:text-gray-700"
                    >
                      <Icon size={26} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-t border-gray-400 w-full mx-auto" />

        {/* Footer Bottom Text */}
        <div className="text-center p-4">
          <p className="font-pop text-gray-500">
            Copyright © 2024{" "}
            <span className="font-bold">HMT Construction.</span>{" "}
            <br className="md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
