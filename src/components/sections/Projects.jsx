import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">🎟️ Event Booking System</h3>
              <p className="text-gray-400 mb-4">
                The Event Booking System is a user-friendly platform designed to streamline the event booking process for both users and administrators. Users can effortlessly browse, book, and manage their tickets, while administrators have the tools to efficiently manage events and ticket availability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Express.js", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/varshavikraman/Event-Booking-System"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">📚 Library Management System</h3>
              <p className="text-gray-400 mb-4">
                The Library Management System provides a seamless way for admins to manage books, users, and lending operations, while users can browse, borrow, and return books efficiently. Designed with a responsive UI and modern workflows, this system simplifies library operations and enhances the user experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Express.js", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/varshavikraman/Library-Management-System"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects