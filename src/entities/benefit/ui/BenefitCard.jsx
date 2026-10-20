import { GlassCard } from '../../../shared'
import styles from './BenefitCard.module.css'

export function BenefitCard({ benefit }) {
  return (
    <GlassCard as="article" className={styles.card}>
      <span className={styles.icon} aria-hidden="true">
        {benefit.icon}
      </span>
      <h3 className={styles.title}>{benefit.title}</h3>
      <p className={styles.description}>{benefit.description}</p>
    </GlassCard>
  )
}
