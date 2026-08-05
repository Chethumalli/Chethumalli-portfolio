"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
            CONTACT
          </span>

          <h2 className="text-5xl font-extrabold text-slate-900">
            Let's Work Together
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-7">
            Have a project, internship opportunity, or collaboration in mind?
            I'd love to hear from you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8">

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                Get in Touch
              </h3>

              <p className="text-slate-600 leading-8">
                I'm always interested in discussing new ideas,
                internships, freelance work, AI projects,
                and full-stack development opportunities.
              </p>

            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span className="text-slate-700">
                  chethumalli13@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600 w-5 h-5" />
                <span className="text-slate-700">
                  Mangalore, Karnataka, India
                </span>
              </div>

            </div>

            <div className="flex gap-4">

              <a
                href="https://github.com/Chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/chethumalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:chethumalli13@gmail.com"
                className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={sendEmail}
            className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}