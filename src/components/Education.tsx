"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  School,
} from "lucide-react";

const education = [
  {
    year: "2023 – 2027",
    title: "Bachelor of Engineering",
    institute: "AJ Institute of Engineering & Technology",
    subtitle:
      "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
  },
  {
    year: "2021 – 2023",
    title: "Pre-University Education",
    institute: "St. Sebastian PU College",
    subtitle: "Science (PCMB)",
  },
  {
    year: "2010 – 2021",
    title: "Secondary School Education",
    institute: "Sharada Ganapathi Vidya Kendra",
    subtitle: "SSLC",
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
            EDUCATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Academic Journey
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            My educational journey has built a strong
            foundation in Artificial Intelligence,
            Machine Learning, software engineering,
            and modern web technologies.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="hidden lg:block absolute left-6 top-0 h-full w-[2px] bg-blue-200"></div>
                    {education.map((edu, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 40 : -40,
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

                <GraduationCap size={22} />

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

                      {edu.title}

                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">

                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">

                        <School size={16} />

                        {edu.institute}

                      </div>

                    </div>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-600 px-4 py-2 text-sm font-medium w-fit">

                    <Calendar size={16} />

                    {edu.year}

                  </div>

                </div>

                {/* Divider */}

                <div className="my-6 h-px bg-gray-200"></div>

                {/* Course */}

                <p className="text-slate-600 leading-8">

                  {edu.subtitle}

                </p>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}