"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
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
        z-50
        bg-black/80
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div
        className="
          container-custom
          h-[72px]
          sm:h-[76px]
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
            text-white
            tracking-tight
            transition
            hover:text-blue-400
          "
        >
          Chethan
          <span className="text-blue-500">.</span>
        </a>

        {/* ===================================================== */}
        {/* DESKTOP MENU */}
        {/* ===================================================== */}

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                text-[14px]
                xl:text-[15px]
                font-medium
                text-gray-400
                transition-all
                duration-300

                hover:text-blue-400

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-blue-500
                after:rounded-full
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ===================================================== */}
        {/* DESKTOP BUTTON */}
        {/* ===================================================== */}

        <a
          href="#contact"
          className="
            hidden
            lg:inline-flex
            btn-primary
            px-5
            py-3
            items-center
            justify-center
          "
        >
          Hire Me
        </a>

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

            flex
            items-center
            justify-center

            rounded-xl

            border
            border-white/10

            bg-white/5

            text-white

            hover:border-blue-500/50
            hover:bg-blue-500/10
            hover:text-blue-400

            transition-all
            duration-300
          "
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
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
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              lg:hidden

              border-t
              border-white/10

              bg-black/95
              backdrop-blur-xl

              shadow-2xl
            "
          >
            <nav
              className="
                container-custom

                flex
                flex-col

                py-6

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
                    sm:text-lg

                    font-medium

                    text-gray-300

                    hover:text-blue-400
                    hover:bg-blue-500/10

                    transition-all
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Hire Button */}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  btn-primary

                  mt-4

                  w-full

                  text-center

                  py-3.5
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