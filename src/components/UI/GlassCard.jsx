const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative 
        overflow-hidden 
        rounded-xl 
        border border-white/20 
        bg-white/10 
        backdrop-blur-md 
        shadow-lg
        transition-all duration-300 
        hover:bg-white/15 hover:scale-[1.01] hover:shadow-xl
        ${className} 
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
