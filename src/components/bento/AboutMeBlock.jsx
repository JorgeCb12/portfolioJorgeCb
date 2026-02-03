import GlassCard from "../ui/GlassCard";
import { FaUser, FaLightbulb, FaRocket } from "react-icons/fa";

const AboutMeBlock = ({ className }) => {
  return (
    <GlassCard
      className={`flex flex-col justify-center gap-6 p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
          <FaUser size={20} />
        </div>
        <h3 className="text-xl font-bold ml-1 text-white">Sobre mí</h3>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-white font-semibold">
            Desarrollador de Software
          </span>{" "}
          con experiencia práctica creando soluciones digitales. Mi enfoque
          combina la <span className="text-blue-400">lógica robusta</span>{" "}
          (Node.js, SQL) con interfaces{" "}
          <span className="text-purple-400">modernas y atractivas</span> (React,
          Tailwind).
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          Me apasiona resolver desafíos complejos y estoy comprometido 100% con
          escribir código{" "}
          <strong className="text-white">
            escalable, limpio y de alta calidad
          </strong>
          .
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
          <FaLightbulb className="text-yellow-400 text-xl" />
          <div>
            <p className="text-white font-bold text-xs">Creativo</p>
            <p className="text-gray-500 text-[10px]">Soluciones Únicas</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-3">
          <FaRocket className="text-red-400 text-xl" />
          <div>
            <p className="text-white font-bold text-xs">Proactivo</p>
            <p className="text-gray-500 text-[10px]">Aprendizaje Continuo</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutMeBlock;
