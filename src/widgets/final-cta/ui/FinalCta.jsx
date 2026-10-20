import { Button, Container } from '../../../shared'
import { usePurchase } from '../../../features/purchase-modal'
import styles from './FinalCta.module.css'

export function FinalCta() {
  const { openPurchase } = usePurchase()

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Estilo inconfundível por fora. Paz e discrição por dentro.</h2>
        <p className={styles.subtitle}>Entre na pré-venda e ative o seu Modo Invisível.</p>
        <Button size="lg" onClick={() => openPurchase()}>
          Garantir Meu Modo Invisível
        </Button>
      </Container>
    </section>
  )
}
