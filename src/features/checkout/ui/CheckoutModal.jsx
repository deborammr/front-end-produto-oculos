import { useState } from 'react'
import { Button, Modal, formatPrice } from '../../../shared'
import { findFrame, findPlan, lineTotal, useCart } from '../../../entities/cart-item'
import styles from './CheckoutModal.module.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function OrderLines({ items }) {
  return (
    <ul className={styles.lines}>
      {items.map((item) => (
        <li key={`${item.planId}-${item.frameId}`}>
          <span>
            {item.quantity}× {findPlan(item.planId).name} · {findFrame(item.frameId).name}
          </span>
          <strong>{formatPrice(lineTotal(item))}</strong>
        </li>
      ))}
    </ul>
  )
}

function CheckoutContent() {
  const { items, total, clear, openCart, closePanel } = useCart()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const [order, setOrder] = useState(null)

  const nameValid = name.trim().length >= 2
  const emailValid = EMAIL_RE.test(email)

  const submit = (event) => {
    event.preventDefault()
    setTouched(true)
    if (!nameValid || !emailValid || items.length === 0) return
    setOrder({ items, total, name: name.trim(), email })
    clear()
  }

  if (order) {
    return (
      <div className={styles.success}>
        <div className={styles.check} aria-hidden="true">
          ✓
        </div>
        <h2 className={styles.title}>Modo Invisível ativado</h2>
        <p className={styles.text}>
          Pré-venda confirmada, {order.name.split(' ')[0]}! Avisaremos em {order.email} quando seus óculos estiverem
          prontos — e vamos fingir que não vimos você na rua.
        </p>
        <div className={styles.summary}>
          <OrderLines items={order.items} />
          <p className={styles.totalLine}>
            <span>Total</span>
            <strong>{formatPrice(order.total)}</strong>
          </p>
        </div>
        <p className={styles.note}>Produto fictício — nenhuma cobrança foi realizada.</p>
        <Button size="lg" onClick={closePanel}>
          Fechar
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      <h2 className={styles.title}>Finalizar pré-venda</h2>
      <div className={styles.summary}>
        <OrderLines items={items} />
        <p className={styles.totalLine}>
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </p>
      </div>
      <label className={styles.field}>
        Nome
        <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        {touched && !nameValid && <span className={styles.error}>Informe seu nome.</span>}
      </label>
      <label className={styles.field}>
        E-mail
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        {touched && !emailValid && <span className={styles.error}>Informe um e-mail válido.</span>}
      </label>
      <div className={styles.actions}>
        <Button variant="ghost" onClick={openCart}>
          Voltar ao carrinho
        </Button>
        <Button type="submit" size="lg" disabled={items.length === 0}>
          Confirmar pré-venda
        </Button>
      </div>
    </form>
  )
}

export function CheckoutModal() {
  const { panel, closePanel } = useCart()

  return (
    <Modal open={panel === 'checkout'} onClose={closePanel} title="Finalizar pré-venda">
      <CheckoutContent />
    </Modal>
  )
}
