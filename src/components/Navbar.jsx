import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [['about', 'About'], ['education', 'Education'], ['skills', 'Skills'], ['projects', 'Work'], ['experience', 'Experience']]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const link = 'text-sm font-medium text-muted hover:text-fg transition-colors'
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-bg/85 backdrop-blur border-b border-line">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-xl tracking-tight">V<span className="text-accent">V</span><span className="text-accent">.</span></a>
        <div className="hidden md:flex items-center gap-7">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className={link}>{label}</a>)}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="p-2 rounded-full border border-line hover:bg-soft">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="hidden md:inline-block bg-fg text-bg text-sm font-medium px-4 py-2 rounded-full hover:opacity-85 transition">Let's Talk</a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} className="md:hidden p-2 rounded-full border border-line"><Menu size={18} /></button>
        </div>
      </nav>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-6">
          <button autoFocus onClick={() => setOpen(false)} aria-label="Close menu" className="absolute top-4 right-4 p-2 rounded-full border border-line"><X size={20} /></button>
          {[...links, ['contact', 'Contact']].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-2xl font-semibold">{label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
