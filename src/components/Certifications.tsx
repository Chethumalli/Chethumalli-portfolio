"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "1-Month Artificial Intelligence Internship",
    issuer: "Codec Technologies India",
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "AWS Training & Certification",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Make Agentic AI Work For You",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "4-Week Virtual Internship in Web Development",
    issuer: "CodSoft",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
  },
  {
    title: "Cloud Computing using Microsoft Azure",
    issuer: "Infosys Springboard",
  },
  {
    title: "Basics of Python",
    issuer: "Infosys Springboard",
  },
  {
    title: "Database and SQL",
    issuer: "Infosys Springboard",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            CERTIFICATIONS
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
            Professional{" "}
            <span className="gradient-text">
              Certifications
            </span>
          </h2>

          <p
            className="
              mt-5

              text-gray-400

              text-sm
              sm:text-base

              max-w-2xl
              mx-auto

              leading-7
              sm:leading-8
            "
          >
            Industry-recognized certifications that strengthen my knowledge
            in Artificial Intelligence, Cloud Computing, Web Development,
            Databases, and Software Engineering.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* CERTIFICATION GRID */}
        {/* ===================================================== */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
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

                rounded-3xl

                border
                border-white/10

                p-6
                sm:p-7
                lg:p-8

                shadow-[0_10px_35px_rgba(0,0,0,0.4)]

                hover:border-blue-500/40

                hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]

                transition-all
                duration-300

                overflow-hidden
              "
            >

              {/* ================================================= */}
              {/* CARD GLOW */}
              {/* ================================================= */}

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
                <Award
                  size={28}
                  className="sm:w-[30px] sm:h-[30px]"
                />
              </div>

              {/* ================================================= */}
              {/* TITLE */}
              {/* ================================================= */}

              <h3
                className="
                  relative

                  text-lg
                  sm:text-xl

                  font-bold

                  text-white

                  leading-7
                  sm:leading-8

                  group-hover:text-blue-400

                  transition-colors
                  duration-300
                "
              >
                {cert.title}
              </h3>

              {/* ================================================= */}
              {/* ISSUER */}
              {/* ================================================= */}

              <p
                className="
                  relative

                  mt-3

                  text-blue-400

                  text-sm
                  sm:text-base

                  font-semibold
                "
              >
                {cert.issuer}
              </p>

              {/* ================================================= */}
              {/* DIVIDER */}
              {/* ================================================= */}

              <div
                className="
                  mt-5
                  sm:mt-6

                  h-px

                  bg-white/10
                "
              />

              {/* ================================================= */}
              {/* VERIFIED BADGE */}
              {/* ================================================= */}

              <div
                className="
                  relative

                  mt-5

                  inline-flex

                  items-center
                  gap-2

                  px-3
                  sm:px-4

                  py-2

                  rounded-full

                  bg-white/5

                  border
                  border-white/10

                  text-gray-400

                  text-xs
                  sm:text-sm
                "
              >
                <BadgeCheck
                  size={16}
                  className="text-blue-400"
                />

                Verified Certificate
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}