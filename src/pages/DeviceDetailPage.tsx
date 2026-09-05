import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import PageHeader, { ToolbarButton } from '../components/PageHeader'
import BatteryRing from '../components/BatteryRing'
import { IconBack, IconBell, IconSettings, IconChevronDown } from '../components/icons'
import { getDevice, batteryColor } from '../data/fake'
import styles from './DeviceDetailPage.module.css'

const tabs = ['Battery', 'AC', 'Solar', 'Output'] as const

export default function DeviceDetailPage() {
  const { id = 'fridge' } = useParams()
  const device = getDevice(id)
  const nav = useNavigate()
  const [tab, setTab] = useState<(typeof tabs)[number]>('Battery')
  const color = batteryColor(device.battery ?? 75, device.status)
  const pct = device.battery ?? 75

  const path = useMemo(() => {
    const pts = [20, 35, 28, 48, 42, 55, 70, 62, 80, 75, 68, 72, 78]
    return pts.map((y, i) => `${(i / (pts.length - 1)) * 340},${120 - y}`).join(' ')
  }, [])

  return (
    <PhoneFrame>
      <div className={styles.page}>
        <div className={styles.top}>
          <StatusBar />
          <PageHeader
            title={device.name}
            variant="inner"
            subtitle={device.connected ? 'Connected' : 'Disconnected'}
            titleAccessory={<IconChevronDown size={18} color="#fff" />}
            left={
              <ToolbarButton ariaLabel="Back" onClick={() => nav('/devices')}>
                <IconBack size={22} color="#fff" />
              </ToolbarButton>
            }
            right={
              <>
                <ToolbarButton ariaLabel="Device settings">
                  <IconSettings size={22} color="#fff" />
                </ToolbarButton>
                <ToolbarButton ariaLabel="Notifications" badge>
                  <IconBell size={22} color="#fff" />
                </ToolbarButton>
              </>
            }
          />
        </div>
        <div className={styles.sheet}>
          <div className={styles.card}>
            <BatteryRing percent={pct} remaining={device.remaining ?? '1h 24m remaining'} color={color} />
            <div className={styles.ioRow}>
              <div className={styles.ioGroup}>
                <div className={styles.ioLabel}>Input</div>
                <div className={styles.ioBoxes}>
                  <div className={styles.box}>
                    <div>
                      <span className={styles.boxVal}>{device.inputAc ?? 100}</span>
                      <span className={styles.boxUnit}>W</span>
                    </div>
                    <div className={styles.boxCap}>AC</div>
                  </div>
                  <span className={styles.plus}>+</span>
                  <div className={styles.box}>
                    <div>
                      <span className={styles.boxVal}>{device.inputSolar ?? 30}</span>
                      <span className={styles.boxUnit}>W</span>
                    </div>
                    <div className={styles.boxCap}>Solar</div>
                  </div>
                </div>
              </div>
              <div className={styles.ioGroup}>
                <div className={styles.ioLabel}>Output</div>
                <div className={`${styles.box} ${styles.boxWide}`}>
                  <div>
                    <span className={styles.boxVal}>{device.output ?? 420}</span>
                    <span className={styles.boxUnit}>W</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.rtHead}>
              <div className={styles.rtTitle}>Real-Time Power</div>
              <div className={styles.rtBadge}>{pct}%</div>
            </div>
            <svg className={styles.chart} viewBox="0 0 340 130" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                fill="url(#areaFill)"
                stroke="none"
                points={`0,120 ${path} 340,120`}
              />
              <polyline
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                points={path}
              />
            </svg>
            <div className={styles.axis}>
              {['2am','4am','6am','8am','10am','12pm','2pm'].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className={styles.seg}>
              {tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.segItem} ${tab === t ? styles.segOn : ''}`}
                  onClick={() => setTab(t)}
                >
                  <SegIcon name={t} />
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  )
}

function SegIcon({ name }: { name: string }) {
  if (name === 'Battery') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="12" height="8" rx="1.5" stroke="#fff" strokeWidth="1.3" />
        <rect x="14.5" y="7" width="1.5" height="4" rx="0.4" fill="#fff" />
        <rect x="3.5" y="6.5" width="8" height="5" rx="0.5" fill="#fff" />
      </svg>
    )
  }
  if (name === 'AC') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M7 3v5H5l4 7V10h2l-4-7z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'Solar') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="6" width="12" height="8" rx="1" stroke="#fff" strokeWidth="1.3" />
        <path d="M3 10h12M9 6v8" stroke="#fff" strokeWidth="1.3" />
        <path d="M9 3v2M6 4l1 1.5M12 4l-1 1.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="4" y="4" width="10" height="10" rx="1.5" stroke="#fff" strokeWidth="1.3" />
      <path d="M9 7v4M9 11l-2-2M9 11l2-2" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
