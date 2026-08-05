"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium mb-8 shadow-sm">

            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

            Available for Internships & Freelance

          </div>

          {/* Greeting */}
          <p className="text-slate-600 text-lg mb-3">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Chethan C Malli
            </span>

          </h1>

          {/* Typing */}
          <div className="text-2xl md:text-3xl font-semibold text-blue-600 h-14 mt-6">

            <TypeAnimation
              sequence={[
                "AI Developer",
                2000,
                "Machine Learning Engineer",
                2000,
                "Full Stack Developer",
                2000,
                "Generative AI Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          {/* Description */}
          <p className="text-slate-600 text-lg leading-8 max-w-xl mt-8">

            Passionate AI & Machine Learning student specializing in modern
            web development and intelligent software systems.

            <br />
            <br />

            I build AI-powered applications, scalable web platforms, automation
            tools, and digital solutions that solve real-world problems while
            delivering exceptional user experiences.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-gray-300 bg-white text-slate-700 font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300"
            >
              <FaFileDownload />
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-4 rounded-xl border border-gray-300 bg-white text-slate-700 font-semibold shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300"
            >
              Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:chethumalli13@gmail.com"
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-[120px]"></div>

            {/* Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-300 animate-pulse"></div>

            {/* Image */}
            <Image
              src="/profile.png"
              alt="Chethan C Malli"
              width={430}
              height={430}
              priority
              className="relative rounded-full border-4 border-white object-cover shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}