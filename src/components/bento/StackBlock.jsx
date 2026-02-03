import GlassCard from "../ui/GlassCard";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiPnpm,
  SiGithub,
  SiMysql,
  SiCanva,
} from "react-icons/si";

const stackData = [
  {
    title: "Lenguajes",
    item: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={16} />,
        color: "text-yellow-400",
        hoverBg: "hover:bg-amber-300/10",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={16} />,
        color: "text-blue-500",
        hoverBg: "hover:bg-blue-500/10",
      },
    ],
  },
  {
    title: "Frontend",
    item: [
      {
        name: "React",
        icon: <SiReact size={16} />,
        color: "text-cyan-400",
        hoverBg: "hover:bg-cyan-400/10",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={16} />,
        color: "text-sky-400",
        hoverBg: "hover:bg-sky-400/10",
      },
    ],
  },
  {
    title: "Herramientas",
    item: [
      {
        name: "Vite",
        icon: <SiVite size={16} />,
        color: "text-purple-400",
        hoverBg: "hover:bg-purple-400/10",
      },
      {
        name: "pnpm",
        icon: <SiPnpm size={16} />,
        color: "text-orange-400",
        hoverBg: "hover:bg-orange-400/10",
      },
      {
        name: "Git",
        icon: <SiGit size={16} />,
        color: "text-red-500",
        hoverBg: "hover:bg-red-500/10",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={16} />,
        color: "text-gray-400",
        hoverBg: "hover:bg-gray-400/10",
      },
    ],
  },
  {
    title: "Diseño",
    item: [
      {
        name: "Figma",
        icon: <SiFigma size={16} />,
        color: "text-pink-500",
        hoverBg: "hover:bg-pink-500/10",
      },
      {
        name: "Canva",
        icon: <SiCanva size={16} />,
        color: "text-blue-600",
        hoverBg: "hover:bg-blue-600/10",
      },
    ],
  },
  {
    title: "Backend",
    item: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={16} />,
        color: "text-green-600",
        hoverBg: "hover:bg-green-600/10",
      },
      {
        name: "MySQL",
        icon: <SiMysql size={16} />,
        color: "text-blue-600",
        hoverBg: "hover:bg-blue-600/10",
      },
    ],
  },
];

const StackBlock = ({ className }) => {
  return (
    <GlassCard className={`flex flex-col gap-6 p-6 ${className}`}>
      <div className="flex items-center mt-3 mb-2">
        <h3 className="text-xl font-bold text-gray-200">
          Habilidades Técnicas
        </h3>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
        {stackData.map((category, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider ml-1">
              {category.title}
            </h4>

            <div className="grid grid-cols-2 gap-2 p-0.5">
              {category.item.map((tech, i) => (
                <div
                  key={i}
                  className={`
                    group 
                    flex items-center gap-2 
                    p-1.5 rounded-lg 
                    bg-white/5 border border-white/10 
                    ${tech.hoverBg} hover:border-white/30
                    transition-all duration-300
                    cursor-default
                  `}
                >
                  <span
                    className={`text-lg ${tech.color} transition-transform group-hover:scale-110`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-[11px] font-medium text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default StackBlock;
