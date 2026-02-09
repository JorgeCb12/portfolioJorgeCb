import { useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "../../lib/cn";

export function Button({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <button
      className={cn(
        "relative h-12 w-40 overflow-hidden bg-transparent p-0.5 text-xl mt-4 -ml-2",
        containerClassName,
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#ffffff_20%,transparent_80%)] opacity-[0.8]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </button>
  );
}

export function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (!length) return;

    const pxPerMs = length / duration;
    progress.set((time * pxPerMs) % length);
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x ?? 0,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y ?? 0,
  );

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
