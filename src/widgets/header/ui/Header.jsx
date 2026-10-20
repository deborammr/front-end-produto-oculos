import { Button } from '../../../shared'
import { usePurchase } from '../../../features/purchase-modal'
import { CartButton } from '../../../features/cart'
import styles from './Header.module.css'

const links = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const { openPurchase } = usePurchase()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.brand}>
          Anti-Social Spec<sup>™</sup>
        </a>
        <nav className={styles.nav} aria-label="Seções">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <CartButton />
          <Button size="sm" onClick={() => openPurchase()}>
            Comprar
          </Button>
        </div>
      </div>
    </header>
  )
}
