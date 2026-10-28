import styles from './FaqItem.module.css'

export function FaqItem({ item, open, onToggle }) {
  const triggerId = `faq-trigger-${item.id}`
  const panelId = `faq-panel-${item.id}`
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3 className={styles.heading}>
        <button
          type="button"
          id={triggerId}
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className={styles.chevron} aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div id={panelId} className={styles.panel} role="region" aria-labelledby={triggerId} hidden={!open}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}
