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
            CERTIFICATIONS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Professional Certifications
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            Industry-recognized certifications that strengthen my knowledge
            in Artificial Intelligence, Cloud Computing, Web Development,
            Databases, and Software Engineering.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">

                <Award size={30} />

              </div>

              {/* Title */}

              <h3 className="text-xl font-bold text-slate-900 leading-8">

                {cert.title}

              </h3>

              {/* Issuer */}

              <p className="mt-3 text-blue-600 font-semibold">

                {cert.issuer}

              </p>

              {/* Badge */}

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-slate-600 text-sm">

                <BadgeCheck size={16} className="text-green-500" />

                Verified Certificate

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}