"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  FolderGit2,
  Code2,
  Brain,
  Medal,
} from "lucide-react";

const stats = [
  {
    icon: <FolderGit2 size={34} />,
    number: 15,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <Code2 size={34} />,
    number: 10,
    suffix: "+",
    title: "Technologies",
  },
  {
    icon: <Award size={34} />,
    number: 8,
    suffix: "+",
    title: "Certifications",
  },
  {
    icon: <Brain size={34} />,
    number: 2,
    suffix: "+",
    title: "Years in AI",
  },
];

const achievements = [
  "🏆 Winner – AJIET Inter-Collegiate Mini Project Competition (2024)",
  "🏅 Represented VTU at the South Zone Inter-University National Kabaddi Tournament (2026)",
  "🥇 Winner – VTU State Level Kabaddi Tournament (2026)",
  "🥈 Runner-Up – VTU Mangalore Division Kabaddi Tournament (2026)",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">
            ACHIEVEMENTS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Achievements & Statistics
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            A snapshot of my academic achievements, technical journey,
            certifications, and extracurricular accomplishments.
          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-8 text-center"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">

                {item.icon}

              </div>

              <h3 className="text-5xl font-extrabold text-slate-900">

                <CountUp
                  end={item.number}
                  duration={2}
                  enableScrollSpy
                />

                {item.suffix}

              </h3>

              <p className="mt-3 text-slate-600 font-medium">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Achievement Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 p-8"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">

                <Medal size={28} />

              </div>

              <p className="text-slate-700 leading-8">
                {item}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}