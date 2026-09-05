import { useState } from 'react'
import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import PageHeader, { ToolbarButton } from '../components/PageHeader'
import TabBar from '../components/TabBar'
import { IconShare, IconBolt, IconBack } from '../components/icons'
import { insights } from '../data/fake'
import styles from './InsightsPage.module.css'

const ranges = ['Day', 'Week', 'Month', 'Range'] as const

export default function InsightsPage() {
  const [range, setRange] = useState<(typeof ranges)[number]>('Day')

  return (
    <PhoneFrame>
      <div className={styles.page}>
        <div className={styles.top}>
          <StatusBar />
          <PageHeader
            title="Insights"
            right={
              <ToolbarButton ariaLabel="Share">
                <IconShare size={22} color="#fff" />
              </ToolbarButton>
            }
          />
        </div>
        <div className={styles.sheet}>
          <div className={styles.hero}>
            <div className={styles.heroTop}>
              <span className={styles.bolt}><IconBolt size={18} color="var(--primary)" /></span>
              <span className={styles.days}>{insights.days}</span>
              <span className={styles.daysUnit}>Days</span>
            </div>
            <div className={styles.since}>{insights.since}</div>
          </div>

          <div className={styles.segWrap}>
            <div className={styles.seg}>
              {ranges.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`${styles.segBtn} ${range === r ? styles.segOn : ''}`}
                  onClick={() => setRange(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.dateRow}>
            <button type="button" className={styles.dateBtn} aria-label="Previous day">
              <IconBack size={18} color="#fff" />
            </button>
            <div className={styles.dateLabel}>{insights.dateLabel}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.co2Row}>
              <div>
                <span className={styles.co2Val}>{insights.co2Kg}</span>
                <span className={styles.co2Unit}>Kg</span>
              </div>
              <div className={styles.co2Label}>CO₂ Reduced</div>
            </div>
            <div className={styles.co2Sub}>{insights.trees}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.chartHead}>
              <div>
                <div className={styles.chartTitle}>Input vs. Output</div>
                <div className={styles.chartSub}>{insights.peakNote}</div>
              </div>
              <div className={styles.legend}>
                <span><i className={styles.dot} style={{ background: 'var(--primary)' }} />Input</span>
                <span><i className={styles.dot} style={{ background: 'var(--orange)' }} />Output</span>
              </div>
            </div>
            <svg className={styles.chart} viewBox="0 0 340 160" preserveAspectRatio="none">
              {[30, 60, 90, 120].map((y) => (
                <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="#454545" strokeWidth="1" />
              ))}
              <polyline
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                strokeDasharray="4 4"
                points="0,95 40,90 80,92 120,88 160,90 200,86 240,88 280,84 340,86"
              />
              <defs>
                <linearGradient id="outFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF9500" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                fill="url(#outFill)"
                points="0,160 0,100 40,98 80,96 120,94 160,70 200,30 240,55 280,90 340,95 340,160"
              />
              <polyline
                fill="none"
                stroke="var(--orange)"
                strokeWidth="2.2"
                points="0,100 40,98 80,96 120,94 160,70 200,30 240,55 280,90 340,95"
              />
            </svg>
            <div className={styles.axis}>
              {['12am','4am','8am','12pm','4pm','8pm','12am'].map((t, i) => (
                <span key={`${t}-${i}`}>{t}</span>
              ))}
            </div>
          </div>
        </div>
        <TabBar />
      </div>
    </PhoneFrame>
  )
}
