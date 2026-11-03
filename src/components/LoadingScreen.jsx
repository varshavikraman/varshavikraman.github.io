import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const TEXT = '<Hello World />'

export default function LoadingScreen({ onDone }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const t = setTimeout(n > TEXT.length ? onDone : () => setN(n + 1), n > TEXT.length ? 500 : 70)
    return () => clearTimeout(t)
  }, [n, onDone])

  return (
    <motion.div aria-hidden="true" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[60] bg-bg flex flex-col items-center justify-center">
      <div className="mb-4 text-3xl md:text-4xl font-mono font-bold text-fg">
        {TEXT.slice(0, n)}<span className="caret text-accent ml-1">|</span>
      </div>
      <div className="w-52 h-0.5 bg-line rounded overflow-hidden">
        <motion.div className="w-2/5 h-full bg-accent" animate={{ x: ['-100%', '250%'] }} transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
    </motion.div>
  )
}
