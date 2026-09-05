import { useNavigate, useLocation } from 'react-router-dom'
import { IconHome, IconInsights, IconSettings } from './icons'
import styles from './TabBar.module.css'

const tabs = [
  { key: 'devices', path: '/devices', Icon: IconHome, label: 'Devices' },
  { key: 'insights', path: '/insights', Icon: IconInsights, label: 'Insights' },
  { key: 'setting', path: '/setting', Icon: IconSettings, label: 'Setting' },
] as const

export default function TabBar() {
  const nav = useNavigate()
  const loc = useLocation()
  const active =
    loc.pathname.startsWith('/insights') ? 'insights'
    : loc.pathname.startsWith('/setting') ? 'setting'
    : 'devices'

  return (
    <div className={styles.wrap}>
      <nav className={styles.bar} aria-label="Primary">
        {tabs.map(({ key, path, Icon, label }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              type="button"
              className={isActive ? styles.itemActive : styles.item}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => nav(path)}
            >
              {isActive ? (
                <span className={styles.hl}><Icon size={24} color="#fff" /></span>
              ) : (
                <Icon size={24} color="rgba(255,255,255,0.55)" />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
