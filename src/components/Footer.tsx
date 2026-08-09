"use client";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">

      {/* Subtle blue glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Main Footer */}
      <div className="relative container-custom py-14 sm:py-16">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Chethan C Malli
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-8 max-w-md mx-auto md:mx-0">
              AI & Machine Learning Enthusiast,
              Full Stack Developer, and passionate
              about building intelligent software
              that solves real-world problems.
            </p>

            {/* Location */}
            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-gray-400
                text-sm
              "
            >
              <MapPin
                size={17}
                className="text-blue-500"
              />

              <span>
                Mangalore, Karnataka, India
              </span>
            </div>

            {/* Small status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

              <span className="text-sm text-blue-400">
                Building the future with AI
              </span>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end gap-6">

            {/* Social Icons */}
            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Linkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:chethumalli13@gmail.com"
                aria-label="Email"
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <Mail size={20} />
              </a>

            </div>

            {/* Back To Top */}
            <a
              href="#home"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                text-white
                font-semibold
                shadow-lg
                shadow-blue-600/20
                hover:bg-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <ArrowUp size={18} />
              Back to Top
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">

        <div className="container-custom py-6">

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">
              Chethan C Malli
            </span>
            . All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}