import { Container } from '../../../shared'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>Anti-Social Spec™ é um produto fictício.</p>
        <p>Nenhuma compra é realizada e nenhum dado é enviado.</p>
      </Container>
    </footer>
  )
}
