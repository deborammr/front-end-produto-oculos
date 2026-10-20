import { useState } from 'react'
import { Button, Glasses, Modal, QuantityStepper, formatPrice } from '../../../shared'
import { plans } from '../../../entities/plan'
import { frames, FrameCard } from '../../../entities/frame'
import { MAX_QUANTITY, MIN_QUANTITY, findFrame, findPlan, unitPrice, useCart } from '../../../entities/cart-item'
import styles from './PurchaseModal.module.css'

const STEPS = ['Plano', 'Armação', 'Quantidade']

export function PurchaseModal({ open, initialPlanId, initialFrameId, onClose }) {
  const { addItem, openCart } = useCart()
  const [step, setStep] = useState(initialPlanId ? (initialFrameId ? 2 : 1) : 0)
  const [planId, setPlanId] = useState(initialPlanId)
  const [frameId, setFrameId] = useState(initialFrameId)
  const [quantity, setQuantity] = useState(1)

  const plan = findPlan(planId)
  const frame = findFrame(frameId)
  const canAdvance = (step === 0 && planId) || (step === 1 && frameId)

  const add = () => {
    addItem({ planId, frameId, quantity })
    onClose()
    openCart()
  }

  return (
    <Modal open={open} onClose={onClose} title="Configurar Anti-Social Spec">
      <ol className={styles.steps} aria-label="Etapas">
        {STEPS.map((label, index) => (
          <li
            key={label}
            className={`${styles.stepItem} ${index === step ? styles.current : ''} ${index < step ? styles.complete : ''}`}
            aria-current={index === step ? 'step' : undefined}
          >
            <span>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <section>
          <h2 className={styles.title}>Escolha seu plano</h2>
          <div className={styles.plans}>
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`${styles.plan} ${p.id === planId ? styles.selected : ''}`}
                aria-pressed={p.id === planId}
                onClick={() => setPlanId(p.id)}
              >
                <strong>{p.name}</strong>
                <span className={styles.price}>{formatPrice(p.price)}</span>
                <small>{p.features.join(' + ')}</small>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 1 && (
        <section>
          <h2 className={styles.title}>Escolha o acabamento</h2>
          <div className={styles.frames}>
            {frames.map((f) => (
              <FrameCard key={f.id} frame={f} selected={f.id === frameId} onSelect={setFrameId} />
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2 className={styles.title}>Quantas unidades?</h2>
          <div className={styles.review}>
            <div className={styles.preview}>
              <Glasses frameColor={frame.color} label={`Armação ${frame.name}`} />
            </div>
            <div>
              <p className={styles.reviewName}>{plan.name}</p>
              <p className={styles.reviewMeta}>
                {frame.name} · {formatPrice(unitPrice({ planId, frameId }))} cada
              </p>
            </div>
          </div>
          <div className={styles.quantityRow}>
            <QuantityStepper
              value={quantity}
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              onChange={setQuantity}
            />
            <p className={styles.subtotal} aria-live="polite">
              {formatPrice(unitPrice({ planId, frameId }) * quantity)}
            </p>
          </div>
        </section>
      )}

      <div className={styles.actions}>
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Voltar
          </Button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <Button size="lg" disabled={!canAdvance} onClick={() => setStep(step + 1)}>
            Continuar
          </Button>
        ) : (
          <Button size="lg" onClick={add}>
            Adicionar ao carrinho
          </Button>
        )}
      </div>
    </Modal>
  )
}
