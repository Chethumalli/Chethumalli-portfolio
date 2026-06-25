"use client"

import emailjs from "emailjs-com"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

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
    <section id="contact" className="py-20 text-white text-center px-6">

      <h2 className="text-4xl font-bold mb-4">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10">
        Feel free to reach out for collaborations, opportunities or just to say hello.
      </p>

      {/* Social Links */}

      <div className="flex justify-center gap-8 text-3xl mb-12">

        <a
          href="https://github.com/Chethumalli"
          target="_blank"
          className="hover:text-purple-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/chethumalli"
          target="_blank"
          className="hover:text-purple-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:chethumalli13@gmail.com"
          className="hover:text-purple-500 transition"
        >
          <FaEnvelope />
        </a>

      </div>

      {/* Contact Form */}

      <form onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4">

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="p-3 bg-zinc-900 rounded-lg"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="p-3 bg-zinc-900 rounded-lg"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="p-3 bg-zinc-900 rounded-lg"
  />

  <button
    type="submit"
    className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition"
  >
    Send Message
  </button>

</form>

    </section>
  )
}