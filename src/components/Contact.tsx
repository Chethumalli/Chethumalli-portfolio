"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (
        form.elements.namedItem("name") as HTMLInputElement
      ).value,

      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value,

      message: (
        form.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message Sent Successfully!");
        form.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-black text-white"
    >
      <div className="container-custom">

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="
              inline-block
              px-4 py-2
              rounded-full
              bg-blue-500/10
              border border-blue-500/20
              text-blue-400
              text-sm
              font-semibold
              tracking-wide
              mb-5
            "
          >
            CONTACT
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
            Let's Work Together
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
            Have an internship opportunity,
            freelance project,
            or just want to say hello?

            <br />

            I'd love to hear from you.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* CONTACT GRID */}
        {/* ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ================================================= */}
          {/* LEFT — CONTACT INFORMATION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              sm:p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* EMAIL */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-14 h-14
                    flex-shrink-0
                    rounded-2xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center justify-center
                    text-blue-400
                  "
                >
                  <Mail size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-slate-500 text-sm">
                    Email
                  </p>

                  <p className="font-semibold text-white break-all">
                    chethumalli13@gmail.com
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-14 h-14
                    flex-shrink-0
                    rounded-2xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center justify-center
                    text-blue-400
                  "
                >
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Phone
                  </p>

                  <p className="font-semibold text-white">
                    +91 9483606519
                  </p>
                </div>
              </div>

              {/* LOCATION */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-14 h-14
                    flex-shrink-0
                    rounded-2xl
                    bg-blue-500/10
                    border border-blue-500/20
                    flex items-center justify-center
                    text-blue-400
                  "
                >
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Location
                  </p>

                  <p className="font-semibold text-white">
                    Mangalore, Karnataka
                  </p>
                </div>
              </div>

            </div>

            {/* ================================================= */}
            {/* SOCIAL ICONS */}
            {/* ================================================= */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-12 h-12
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  flex items-center justify-center
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-12 h-12
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  flex items-center justify-center
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                aria-label="Email"
                className="
                  w-12 h-12
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  flex items-center justify-center
                  text-slate-400
                  hover:bg-blue-600
                  hover:text-white
                  hover:border-blue-600
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope size={19} />
              </a>

            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT — CONTACT FORM */}
          {/* ================================================= */}

          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              sm:p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              space-y-6
            "
          >

            {/* NAME */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-300
                  mb-2
                "
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/40
                  text-white
                  placeholder:text-slate-600
                  px-5 py-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                  transition
                "
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-300
                  mb-2
                "
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/40
                  text-white
                  placeholder:text-slate-600
                  px-5 py-4
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                  transition
                "
              />
            </div>

            {/* MESSAGE */}

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-slate-300
                  mb-2
                "
              >
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/40
                  text-white
                  placeholder:text-slate-600
                  px-5 py-4
                  outline-none
                  resize-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-500/10
                  transition
                "
              />
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="
                w-full
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-blue-500
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)]
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}