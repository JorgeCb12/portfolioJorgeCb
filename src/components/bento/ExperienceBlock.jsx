import GlassCard from "../ui/GlassCard";
import { FaLaptopCode, FaHeadset, FaCalendarAlt } from "react-icons/fa";

const Experience = ({ className }) => {
  const jobs = [
    {
      id: 1,
      role: "Desarrollador Frontend",
      date: "Nov 2024 - Mayo 2025",
      desc: "Desarrollo de asistente virtual y aplicaciones web dinámicas en proyectos colaborativos.",
      stack: ["React", "Tailwind", "UI/UX"],
      icon: <FaLaptopCode size={18} />,
      active: true,
    },
    {
      id: 2,
      role: "Soporte Técnico",
      date: "Ago 2022 - Feb 2023",
      desc: "Mantenimiento de software/hardware, gestión de usuarios y resolución de incidencias.",
      stack: ["Hardware", "Software", "Soporte"],
      icon: <FaHeadset size={18} />,
      active: false,
    },
  ];

  return (
    <GlassCard className={`flex flex-col p-6 ${className}`}>
      <div className="relative mb-6">
        <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/40 to-pink-500/20 blur-md" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-tight">
                Experiencia
              </h3>
              <p className="text-xs text-gray-400 py-2">
                Timeline de roles y responsabilidades
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-3 top-1 bottom-1 w-[2px] bg-gradient-to-b from-blue-400/40 via-white/10 to-pink-400/30" />

        <div className="space-y-5">
          {jobs.map((job) => (
            <div key={job.id} className="relative">
              <div
                className={`absolute -left-[0.96rem] top-5 h-[24px] w-[24px] rounded-full border-4 border-neutral-900 ${
                  job.active
                    ? "bg-pink-500 shadow-[0_0_18px_rgba(236,72,153,0.55)]"
                    : "bg-blue-500/70"
                }`}
              />

              <div className="group relative ml-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/25 hover:bg-white/10">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-pink-500/10 blur-3xl" />
                </div>

                <div className="relative p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-bold text-base truncate">
                          {job.role}
                        </h4>
                        <span className="text-white/70 text-xs opacity-80">
                          {job.icon}
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] text-blue-200/80 inline-flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/15">
                          {job.date}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-300/80 text-xs leading-relaxed">
                    {job.desc}
                  </p>

                  {job.stack?.length ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.stack.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] text-white/75 px-2 py-1 rounded-full bg-black/20 border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default Experience;
