import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import StatusBar from '../components/StatusBar'
import PageHeader, { ToolbarButton } from '../components/PageHeader'
import TabBar from '../components/TabBar'
import Switch from '../components/Switch'
import { IconPlus, IconBell, DeviceGlyph, IconBattery, IconBolt } from '../components/icons'
import { devices as seed, batteryColor, type Device } from '../data/fake'
import styles from './DevicesPage.module.css'

export function DevicesListPage() {
  const nav = useNavigate()
  const [list, setList] = useState(seed)

  const toggle = (id: string, v: boolean) => {
    setList((prev) => prev.map((d) => (d.id === id ? { ...d, powerOn: v } : d)))
  }

  return (
    <PhoneFrame>
      <div className={styles.page}>
        <div style={{ background: 'var(--card)' }}>
          <StatusBar />
          <PageHeader
            title="Device"
            right={
              <>
                <ToolbarButton ariaLabel="Add device" onClick={() => nav('/devices/empty')}>
                  <IconPlus size={22} color="#fff" />
                </ToolbarButton>
                <ToolbarButton ariaLabel="Notifications" badge>
                  <IconBell size={22} color="#fff" />
                </ToolbarButton>
              </>
            }
          />
        </div>
        <div className={styles.sheet}>
          {list.map((d) => (
            <DeviceCard
              key={d.id}
              device={d}
              onOpen={() => nav(`/device/${d.id}`)}
              onToggle={(v) => toggle(d.id, v)}
            />
          ))}
        </div>
        <TabBar />
      </div>
    </PhoneFrame>
  )
}

function DeviceCard({
  device,
  onOpen,
  onToggle,
}: {
  device: Device
  onOpen: () => void
  onToggle: (v: boolean) => void
}) {
  const disconnected = device.status === 'disconnected'
  const color = batteryColor(device.battery, device.status)

  return (
    <button type="button" className={styles.card} onClick={onOpen}>
      <div className={styles.cardTop}>
        <DeviceGlyph name={device.name} size={32} />
        {disconnected ? (
          <span className={styles.tagDisconnected}>Disconnected</span>
        ) : (
          <span className={styles.tag}>
            <span style={{ color, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
              <IconBattery size={16} color={color} fillPct={device.battery ?? 0} />
              {device.status === 'low' ? <IconBolt size={12} color={color} /> : null}
            </span>
            {device.battery}%
          </span>
        )}
      </div>
      <div className={styles.cardBottom}>
        <div>
          <div className={styles.name}>{device.name}</div>
          <div className={styles.model}>{device.model}</div>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <Switch
            checked={device.powerOn}
            disabled={disconnected}
            onChange={onToggle}
          />
        </div>
      </div>
    </button>
  )
}

export function DevicesEmptyPage() {
  const nav = useNavigate()
  return (
    <PhoneFrame>
      <div className={styles.page}>
        <div style={{ background: 'var(--card)' }}>
          <StatusBar />
          <PageHeader
            title="Device"
            right={
              <>
                <ToolbarButton ariaLabel="Add device">
                  <IconPlus size={22} color="#fff" />
                </ToolbarButton>
                <ToolbarButton ariaLabel="Notifications">
                  <IconBell size={22} color="#fff" />
                </ToolbarButton>
              </>
            }
          />
        </div>
        <div className={styles.sheet}>
          <div className={styles.empty}>
            <img className={styles.emptyImg} src="/device-empty.svg" alt="" />
            <div className={styles.emptyTitle}>Ready to get started?</div>
            <p className={styles.emptySub}>
              Add your first Sierro device to protect essential devices and stay prepared for outages.
            </p>
            <button type="button" className={styles.cta} onClick={() => nav('/devices')}>
              <IconPlus size={18} color="var(--primary)" />
              Add Device
            </button>
          </div>
        </div>
        <TabBar />
      </div>
    </PhoneFrame>
  )
}
