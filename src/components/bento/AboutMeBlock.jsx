import React from "react";
import GlassCard from "../ui/GlassCard";
import {
  FaUser,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaDraftingCompass,
} from "react-icons/fa";

const AboutMeBlock = ({ className }) => {
  return (
    <GlassCard
      className={`group/about relative flex flex-col p-0 overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[50px] -z-10 group-hover/about:bg-brand-500/20 transition-colors duration-700" />

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-8">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Mi ADN <span className="text-brand-500">Dev</span>
          </h3>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold">
              Arquitecto de interfaces.
            </span>{" "}
            No solo escribo código, diseño flujos que se sienten naturales. Mi
            ecosistema es{" "}
            <span className="text-blue-400 font-medium">Node.js</span> y{" "}
            <span className="text-purple-400 font-medium">React</span>, donde la
            lógica y la estética convergen.
          </p>

          <p className="text-gray-400 text-xs leading-relaxed border-l-2 border-brand-500/30 pl-4 py-1 italic">
            "Mi meta es transformar la complejidad técnica en simplicidad
            visual."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-auto">
          <div className="group/card relative overflow-hidden bg-white/[0.03] border border-white/5 p-3 rounded-xl transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 group-hover/card:scale-110 transition-transform">
                <FaLightbulb size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-xs">
                  Pensamiento Lateral
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-tighter">
                  Soluciones no convencionales
                </p>
              </div>
            </div>
          </div>

          <div className="group/card relative overflow-hidden bg-white/[0.03] border border-white/5 p-3 rounded-xl transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-500 group-hover/card:scale-110 transition-transform">
                <FaRocket size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-xs">
                  Evolución Constante
                </p>
                <p className="text-gray-500 text-[10px] uppercase tracking-tighter">
                  Aprendizaje acelerado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent opacity-0 group-hover/about:opacity-100 transition-opacity duration-700" />
    </GlassCard>
  );
};

export default AboutMeBlock;
