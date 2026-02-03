import { Link } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlassCard from "../components/ui/GlassCard";
import invoiceFlow from "../assets/img/invoiceFlow.png";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Panel administrativo completo con gráficos (Recharts), modo oscuro y gestión de inventario en tiempo real.",
    tags: ["React", "Tailwind", "Vite"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "InvoiceFlow SaaS",
    description:
      "Landing page de alta conversión para Fintech. Diseño Dark Mode, Bento Grid y animaciones Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: invoiceFlow,
    github: "https://github.com/JorgeCb12/invoice-flow-landing",
    demo: "https://invoice-flow-landing.vercel.app",
  },

  {
    id: 3,
    title: "Task Manager App",
    description:
      "Aplicación de tareas tipo Trello con Drag & Drop, persistencia de datos local y categorías personalizables.",
    tags: ["React", "Zustand", "Dnd-Kit"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Consumo de API de clima en tiempo real. Muestra pronósticos, humedad y mapas interactivos.",
    tags: ["JavaScript", "API Rest", "CSS Modules"],
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    github: "#",
    demo: "#",
  },
];

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit"
          >
            <FaArrowLeft />
            <span>Volver al inicio</span>
          </Link>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-5">
              Mis Proyectos
            </h1>
            <p className="text-gray-400 max-w-3xl text-xl">
              Una colección de soluciones que he construido. Desde aplicaciones
              web complejas hasta experimentos de interfaz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <GlassCard
              key={project.id}
              className="group p-0 overflow-hidden hover:border-indigo-500/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    title="Ver código"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    title="Ver demo en vivo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
