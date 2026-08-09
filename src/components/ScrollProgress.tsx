"use client";

import {
  motion,
  useScroll,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[3px]
        z-[9999]
        origin-left
        bg-gradient-to-r
        from-blue-700
        via-blue-500
        to-cyan-400
        shadow-[0_0_12px_rgba(37,99,235,0.7)]
      "
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}