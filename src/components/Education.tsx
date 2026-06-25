"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Engineering",
    institute: "AJ Institute of Engineering & Technology",
    subtitle: "Computer Science Engineering (AI & ML)"
  },
  {
    year: "2021 - 2023",
    title: " St SebastianPre-University Education",
    institute: "PU College",
    subtitle: "Science (PCMB)"
  },
  {
    year: "2010 - 2021",
    title: "Sharada Ganapathi Vidya Kendra Secondary School",
    institute: "High School",
    subtitle: "SSLC"
  }
]

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-black text-white px-6"
    >
      <p className="text-center text-purple-500 tracking-widest mb-2">
        EDUCATION
      </p>

      <h2 className="text-4xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="max-w-4xl mx-auto relative">

        <div className="absolute left-5 top-0 h-full w-1 bg-purple-600 hidden md:block" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative md:pl-16 mb-12"
          >
            <div className="hidden md:flex absolute left-0 top-2 w-10 h-10 rounded-full bg-purple-600 items-center justify-center">
              <GraduationCap size={20} />
            </div>

            <div className="bg-zinc-900 rounded-2xl border border-gray-800 p-6 hover:border-purple-500 transition hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">

              <span className="text-purple-400 font-semibold">
                {edu.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {edu.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {edu.institute}
              </p>

              <p className="text-gray-500">
                {edu.subtitle}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}