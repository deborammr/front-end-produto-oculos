import styles from './Container.module.css'

export function Container({ narrow = false, children }) {
  return <div className={`${styles.container} ${narrow ? styles.narrow : ''}`}>{children}</div>
}
