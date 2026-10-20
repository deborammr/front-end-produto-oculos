import { Container, Reveal, SectionTitle } from '../../../shared'
import { TestimonialCard, testimonials } from '../../../entities/testimonial'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return (
    <section id="avaliacoes" className={styles.section}>
      <Container>
        <SectionTitle eyebrow="Avaliações" title="Quem usa, não foi visto." />
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
