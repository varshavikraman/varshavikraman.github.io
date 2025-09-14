import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

const About = () => {

  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    "CSS",
  ];

  const backendSkills = [
    "Node.js", 
    "Express.js", 
    "MongoDB", 
  ];

  const tools  = [
    "Docker", 
    "Git", 
    "GitHub",
    "Postman", 
    "Figma", 
    "VS Code",
  ];

  return (
     <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-center mb-6">
              Passionate about building scalable web apps and learning new technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">💻 Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🔧 Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">⚙️ Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl text-center font-bold mb-4"> 🏫 Education </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <span className="text-green-500 font-bold py-1 px-3 text-md">B.Tech in Electronics and Communication Engineering </span> 
                    - Government Engineering College, Kozhikode (2016-2020)
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <span className="text-green-500 font-bold py-1 px-3 text-md">PG Diploma in Blockchain Technology </span> 
                    - Digital University Kerala (Present)
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About