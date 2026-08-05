"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Codec Technologies India",
    period: "2026",
    description: [
      "Developed responsive business websites using Next.js and Tailwind CSS.",
      "Built AI-powered web applications and workflow automation solutions.",
      "Designed modern, user-friendly interfaces with responsive layouts.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Master Cut Professional Saloon",
    period: "2025",
    description: [
      "Designed and developed a premium salon website.",
      "Implemented responsive layouts and SEO optimization.",
      "Created engaging animations using Framer Motion.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Client.X",
    period: "2025",
    description: [
      "Developed a modern business website.",
      "Integrated APIs and automation workflows.",
      "Optimized performance and responsive user interfaces.",
    ],
  },
  {
    title: "Core Member",
    company: "Artifex AI & Machine Learning Club",
    period: "2024 - Present",
    description: [
      "Built the official AI Club website.",
      "Contributed to AI and Full Stack development projects.",
      "Organized workshops, hackathons, and technical events.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">
            EXPERIENCE
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Professional Experience
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            My professional journey in AI, Full Stack Development,
            and building modern web applications.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="hidden md:block absolute left-6 top-0 h-full w-[2px] bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative md:pl-20 mb-12"
            >

              {/* Timeline Icon */}

              <div className="hidden md:flex absolute left-0 top-4 w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg">
                <Briefcase size={22} />
              </div>

              {/* Card */}

              <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-8">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {exp.title}
                    </h3>

                    <p className="text-blue-600 font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-slate-500 text-sm bg-gray-100 px-4 py-2 rounded-full w-fit">
                    <CalendarDays size={16} />
                    {exp.period}
                  </div>

                </div>

                <ul className="mt-6 space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 leading-7"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}