import { projects } from "../data/projects";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 mt-[10vh]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the project you&apos;re looking for. It might
            have been removed or doesn&apos;t exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const remainingImages = project.images.length - 3;

  const nextImage = () => {
    setModalImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextCarouselImage = () => {
    setCarouselIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevCarouselImage = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-[10vh]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-800">
            {project.title}
          </h1>

          {/* Modified Gallery Section */}
          <div className="mb-12 relative">
            {/* Mobile Carousel */}
            <div className="md:hidden relative h-[50vh]">
              <img
                src={project.images[carouselIndex]}
                alt={`${project.title} - ${carouselIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Carousel Controls */}
              <button
                onClick={prevCarouselImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextCarouselImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {carouselIndex + 1} / {project.images.length}
              </div>

              {/* View Gallery Button */}
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg"
              >
                View Gallery
              </button>
            </div>

            {/* Desktop Gallery Grid - Hide on Mobile */}
            <div className="hidden md:grid grid-cols-3 gap-4 ">
              {/* Main Image */}
              <div className="col-span-2 row-span-2 h-[72vh]">
                <img
                  src={project.images[selectedImage]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="space-y-4">
                {project.images.slice(0, 1).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className="relative h-[35vh] cursor-pointer overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
                {remainingImages > 0 && (
                  <div
                    className="relative h-[35vh] cursor-pointer"
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    <img
                      src={project.images[2]}
                      alt={`${project.title} - 3`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div
                      className="absolute inset-0 bg-black/50 flex items-center 
                     rounded-lg justify-center"
                    >
                      <span className="text-white text-2xl font-bold">
                        View Gallery
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-2xl">
            {/* Details Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Project Details
              </h2>
              <div className="space-y-4">
                {Object.entries(project.details)
                  .slice(0, -1)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex border-b border-gray-200 pb-4"
                    >
                      <span className="font-semibold text-gray-700 w-32 capitalize">
                        {key}:
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white z-50 hover:opacity-75"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main Image Container */}
            <div className="w-full h-full flex items-center justify-center px-4 md:px-16">
              <div className="relative w-full h-[80vh] md:h-auto md:max-w-5xl md:aspect-video">
                <img
                  src={project.images[modalImageIndex]}
                  alt={`${project.title} - ${modalImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                {/* Image Counter - Desktop Only */}
                <div className="hidden md:block absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {modalImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>

            {/* Navigation Buttons - Desktop Only */}
            <button
              onClick={prevImage}
              className="hidden md:block absolute left-2 md:left-4 text-white z-50 p-2 rounded-full bg-black/50 hover:bg-black/75"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="hidden md:block absolute right-2 md:right-4 text-white z-50 p-2 rounded-full bg-black/50 hover:bg-black/75"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <div className="flex gap-1 md:gap-2 overflow-x-auto p-1 md:p-2 max-w-[90vw] md:max-w-3xl">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 md:w-20 md:h-20 cursor-pointer transition-all duration-200 ${
                      modalImageIndex === index
                        ? "ring-2 ring-white opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
