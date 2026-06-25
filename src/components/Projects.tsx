"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Project = {
  title: string
  description: string
  tech: string[]
  category: string
  github?: string
  website?: string
}

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filters = ["All", "AI", "Web", "Full Stack", "Python"]

  const projects: Project[] = [
    {
      title: "AI Stock Analyst",
      category: "AI",
      description:
        "Machine learning model that predicts stock market trends using historical market data and visualization.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github:
        "https://github.com/Chethumalli/Stock-price-predictor-AI.git",
    },

    {
      title: "Face Recognition Attendance System",
      category: "AI",
      description:
        "AI-powered attendance management system using OpenCV and facial recognition.",
      tech: ["Python", "OpenCV", "Face Recognition", "NumPy"],
      github:
        "https://github.com/Chethumalli/face-recognition-attendance-system.git",
    },

    {
      title: "Bulk Mail Send API",
      category: "Full Stack",
      description:
        "REST API for sending personalized bulk emails using CSV uploads and SMTP.",
      tech: ["Next.js", "TypeScript", "Node.js", "Nodemailer"],
      github:
        "https://github.com/Chethumalli/Bulk-mail-send-api",
    },

    {
      title: "Multilingual Speech Translator",
      category: "AI",
      description:
        "Speech-to-text translator supporting multiple languages.",
      tech: ["Python", "Flask", "SpeechRecognition", "Deep Translator"],
      github:
        "https://github.com/Chethumalli/Language-converter-AI.git",
    },

    {
      title: "Restaurant Website",
      category: "Web",
      description:
        "Responsive restaurant website with modern UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Chethumalli/Restaurant-site.git",
    },

    {
      title: "Auction Platform",
      category: "Web",
      description:
        "Online auction platform with bidding system.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Chethumalli/Auction.git",
    },

    {
      title: "Student Grade Management",
      category: "Python",
      description:
        "CLI application for managing student grades and reports.",
      tech: ["Python", "CLI", "File Handling"],
      github:
        "https://github.com/Chethumalli/Student-Grade-Management-System-Python-CLI-Project-.git",
    },

    {
      title: "Artifex AI Club Website",
      category: "Full Stack",
      description:
        "Official AI Club website featuring events and projects.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      website: "https://artifex-ajiet.vercel.app/",
    },

    {
      title: "GenAI Workshop",
      category: "AI",
      description:
        "Collection of Generative AI projects including RAG and Agents.",
      tech: ["Python", "LangChain", "LLMs", "RAG"],
      github:
        "https://github.com/Chethumalli/Workshop-genAI.git",
    },

    {
      title: "AI Speech-to-Text Converter",
      category: "AI",
      description:
        "Convert uploaded audio/video into text using AI.",
      tech: ["Python", "Streamlit", "Whisper"],
      github:
        "https://github.com/Chethumalli/AI-Speech-to-Text-Converter.git",
    },

    {
      title: "Developer Portfolio",
      category: "Full Stack",
      description:
        "Modern animated portfolio built with Next.js.",
      tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
      github:
        "https://github.com/Chethumalli/Chethumalli-portfolio",
    },

    {
      title: "Client.X Platform",
      category: "Full Stack",
      description:
        "Professional business website for Client.X.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      website: "https://www.clientx.tech/",
    },

    {
      title: "Master Cut Professional Saloon",
      category: "Full Stack",
      description:
        "Premium salon website with modern UI and animations.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      website: "https://mastercutsaloon.vercel.app/",
    },
  ]

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-10">
        Projects
      </h2>

      {/* Filter Buttons */}

      <div className="flex justify-center flex-wrap gap-4 mb-14">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              filter === item
                ? "bg-purple-600"
                : "bg-zinc-900 hover:bg-purple-700"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      <AnimatePresence mode="wait">

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >

          {filteredProjects.map((project) => (

            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className="bg-zinc-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-3 flex-wrap">

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>

                )}

                {project.website && (

                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition"
                  >
                    Visit Website
                  </a>

                )}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </AnimatePresence>

    </section>
  )
}