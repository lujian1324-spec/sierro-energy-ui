import type { ReactNode } from 'react'
import styles from './PageHeader.module.css'

type Props = {
  title: string
  variant?: 'anton' | 'inner'
  subtitle?: string
  titleAccessory?: ReactNode
  left?: ReactNode
  right?: ReactNode
  transparent?: boolean
}

export default function PageHeader({
  title,
  variant = 'anton',
  subtitle,
  titleAccessory,
  left,
  right,
  transparent,
}: Props) {
  return (
    <header className={`${styles.header} ${transparent ? styles.transparent : ''}`}>
      <div className={styles.left}>
        {left}
        <div className={styles.titleBlock}>
          <div className={styles.titleRow}>
            <h1 className={variant === 'anton' ? styles.titleAnton : styles.titleInner}>{title}</h1>
            {titleAccessory}
          </div>
          {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
        </div>
      </div>
      {right ? <div className={styles.right}>{right}</div> : null}
    </header>
  )
}

export function ToolbarButton({
  children,
  onClick,
  badge,
  ariaLabel,
}: {
  children: ReactNode
  onClick?: () => void
  badge?: boolean
  ariaLabel?: string
}) {
  return (
    <button type="button" className={styles.toolbarBtn} onClick={onClick} aria-label={ariaLabel}>
      {children}
      {badge ? <span className={styles.dot} /> : null}
    </button>
  )
}
