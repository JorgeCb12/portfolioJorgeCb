import GlassCard from "../ui/GlassCard";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin } from "react-icons/lu";
import Typewriter from "typewriter-effect";

const HeroBlock = ({ className }) => {
  return (
    <GlassCard
      className={`flex flex-col justify-between h-full w-full ${className}`}
    >
      <div className="flex flex-col gap-4 w-fit">
        <div className="relative w-36 h-36  mx-auto md:mx-0 ">
          <img
            src="/FotoPerfil.webp"
            alt="Jorge CB"
            className="w-full h-full rounded-full object-cover border-2 border-white/20 shadow-lg"
          />
          <div className="absolute bottom-0 right-3 w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center border border-white/10">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">
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

      <div className="py-4 text-left">
        <p className="text-gray-300 lg:text-sm xl:text-lg md:text-sm text-sm leading-relaxed w-full">
          Desarrollador de interfaces web{" "}
          <span className="text-blue-400 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "CLARAS Y MODULARES.",
                  "PENSADAS PARA ESCALAR.",
                  "TOTALMENTE ADAPTABLES.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </span>
        </p>

        <button className="mt-8 text-sm px-4 py-2 bg-white/10 border border-white/20 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <a href="/CvJorge.pdf" download>
            Download CV
          </a>
        </button>
      </div>

      <div className="flex gap-3 lg:mt-6 mt-4 w-fit">
        <a
          href="https://github.com/JorgeCb12"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-white/20 transition-colors border border-white/10 text-gray-400 hover:text-white"
        >
          <FaGithub size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/jorge-corrales-a90992330/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 transition-colors border border-white/10 text-gray-400"
        >
          <FaLinkedin size={18} />
        </a>

        <a
          href="mailto:jorgeluiscorralesbarraza272@gmail.com"
          className="p-2 bg-white/5 rounded-lg hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400 transition-colors border border-white/10 text-gray-400"
        >
          <LuMail size={18} />
        </a>
        <a
          href="https://wa.me/3245487126"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg hover:bg-green-600/20 hover:border-green-500/50 hover:text-green-400 transition-colors border border-white/10 text-gray-400"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </GlassCard>
  );
};

export default HeroBlock;
