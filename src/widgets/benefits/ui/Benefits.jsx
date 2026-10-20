import { Container, Reveal, SectionTitle } from '../../../shared'
import { BenefitCard, benefits } from '../../../entities/benefit'
import styles from './Benefits.module.css'

export function Benefits() {
  return (
    <section id="beneficios" className={styles.section}>
      <Container>
        <SectionTitle
          eyebrow="Benefícios"
          title="Estilo inconfundível por fora. Paz e discrição por dentro."
          subtitle="Lentes fotocromáticas de altíssima velocidade que bloqueiam 99% da visibilidade, para você fingir com 100% de firmeza."
        />
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.id} delay={index * 80}>
              <BenefitCard benefit={benefit} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
