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
} from "react-icons/si";

const stackData = [
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
  { name: "Git", icon: <SiGit />, color: "text-orange-500" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-400" },
];

const StackBlock = ({ className }) => {
  return (
    <GlassCard className={`flex flex-col gap-4 pt-12 ${className}`}>
      <div className="flex items-center gap-2 mb-5">
        <h3 className="text-lg font-bold text-gray-200">
          Tecnologías utilizadas
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stackData.map((tech, index) => (
          <div
            key={index}
            className="
                        group 
                        flex items-center gap-2 
                        p-4 rounded-lg 
                        bg-white/5 border border-white/10 
                        hover:bg-white/10 hover:border-white/30 
                        transition-all duration-300 cursor-default
                    "
          >
            <span
              className={`text-lg ${tech.color} transition-transform group-hover:scale-110`}
            >
              {tech.icon}
            </span>

            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default StackBlock;
