"use client";

import {
  Github,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-extrabold text-slate-900">
              Chethan
              <span className="text-blue-600">.</span>
            </h2>

            <p className="mt-3 text-slate-600 leading-7">
              AI & Machine Learning Enthusiast
              <br />
              Full Stack Developer
            </p>

          </div>

          {/* Center */}

          <div className="text-center">

            <p className="text-slate-600">
              Built with
              <span className="font-semibold text-blue-600">
                {" "}Next.js
              </span>
              {" "}&
              <span className="font-semibold text-blue-600">
                {" "}Tailwind CSS
              </span>
            </p>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:chethumalli13@gmail.com"
              aria-label="Email"
              className="w-12 h-12 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 pt-8 border-t border-gray-200 text-center">

          <p className="flex flex-wrap items-center justify-center gap-2 text-slate-500 text-sm">

            © {new Date().getFullYear()} Chethan C Malli. All Rights Reserved.

          </p>

          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500">

            Made with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            using Next.js & Tailwind CSS

          </p>

        </div>

      </div>
    </footer>
  );
}