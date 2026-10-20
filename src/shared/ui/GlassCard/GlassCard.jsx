import styles from './GlassCard.module.css'

export function GlassCard({ as: Tag = 'div', highlight = false, className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.card} ${highlight ? styles.highlight : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
