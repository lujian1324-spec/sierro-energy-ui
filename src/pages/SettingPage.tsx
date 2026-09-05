import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import TabBar from '../components/TabBar'
import { IconBolt, IconChevronRight } from '../components/icons'
import { user } from '../data/fake'
import styles from './SettingPage.module.css'

const pushItems = [
  {
    title: 'Power Outage',
    sub: 'Get alerted during outages',
    icon: 'outage',
  },
  {
    title: 'Low Battery',
    sub: 'Get alerted when battery falls below 30%',
    icon: 'battery',
  },
  {
    title: 'Solar Status',
    sub: 'Get alerted when solar connects or disconnects',
    icon: 'solar',
  },
] as const

function PushIcon({ kind }: { kind: string }) {
  if (kind === 'outage') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M8.5 2.5L4 10h4l-1 5.5L14 7H9.5L11 2.5H8.5z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M3 15L15 3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (kind === 'battery') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="12" height="8" rx="1.5" stroke="#fff" strokeWidth="1.3" />
        <rect x="14.5" y="7" width="1.5" height="4" rx="0.4" fill="#fff" />
        <rect x="3.5" y="6.5" width="3" height="5" rx="0.4" fill="#fff" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="7" width="12" height="7" rx="1" stroke="#fff" strokeWidth="1.3" />
      <path d="M3 10.5h12M9 7v7" stroke="#fff" strokeWidth="1.3" />
      <path d="M9 3v2.5M6 4l1.2 1.5M12 4l-1.2 1.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export default function SettingPage() {
  return (
    <PhoneFrame>
      <div className={styles.page}>
        <StatusBar />
        <div className={styles.sheet}>
          <div className={styles.profile}>
            <div className={styles.avatar}>
              <IconBolt size={22} color="var(--primary)" />
            </div>
            <div>
              <div className={styles.name}>{user.name}</div>
              <button type="button" className={styles.manage}>
                Manage my account <IconChevronRight size={12} color="var(--black-4)" />
              </button>
            </div>
          </div>

          <section>
            <h2 className={styles.sectionTitle}>Push Notifications</h2>
            <div className={styles.list}>
              {pushItems.map((item) => (
                <button key={item.title} type="button" className={styles.row}>
                  <span className={styles.iconCircle}><PushIcon kind={item.icon} /></span>
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{item.title}</span>
                    <span className={styles.rowSub}>{item.sub}</span>
                  </span>
                  <span className={styles.rowRight}>
                    On <IconChevronRight size={16} color="var(--black-6)" />
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Support</h2>
            <div className={styles.list}>
              <button type="button" className={styles.row}>
                <span className={styles.iconCircle}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 4.5h10a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 14 13.5H8l-3 2v-2H4A1.5 1.5 0 0 1 2.5 12V6A1.5 1.5 0 0 1 4 4.5z" stroke="#fff" strokeWidth="1.3" />
                    <path d="M6.5 8.5h5M6.5 11h3.5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>Feedback</span>
                  <span className={styles.rowSub}>Send feedback to the Sierro team</span>
                </span>
                <span className={styles.rowRight}>
                  <IconChevronRight size={16} color="var(--black-6)" />
                </span>
              </button>
            </div>
          </section>

          <div className={styles.footer}>
            <div className={styles.links}>
              <a href="#privacy">Privacy Policy</a>
              <span className={styles.divider} />
              <a href="#terms">Terms of Use</a>
            </div>
            <div className={styles.version}>{user.version}</div>
          </div>
        </div>
        <TabBar />
      </div>
    </PhoneFrame>
  )
}
