import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const MotionDiv = motion.div;

const GlassCard = ({ children, className = "" }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease: "backInOut",
      }}
      className={`
        relative overflow-hidden
        rounded-3xl 
        bg-white/[0.03]
        backdrop-blur-md
        shadow-lg
        transition-all duration-300 
        hover:scale-[1.01] 
        hover:shadow-xl
        pointer-events-none 
        will-change-transform
        ${className} 
      `}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          padding: "1.5px",
          maskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
        }}
      >
        <MotionDiv
          animate={isDesktop ? { rotate: [0, 360] } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 60%, #8b5cf680 100%)",
            width: "200%",
            height: "200%",
            left: "-50%",
            top: "-50%",
          }}
          className="absolute will-change-transform"
        />
      </div>

      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full pointer-events-none z-10"></div>

      <div className="h-full w-full relative z-20 pointer-events-auto p-2 text-white">
        {children}
      </div>
    </MotionDiv>
  );
};

export default GlassCard;
