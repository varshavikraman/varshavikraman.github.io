import { chainTech } from '../data'

export default function Tag({ children }) {
  const chain = chainTech.includes(children)
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium border ${chain
      ? 'bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-400/30'
      : 'bg-soft text-accent border-line'}`}>
      {children}
    </span>
  )
}
