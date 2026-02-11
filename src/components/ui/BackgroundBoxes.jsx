// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const colors = [
  "#7dd3fc",
  "#f9a8d4",
  "#86efac",
  "#fde047",
  "#fca5a5",
  "#d8b4fe",
  "#93c5fd",
  "#a5b4fc",
  "#c4b5fd",
];

export const BoxesCore = ({ className, ...rest }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const rowCount = isDesktop ? 70 : 20;
  const colCount = isDesktop ? 70 : 20;

  const rows = new Array(rowCount).fill(1);
  const cols = new Array(colCount).fill(1);

  return (
    <div
      style={{
        transform: `translate(-25%, -40%) skewX(-48deg) skewY(14deg) scale(${isDesktop ? 0.8 : 1.2}) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-0 top-0 flex w-[200vw] h-[200vh] z-0 pointer-events-none will-change-transform",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-700/50 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={
                isDesktop
                  ? {
                      backgroundColor: colors[(i + j) % colors.length],
                      transition: { duration: 0 },
                    }
                  : {}
              }
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-slate-700/80 relative pointer-events-auto"
            >
              {isDesktop && j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const BackgroundBoxes = () => {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesCore />
    </div>
  );
};
