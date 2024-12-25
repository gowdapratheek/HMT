import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-[10vh] ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="group relative block h-[400px] overflow-hidden rounded-lg"
          >
            {/* Image */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Permanent Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

            {/* Content - Always Visible */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full">
                  {project.details.area}
                </span>
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full">
                  {project.details.completed}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
