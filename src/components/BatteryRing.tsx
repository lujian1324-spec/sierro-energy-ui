import styles from './BatteryRing.module.css'

type Props = { percent: number; remaining?: string; color?: string }

export default function BatteryRing({ percent, remaining, color = 'var(--primary)' }: Props) {
  const size = 170
  const stroke = 12
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.max(0, Math.min(100, percent))
  const offset = c * (1 - clamped / 100)

  return (
    <div className={styles.wrap}>
      <svg className={styles.svg} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--black-9)" strokeWidth={stroke} />
        <circle
          cx={size/2}
          cy={size/2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </svg>
      <div className={styles.center}>
        <div className={styles.pctRow}>
          <span className={styles.value}>{Math.round(clamped)}</span>
          <span className={styles.unit}>%</span>
        </div>
        {remaining ? <div className={styles.remain}>{remaining}</div> : null}
      </div>
    </div>
  )
}
