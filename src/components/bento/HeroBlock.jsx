import GlassCard from "../UI/GlassCard";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin } from "react-icons/lu";
import FotoPerfil from "../../assets/img/FotoPerfil.webp";

const HeroBlock = ({ className }) => {
  return (
    <GlassCard className={`flex flex-col justify-between h-full ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="relative w-32 h-32 mx-auto md:mx-0">
          <img
            src={FotoPerfil}
            alt="Jorge CB"
            className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-lg"
          />
          <div className="absolute bottom-0 right-3 w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Jorge CB
          </h1>
          <p className="text-gray-400 font-medium text-base">
            Frontend Developer
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
            <LuMapPin size={14} />
            <span>Colombia</span>
          </div>
        </div>
      </div>

      <div className="py-4">
        <p className="text-gray-300 text-base leading-relaxed">
          <span className="text-blue-700">Transformador</span> de ideas en
          interfaces increíbles, creando experiencias web rápidas y visualmente
          impactantes
        </p>

        <button className="mt-4 text-base px-4 py-2 bg-white/10 border border-white/20 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Download <span className="font-medium">CV</span>
        </button>
      </div>

      <div className="flex gap-3 mt-auto">
        <a
          href="https://github.com/jorcb"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-white/20 transition-colors border border-white/10 text-gray-400 hover:text-white"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 transition-colors border border-white/10 text-gray-400"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="mailto:tuemail@gmail.com"
          className="p-2 bg-white/5 rounded-lg hover:bg-white/20 transition-colors border border-white/10 text-gray-400 hover:text-white"
        >
          <LuMail size={20} />
        </a>
        <a
          href="https://wa.me/tu-numero"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-green-600/20 hover:border-green-500/50 hover:text-green-400 transition-colors border border-white/10 text-gray-400"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </GlassCard>
  );
};

export default HeroBlock;
