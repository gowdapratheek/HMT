import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 -z-10"
      >
        <div className="absolute h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-6 sm:p-8 mt-[8vh]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 items-center"
        >
          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            id="team"
            className="p-4 sm:p-6 flex flex-col lg:flex-row items-center w-full md:w-[70%] text-center md:text-left gap-4 sm:gap-6 justify-evenly"
          >
            {/* Founder Image */}
            <img
              src="https://www.meriise.org/assets/Pratheek%20Gowda.jpg"
              alt="Suresh"
              className="rounded-lg md:w-[40%] h-auto object-cover object-top mb-4 md:mb-0"
            />
            {/* Founder Info */}
            <div className="flex flex-col gap-3 sm:gap-4  items-center">
              <h3 className="text-4xl lg:text-5xl font-bold bricolage-grotesque">
                Suresh
              </h3>
              <p className="text-gray-500 text-lg sm:text-sm ">
                Founder of HMT Constructions
              </p>

              {/* Contact Icons */}
              <div className="flex justify-center md:justify-start gap-4 ">
                <a
                  href="tel:+918660620326"
                  className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                  aria-label="Phone"
                >
                  <FiPhone />
                </a>
                <a
                  href="mailto:example@example.com"
                  className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                  aria-label="Email"
                >
                  <LuMail />
                </a>
                <a
                  href="https://wa.me/8660620326"
                  className="text-gray-600 hover:text-black text-xl sm:text-2xl"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-gray-600 text-lg sm:text-md w-[90%] text-center"
            style={{ fontFamily: "Poppins, serif" }}
          >
            HMT Constructions, where innovation meets reliability in the world
            of exceptional infrastructure. With over two decades of expertise,
            we excel in designing spaces that balance sophistication with
            practicality. Committed to excellence, our skilled team ensures
            every project is a masterpiece of quality and precision.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
