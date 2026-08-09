"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            flex-col
            items-center
            justify-center
            bg-black
            overflow-hidden
          "
        >

          {/* =====================================================
              BACKGROUND BLUE GLOW
          ===================================================== */}

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[350px]
              h-[350px]
              rounded-full
              bg-blue-600/[0.08]
              blur-[100px]
            "
          />

          {/* =====================================================
              SUBTLE GRID
          ===================================================== */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.08]
              bg-[linear-gradient(rgba(37,99,235,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.3)_1px,transparent_1px)]
              bg-[size:45px_45px]
            "
          />

          {/* =====================================================
              LOADER
          ===================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-24
                h-24
                sm:w-28
                sm:h-28
                rounded-full
                border-[5px]
                border-blue-600
                border-t-transparent
                shadow-[0_0_40px_rgba(37,99,235,0.45)]
              "
            />
          </motion.div>

          {/* =====================================================
              NAME
          ===================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="
              relative
              z-10
              mt-10
              text-3xl
              sm:text-5xl
              font-extrabold
              text-white
              tracking-tight
            "
          >
            Chethan C Malli
            <span className="text-blue-500">.</span>
          </motion.h1>

          {/* =====================================================
              SUBTITLE
          ===================================================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            className="
              relative
              z-10
              mt-4
              text-gray-400
              text-sm
              sm:text-lg
              tracking-wide
            "
          >
            Loading Portfolio...
          </motion.p>

          {/* =====================================================
              LOADING DOTS
          ===================================================== */}

          <div className="relative z-10 flex gap-2 mt-6">

            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="w-2 h-2 rounded-full bg-blue-500"
                animate={{
                  opacity: [0.25, 1, 0.25],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.15,
                }}
              />
            ))}

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}