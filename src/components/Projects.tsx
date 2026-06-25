"use client"

type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  website?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI Stock Analyst",
      description:
        "Machine learning model that predicts stock market trends using historical market data and visualization.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github:
        "https://github.com/Chethumalli/Stock-price-predictor-AI.git",
    },

    {
      title: "Face Recognition Attendance System",
      description:
        "AI-powered attendance management system using OpenCV and facial recognition with real-time detection.",
      tech: ["Python", "OpenCV", "Face Recognition", "NumPy"],
      github:
        "https://github.com/Chethumalli/face-recognition-attendance-system.git",
    },

    {
      title: "Bulk Mail Send API",
      description:
        "REST API for sending personalized bulk emails using CSV uploads, Nodemailer, and SMTP integration.",
      tech: ["Next.js", "TypeScript", "Node.js", "Nodemailer"],
      github:
        "https://github.com/Chethumalli/Bulk-mail-send-api",
    },

    {
      title: "Multilingual Speech Translator",
      description:
        "Speech-to-text translator that converts spoken language into English using speech recognition and translation APIs.",
      tech: ["Python", "Flask", "SpeechRecognition", "Deep Translator"],
      github:
        "https://github.com/Chethumalli/Language-converter-AI.git",
    },

    {
      title: "Restaurant Website",
      description:
        "Responsive restaurant website with menu, pricing, customer reviews, and modern UI/UX design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Chethumalli/Restaurant-site.git",
    },

    {
      title: "Auction Platform",
      description:
        "Online auction platform where users can list products, place bids, and manage auctions securely.",
      tech: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/Chethumalli/Auction.git",
    },

    {
      title: "Student Grade Management System",
      description:
        "Python CLI application for managing student records, grades, reports, and academic performance.",
      tech: ["Python", "File Handling", "CLI"],
      github:
        "https://github.com/Chethumalli/Student-Grade-Management-System-Python-CLI-Project-.git",
    },

    {
      title: "Artifex AI Club Website",
      description:
        "Official website for the AI & Machine Learning student association featuring events, projects, and team members.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      website:
        "https://artifex-ajiet.vercel.app/",
    },

    {
      title: "GenAI Workshop",
      description:
        "Collection of Generative AI implementations including RAG, Agents, Prompt Engineering, and LLM applications.",
      tech: ["Python", "LangChain", "LLMs", "RAG"],
      github:
        "https://github.com/Chethumalli/Workshop-genAI.git",
    },

    {
      title: "AI Speech-to-Text Converter",
      description:
        "Web application that converts uploaded audio and video files into accurate text transcripts.",
      tech: ["Python", "Streamlit", "Whisper", "Speech Recognition"],
      github:
        "https://github.com/Chethumalli/AI-Speech-to-Text-Converter.git",
    },

    {
      title: "Developer Portfolio",
      description:
        "Modern personal portfolio built with Next.js featuring animations, GitHub activity, responsive design, and contact integration.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github:
        "https://github.com/Chethumalli/Chethumalli-portfolio",
    },

    {
      title: "Client.X Platform",
      description:
        "Professional business website for Client.X showcasing services, automation workflows, and digital solutions.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      website: "https://www.clientx.tech/",
    },

    {
      title: "Master Cut Professional Saloon",
      description:
        "Premium salon website featuring modern UI, responsive design, service showcase, gallery, and appointment information.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      website:
        "https://mastercutsaloon.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 bg-black text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-purple-500 px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              )}

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
