"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">

      <div className="container-custom py-14">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <div className="text-center md:text-left">

            <h2 className="text-3xl font-extrabold text-slate-900">

              Chethan C Malli
              <span className="text-blue-600">.</span>

            </h2>

            <p className="mt-4 text-slate-600 leading-8 max-w-md">

              AI & Machine Learning Enthusiast,
              Full Stack Developer, and passionate
              about building intelligent software
              that solves real-world problems.

            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center md:items-end gap-6">

            <div className="flex gap-4">

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Github size={20}/>
              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin size={20}/>
              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Mail size={20}/>
              </a>

            </div>

            {/* Back to Top */}

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >

              <ArrowUp size={18}/>

              Back to Top

            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200">

        <div className="container-custom py-6">

          <p className="text-center text-slate-500 text-sm">

            © {new Date().getFullYear()} Chethan C Malli.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}