import { useState, useRef } from 'react'
import styles from './ContactSection.module.css'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'produto', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const submitRef = useRef(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Por favor informe seu nome.'
    if (!form.email.trim()) e.email = 'Por favor informe um e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'E-mail inválido.'
    if (!form.message.trim()) e.message = 'Escreva sua dúvida.'
    return e
  }

  const handleChange = (field) => (evt) => {
    setForm((s) => ({ ...s, [field]: evt.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const e = validate()
    setErrors(e)
    setSubmitted(false)
    if (Object.keys(e).length) {
      const firstError = Object.keys(e)[0]
      const el = document.getElementById(`contact-${firstError}`)
      if (el) el.focus()
      return
    }

    // Simulate send
    setTimeout(() => {
      setSubmitted(true)
      setForm({ name: '', email: '', topic: 'produto', message: '' })
      if (submitRef.current) submitRef.current.focus()
    }, 300)
  }

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <h2 id="contact-title" className={styles.title}>Fale conosco</h2>
        <p className={styles.subtitle}>Tem alguma dúvida sobre o Anti-Social Spec™? Envie sua pergunta abaixo e responderemos o mais rápido possível.</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Nome<span className={styles.required}>*</span></label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={styles.input}
                />
              {errors.name && <div id="contact-name-error" role="alert" className={styles.error}>{errors.name}</div>}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">E-mail<span className={styles.required}>*</span></label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={styles.input}
                />
              {errors.email && <div id="contact-email-error" role="alert" className={styles.error}>{errors.email}</div>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.fieldFull}>
              <label htmlFor="contact-topic">Assunto / Tópico</label>
              <select id="contact-topic" name="topic" value={form.topic} onChange={handleChange('topic')} className={styles.select}>
                <option value="produto">Dúvida sobre produto</option>
                <option value="entrega">Entrega</option>
                <option value="suporte">Suporte</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.fieldFull}>
              <label htmlFor="contact-message">Mensagem / Dúvida<span className={styles.required}>*</span></label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange('message')}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={styles.textarea}
              />
              {errors.message && <div id="contact-message-error" role="alert" className={styles.error}>{errors.message}</div>}
            </div>
          </div>

          <div className={styles.actions}>
            <button ref={submitRef} type="submit" className={styles.button}>Enviar dúvida</button>
            {submitted && <div role="status" className={styles.success}>Sua dúvida foi enviada. Obrigado!</div>}
          </div>
        </form>
      </div>
    </section>
  )
}
