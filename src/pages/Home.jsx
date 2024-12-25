import Services from "./Services";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex mt-[15vh] justify-center"
      >
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative top-[2%] lg:top-10 z-10 text-center px-4 lg:px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto text-sm md:text-xl mb-4 bricolage-grotesque"
          >
            HMT Constructions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[2.2rem] md:text-4xl lg:text-6xl bricolage-grotesque"
          >
            &quot;Build Your Dreams with Us&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-8 max-w-2xl mx-auto text-sm md:text-lg bricolage-grotesque"
          >
            Having a vision but no execution? Get expert advice, innovative
            designs, and proven solutions to bring your construction projects to
            life with quality and trust.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex justify-center space-x-4 mb-[10vh] md:mb-[15vh]"
          >
            <Link
              to="/contact"
              className="  w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow hover:bg-gray-200 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab border border-gray-200"
            >
              Contact
            </Link>
            <Link
              to="/projects"
              className=" w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow bg-black text-white hover:bg-gray-900 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab link-dark"
            >
              Our Projects
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="flex items-center justify-center w-[100vw]"
      >
        <img
          src="/landing-photo.jpeg"
          className="rounded-2xl w-[90vw] md:w-[70vw] h-[30vh] md:h-[70vh] mb-8 object-cover object-top"
        />
      </motion.div>

      <Services />
    </>
  );
};

export default Home;
