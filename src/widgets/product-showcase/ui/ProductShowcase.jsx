import { Container, Reveal, SectionTitle } from '../../../shared'
import { FrameCard, frames } from '../../../entities/frame'
import { usePurchase } from '../../../features/purchase-modal'
import styles from './ProductShowcase.module.css'

export function ProductShowcase() {
  const { openPurchase } = usePurchase()

  return (
    <section id="modelos" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Modelos"
          title="Escolha a sua armação."
          subtitle="Três acabamentos, a mesma discrição. Monte seu pedido com quantos quiser."
        />
        <div className={styles.grid}>
          {frames.map((frame, index) => (
            <Reveal key={frame.id} delay={index * 100}>
              <FrameCard frame={frame} onAdd={(frameId) => openPurchase({ frameId })} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
