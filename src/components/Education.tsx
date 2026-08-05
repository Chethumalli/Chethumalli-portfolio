"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";

const education = [
  {
    year: "2023 - 2027",
    title: "Bachelor of Engineering",
    institute: "AJ Institute of Engineering & Technology",
    subtitle: "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
  },
  {
    year: "2021 - 2023",
    title: "Pre-University Education",
    institute: "St. Sebastian PU College",
    subtitle: "Science (PCMB)",
  },
  {
    year: "2010 - 2021",
    title: "Secondary School Education",
    institute: "Sharada Ganapathi Vidya Kendra",
    subtitle: "SSLC",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">
            EDUCATION
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Academic Journey
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            My educational background has provided a strong foundation in
            Artificial Intelligence, Machine Learning, software engineering,
            and modern web technologies.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden md:block absolute left-6 top-0 h-full w-[2px] bg-blue-200"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
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
                <GraduationCap size={22} />
              </div>

              {/* Card */}

              <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-8">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {edu.title}
                    </h3>

                    <p className="text-blue-600 font-semibold mt-1">
                      {edu.institute}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 text-slate-500 text-sm bg-gray-100 px-4 py-2 rounded-full w-fit">
                    <CalendarDays size={16} />
                    {edu.year}
                  </div>

                </div>

                <p className="mt-5 text-slate-600 leading-7">
                  {edu.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}