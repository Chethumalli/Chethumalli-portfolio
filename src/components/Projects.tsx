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
        "https://artifexaiml.vercel.app/",
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
          (project) =>
            project.category === filter
        );

  return (
    <section
      id="projects"
      className="section-padding"
    >

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">

            PROJECTS

          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">

            Featured Projects

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">

            A collection of AI,
            Full Stack,
            Python,
            and Web Development
            projects showcasing my technical skills.

          </p>

        </motion.div>

        {/* Filter */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === item
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
                className="glass-card p-7 flex flex-col h-full"
              >

                {/* Icon */}

                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">

                  <FolderGit2 size={28} />

                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">

                  {project.title}

                </h3>

                {/* Description */}

                <p className="mt-4 text-slate-600 leading-7 flex-grow">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white font-medium transition hover:bg-blue-700"
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
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-4 py-3 text-blue-600 font-medium transition hover:bg-blue-600 hover:text-white"
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