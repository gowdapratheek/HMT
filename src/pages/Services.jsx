import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaTools,
  FaPencilRuler,
  FaHandshake,
  FaCog,
} from "react-icons/fa";

const services = [
  {
    icon: FaHome,
    title: "Residential Construction",
    description:
      "Custom home building and renovations tailored to your lifestyle and preferences.",
    features: [
      "Custom Home Design",
      "Interior Renovations",
      "Home Extensions",
      "Kitchen & Bath Remodeling",
    ],
  },
  {
    icon: FaBuilding,
    title: "Commercial Construction",
    description:
      "Professional construction services for businesses and commercial properties.",
    features: [
      "Office Buildings",
      "Retail Spaces",
      "Warehouses",
      "Restaurant Fit-outs",
    ],
  },
  {
    icon: FaTools,
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with our expert renovation services.",
    features: [
      "Space Planning",
      "Structural Modifications",
      "Finish Upgrades",
      "Modern Amenities",
    ],
  },
  {
    icon: FaPencilRuler,
    title: "Architecture & Design",
    description:
      "Comprehensive architectural design services for your construction projects.",
    features: [
      "3D Visualization",
      "Floor Planning",
      "Permit Drawings",
      "Design Consultation",
    ],
  },
  {
    icon: FaHandshake,
    title: "Project Management",
    description:
      "End-to-end project management ensuring timely and quality delivery.",
    features: [
      "Timeline Planning",
      "Cost Management",
      "Quality Control",
      "Progress Tracking",
    ],
  },
  {
    icon: FaCog,
    title: "Civil Engineering",
    description:
      "Expert civil engineering solutions for construction projects.",
    features: [
      "Structural Design",
      "Site Analysis",
      "Foundation Work",
      "Technical Planning",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen  mt-[15vh]">
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We offer comprehensive construction and development solutions tailored
          to meet your specific needs
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-gray-800" />
                <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
