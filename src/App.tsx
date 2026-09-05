import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { DevicesListPage, DevicesEmptyPage } from './pages/DevicesPage'
import DeviceDetailPage from './pages/DeviceDetailPage'
import InsightsPage from './pages/InsightsPage'
import SettingPage from './pages/SettingPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/devices" element={<DevicesListPage />} />
      <Route path="/devices/empty" element={<DevicesEmptyPage />} />
      <Route path="/device/:id" element={<DeviceDetailPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
