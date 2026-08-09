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
    icon: <FolderGit2 size={30} />,
    number: 15,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <Code2 size={30} />,
    number: 10,
    suffix: "+",
    title: "Technologies",
  },
  {
    icon: <Award size={30} />,
    number: 11,
    suffix: "+",
    title: "Certifications",
  },
  {
    icon: <Brain size={30} />,
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
          top-20
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[300px]

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
          className="
            text-center
            mb-12
            md:mb-16
          "
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
            ACHIEVEMENTS
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
            Achievements{" "}
            <span className="gradient-text">
              & Statistics
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
            A quick overview of my technical journey,
            projects, certifications, and achievements
            in academics and sports.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* STATISTICS */}
        {/* ===================================================== */}

        <div
          className="
            grid

            grid-cols-2
            lg:grid-cols-4

            gap-4
            sm:gap-6

            mb-14
            md:mb-20
          "
        >
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
              className="
                group

                relative

                bg-[#080808]

                border
                border-white/10

                rounded-2xl

                p-5
                sm:p-6
                lg:p-8

                text-center

                flex
                flex-col
                items-center

                shadow-[0_10px_35px_rgba(0,0,0,0.4)]

                hover:border-blue-500/40

                hover:shadow-[0_18px_45px_rgba(37,99,235,0.14)]

                transition-all
                duration-300

                overflow-hidden
              "
            >

              {/* Card Glow */}

              <div
                className="
                  absolute
                  -top-16
                  -right-16

                  w-32
                  h-32

                  rounded-full

                  bg-blue-600/10

                  blur-3xl

                  opacity-0

                  group-hover:opacity-100

                  transition-opacity
                  duration-500

                  pointer-events-none
                "
              />

              {/* Icon */}

              <div
                className="
                  relative

                  w-14
                  h-14

                  sm:w-16
                  sm:h-16

                  rounded-2xl

                  bg-blue-500/10

                  border
                  border-blue-500/10

                  flex
                  items-center
                  justify-center

                  text-blue-400

                  mb-4
                  sm:mb-5

                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:border-blue-500

                  group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]

                  transition-all
                  duration-300
                "
              >
                {item.icon}
              </div>

              {/* Number */}

              <h3
                className="
                  relative

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl

                  font-extrabold

                  text-white
                "
              >
                <CountUp
                  end={item.number}
                  duration={2}
                  enableScrollSpy
                />

                <span className="text-blue-500">
                  {item.suffix}
                </span>
              </h3>

              {/* Title */}

              <p
                className="
                  relative

                  mt-2
                  sm:mt-3

                  text-gray-400

                  text-xs
                  sm:text-sm
                  lg:text-base

                  font-medium

                  leading-5
                  sm:leading-6
                "
              >
                {item.title}
              </p>

            </motion.div>
          ))}
        </div>

        {/* ===================================================== */}
        {/* ACHIEVEMENTS TITLE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3
            className="
              text-2xl
              sm:text-3xl

              font-bold

              text-white
            "
          >
            Highlights
          </h3>

          <div
            className="
              mt-3

              h-1
              w-16

              rounded-full

              bg-blue-600
            "
          />
        </motion.div>

        {/* ===================================================== */}
        {/* ACHIEVEMENT CARDS */}
        {/* ===================================================== */}

        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4

            gap-5
            sm:gap-6
            lg:gap-7
          "
        >
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
              className="
                group

                relative

                bg-[#080808]

                border
                border-white/10

                rounded-2xl

                p-6
                sm:p-7
                lg:p-8

                h-full

                flex
                flex-col

                shadow-[0_10px_35px_rgba(0,0,0,0.4)]

                hover:border-blue-500/40

                hover:shadow-[0_18px_45px_rgba(37,99,235,0.14)]

                transition-all
                duration-300

                overflow-hidden
              "
            >

              {/* Card Glow */}

              <div
                className="
                  absolute

                  -top-20
                  -right-20

                  w-40
                  h-40

                  rounded-full

                  bg-blue-600/10

                  blur-3xl

                  opacity-0

                  group-hover:opacity-100

                  transition-opacity
                  duration-500

                  pointer-events-none
                "
              />

              {/* Trophy */}

              <div
                className="
                  relative

                  w-14
                  h-14

                  rounded-2xl

                  bg-blue-500/10

                  border
                  border-blue-500/10

                  flex
                  items-center
                  justify-center

                  text-blue-400

                  mb-5
                  sm:mb-6

                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:border-blue-500

                  group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]

                  transition-all
                  duration-300
                "
              >
                <Trophy size={28} />
              </div>

              {/* Achievement */}

              <p
                className="
                  relative

                  text-gray-400

                  text-sm
                  sm:text-base

                  leading-7

                  flex-grow

                  group-hover:text-gray-300

                  transition-colors
                  duration-300
                "
              >
                {achievement}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}