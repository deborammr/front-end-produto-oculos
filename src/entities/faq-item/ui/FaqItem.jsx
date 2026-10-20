import styles from './FaqItem.module.css'

export function FaqItem({ item, open, onToggle }) {
  const panelId = `faq-panel-${item.id}`
  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3 className={styles.heading}>
        <button
          type="button"
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
      <div id={panelId} className={styles.panel} role="region" hidden={!open}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}
