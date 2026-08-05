"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  Trophy,
  Award,
  FolderGit2,
  Code2,
  Brain,
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
    number: 11,
    suffix: "+",
    title: "Certifications",
  },
  {
    icon: <Brain size={34} />,
    number: 2,
    suffix: "+",
    title: "Years Learning AI",
  },
];

const achievements = [
  "AJIET Inter-Collegiate Mini Project Competition Winner (2024)",
  "Represented VTU at South Zone Inter-University National Level Kabaddi Tournament (2026)",
  "VTU State Level Kabaddi Tournament Winner (2026)",
  "VTU Mangalore Division Kabaddi Tournament Runner-up (2026)",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
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
            ACHIEVEMENTS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Achievements & Statistics
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            A quick overview of my technical journey,
            projects, certifications, and achievements
            in academics and sports.
          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="glass-card p-8 text-center flex flex-col items-center"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-5">

                {item.icon}

              </div>

              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

          {achievements.map((achievement, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="glass-card p-8 h-full flex flex-col"
            >

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">

                <Trophy size={30} />

              </div>

              <p className="text-slate-700 leading-8 flex-grow">

                {achievement}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}