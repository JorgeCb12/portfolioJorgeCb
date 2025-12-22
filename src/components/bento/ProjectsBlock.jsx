import GlassCard from "../UI/GlassCard";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "Panel de administración con gráficos y tablas de ventas.",
    tags: ["React.js", "Tailwind", "node.js"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Travel App UI",
    desc: "Landing page animada para agencia de viajes.",
    tags: ["Next.js", "Framer Motion"],
    link: "#",
    github: "#",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
  },
];

const ProjectsBlock = ({ className }) => {
  return (
    <GlassCard className={`p-0 ${className}`}>
      <div className="p-6 pb-2 mb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-200">Proyectos</h3>
        </div>
        <Link
          to="/projects"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Ver mas <FiArrowRight size={14} className="inline-block ml-1" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-6 pt-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-md overflow-hidden bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="h-36 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-white font-medium text-md mb-4">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs mt-1 ">{project.desc}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white text-white hover:text-black transition-all"
                  >
                    <FiGithub size={16} />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white text-white hover:text-black transition-all"
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-2 mt-2 -ml-1 ">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectsBlock;
