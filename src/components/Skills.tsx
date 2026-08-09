"use client";

import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaRobot,
  FaChartBar,
  FaBolt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      title: "Python",
      desc: "Machine Learning, automation, scripting, and backend development.",
      icon: <FaPython size={30} />,
    },
    {
      title: "Machine Learning",
      desc: "Scikit-learn, TensorFlow, model training, and data preprocessing.",
      icon: <FaRobot size={30} />,
    },
    {
      title: "Next.js",
      desc: "Building fast, scalable, SEO-friendly full-stack applications.",
      icon: <SiNextdotjs size={30} />,
    },
    {
      title: "React",
      desc: "Interactive and responsive user interfaces with reusable components.",
      icon: <FaReact size={30} />,
    },
    {
      title: "Flask",
      desc: "REST APIs and AI backend services with Python.",
      icon: <SiFlask size={30} />,
    },
    {
      title: "Node.js",
      desc: "Server-side development and REST API creation.",
      icon: <FaNodeJs size={30} />,
    },
    {
      title: "Data Analysis",
      desc: "Pandas, NumPy, visualization, and preprocessing.",
      icon: <FaChartBar size={30} />,
    },
    {
      title: "Git & GitHub",
      desc: "Version control, collaboration, and deployment workflows.",
      icon: <FaGitAlt size={30} />,
    },
    {
      title: "Automation",
      desc: "Building scripts, bots, and workflow automation solutions.",
      icon: <FaBolt size={30} />,
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="skills"
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
          h-[250px]
          bg-blue-600/10
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
            TECH STACK
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              text-white
            "
          >
            My{" "}
            <span className="gradient-text">
              Skills
            </span>
          </h2>

          <p
            className="
              mt-5
              text-gray-400
              max-w-2xl
              mx-auto
              leading-7
              text-sm
              sm:text-base
            "
          >
            A collection of technologies and tools I use to build modern web
            applications, AI solutions, and scalable software products.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* SKILLS GRID */}
        {/* ===================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            gap-5
            sm:gap-6
            md:gap-7
            lg:gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="
                group
                relative

                bg-[#080808]

                rounded-2xl

                border
                border-white/10

                p-6
                sm:p-7
                lg:p-8

                shadow-[0_10px_35px_rgba(0,0,0,0.35)]

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

              {/* ================================================= */}
              {/* ICON */}
              {/* ================================================= */}

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

                  text-blue-400

                  flex
                  items-center
                  justify-center

                  mb-5
                  sm:mb-6

                  group-hover:bg-blue-600
                  group-hover:text-white
                  group-hover:border-blue-500

                  group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)]

                  transition-all
                  duration-300
                "
              >
                {skill.icon}
              </div>

              {/* ================================================= */}
              {/* TITLE */}
              {/* ================================================= */}

              <h3
                className="
                  relative
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-white
                  mb-3
                  group-hover:text-blue-400
                  transition-colors
                  duration-300
                "
              >
                {skill.title}
              </h3>

              {/* ================================================= */}
              {/* DESCRIPTION */}
              {/* ================================================= */}

              <p
                className="
                  relative
                  text-gray-400
                  leading-7
                  text-sm
                  sm:text-base
                "
              >
                {skill.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}