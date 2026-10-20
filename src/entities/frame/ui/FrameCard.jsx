import { Button, Glasses, formatPrice } from '../../../shared'
import styles from './FrameCard.module.css'

export function FrameCard({ frame, selected = false, onSelect, onAdd }) {
  const content = (
    <>
      <div className={styles.image}>
        <Glasses frameColor={frame.color} label={`Armação ${frame.name}`} />
      </div>
      <h3 className={styles.name}>{frame.name}</h3>
      <p className={styles.finish}>
        {frame.finish}
        {frame.surcharge > 0 && ` · + ${formatPrice(frame.surcharge)}`}
      </p>
    </>
  )

  if (!onSelect) {
    return (
      <article className={styles.card}>
        {content}
        {onAdd && (
          <div className={styles.add}>
            <Button variant="outline" size="sm" onClick={() => onAdd(frame.id)}>
              Adicionar ao carrinho
            </Button>
          </div>
        )}
      </article>
    )
  }

  return (
    <button
      type="button"
      className={`${styles.card} ${styles.selectable} ${selected ? styles.selected : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(frame.id)}
    >
      {content}
    </button>
  )
}
