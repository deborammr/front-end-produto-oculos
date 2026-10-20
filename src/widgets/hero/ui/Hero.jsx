import { Button, Container } from '../../../shared'
import { usePurchase } from '../../../features/purchase-modal'
import { SimulateNeighbor } from '../../../features/simulate-neighbor'
import styles from './Hero.module.css'

export function Hero() {
  const { openPurchase } = usePurchase()

  return (
    <section id="topo" className={styles.hero}>
      <Container>
        <p className={styles.eyebrow}>Anti-Social Spec™</p>
        <h1 className={styles.title}>
          A tecnologia que transforma <span className={styles.accent}>‘fingir que não viu’</span> em arte.
        </h1>
        <p className={styles.subtitle}>
          O Anti-Social Spec™ escurece suas lentes automaticamente ao detectar vizinhos, ex-namorados e conhecidos
          do trabalho a até 15 metros de distância.
        </p>
        <div className={styles.actions}>
          <Button size="lg" onClick={() => openPurchase()}>
            Garantir Meu Modo Invisível
          </Button>
          <Button variant="ghost" size="lg" href="#como-funciona">
            Ver como funciona ›
          </Button>
        </div>
        <div className={styles.demo}>
          <SimulateNeighbor />
        </div>
      </Container>
    </section>
  )
}
