import { Glasses, QuantityStepper, formatPrice } from '../../../shared'
import { MAX_QUANTITY, MIN_QUANTITY, findFrame, findPlan, itemKey, lineTotal, unitPrice } from '../model/cartMath'
import styles from './CartItemRow.module.css'

export function CartItemRow({ item, onQuantityChange, onRemove }) {
  const plan = findPlan(item.planId)
  const frame = findFrame(item.frameId)
  const key = itemKey(item)

  return (
    <li className={styles.row}>
      <div className={styles.thumb}>
        <Glasses frameColor={frame.color} label={`Armação ${frame.name}`} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{plan.name}</h3>
        <p className={styles.meta}>
          {frame.name} · {formatPrice(unitPrice(item))} un.
        </p>
        <div className={styles.controls}>
          <QuantityStepper
            value={item.quantity}
            min={MIN_QUANTITY}
            max={MAX_QUANTITY}
            label={`Quantidade de ${plan.name} ${frame.name}`}
            onChange={(quantity) => onQuantityChange(key, quantity)}
          />
          <button type="button" className={styles.remove} onClick={() => onRemove(key)}>
            Remover
          </button>
        </div>
      </div>
      <strong className={styles.total}>{formatPrice(lineTotal(item))}</strong>
    </li>
  )
}
