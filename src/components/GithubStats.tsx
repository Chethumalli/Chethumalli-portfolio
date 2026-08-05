"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
  }
);

export default function GithubStats() {
  return (
    <section
      id="github"
      className="section-padding"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">
            GITHUB
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">

            GitHub Contributions

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">

            My open-source contributions,
            coding consistency,
            and continuous learning journey
            through GitHub.

          </p>

        </motion.div>

        {/* Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="glass-card p-6 sm:p-8 lg:p-10"
        >

          {/* Top */}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                <Github size={30} />

              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">

                  @Chethumalli

                </h3>

                <p className="text-slate-500">

                  GitHub Activity Calendar

                </p>

              </div>

            </div>

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3"
            >
              Visit GitHub
            </a>

          </div>

          {/* Calendar */}

          <div className="overflow-x-auto">

            <div className="min-w-[760px] flex justify-center">

              <GitHubCalendar
                username="Chethumalli"
                blockSize={15}
                blockMargin={5}
                fontSize={14}
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}