"use client"

import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-500">
            Chethan C Malli
          </h2>

          <p className="text-gray-400 mt-2">
            AI & Machine Learning Enthusiast • Full Stack Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/Chethumalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/chethumalli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:chethumalli13@example.com"
            className="text-gray-400 hover:text-purple-500 transition duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Chethan C Malli. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}