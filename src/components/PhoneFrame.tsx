import type { ReactNode } from 'react'
import styles from './PhoneFrame.module.css'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.stage}>
      <div className={styles.phone}>
        <div className={styles.content}>{children}</div>
        <div className={styles.homeIndicator} aria-hidden />
      </div>
    </div>
  )
}
