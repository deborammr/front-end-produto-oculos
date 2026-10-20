import { Container, Reveal, SectionTitle } from '../../../shared'
import { steps } from '../model/steps'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <Container>
        <SectionTitle eyebrow="Como funciona" title="Três passos até a paz." />
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={index * 120}>
                <div className={styles.step}>
                  <span className={styles.number}>{step.id}</span>
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
