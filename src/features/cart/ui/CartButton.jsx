import { useCart } from '../../../entities/cart-item'
import styles from './CartButton.module.css'

export function CartButton() {
  const { count, panel, openCart } = useCart()

  return (
    <button
      type="button"
      className={styles.button}
      onClick={openCart}
      aria-label={`Abrir carrinho, ${count} ${count === 1 ? 'item' : 'itens'}`}
      aria-haspopup="dialog"
      aria-expanded={panel === 'cart'}
      aria-controls="cart-drawer"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 8h14l-1.2 11H6.2L5 8Z" strokeLinejoin="round" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
      {count > 0 && (
        <span className={styles.badge} aria-live="polite">
          {count}
        </span>
      )}
    </button>
  )
}
