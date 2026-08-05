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
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-extrabold text-slate-900 tracking-tight"
        >
          Chethan
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[15px] font-medium text-slate-600 transition hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}

        </nav>

        {/* Desktop Button */}

        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary px-5 py-3"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden rounded-xl border border-gray-200 p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >

            <nav className="container-custom flex flex-col py-6 gap-5">

              {navItems.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-3 text-center py-3"
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