import styles from './StatusBar.module.css'

export default function StatusBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.time}>9:41</div>
      <div className={styles.icons} aria-hidden>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 3.2c1.8 0 3.4.7 4.6 1.9l1.2-1.2A8.1 8.1 0 0 0 8 1 8.1 8.1 0 0 0 2.2 3.9l1.2 1.2A6.5 6.5 0 0 1 8 3.2z" fill="#fff" />
          <path d="M8 6.4c1 0 1.9.4 2.6 1.1l1.2-1.2A5.1 5.1 0 0 0 8 5a5.1 5.1 0 0 0-3.8 1.3l1.2 1.2A3.6 3.6 0 0 1 8 6.4z" fill="#fff" />
          <circle cx="8" cy="10.2" r="1.3" fill="#fff" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="2.5" stroke="#fff" strokeOpacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="1.5" fill="#fff" />
          <path d="M24 4.5v4a2 2 0 0 0 0-4z" fill="#fff" fillOpacity="0.45" />
        </svg>
      </div>
    </div>
  )
}
