import GlassCard from "../ui/GlassCard";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { SiTailwindcss, SiReact, SiVite, SiFramer } from "react-icons/si";
import { Link } from "react-router-dom";
import portfolioImg from "../../assets/img/portfolioImg.png";
import invoiceFlow from "../../assets/img/invoiceFlow.png";

const projects = [
  {
    title: "My Portfolio",
    desc: "Portafolio personal responsivo creado con React, Tailwind y Vite.",
    tags: [
      {
        icon: () => <SiReact color="#61DAFB" size={18} />,
        color: "bg-[#61DAFB30]",
      },
      {
        icon: () => <SiTailwindcss color="#06B6D4" size={18} />,
        color: "bg-[#06B6D430]",
      },
      {
        icon: () => <SiVite color="#646CFF" size={18} />,
        color: "bg-[#646CFF30]",
      },
    ],
    icons: [SiReact, SiTailwindcss, SiVite],
    link: "https://portfolio-jorgecb.vercel.app/",
    github: "https://github.com/JorgeCb12/portfolioJorgeCb",
    image: portfolioImg,
  },
  {
    title: "InvoiceFlow SaaS",
    desc: "Landing page de alta conversión para Fintech. Diseño Dark Mode, Bento Grid y animaciones Framer Motion.",
    tags: [
      {
        icon: () => <SiReact color="#61DAFB" size={18} />,
        color: "bg-[#61DAFB30]",
      },
      {
        icon: () => <SiTailwindcss color="#06B6D4" size={18} />,
        color: "bg-[#06B6D430]",
      },
      {
        icon: () => <SiFramer color="#0055FF" size={18} />,
        color: "bg-[#0055FF30]",
      },
    ],
    link: "https://invoice-flow-landing.vercel.app",
    github: "https://github.com/JorgeCb12/invoice-flow-landing",
    image: invoiceFlow,
  },
];

const ProjectsBlock = ({ className }) => {
  return (
    <GlassCard className={`p-0 ${className}`}>
      <div className="p-6 pb-2 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-200">Proyectos Top</h3>
        <Link
          to="/projects"
          className="text-xs group text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          Ver mas
          <FiArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-6 lg:px-10 md:px-6 px-4 py-4 pt-0">
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
            <div className="group relative bg-black/40 border border-white/10 hover:border-white/80 transition-all duration-500 overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-full px-4 py-6">
                <div className="flex justify-between items-end">
                  <div className="flex-1 relative h-28 flex flex-col justify-end overflow-hidden">
                    <div className="flex justify-between items-center gap-2 mb-2">
                      <h4 className="text-white mb-3 bg-white/10 backdrop-blur-lg px-2 py-1 rounded-lg font-bold  drop-shadow-md">
                        {project.title}
                      </h4>
                      <div className="flex gap-2 shrink-0 -mt-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-blue-500/50 backdrop-blur-md rounded-full hover:bg-brand-500 text-white transition-all shadow-xl"
                        >
                          <FiGithub size={18} />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-blue-500/50 backdrop-blur-md rounded-full hover:bg-brand-500 text-white transition-all shadow-xl"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500 absolute bottom-0 left-0">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.color}
                          className={`text-[10px] ${tag.color} text-white/80 px-4 py-1 rounded-full flex items-center gap-1`}
                        >
                          {tag.icon && <tag.icon size={12} />}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300  bg-white/10 backdrop-blur-lg px-2 py-1 rounded-lg text-xs -mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
                      {project.desc}
                    </p>
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
