import GlassCard from "../ui/GlassCard";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import portfolioImg from "../../assets/img/portfolioImg.png";
import invoiceFlow from "../../assets/img/invoiceFlow.png";

const projects = [
  {
    title: "My Portfolio",
    desc: "Portafolio personal responsivo creado con React, Tailwind y Vite.",
    tags: ["React.js", "Tailwind", "Vite"],
    link: "https://portfolio-jorgecb.vercel.app/",
    github: "https://github.com/JorgeCb12/portfolioJorgeCb",
    image: portfolioImg,
  },
  {
    title: "InvoiceFlow SaaS",
    desc: "Landing page de alta conversión para Fintech. Diseño Dark Mode, Bento Grid y animaciones Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion", "Vite"],
    link: "https://invoice-flow-landing.vercel.app",
    github: "https://github.com/JorgeCb12/invoice-flow-landing",
    image: invoiceFlow,
  },
];

const ProjectsBlock = ({ className }) => {
  return (
    <GlassCard className={`p-0 ${className}`}>
      <div className="p-6 pb-2 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-200">Proyectos</h3>
        <Link
          to="/projects"
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Ver mas →
        </Link>
      </div>

      <div className="flex flex-col gap-6 p-6 pt-0">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.02}
            gyroscope={true}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="group relative bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex justify-between items-end gap-2">
                  <div className="flex-1 relative h-16 flex flex-col justify-end overflow-hidden">
                    <h4 className="text-white font-bold text-lg drop-shadow-md mb-1">
                      {project.title}
                    </h4>

                    <div className="flex flex-wrap gap-1.5 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500 absolute bottom-0 left-0">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[12px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 text-xs mt-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-500 text-white transition-all shadow-xl"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-brand-500 text-white transition-all shadow-xl"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-all duration-500 pointer-events-none"></div>
            </div>
          </Tilt>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectsBlock;
