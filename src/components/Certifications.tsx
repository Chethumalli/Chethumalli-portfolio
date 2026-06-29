"use client"

import { motion } from "framer-motion"

const certifications = [
    {
    title: "1-month Artificial Intelligence Internship",
    issuer: "Codec Technologies India",
  },
    {
    title: "Introduction to Machine LearningGenerative AI with DiffusionModels",
    issuer: "AWS Training & Certification",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Make Agentic AI Work For You",
    issuer: "IBM SkillsBuild",
  },
   {
    title: "4-week Virtual Internship in Web Development",
    issuer: "CodSoft",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
  },
  {
    title: "TechA Cloud Computing using Microsoft Azure",
    issuer: "Infosys Springboard",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
  },
  {
    title: "Database and SQL",
    issuer: "Infosys Springboard",
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-black text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {certifications.map((cert, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >

            <h3 className="text-xl font-semibold mb-2">
              {cert.title}
            </h3>

            <p className="text-purple-400">
              {cert.issuer}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  )
}