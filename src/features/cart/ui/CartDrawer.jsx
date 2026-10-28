import { Button, Drawer, formatPrice } from '../../../shared'
import { CartItemRow, useCart } from '../../../entities/cart-item'
import styles from './CartDrawer.module.css'

export function CartDrawer() {
  const { items, total, panel, setQuantity, removeItem, openCheckout, closePanel } = useCart()
  const empty = items.length === 0

  return (
    <Drawer id="cart-drawer" open={panel === 'cart'} onClose={closePanel} title="Seu carrinho">
      {empty ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>Seu carrinho está vazio.</p>
          <p className={styles.emptyText}>Escolha um acabamento e ative o seu Modo Invisível.</p>
          <Button href="#modelos" onClick={closePanel}>
            Ver modelos
          </Button>
        </div>
      ) : (
        <>
          <ul className={styles.list}>
            {items.map((item) => (
              <CartItemRow
                key={`${item.planId}-${item.frameId}`}
                item={item}
                onQuantityChange={setQuantity}
                onRemove={removeItem}
              />
            ))}
          </ul>
          <footer className={styles.footer}>
            <div className={styles.total} aria-live="polite">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <Button size="lg" onClick={openCheckout}>
              Finalizar pré-venda
            </Button>
            <Button variant="ghost" href="#modelos" onClick={closePanel}>
              Adicionar outro modelo
            </Button>
          </footer>
        </>
      )}
    </Drawer>
  )
}
