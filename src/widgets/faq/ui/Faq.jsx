import { Container, SectionTitle } from '../../../shared'
import { faqItems } from '../../../entities/faq-item'
import { FaqAccordion } from '../../../features/faq-accordion'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="faq" className={styles.section}>
      <Container narrow>
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes." />
        <FaqAccordion items={faqItems} />
      </Container>
    </section>
  )
}
