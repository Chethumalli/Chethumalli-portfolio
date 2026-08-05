"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
} from "lucide-react";

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company: "Codec Technologies India",
    period: "2026",
    description: [
      "Developed responsive business websites using Next.js and Tailwind CSS.",
      "Built AI-powered web applications and automation solutions.",
      "Designed modern UI/UX with responsive layouts.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Master Cut Professional Saloon",
    period: "2025",
    description: [
      "Designed and developed a premium salon website.",
      "Implemented responsive layouts with SEO optimization.",
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
      "Optimized performance and responsiveness.",
    ],
  },
  {
    title: "Core Member",
    company: "Artifex AI & Machine Learning Club",
    period: "2024 – Present",
    description: [
      "Built the official AI Club website.",
      "Worked on AI and full-stack projects.",
      "Organized technical workshops and coding events.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
    >
      <div className="container-custom">

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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Professional Experience
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            Hands-on experience in AI development,
            frontend engineering, responsive web applications,
            and real-world software projects.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden lg:block absolute left-6 top-0 h-full w-[2px] bg-blue-200"></div>
                    {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="relative lg:pl-20 mb-10"
            >

              {/* Timeline Icon */}

              <div className="hidden lg:flex absolute left-0 top-5 h-12 w-12 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg">

                <Briefcase size={22} />

              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="glass-card p-8 h-full"
              >

                {/* Top */}

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">

                      {exp.title}

                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">

                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">

                        <Building2 size={16} />

                        {exp.company}

                      </div>

                    </div>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-600 px-4 py-2 text-sm font-medium w-fit">

                    <Calendar size={16} />

                    {exp.period}

                  </div>

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gray-200"></div>

                {/* Points */}

                <ul className="space-y-4">

                  {exp.description.map((point, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0"></div>

                      <span className="text-slate-600 leading-7">

                        {point}

                      </span>

                    </li>

                  ))}

                </ul>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}