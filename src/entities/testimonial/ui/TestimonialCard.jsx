import { GlassCard } from '../../../shared'
import styles from './TestimonialCard.module.css'

export function TestimonialCard({ testimonial }) {
  return (
    <GlassCard as="figure" className={styles.card}>
      <div className={styles.stars} role="img" aria-label={`${testimonial.rating} de 5 estrelas`}>
        {'★'.repeat(testimonial.rating)}
      </div>
      <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>
      <figcaption className={styles.author}>
        <strong>{testimonial.author}</strong>
        <span>{testimonial.role}</span>
      </figcaption>
    </GlassCard>
  )
}
