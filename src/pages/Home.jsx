import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative  flex mt-[15vh] justify-center  ">
        {/* Content */}
        <div className="relative top-[2%] lg:top-10 z-10 text-center  px-4 lg:px-6">
          <h2 className="mx-auto text-sm md:text-xl mb-4 bricolage-grotesque">
            HMT Construction
          </h2>

          <p className="text-[2.2rem] md:text-4xl lg:text-6xl bricolage-grotesque">
            &quot;Build Your Dreams with Us&quot;
          </p>
          <p className="mb-8 max-w-2xl mx-auto text-sm md:text-lg bricolage-grotesque">
            Having a vision but no execution? Get expert advice, innovative
            designs, and proven solutions to bring your construction projects to
            life with quality and trust.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mb-[10vh] md:mb-[15vh]">
            <Link
              to="/contactus"
              className="  w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow hover:bg-gray-200 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab border border-gray-200"
            >
              Hire Us
            </Link>
            <Link
              to="/gallery"
              className=" w-1/2 md:w-1/4 px-5 py-3 rounded-md shadow bg-black text-white hover:bg-gray-900 transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-md text-center font-roboto-slab link-dark"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100vw]  ">
        <img
          src="/landing-photo.jpeg"
          className="rounded-2xl w-[90vw] md:w-[70vw] h-[30vh] md:h-[70vh] mb-8 object-cover object-top"
        />
      </div>
    </>
  );
};

export default Home;
