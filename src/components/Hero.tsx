"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-5 py-2">

              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-blue-700 font-medium text-sm sm:text-base">
                Available for Internships & Freelance
              </span>

            </div>

            {/* Greeting */}

            <p className="mt-8 text-slate-500 text-lg">
              Hello, I'm
            </p>

            {/* Name */}

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
  <span className="gradient-text">
    Chethan C Malli
  </span>
</h1>

            {/* Type Animation */}

            <div className="mt-8 h-12 text-xl sm:text-2xl font-semibold text-blue-600">

              <TypeAnimation
                sequence={[
                  "AI Developer",
                  1800,
                  "Machine Learning Engineer",
                  1800,
                  "Full Stack Developer",
                  1800,
                  "Generative AI Enthusiast",
                  1800,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            {/* Description */}

            <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-slate-600 leading-8 text-base sm:text-lg">

              Passionate AI & Machine Learning student specializing in
              modern web development, intelligent software systems,
              automation, and scalable digital products.

              I enjoy building impactful AI-powered applications,
              full-stack platforms, and real-world solutions that
              solve meaningful problems.

            </p>

            {/* Buttons */}

           <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">

  {/* View Projects */}

  <a
    href="#projects"
    className="btn-primary px-8 py-4 text-center"
  >
    View Projects
  </a>

  {/* Download CV */}

  <a
    href="/resume.pdf"
    download
    className="btn-outline px-8 py-4 flex items-center justify-center gap-2"
  >
    <FaFileDownload size={18} />
    Download CV
  </a>

  {/* View Resume */}

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline px-8 py-4 text-center"
  >
    View Resume
  </a>

</div>

            {/* Social Icons */}

            <div className="mt-10 flex justify-center lg:justify-start gap-5">

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2"
          >

            {/* Background Glow */}

            <div className="absolute h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px] rounded-full bg-blue-200 blur-3xl opacity-40"></div>

            {/* Animated Circle */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute h-72 w-72 sm:h-80 sm:w-80 lg:h-[440px] lg:w-[440px] rounded-full border-2 border-dashed border-blue-300"
            />

            {/* Profile Image */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative"
            >

              <Image
                src="/profile.png"
                alt="Chethan C Malli"
                width={430}
                height={430}
                priority
                className="
                object-cover
                rounded-full
                border-4
                border-white
                shadow-2xl
                w-64
                h-64
                sm:w-80
                sm:h-80
                lg:w-[430px]
                lg:h-[430px]
                "
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}