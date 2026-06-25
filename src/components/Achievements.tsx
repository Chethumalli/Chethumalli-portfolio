"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"
import {
  Trophy,
  Award,
  FolderGit2,
  Code2,
  Brain,
  BadgeCheck,
} from "lucide-react"

const stats = [
  {
    icon: <FolderGit2 size={34} />,
    number: 15,
    suffix: "+",
    title: "Projects",
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
    title: "Years Learning AI",
  },
]

const achievements = [
  "AJIET Inter-colligiate Mini-Project Winner 2024",
  "VTU State Level Kabaddi Tournament Winner 2026",
  "VTU Manglore Division Level Kabaddi Tournament Runner 2026",
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 bg-black text-white px-6"
    >
      <p className="text-center tracking-widest text-purple-500 mb-2">
        ACHIEVEMENTS
      </p>

      <h2 className="text-4xl font-bold text-center mb-16">
        Achievements & Statistics
      </h2>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition"
          >

            <div className="text-purple-500 flex justify-center mb-5">
              {item.icon}
            </div>

            <h3 className="text-5xl font-bold text-white">

              <CountUp
                end={item.number}
                duration={2}
                enableScrollSpy
              />

              {item.suffix}

            </h3>

            <p className="text-gray-400 mt-2">
              {item.title}
            </p>

          </motion.div>

        ))}

      </div>

      {/* Achievement Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {achievements.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
            }}
            className="bg-zinc-900 rounded-xl border border-gray-800 p-6 hover:border-purple-500 transition"
          >

            <Trophy
              className="text-purple-500 mb-4"
              size={30}
            />

            <p className="text-gray-300 leading-relaxed">
              {item}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  )
}