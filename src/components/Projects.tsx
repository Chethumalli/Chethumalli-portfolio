"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, ArrowUpRight } from "lucide-react";

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

  const filters = ["All", "AI", "Web", "Full Stack", "Python"];

  const projects: Project[] = [
    {
      title: "AI Stock Analyst",
      category: "AI",
      description:
        "Machine learning model that predicts stock market trends using historical data and visualization.",
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
        "Responsive restaurant website with a modern user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Chethumalli/Restaurant-site.git",
    },
    {
      title: "Auction Platform",
      category: "Web",
      description:
        "Online auction platform with a bidding system.",
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
        "Official AI Club website featuring events and project showcases.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      website: "https://artifexaiml.vercel.app/",
    },
    {
      title: "GenAI Workshop",
      category: "AI",
      description:
        "Collection of Generative AI projects including RAG and AI Agents.",
      tech: ["Python", "LangChain", "LLMs", "RAG"],
      github:
        "https://github.com/Chethumalli/Workshop-genAI.git",
    },
    {
      title: "AI Speech-to-Text Converter",
      category: "AI",
      description:
        "Convert uploaded audio and video into text using AI.",
      tech: ["Python", "Streamlit", "Whisper"],
      github:
        "https://github.com/Chethumalli/AI-Speech-to-Text-Converter.git",
    },
    {
      title: "Developer Portfolio",
      category: "Full Stack",
      description:
        "Modern animated portfolio built using Next.js and Framer Motion.",
      tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
      github:
        "https://github.com/Chethumalli/Chethumalli-portfolio",
    },
    {
      title: "Client.X Platform",
      category: "Full Stack",
      description:
        "Professional business website with modern UI and animations.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      website: "https://www.clientx.tech/",
    },
    {
      title: "Master Cut Professional Saloon",
      category: "Full Stack",
      description:
        "Premium salon website with responsive UI and smooth animations.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      website: "https://mastercutsaloon.vercel.app/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
            PROJECTS
          </span>

          <h2 className="text-5xl font-extrabold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-7">
            A collection of AI, Machine Learning, Full Stack, and Web
            Development projects built to solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === item
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-slate-700 hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-8 flex flex-col"
              >
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-5">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gray-100 text-slate-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
                    >
                      <Globe size={18} />
                      Live Demo
                      <ArrowUpRight size={16} />
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