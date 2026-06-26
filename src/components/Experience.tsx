"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "1 Month Artificial Intelligence Internship",
    company: "Codec Technologies India",
    period: "2026",
    description: [
      "Developed responsive business websites using Next.js and Tailwind CSS.",
      "Built AI-powered web applications and automation solutions.",
      "Developed modern UI/UX design."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Master Cut Professional Saloon",
    period: "2025",
    description: [
      "Designed and developed a premium salon website.",
      "Implemented responsive layouts and SEO optimization.",
      "Created engaging animations using Framer Motion."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Client.X",
    period: "2025",
    description: [
      "Developed a modern business website.",
      "Integrated automation workflows and API features.",
      "Focused on performance and responsive UI."
    ]
  },
  {
    title: "Core Member",
    company: "Artifex AI & Machine Learning Club",
    period: "2024 - Present",
    description: [
      "Built the official AI club website.",
      "Contributed to AI and web development projects.",
      "Organized technical workshops and events."
    ]
  }
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-black text-white px-6"
    >
      <p className="text-center text-purple-500 tracking-widest mb-2">
        EXPERIENCE
      </p>

      <h2 className="text-4xl font-bold text-center mb-16">
        Professional Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">

        <div className="absolute left-5 top-0 w-1 h-full bg-purple-600 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative md:pl-16 mb-12"
          >
            <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-purple-600 items-center justify-center">
              <Briefcase size={20} />
            </div>

            <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500 transition hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">

              <h3 className="text-2xl font-bold">
                {exp.title}
              </h3>

              <p className="text-purple-400 mt-1">
                {exp.company}
              </p>

              <p className="text-gray-500 text-sm mt-1 mb-4">
                {exp.period}
              </p>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}