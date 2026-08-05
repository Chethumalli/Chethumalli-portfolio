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

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

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

  };

  return (

    <section
      id="contact"
      className="section-padding"
    >

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.6 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide mb-5">

            CONTACT

          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">

            Let's Work Together

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">

            Have an internship opportunity,
            freelance project,
            or just want to say hello?

            I'd love to hear from you.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="glass-card p-8"
          >

            <h3 className="text-2xl font-bold text-slate-900 mb-8">

              Contact Information

            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                  <Mail size={24}/>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">

                    Email

                  </p>

                  <p className="font-semibold">

                    chethumalli13@gmail.com

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                  <Phone size={24}/>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">

                    Phone

                  </p>

                  <p className="font-semibold">

                    +91 XXXXX XXXXX

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">

                  <MapPin size={24}/>

                </div>

                <div>

                  <p className="text-slate-500 text-sm">

                    Location

                  </p>

                  <p className="font-semibold">

                    Mangalore, Karnataka

                  </p>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >

                <FaGithub/>

              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >

                <FaLinkedin/>

              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >

                <FaEnvelope/>

              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="glass-card p-8 space-y-6"
          >
                        {/* Name */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

            {/* Email */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

            {/* Message */}

            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >

              Send Message

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}