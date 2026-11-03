import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight, ArrowUpRight, GraduationCap } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Reveal from './components/Reveal'
import Tag from './components/Tag'
import { profile, projects, skills, experience, education } from './data'

const Title = ({ id, kicker, children }) => (
  <div className="mb-10">
    <p className="text-lg md:text-xl font-semibold text-accent mb-2">{kicker}</p>
    <h2 id={id} className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
  </div>
)
const Section = ({ id, children, alt }) => (
  <section id={id} aria-labelledby={`${id}-h`} className={`py-20 ${alt ? 'bg-soft/50' : ''}`}>
    <div className="max-w-6xl mx-auto px-4">{children}</div>
  </section>
)

export function Hero() {
  const btn = 'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition hover:-translate-y-0.5'
  return (
    <section id="top" className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-muted mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Varsha <span className="text-accent">Vikraman</span></h1>
          <p className="mt-3 text-lg font-medium">Full-Stack Developer · Blockchain Developer</p>
          <p className="mt-5 text-muted max-w-lg">I build secure MERN applications, RAG-based AI assistants and Solidity DApps, from the first commit to Kubernetes deployment. Currently at ZenturioTech, Thiruvananthapuram.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-bg dark:text-black`}>View My Work <ArrowRight size={16} /></a>
            <a href={profile.resume} download className={`${btn} border border-line bg-card`}>Download Resume <Download size={16} /></a>
            <a href="#contact" className={`${btn} border border-line`}>Let's Talk</a>
          </div>
          <div className="mt-8 flex gap-3">
            {[[Mail, `mailto:${profile.email}`, 'Email'], [Linkedin, profile.linkedin, 'LinkedIn'], [Github, profile.github, 'GitHub']].map(([Icon, href, label]) => (
              <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="p-3 rounded-full border border-line hover:bg-soft transition"><Icon size={18} /></a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} aria-hidden="true"
          className="rounded-2xl border border-line bg-card shadow-xl overflow-hidden font-mono text-sm">
          <div className="flex gap-2 px-4 py-3 border-b border-line">{['#ff5f57', '#febc2e', '#28c840'].map((c) => <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />)}<span className="ml-3 text-muted text-xs">varsha.config.js</span></div>
          <pre className="p-5 leading-7 overflow-x-auto"><code>{`const varsha = {
  role: "Full-Stack Developer",
  stack: ["MongoDB", "Express",
          "React", "Node.js"],
  web3: ["Solidity", "Hardhat", "viem"],
  ai: ["RAG", "LangChain"],
  ops: ["Docker", "Kubernetes"],
  openToWork: true,
};`}</code></pre>
        </motion.div>
      </div>
    </section>
  )
}

export function About() {
  const traits = ['Production MERN', 'AI & RAG', 'Web3 / Solidity', 'Docker & K8s', 'Secure by design', 'Always learning']
  return (
    <>
      <Section id="about">
        <Reveal>
          <Title id="about-h" kicker="About me"></Title>
          <div className="grid md:grid-cols-2 gap-10">
            <p className="text-muted leading-7">Full-stack developer with an Electronics and Communication Engineering background (GEC Kozhikode) and a PG Diploma in Blockchain Technology (Digital University Kerala). I build production MERN applications with JWT and RBAC, integrate LLMs and RAG pipelines, and deploy AI workloads on Kubernetes. I also write Solidity smart contracts for decentralized apps.</p>
            <ul className="flex flex-wrap gap-3 content-start">{traits.map((t) => <li key={t} className="px-4 py-2 rounded-full border border-line bg-card text-sm font-medium">{t}</li>)}</ul>
          </div>
        </Reveal>
      </Section>
      <Section id="education" alt>
        <Reveal>
          <Title id="education-h" kicker="Education">Academic background</Title>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e) => (
              <div key={e.degree} className="rounded-2xl border border-line bg-card p-6 flex gap-4">
                <GraduationCap className="text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">{e.degree}</h3>
                  <p className="font-medium mt-1">{e.school}</p>
                  <p className="text-sm text-muted mt-1">{e.place} · {e.year}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  )
}

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <Title id="skills-h" kicker="Skills & technologies">What I work with</Title>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-bold mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

export function Projects() {
  const cats = ['All', 'Blockchain', 'AI', 'Full-stack', 'Mobile']
  const [cat, setCat] = useState('All')
  const shown = projects.filter((p) => cat === 'All' ? p.featured : p.cats.includes(cat))
  return (
    <Section id="projects" alt>
      <Reveal>
        <Title id="projects-h" kicker="Selected work">Projects</Title>
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${cat === c ? 'bg-accent text-bg dark:text-black border-accent' : 'border-line bg-card hover:bg-soft'}`}>{c}</button>
          ))}
        </div>
      </Reveal>
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article key={p.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
              className="rounded-2xl border border-line bg-card p-6 flex flex-col hover:border-accent hover:shadow-lg transition-colors">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{p.title}</h3>
                {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} className="text-muted hover:text-accent"><ArrowUpRight /></a>}
              </div>
              {p.note && <p className="text-xs text-muted mt-1">{p.note}</p>}
              <p className="text-muted mt-3 leading-7 flex-1">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 mt-5">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">Live demo <ArrowUpRight size={14} /></a>}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      {cat === 'All' && (
        <Reveal className="mt-10">
          <h3 className="font-bold mb-4">More projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.filter((p) => !p.featured).map((p) => (
              <a key={p.title} href={p.repo} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-card p-4 hover:border-accent transition-colors block">
                <span className="font-medium">{p.title}</span> <ArrowUpRight size={14} className="inline text-muted" />
                <span className="block text-sm text-muted mt-1">{p.blurb}</span>
              </a>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <Title id="experience-h" kicker="Experience">Where I've worked</Title>
        <div className="rounded-2xl border border-line bg-card p-6 md:p-8 border-l-4 border-l-accent">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold">{experience.role}</h3>
              <p className="text-accent font-medium">{experience.company} · {experience.place}</p>
            </div>
            <p className="text-sm text-muted">{experience.period}</p>
          </div>
          <ul className="mt-5 space-y-3 text-muted leading-7 list-disc pl-5">{experience.points.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </Reveal>
    </Section>
  )
}

export function Contact() {
  const [status, setStatus] = useState('idle')
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3 focus:outline-none focus:border-accent'
  const submit = async (e) => {
    e.preventDefault()
    const env = import.meta.env
    if (!env.VITE_SERVICE_ID) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.email)}`
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(env.VITE_SERVICE_ID, env.VITE_TEMPLATE_ID, { from_name: f.name, from_email: f.email, message: f.message }, env.VITE_PUBLIC_KEY)
      setStatus('sent'); setF({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }
  return (
    <section id="contact" aria-labelledby="contact-h" className="py-20 bg-soft">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <Reveal>
          <h2 id="contact-h" className="text-3xl md:text-4xl font-bold tracking-tight">Let's build something <span className="text-accent">meaningful together.</span></h2>
          <p className="mt-4 text-muted max-w-md">Open to full-stack and blockchain developer roles. The fastest way to reach me is email.</p>
          <ul className="mt-8 space-y-4">
            <li><a href={`mailto:${profile.email}`} className="flex items-center gap-3 font-medium hover:text-accent"><Mail size={18} className="text-accent" />{profile.email}</a></li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-accent" />{profile.location}</li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent"><Linkedin size={18} className="text-accent" />linkedin.com/in/varshavikraman</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent"><Github size={18} className="text-accent" />github.com/varshavikraman</a></li>
          </ul>
          <a href={profile.resume} download className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fg text-bg text-sm font-medium">Download Resume <Download size={16} /></a>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-2xl border border-line bg-card p-6 space-y-4">
            <div><label htmlFor="c-name" className="text-sm font-medium">Name</label><input id="c-name" required autoComplete="name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
            <div><label htmlFor="c-email" className="text-sm font-medium">Email</label><input id="c-email" type="email" required autoComplete="email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
            <div><label htmlFor="c-msg" className="text-sm font-medium">Message</label><textarea id="c-msg" required rows={5} className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></div>
            <button type="submit" disabled={status === 'sending'} className="w-full rounded-full bg-accent text-bg dark:text-black py-3 font-medium hover:opacity-90 disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            <p role="status" aria-live="polite" className="text-sm min-h-5">
              {status === 'sent' && <span className="text-accent">Thanks, your message was sent. I'll reply soon.</span>}
              {status === 'error' && <span className="text-red-600 dark:text-red-400">Something went wrong. Please email me directly instead.</span>}
            </p>
          </form>
        </Reveal>
      </div>
      <p className="mt-16 text-center text-sm text-muted">© 2026 Varsha Vikraman</p>
    </section>
  )
}
