export type DeviceStatus = 'ok' | 'low' | 'disconnected'

export interface Device {
  id: string
  name: string
  model: string
  battery: number | null
  status: DeviceStatus
  powerOn: boolean
  connected: boolean
  remaining?: string
  inputAc?: number
  inputSolar?: number
  output?: number
}

export const devices: Device[] = [
  {
    id: 'fridge',
    name: 'Fridge',
    model: 'Sierro 2000',
    battery: 14,
    status: 'low',
    powerOn: true,
    connected: true,
    remaining: '1h 24m remaining',
    inputAc: 100,
    inputSolar: 30,
    output: 420,
  },
  {
    id: 'nas',
    name: 'NAS',
    model: 'Sierro 1000',
    battery: 100,
    status: 'ok',
    powerOn: false,
    connected: true,
    remaining: '12h remaining',
    inputAc: 0,
    inputSolar: 0,
    output: 0,
  },
  {
    id: 'wifi',
    name: 'WiFi Router',
    model: 'Sierro 1000',
    battery: null,
    status: 'disconnected',
    powerOn: false,
    connected: false,
  },
]

export const insights = {
  days: 128,
  since: 'Reliable backup power since Jan 2026',
  co2Kg: 6.4,
  trees: 'Equal to planting XX trees',
  dateLabel: 'May 27, 2026',
  peakNote: 'Output peaked at 2pm',
}

export const user = {
  name: 'Johny Walker',
  version: 'Sierro App v3.10.0 @2026 Sierro Inc.',
}

export function getDevice(id: string) {
  return devices.find((d) => d.id === id) ?? devices[0]
}

export function batteryColor(pct: number | null, status: DeviceStatus) {
  if (status === 'disconnected' || pct == null) return 'var(--red-sys)'
  if (pct >= 60) return 'var(--primary)'
  if (pct >= 20) return 'var(--orange)'
  return 'var(--red-sys)'
}
