"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] z-[9999] origin-left rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] z-[9998] origin-left rounded-full blur-md bg-blue-500/40"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}