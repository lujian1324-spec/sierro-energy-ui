import styles from './Switch.module.css'

type Props = {
  checked: boolean
  onChange?: (v: boolean) => void
  disabled?: boolean
}

export default function Switch({ checked, onChange, disabled }: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={`${styles.track} ${checked ? styles.on : styles.off} ${disabled ? styles.disabled : ''}`}
      onClick={() => onChange?.(!checked)}
    >
      <span className={styles.thumb} />
    </button>
  )
}
