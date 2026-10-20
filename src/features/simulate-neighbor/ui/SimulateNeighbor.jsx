import { useState } from 'react'
import { Button, Glasses } from '../../../shared'
import styles from './SimulateNeighbor.module.css'

export function SimulateNeighbor() {
  const [neighbor, setNeighbor] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>
        <Glasses dark={neighbor} label="Óculos Anti-Social Spec com lentes que escurecem" />
      </div>
      <p className={`${styles.status} ${neighbor ? styles.alert : ''}`} role="status" aria-live="polite">
        {neighbor
          ? 'Vizinho detectado a 15 m — lentes 99% opacas. Pode seguir sem culpa.'
          : 'Nenhum conhecido por perto. Lentes transparentes.'}
      </p>
      <Button variant="outline" onClick={() => setNeighbor((value) => !value)} aria-pressed={neighbor}>
        {neighbor ? 'Vizinho foi embora' : 'Simular Vizinho se Aproximando'}
      </Button>
    </div>
  )
}
