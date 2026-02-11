import GlassCard from "../ui/GlassCard";
import Tilt from "react-parallax-tilt";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { SiTailwindcss, SiReact, SiVite, SiFramer } from "react-icons/si";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import portfolioImg from "../../assets/img/portfolioImg.png";
import invoiceFlow from "../../assets/img/invoiceFlow.png";

const projects = [
  {
    title: "My Portfolio",
    desc: "Portafolio personal responsivo desarrollado con React, enfocado en mostrar proyectos con un diseño moderno.",
    tags: [
      {
        name: "React",
        icon: () => <SiReact color="#61DAFB" size={14} />,
        color: "bg-[#61DAFB30]",
      },
      {
        name: "Tailwind",
        icon: () => <SiTailwindcss color="#06B6D4" size={14} />,
        color: "bg-[#06B6D430]",
      },
      {
        name: "Vite",
        icon: () => <SiVite color="#646CFF" size={14} />,
        color: "bg-[#646CFF30]",
      },
    ],
    link: "https://portfolio-jorgecb.vercel.app/",
    github: "https://github.com/JorgeCb12/portfolioJorgeCb",
    image: portfolioImg,
  },
  {
    title: "InvoiceFlow SaaS",
    desc: "Landing page de alta conversión para Fintech. Diseño Dark Mode, Bento Grid y animaciones Framer Motion.",
    tags: [
      {
        name: "React",
        icon: () => <SiReact color="#61DAFB" size={14} />,
        color: "bg-[#61DAFB30]",
      },
      {
        name: "Tailwind",
        icon: () => <SiTailwindcss color="#06B6D4" size={14} />,
        color: "bg-[#06B6D430]",
      },
      {
        name: "Framer",
        icon: () => <SiFramer color="#0055FF" size={14} />,
        color: "bg-[#0055FF30]",
      },
    ],
    link: "https://invoice-flow-landing.vercel.app",
    github: "https://github.com/JorgeCb12/invoice-flow-landing",
    image: invoiceFlow,
  },
];

const ProjectsBlock = ({ className }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <GlassCard className={`p-0 ${className}`}>
      <div className="p-6 flex justify-between items-center">
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

      <div className="flex flex-col gap-4 px-1 lg:px-2 xl:px-4 2xl:px-8 pb-6">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltEnable={isDesktop}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            perspective={1000}
            transitionSpeed={1000}
            scale={isDesktop ? 1.02 : 1}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="group relative bg-neutral-900/80 border border-white/10 hover:border-brand-500/50 transition-all duration-300 overflow-hidden cursor-pointer h-56 xl:h-52 2xl:h-56">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              <div className="relative h-full p-5 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <h4 className="text-white text-sm font-bold tracking-tight bg-black/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-brand-500 hover:border-brand-400 text-white transition-all"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-brand-500 hover:border-brand-400 text-white transition-all"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="relative h-16 overflow-hidden">
                  <div className="absolute inset-0 flex items-center gap-2 transition-all duration-300 transform group-hover:translate-y-12 group-hover:opacity-0">
                    <div className="flex flex-wrap items-center gap-2 px-2 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`p-1.5 rounded-lg ${tag.color} text-[10px] text-gray-200 border border-white/5 shadow-inner inline-flex items-center gap-1.5`}
                        >
                          {tag.name} {tag.icon()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center transition-all duration-300 mt-2 transform  opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-1 border border-brand-500/20 backdrop-blur-md p-2 rounded-xl w-full">
                      <p className="text-gray-200 text-xs leading-relaxed line-clamp-2 italic">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectsBlock;
