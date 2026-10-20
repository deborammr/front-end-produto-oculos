import { useId } from 'react'
import styles from './Glasses.module.css'

export function Glasses({ dark = false, frameColor = '#cbd5e1', label = 'Óculos Anti-Social Spec' }) {
  const id = useId()
  const lens = `${id}-lens`
  const frame = `${id}-frame`

  return (
    <svg
      className={`${styles.glasses} ${dark ? styles.dark : ''}`}
      viewBox="0 0 400 170"
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={lens} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#a855f7" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={frame} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={frameColor} />
          <stop offset="1" stopColor={frameColor} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <path d="M26 62 L4 52 M374 62 L396 52" stroke={`url(#${frame})`} strokeWidth="7" strokeLinecap="round" />

      <rect x="26" y="34" width="150" height="104" rx="44" fill={`url(#${lens})`} />
      <rect x="224" y="34" width="150" height="104" rx="44" fill={`url(#${lens})`} />
      <rect className={styles.shade} x="26" y="34" width="150" height="104" rx="44" />
      <rect className={styles.shade} x="224" y="34" width="150" height="104" rx="44" />

      <path className={styles.shine} d="M56 62 Q70 50 96 48" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path className={styles.shine} d="M254 62 Q268 50 294 48" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" />

      <rect x="26" y="34" width="150" height="104" rx="44" fill="none" stroke={`url(#${frame})`} strokeWidth="7" />
      <rect x="224" y="34" width="150" height="104" rx="44" fill="none" stroke={`url(#${frame})`} strokeWidth="7" />
      <path d="M176 70 Q200 52 224 70" fill="none" stroke={`url(#${frame})`} strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}
