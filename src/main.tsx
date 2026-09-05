import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import App from './App'

const redirect = sessionStorage.getItem('ghpages-redirect')
if (redirect) {
  sessionStorage.removeItem('ghpages-redirect')
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  let path = redirect
  if (redirect.startsWith(base)) path = redirect.slice(base.length) || '/'
  const target = base + (path.startsWith('/') ? path : '/' + path)
  if (target !== window.location.pathname + window.location.search + window.location.hash) {
    history.replaceState(null, '', target)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
