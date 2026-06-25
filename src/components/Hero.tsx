"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-purple-300 mb-8">

            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

            Available for Internships & Freelance

          </div>

          {/* Greeting */}

          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          {/* Name */}

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Chethan C Malli
            </span>

          </h1>

          {/* Typing */}

          <div className="text-2xl text-purple-400 h-12 mt-6">

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

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">

            Passionate AI & Machine Learning student specializing in
            modern web development and intelligent software systems.

            I enjoy building scalable web applications,
            AI-powered tools, automation platforms, and real-world
            digital solutions that create meaningful impact.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 transition px-7 py-4 rounded-xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-purple-500 hover:bg-purple-600 transition px-7 py-4 rounded-xl flex items-center gap-2"
            >
              <FaFileDownload />

              Resume
            </a>

            <a
              href="#contact"
              className="border border-gray-600 hover:border-purple-500 transition px-7 py-4 rounded-xl"
            >
              Contact
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-6 mt-10 text-2xl">

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/chethumalli"
              target="_blank"
              className="hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:chethumalli13@gmail.com"
              className="hover:text-purple-500 transition"
            >
              <FaEnvelope />
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

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-purple-600 blur-[120px] opacity-40"></div>

            {/* Animated Ring */}

            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse"></div>

            {/* Image */}

            <Image
              src="/profile.png"
              alt="Chethan C Malli"
              width={450}
              height={450}
              priority
              className="relative rounded-full border-4 border-purple-500 object-cover shadow-[0_0_60px_rgba(168,85,247,0.5)]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}