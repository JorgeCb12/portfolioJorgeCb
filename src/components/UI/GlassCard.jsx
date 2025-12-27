import { motion } from "framer-motion";

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div
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
        border border-white/20 
        bg-white/10 
        backdrop-blur-md 
        shadow-lg
        transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] hover:shadow-xl
        ${className} 
      `}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="h-full w-full relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
