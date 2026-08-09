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
      className="
        relative
        bg-black
        text-white
        section-padding
        overflow-hidden
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================================== */}

      <div
        className="
          absolute
          top-1/3
          left-0
          w-[400px]
          h-[400px]
          bg-blue-600/10
          blur-[140px]
          rounded-full
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
          bg-blue-500/5
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="container-custom relative z-10">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            EXPERIENCE
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
            Professional{" "}
            <span className="gradient-text">
              Experience
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
            Hands-on experience in AI development,
            frontend engineering, responsive web applications,
            and real-world software projects.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* TIMELINE */}
        {/* ===================================================== */}

        <div className="relative">

          {/* Desktop Vertical Line */}

          <div
            className="
              hidden
              lg:block

              absolute
              left-6
              top-0
              h-full
              w-[2px]

              bg-gradient-to-b
              from-blue-500
              via-blue-500/40
              to-transparent
            "
          />

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
              className="
                relative
                lg:pl-20
                mb-7
                sm:mb-8
                lg:mb-10

                last:mb-0
              "
            >

              {/* ================================================= */}
              {/* TIMELINE ICON */}
              {/* ================================================= */}

              <div
                className="
                  hidden
                  lg:flex

                  absolute
                  left-0
                  top-5

                  h-12
                  w-12

                  rounded-full

                  bg-blue-600

                  text-white

                  items-center
                  justify-center

                  border
                  border-blue-400/30

                  shadow-[0_0_25px_rgba(37,99,235,0.35)]
                "
              >
                <Briefcase size={22} />
              </div>

              {/* ================================================= */}
              {/* CARD */}
              {/* ================================================= */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
                  relative

                  bg-[#080808]

                  border
                  border-white/10

                  rounded-2xl

                  p-6
                  sm:p-7
                  lg:p-8

                  shadow-[0_10px_35px_rgba(0,0,0,0.4)]

                  hover:border-blue-500/40

                  hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]

                  transition-all
                  duration-300

                  overflow-hidden
                "
              >

                {/* Card Glow */}

                <div
                  className="
                    absolute
                    -top-24
                    -right-24

                    w-48
                    h-48

                    rounded-full

                    bg-blue-600/10

                    blur-3xl

                    opacity-0
                    hover:opacity-100

                    pointer-events-none
                  "
                />

                {/* ================================================= */}
                {/* TOP */}
                {/* ================================================= */}

                <div
                  className="
                    relative

                    flex
                    flex-col
                    md:flex-row

                    md:items-center
                    md:justify-between

                    gap-5
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        sm:text-2xl

                        font-bold

                        text-white

                        leading-tight
                      "
                    >
                      {exp.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">

                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2

                          rounded-full

                          bg-blue-500/10

                          border
                          border-blue-500/15

                          text-blue-400

                          px-3
                          sm:px-4
                          py-2

                          text-xs
                          sm:text-sm

                          font-semibold
                        "
                      >
                        <Building2 size={16} />

                        {exp.company}
                      </div>

                    </div>
                  </div>

                  {/* Period */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-full

                      bg-white/5

                      border
                      border-white/10

                      text-gray-300

                      px-3
                      sm:px-4
                      py-2

                      text-xs
                      sm:text-sm

                      font-medium

                      w-fit
                    "
                  >
                    <Calendar
                      size={16}
                      className="text-blue-400"
                    />

                    {exp.period}
                  </div>

                </div>

                {/* ================================================= */}
                {/* DIVIDER */}
                {/* ================================================= */}

                <div
                  className="
                    my-5
                    sm:my-6

                    h-px

                    bg-white/10
                  "
                />

                {/* ================================================= */}
                {/* POINTS */}
                {/* ================================================= */}

                <ul className="space-y-3 sm:space-y-4">

                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >

                      <div
                        className="
                          mt-2

                          h-2
                          w-2

                          rounded-full

                          bg-blue-500

                          flex-shrink-0

                          shadow-[0_0_8px_rgba(37,99,235,0.7)]
                        "
                      />

                      <span
                        className="
                          text-gray-400

                          text-sm
                          sm:text-base

                          leading-7
                        "
                      >
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