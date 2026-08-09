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
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-black
        text-white
        px-5
        sm:px-8
        lg:px-12
        pt-28
        pb-16
        lg:py-28
      "
    >
      <div className="w-full max-w-7xl mx-auto">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-8
            xl:gap-14
            items-center
          "
        >
          {/* ========================================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-center
              lg:text-left
              order-2
              lg:order-1
              z-20
            "
          >
            {/* Availability */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/25
                px-4
                sm:px-5
                py-2
                shadow-[0_0_25px_rgba(37,99,235,0.08)]
              "
            >
              <span
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-500
                  animate-pulse
                  shadow-[0_0_10px_rgba(34,197,94,0.7)]
                "
              />

              <span
                className="
                  text-blue-300
                  font-medium
                  text-xs
                  sm:text-sm
                  md:text-base
                "
              >
                Available for Internships & Freelance
              </span>
            </div>

            {/* Greeting */}

            <p
              className="
                mt-7
                sm:mt-8
                text-gray-400
                text-base
                sm:text-lg
              "
            >
              Hello, I'm
            </p>

            {/* Name */}

            <h1
              className="
                mt-3
                text-4xl
                sm:text-5xl
                md:text-5xl
                lg:text-5xl
                xl:text-6xl
                font-extrabold
                leading-tight
              "
            >
              <span className="gradient-text">Chethan C Malli</span>
            </h1>

            {/* Type Animation */}

            <div
              className="
                mt-6
                sm:mt-8
                min-h-[48px]
                sm:min-h-[55px]
                text-lg
                sm:text-2xl
                font-semibold
                text-blue-400
              "
            >
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

            <p
              className="
                mt-5
                sm:mt-7
                max-w-xl
                mx-auto
                lg:mx-0
                text-gray-400
                leading-7
                sm:leading-8
                text-sm
                sm:text-base
                lg:text-lg
              "
            >
              Passionate AI & Machine Learning student specializing in
              modern web development, intelligent software systems,
              automation, and scalable digital products.

              <br />

              I enjoy building impactful AI-powered applications,
              full-stack platforms, and real-world solutions that
              solve meaningful problems.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-8
                sm:mt-10
                flex
                flex-col
                sm:flex-row
                flex-wrap
                gap-3
                sm:gap-4
                justify-center
                lg:justify-start
              "
            >
              <a
                href="#projects"
                className="
                  btn-primary
                  px-7
                  sm:px-8
                  py-3.5
                  sm:py-4
                  text-center
                "
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                  btn-outline
                  px-7
                  sm:px-8
                  py-3.5
                  sm:py-4
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <FaFileDownload size={18} />
                Download CV
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-outline
                  px-7
                  sm:px-8
                  py-3.5
                  sm:py-4
                  text-center
                "
              >
                View Resume
              </a>
            </div>

            {/* Social Icons */}

            <div
              className="
                mt-8
                sm:mt-10
                flex
                justify-center
                lg:justify-start
                gap-4
                sm:gap-5
              "
            >
              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-gray-300
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-gray-300
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                aria-label="Email"
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-gray-300
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope size={19} />
              </a>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT PROFILE */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              relative
              flex
              justify-center
              items-center
              order-1
              lg:order-2
              min-w-0
            "
          >
            {/* PROFILE AREA */}

            <div
              className="
                relative

                w-[270px]
                h-[400px]

                sm:w-[330px]
                sm:h-[470px]

                md:w-[380px]
                md:h-[520px]

                lg:w-[430px]
                lg:h-[570px]

                xl:w-[470px]
                xl:h-[600px]
              "
            >

              {/* ===================================================== */}
              {/* BLUE CURVED RECTANGULAR BACKGROUND */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                }}
                className="
                  absolute

                  top-[8%]
                  left-1/2
                  -translate-x-1/2

                  w-[72%]
                  h-[72%]

                  bg-gradient-to-br
                  from-blue-400
                  via-blue-600
                  to-blue-800

                  rounded-[45%_45%_18%_18%]

                  shadow-[0_25px_90px_rgba(37,99,235,0.35)]

                  z-0
                "
              />

              {/* ===================================================== */}
              {/* INNER BLUE GLOW */}
              {/* ===================================================== */}

              <div
                className="
                  absolute

                  top-[12%]
                  left-1/2
                  -translate-x-1/2

                  w-[75%]
                  h-[70%]

                  rounded-[45%_45%_20%_20%]

                  bg-blue-500/20
                  blur-3xl

                  z-[-1]
                "
              />

              {/* ===================================================== */}
              {/* SMALL DECORATIVE BLUE CROSS / RECTANGLE */}
              {/* ===================================================== */}

              <div
                className="
                  absolute
                  top-12%]
                  left-[10%]

                  w-10
                  h-10

                  border-2
                  border-blue-400/40

                  rounded-xl

                  rotate-12

                  z-0
                "
              />

              <div
                className="
                  absolute
                  top-[8%]
                  right-[26%]

                  w-3
                  h-3

                  rounded-full
                  bg-blue-400

                  shadow-[0_0_20px_rgba(59,130,246,0.8)]

                  z-0
                "
              />

              {/* ===================================================== */}
              {/* PROFILE IMAGE */}
              {/* ===================================================== */}

              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  absolute
                  inset-0
                  z-10
                  overflow-hidden

                  [clip-path:ellipse(78%_100%_at_50%_0%)]
                "
              >
                <Image
                  src="/p.png"
                  alt="Chethan C Malli"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 270px,
                    (max-width: 768px) 330px,
                    (max-width: 1024px) 380px,
                    (max-width: 1280px) 430px,
                    470px
                  "
                  className="
                    object-contain
                    object-center

                    scale-[1.00]
                    sm:scale-[1.02]
                    md:scale-[1.04]
                    lg:scale-[1.06]
                    xl:scale-[1.08]

                    drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]
                  "
                />
              </motion.div>

              {/* ===================================================== */}
              {/* BOTTOM BLUE CURVED BASE */}
              {/* ===================================================== */}

              <div
                className="
                  absolute
                  bottom-[7%]
                  left-1/2
                  -translate-x-1/2

                  w-[68%]
                  h-[8%]

                  rounded-full

                  bg-blue-600/30
                  blur-xl

                  z-0
                "
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}