"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  { ssr: false }
);

export default function GithubStats() {
  return (
    <section
      id="github"
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
            GITHUB
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            GitHub Contributions
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            I actively build AI, Full Stack, and Machine Learning projects.
            Here's a snapshot of my coding activity and open-source
            contributions.
          </p>

        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-10"
        >

          {/* Profile */}

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Github size={34} />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  @Chethumalli
                </h3>

                <p className="text-slate-600">
                  AI • Full Stack • Open Source
                </p>

              </div>

            </div>

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Visit Profile
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* Calendar */}

          <div className="overflow-x-auto flex justify-center">

            <GitHubCalendar
              username="Chethumalli"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
              colorScheme="light"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}