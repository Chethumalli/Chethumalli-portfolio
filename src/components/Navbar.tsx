"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-[1000]
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          container-custom
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* ===================================================== */}
        {/* LOGO */}
        {/* ===================================================== */}

        <a
          href="#home"
          className="
            text-xl
            sm:text-2xl
            font-extrabold
            tracking-tight
            text-white
            hover:text-blue-400
            transition-colors
            duration-300
            shrink-0
          "
        >
          Chethan
          <span className="text-blue-500">.</span>
        </a>

        {/* ===================================================== */}
        {/* DESKTOP NAVIGATION */}
        {/* ===================================================== */}

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-gray-400
                hover:text-white
                transition-colors
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-blue-500

                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ===================================================== */}
        {/* RIGHT SIDE */}
        {/* ===================================================== */}

        <div className="hidden lg:flex items-center gap-3">
          {/* GitHub */}

          <a
            href="https://github.com/Chethumalli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              w-10
              h-10
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-gray-300
              flex
              items-center
              justify-center

              hover:bg-blue-600
              hover:text-white
              hover:border-blue-600
              hover:-translate-y-0.5

              transition-all
              duration-300
            "
          >
            <Github size={19} />
          </a>

          {/* Hire Me */}

          <a
            href="#contact"
            className="
              ml-1
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white

              hover:bg-blue-700
              hover:-translate-y-0.5
              hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]

              transition-all
              duration-300
            "
          >
            Hire Me
          </a>
        </div>

        {/* ===================================================== */}
        {/* MOBILE MENU BUTTON */}
        {/* ===================================================== */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            lg:hidden
            w-10
            h-10
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-gray-300

            flex
            items-center
            justify-center

            hover:border-blue-500/50
            hover:bg-blue-500/10
            hover:text-blue-400

            transition-all
            duration-300
          "
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              lg:hidden
              overflow-hidden
              border-t
              border-white/10
              bg-black/95
              backdrop-blur-xl
            "
          >
            <nav
              className="
                container-custom
                flex
                flex-col
                py-5
                gap-1
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    px-4
                    py-3
                    rounded-xl
                    text-base
                    font-medium
                    text-gray-300

                    hover:bg-blue-500/10
                    hover:text-blue-400

                    transition-all
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile GitHub */}

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  text-gray-300

                  hover:bg-blue-500/10
                  hover:text-blue-400

                  transition-all
                "
              >
                <Github size={19} />
                GitHub
              </a>

              {/* Mobile Hire Me */}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-3
                  w-full
                  rounded-xl
                  bg-blue-600
                  py-3.5
                  text-center
                  font-semibold
                  text-white

                  hover:bg-blue-700
                  transition-all
                "
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}