import { motion } from "framer-motion";

const MotionDiv = motion.div;

const GlassCard = ({ children, className = "" }) => {
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
        border border-white/40 
        bg-neutral-900/5  
        backdrop-blur-sm   
        shadow-lg
        transition-all duration-300 
        hover:scale-[1.01] 
        hover:shadow-xl
        hover:border-white/20
        pointer-events-none 
        ${className} 
      `}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="h-full w-full relative z-10 pointer-events-auto">
        {children}
      </div>
    </MotionDiv>
  );
};

export default GlassCard;
