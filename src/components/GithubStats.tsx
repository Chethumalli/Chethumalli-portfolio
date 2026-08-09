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
      className="section-padding bg-black text-white"
    >
      <div className="container-custom">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

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
              text-sm
              font-semibold
              tracking-wide
              mb-5
            "
          >
            GITHUB
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
            GitHub Contributions
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-slate-400
              leading-8
            "
          >
            My open-source contributions,
            coding consistency,
            and continuous learning journey
            through GitHub.
          </p>

        </motion.div>


        {/* ===================================================== */}
        {/* GITHUB CARD */}
        {/* ===================================================== */}

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
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0a0a0a]
            p-6
            sm:p-8
            lg:p-10
            shadow-[0_0_50px_rgba(37,99,235,0.08)]
          "
        >

          {/* Blue Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -top-32
              -right-32
              h-64
              w-64
              rounded-full
              bg-blue-600/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-32
              h-64
              w-64
              rounded-full
              bg-blue-600/5
              blur-3xl
            "
          />


          {/* ================================================= */}
          {/* TOP SECTION */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-5
              mb-10
            "
          >

            {/* GitHub Profile */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-500/10
                  border
                  border-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-blue-400
                "
              >
                <Github size={30} />
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  @Chethumalli
                </h3>

                <p
                  className="
                    text-slate-500
                    mt-1
                  "
                >
                  GitHub Activity Calendar
                </p>

              </div>

            </div>


            {/* Visit GitHub */}

            <a
              href="https://github.com/Chethumalli"
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn-primary
                px-6
                py-3
                inline-flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-auto
              "
            >
              <Github size={18} />
              Visit GitHub
            </a>

          </div>


          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <div className="relative z-10 h-px bg-white/10 mb-10" />


          {/* ================================================= */}
          {/* CALENDAR */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              overflow-x-auto
              overflow-y-hidden
              rounded-2xl
              border
              border-white/5
              bg-black/40
              p-5
              sm:p-6
            "
          >

            <div
              className="
                min-w-[760px]
                flex
                justify-center
                text-white
              "
            >

              <GitHubCalendar
                username="Chethumalli"
                blockSize={15}
                blockMargin={5}
                fontSize={14}
                colorScheme="dark"
              />

            </div>

          </div>


          {/* ================================================= */}
          {/* BOTTOM TEXT */}
          {/* ================================================= */}

          <p
            className="
              relative
              z-10
              mt-6
              text-center
              text-xs
              sm:text-sm
              text-slate-600
            "
          >
            Consistently building, learning and contributing.
          </p>

        </motion.div>

      </div>
    </section>
  );
}