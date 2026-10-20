import styles from './Button.module.css'

export function Button({ variant = 'primary', size = 'md', href, className = '', children, ...rest }) {
  const classes = [styles.button, styles[variant], styles[size], className].join(' ')
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
