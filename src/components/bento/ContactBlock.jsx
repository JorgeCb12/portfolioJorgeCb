import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { FiSend, FiCopy, FiCheck } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const ContactBlock = ({ className }) => {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const email = "jorgeluiscorralesbarraza272@gmail.com";

  const handleSend = async () => {
    if (!message) return;
    setIsSending(true);

    setTimeout(() => {
      window.open(
        `mailto:${email}?subject=Contacto desde Portafolio&body=${message}`,
      );
      setIsSending(false);
      setMessage("");
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#a855f7", "#ffffff"],
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <GlassCard className={`flex flex-col p-6 ${className}`}>
      <div className="flex flex-col justify-between h-full">
        <div className="relative z-1">
          <h3 className="text-xl font-bold text-white mb-1">¡Contáctame!</h3>
          <p className="text-gray-400 text-xs">
            Envíame un mensaje directo o copia mi correo.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4 relative z-10">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="¡Hola! Me gustaría conversar sobre oportunidades de desarrollo de software..."
            className="w-full h-32 bg-white/[0.02] border border-white/10 rounded-xl p-3 text-[12px] text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all resize-none shadow-inner"
          />

          <button
            onClick={handleSend}
            disabled={isSending}
            className="group relative overflow-hidden w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium py-2 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {isSending ? (
                <motion.div
                  key="sending"
                  initial={{ y: 0, x: 0 }}
                  animate={{ y: -40, x: 40, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <FiSend size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="static"
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span>{message ? "Enviar mensaje" : "Escribe algo"}</span>
                  <FiSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <div className="h-px w-full bg-white/10 my-4 relative z-10"></div>

        <div
          onClick={handleCopy}
          className="relative overflow-hidden group/copy flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.06] cursor-pointer transition-all active:scale-95 z-10"
        >
          <div className="flex flex-col gap-2 min-w-0">
            <span className="text-[12px] text-gray-500 uppercase tracking-tighter">
              Email Corporativo
            </span>

            <span className="text-[11px] truncate font-mono text-gray-300 group-hover/copy:text-white transition-colors lowercase">
              {email}
            </span>
          </div>

          <div className="shrink-0 p-2 mt-4 bg-white/5 rounded-lg text-gray-400 group-hover/copy:text-indigo-400 transition-colors">
            {copied ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy size={16} />
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ContactBlock;
