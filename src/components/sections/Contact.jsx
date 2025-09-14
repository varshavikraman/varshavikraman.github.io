import React, { useState } from 'react'
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
// import your icons here
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                value={name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                placeholder="Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="from_email"
                required
                value={email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                placeholder="Your Message..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="text-green-500 font-bold mb-4 text-md">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="www.linkedin.com/in/varshavikraman" target="_blank" className="hover:text-green-500">
                <Linkedin />
              </a>
              <a href="https://github.com/varshavikraman" target="_blank" className="hover:text-green-500">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
