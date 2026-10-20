import { Container, Reveal, SectionTitle } from '../../../shared'
import { PlanCard, plans } from '../../../entities/plan'
import { usePurchase } from '../../../features/purchase-modal'
import styles from './Pricing.module.css'

export function Pricing() {
  const { openPurchase } = usePurchase()

  return (
    <section id="precos" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Preços"
          title="Escolha seu nível de invisibilidade."
          subtitle="Pré-venda aberta. Valores fictícios, discrição real."
        />
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 100}>
              <PlanCard plan={plan} onSelect={(planId) => openPurchase({ planId })} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
