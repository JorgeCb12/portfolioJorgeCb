import GlassCard from "../UI/GlassCard";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiZebpay,
} from "react-icons/si";

const stackData = [
  {
    name: "React",
    icon: <SiReact size={24} />,
    color: "text-cyan-400",
    hoverBg: "hover:bg-sky-400/10",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={24} />,
    color: "text-yellow-400",
    hoverBg: "hover:bg-amber-300/10",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} />,
    color: "text-blue-500",
    hoverBg: "hover:bg-blue-500/10",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={24} />,
    color: "text-cyan-300",
    hoverBg: "hover:bg-cyan-300/10",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={24} />,
    color: "text-green-500",
    hoverBg: "hover:bg-green-500/10",
  },
  {
    name: "Vite",
    icon: <SiVite size={24} />,
    color: "text-purple-400",
    hoverBg: "hover:bg-purple-400/10",
  },
  {
    name: "Git",
    icon: <SiGit size={24} />,
    color: "text-orange-500",
    hoverBg: "hover:bg-orange-500/10",
  },
  {
    name: "Figma",
    icon: <SiFigma size={24} />,
    color: "text-pink-400",
    hoverBg: "hover:bg-pink-400/10",
  },
];

const StackBlock = ({ className }) => {
  return (
    <GlassCard className={`flex flex-col gap-4 pt-12 ${className}`}>
      <div className="flex items-center gap-2 mb-5">
        <h3 className="text-lg font-bold text-gray-200">
          Habilidades Técnicas
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stackData.map((tech, index) => (
          <div
            key={index}
            className={`group 
                        flex items-center gap-2 
                        p-4 rounded-lg 
                        bg-white/5 border border-white/10 
                        ${tech.hoverBg} hover:border-white/30
                        `}
            transition-all
            duration-300
            cursor-default
          >
            <span
              className={`text-lg ${tech.color} transition-transform group-hover:scale-110`}
            >
              {tech.icon}
            </span>

            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default StackBlock;
