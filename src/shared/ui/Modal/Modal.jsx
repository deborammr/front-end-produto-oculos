import { useEffect, useRef } from 'react'
import styles from './Modal.module.css'

export function Modal({ open, onClose, title, children }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label={title}>
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
