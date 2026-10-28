import { useEffect, useId, useRef } from 'react'
import styles from './Modal.module.css'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({ open, onClose, title, children }) {
  const titleId = useId()
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null

    const appContent = document.getElementById('app-content')
    const previousOverflow = document.body.style.overflow
    const previousAriaHidden = appContent?.getAttribute('aria-hidden')
    const hadInert = appContent?.hasAttribute('inert')

    if (appContent) {
      appContent.setAttribute('aria-hidden', 'true')
      appContent.setAttribute('inert', '')
    }

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()

      if (event.key !== 'Tab') return
      const node = dialogRef.current
      if (!node) return

      const focusable = [...node.querySelectorAll(FOCUSABLE_SELECTOR)]
      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow

      if (appContent) {
        if (previousAriaHidden === null) appContent.removeAttribute('aria-hidden')
        else appContent.setAttribute('aria-hidden', previousAriaHidden)

        if (!hadInert) appContent.removeAttribute('inert')
      }

      previousFocusRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={dialogRef} className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <h2 id={titleId} className={styles.srOnly}>
          {title}
        </h2>
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          ×
        </button>
        {children}
      </div>
    </div>
  )
}
