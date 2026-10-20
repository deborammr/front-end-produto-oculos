import { Button, GlassCard, formatPrice } from '../../../shared'
import styles from './PlanCard.module.css'

export function PlanCard({ plan, onSelect }) {
  return (
    <GlassCard as="article" highlight={plan.featured} className={styles.card}>
      {plan.featured && <span className={styles.badge}>Mais escolhido</span>}
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.price}>{formatPrice(plan.price)}</p>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Button variant={plan.featured ? 'primary' : 'outline'} size="lg" onClick={() => onSelect(plan.id)}>
        Garantir Meu Modo Invisível
      </Button>
    </GlassCard>
  )
}
