"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
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
      icon: <FaPython size={34} />,
    },
    {
      title: "Machine Learning",
      desc: "Scikit-learn, TensorFlow, model training, and data preprocessing.",
      icon: <FaPython size={34} />,
    },
    {
      title: "Next.js",
      desc: "Building fast, scalable, SEO-friendly full-stack applications.",
      icon: <SiNextdotjs size={34} />,
    },
    {
      title: "React",
      desc: "Interactive and responsive user interfaces with reusable components.",
      icon: <FaReact size={34} />,
    },
    {
      title: "Flask",
      desc: "REST APIs and AI backend services with Python.",
      icon: <SiFlask size={34} />,
    },
    {
      title: "Node.js",
      desc: "Server-side development and REST API creation.",
      icon: <FaNodeJs size={34} />,
    },
    {
      title: "Data Analysis",
      desc: "Pandas, NumPy, visualization, and preprocessing.",
      icon: <FaPython size={34} />,
    },
    {
      title: "Git & GitHub",
      desc: "Version control, collaboration, and deployment workflows.",
      icon: <FaGitAlt size={34} />,
    },
    {
      title: "Automation",
      desc: "Building scripts, bots, and workflow automation solutions.",
      icon: <FaNodeJs size={34} />,
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
            TECH STACK
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            My Skills
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            A collection of technologies and tools I use to build modern web
            applications, AI solutions, and scalable software products.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {skill.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {skill.title}
              </h3>

              {/* Description */}

              <p className="text-slate-600 leading-7">
                {skill.desc}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}