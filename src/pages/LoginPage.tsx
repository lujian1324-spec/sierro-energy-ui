import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import { IconMail, IconApple, IconGoogle } from '../components/icons'
import styles from './LoginPage.module.css'

export default function LoginPage() {
  const nav = useNavigate()
  const go = () => nav('/devices')

  return (
    <PhoneFrame>
      <div className={styles.page}>
        <StatusBar />
        <div className={styles.body}>
          <h1 className={styles.title}>Sign up or log in</h1>
          <div className={styles.stack}>
            <button type="button" className={styles.rowFilled} onClick={go}>
              <span className={styles.iconCircle}><IconMail size={20} color="#fff" /></span>
              <span className={styles.label}>Continue with Email</span>
            </button>
            <div className={styles.or}>OR</div>
            <button type="button" className={styles.rowStroke} onClick={go}>
              <span className={styles.iconPlain}><IconGoogle size={24} /></span>
              <span className={styles.label}>Continue with Google</span>
            </button>
            <button type="button" className={styles.rowStroke} onClick={go}>
              <span className={styles.iconPlain}><IconApple size={24} color="#fff" /></span>
              <span className={styles.label}>Continue with Apple</span>
            </button>
          </div>
          <p className={styles.legal}>
            By continuing, you agree to our{' '}
            <a className={styles.link} href="#terms">Terms of Use</a>
            {' '}and{' '}
            <a className={styles.link} href="#privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </PhoneFrame>
  )
}
