"use client"

import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-500">
          Chethan C Malli
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-purple-500 transition">
            Home
          </a>

          <a href="#skills" className="hover:text-purple-500 transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-purple-500 transition">
            Experience
          </a>

          <a href="#education" className="hover:text-purple-500 transition">
            Education
          </a>

          <a href="#certifications" className="hover:text-purple-500 transition">
            Certifications
          </a>

          <a href="#achievements"className="hover:text-purple-500 transition">
            Achievements
          </a>

          <a href="#projects" className="hover:text-purple-500 transition">
            Projects
          </a>

          <a href="#github" className="hover:text-purple-500 transition">
            GitHub
          </a>

          <a href="#contact" className="hover:text-purple-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-4 gap-4">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>

          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>
          <a href="#achievements"onClick={() => setMenuOpen(false)}>
            Achievements
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#github" onClick={() => setMenuOpen(false)}>
            GitHub
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}