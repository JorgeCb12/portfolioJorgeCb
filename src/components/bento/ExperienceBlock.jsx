import React from "react";
import GlassCard from "../UI/GlassCard";
import { FaLaptopCode, FaHeadset, FaCalendarAlt } from "react-icons/fa";

const Experience = ({ className }) => {
  const jobs = [
    {
      id: 1,
      role: "Desarrollador Frontend",
      date: "Nov 2024 - Mayo 2025",
      desc: "Desarrollo de asistente virtual y aplicaciones web dinámicas en proyectos colaborativos.",
      icon: <FaLaptopCode />,
      active: true,
    },
    {
      id: 2,
      role: "Soporte Técnico",
      date: "Ago 2022 - Feb 2023",
      desc: "Mantenimiento de software/hardware, gestión de usuarios y resolución de incidencias.",
      icon: <FaHeadset />,
      active: false,
    },
  ];

  return (
    <GlassCard className={`flex flex-col p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-pink-500/20 rounded-lg text-pink-300">
          <FaCalendarAlt size={18} />
        </div>
        <h3 className="text-xl font-bold text-white">Experiencia</h3>
      </div>

      <div className="relative border-l border-white/10 ml-3 space-y-8">
        {jobs.map((job) => (
          <div key={job.id} className="relative pl-8">
            <span
              className={`
              absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-neutral-900 
              ${
                job.active
                  ? "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                  : "bg-gray-600"
              }
            `}
            ></span>

            <div>
              <h4 className="text-white font-bold text-base flex items-center gap-2">
                {job.role}
                <span className="text-gray-400 text-xs font-normal opacity-70">
                  {job.icon}
                </span>
              </h4>

              <p className="text-pink-300 text-xs font-mono mb-1 mt-0.5">
                {job.date}
              </p>

              <p className="text-gray-400 text-xs leading-relaxed">
                {job.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default Experience;
