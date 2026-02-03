import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { FiSend, FiCopy, FiCheck } from "react-icons/fi";

const ContactBlock = ({ className }) => {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "jorgeluiscorralesbarraza272@gmail.com";

  const handleSend = () => {
    if (!message) return;
    window.open(
      `mailto:${email}?subject=Contacto desde Portafolio&body=${message}`,
    );
    setMessage("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GlassCard className={`flex flex-col justify-between p-6 ${className}`}>
      <div>
        <h3 className="text-xl font-bold text-white mb-1">¡Contáctame!</h3>
        <p className="text-gray-400 text-xs">
          Envíame un mensaje directo o copia mi correo.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="¡Hola! Me gustaría conversar sobre oportunidades de desarrollo de software..."
          className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-3 text-[12px] text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
        />

        <button
          onClick={handleSend}
          className="group w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
        >
          <span>Enviar mensaje</span>
          <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="h-px w-full bg-white/10 my-2"></div>

      <div
        onClick={handleCopy}
        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-colors group"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase tracking-wider">
            Email
          </span>
          <span className="text-[11px] font-mono text-gray-200 group-hover:text-white transition-colors">
            {email}
          </span>
        </div>

        <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-white transition-colors">
          {copied ? (
            <FiCheck className="text-green-400" />
          ) : (
            <FiCopy size={16} />
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default ContactBlock;
