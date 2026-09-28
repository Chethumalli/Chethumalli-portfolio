"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  website?: string;
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "AI",
    "Web",
    "Full Stack",
    "Python",
  ];

  const projects: Project[] = [
    {
      title: "AI Stock Analyst",
      category: "AI",
      description:
        "Machine learning model for stock trend prediction using historical market data and visualization.",
      tech: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "Matplotlib",
      ],
      github:
        "https://github.com/Chethumalli/Stock-price-predictor-AI.git",
    },

    {
      title: "Face Recognition Attendance",
      category: "AI",
      description:
        "AI-powered attendance system using OpenCV and facial recognition.",
      tech: [
        "Python",
        "OpenCV",
        "Face Recognition",
        "NumPy",
      ],
      github:
        "https://github.com/Chethumalli/face-recognition-attendance-system.git",
    },

    {
      title: "Bulk Mail Send API",
      category: "Full Stack",
      description:
        "REST API for sending personalized bulk emails using CSV uploads and SMTP.",
      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Nodemailer",
      ],
      github:
        "https://github.com/Chethumalli/Bulk-mail-send-api",
    },

    {
      title: "Multilingual Speech Translator",
      category: "AI",
      description:
        "Speech-to-text translation supporting multiple languages.",
      tech: [
        "Python",
        "Flask",
        "Speech Recognition",
      ],
      github:
        "https://github.com/Chethumalli/Language-converter-AI.git",
    },

    {
      title: "Restaurant Website",
      category: "Web",
      description:
        "Modern responsive restaurant landing page.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/Chethumalli/Restaurant-site.git",
    },

    {
      title: "Auction Platform",
      category: "Web",
      description:
        "Responsive online auction platform with bidding system.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/Chethumalli/Auction.git",
    },

    {
      title: "Student Grade Management",
      category: "Python",
      description:
        "CLI application for managing student records and reports.",
      tech: [
        "Python",
        "CLI",
      ],
      github:
        "https://github.com/Chethumalli/Student-Grade-Management-System-Python-CLI-Project-.git",
    },

    {
      title: "Artifex AI Club Website",
      category: "Full Stack",
      description:
        "Official AI Club website showcasing events and projects.",
      tech: [
        "Next.js",
        "React",
        "Tailwind",
      ],
      website:
        "https://artifex-ajiet.vercel.app/",
    },

    {
      title: "GenAI Workshop",
      category: "AI",
      description:
        "Collection of Generative AI projects including RAG and AI Agents.",
      tech: [
        "Python",
        "LangChain",
        "RAG",
      ],
      github:
        "https://github.com/Chethumalli/Workshop-genAI.git",
    },

    {
      title: "AI Speech-to-Text",
      category: "AI",
      description:
        "AI-powered speech-to-text conversion using Whisper.",
      tech: [
        "Python",
        "Streamlit",
        "Whisper",
      ],
      github:
        "https://github.com/Chethumalli/AI-Speech-to-Text-Converter.git",
    },

    {
      title: "Developer Portfolio",
      category: "Full Stack",
      description:
        "Personal portfolio built with Next.js and Tailwind CSS.",
      tech: [
        "Next.js",
        "React",
        "Framer Motion",
      ],
      github:
        "https://github.com/Chethumalli/Chethumalli-portfolio",
    },

    {
      title: "Client.X",
      category: "Full Stack",
      description:
        "Professional business website with responsive design.",
      tech: [
        "Next.js",
        "Tailwind CSS",
      ],
      website:
        "https://www.clientx.tech/",
    },

    {
      title: "Master Cut Professional Saloon",
      category: "Full Stack",
      description:
        "Premium salon website featuring elegant UI and animations.",
      tech: [
        "Next.js",
        "Tailwind CSS",
      ],
      website:
        "https://mastercutsaloon.vercel.app/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="
        relative
        section-padding
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[300px]

          rounded-full

          bg-blue-600/10
          blur-[140px]

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-[350px]
          h-[350px]

          rounded-full

          bg-blue-500/5
          blur-[120px]

          pointer-events-none
        "
      />

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="
              inline-block
              px-4
              py-2

              rounded-full

              bg-blue-500/10
              border
              border-blue-500/20

              text-blue-400

              text-xs
              sm:text-sm

              font-semibold
              tracking-wide

              mb-5
            "
          >
            PROJECTS
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-extrabold

              text-white
            "
          >
            Featured{" "}
            <span className="gradient-text">
              Projects
            </span>
          </h2>

          <p
            className="
              mt-5

              max-w-2xl
              mx-auto

              text-gray-400

              text-sm
              sm:text-base

              leading-7
              sm:leading-8
            "
          >
            A collection of AI, Full Stack, Python,
            and Web Development projects showcasing
            my technical skills.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* FILTER BUTTONS */}
        {/* ===================================================== */}

        <div
          className="
            flex
            flex-wrap
            justify-center

            gap-2
            sm:gap-3

            mb-10
            md:mb-14
          "
        >
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-4
                sm:px-6

                py-2
                sm:py-2.5

                rounded-full

                text-xs
                sm:text-sm

                font-medium

                transition-all
                duration-300

                ${
                  filter === item
                    ? `
                      bg-blue-600
                      text-white
                      border
                      border-blue-500
                      shadow-[0_8px_25px_rgba(37,99,235,0.25)]
                    `
                    : `
                      bg-white/[0.03]
                      text-gray-400
                      border
                      border-white/10
                      hover:border-blue-500/50
                      hover:text-blue-400
                      hover:bg-blue-500/5
                    `
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ===================================================== */}
        {/* PROJECT GRID */}
        {/* ===================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="
              grid

              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3

              gap-5
              sm:gap-6
              lg:gap-8
            "
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group

                  relative

                  bg-[#080808]

                  border
                  border-white/10

                  rounded-2xl

                  p-6
                  sm:p-7

                  flex
                  flex-col

                  h-full

                  overflow-hidden

                  shadow-[0_10px_35px_rgba(0,0,0,0.4)]

                  hover:border-blue-500/40

                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]

                  transition-all
                  duration-300
                "
              >

                {/* Card Glow */}

                <div
                  className="
                    absolute

                    -top-20
                    -right-20

                    w-40
                    h-40

                    rounded-full

                    bg-blue-600/10

                    blur-3xl

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-500

                    pointer-events-none
                  "
                />

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    relative

                    w-14
                    h-14

                    rounded-2xl

                    bg-blue-500/10

                    border
                    border-blue-500/10

                    text-blue-400

                    flex
                    items-center
                    justify-center

                    mb-6

                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:border-blue-500

                    group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]

                    transition-all
                    duration-300
                  "
                >
                  <FolderGit2 size={28} />
                </div>

                {/* ================================================= */}
                {/* CATEGORY */}
                {/* ================================================= */}

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-wider

                    text-blue-400

                    font-semibold
                  "
                >
                  {project.category}
                </span>

                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <h3
                  className="
                    mt-2

                    text-xl
                    sm:text-2xl

                    font-bold

                    text-white

                    leading-tight
                  "
                >
                  {project.title}
                </h3>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                    mt-4

                    text-gray-400

                    text-sm
                    sm:text-base

                    leading-7

                    flex-grow
                  "
                >
                  {project.description}
                </p>

                {/* ================================================= */}
                {/* TECH STACK */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    flex-wrap

                    gap-2

                    mt-6
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full

                        bg-blue-500/5

                        border
                        border-blue-500/15

                        text-blue-300

                        px-3
                        py-1

                        text-xs
                        sm:text-sm

                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ================================================= */}
                {/* BUTTONS */}
                {/* ================================================= */}

                <div
                  className="
                    mt-7

                    flex
                    flex-col
                    sm:flex-row

                    gap-3
                  "
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1

                        inline-flex
                        items-center
                        justify-center
                        gap-2

                        rounded-xl

                        bg-blue-600

                        px-4
                        py-3

                        text-white

                        text-sm

                        font-medium

                        transition-all
                        duration-300

                        hover:bg-blue-500

                        hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]
                      "
                    >
                      <Github size={18} />

                      GitHub
                    </a>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1

                        inline-flex
                        items-center
                        justify-center
                        gap-2

                        rounded-xl

                        border
                        border-blue-500/40

                        bg-blue-500/5

                        px-4
                        py-3

                        text-blue-400

                        text-sm

                        font-medium

                        transition-all
                        duration-300

                        hover:bg-blue-600
                        hover:text-white
                        hover:border-blue-600

                        hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]
                      "
                    >
                      <ExternalLink size={18} />

                      Live Demo
                    </a>
                  )}
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
