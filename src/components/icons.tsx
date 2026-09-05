type IconProps = { size?: number; className?: string; color?: string }

export function IconHome({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function IconInsights({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 16l5-5 4 3 7-8" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6h5v5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSettings({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.6" />
      <path d="M12 3.5v2.2M12 18.3v2.2M4.9 6.5l1.6 1.6M17.5 15.9l1.6 1.6M3.5 12h2.2M18.3 12h2.2M4.9 17.5l1.6-1.6M17.5 8.1l1.6-1.6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconPlus({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconBell({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 9a6 6 0 1 1 12 0c0 3.5 1.2 5 1.8 5.5H4.2C4.8 14 6 12.5 6 9z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 18.5a2 2 0 0 0 4 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconBack({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 6l-6 6 6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronDown({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronRight({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconShare({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="18" cy="5" r="2.5" stroke={color} strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.5" stroke={color} strokeWidth="1.6" />
      <circle cx="18" cy="19" r="2.5" stroke={color} strokeWidth="1.6" />
      <path d="M8.3 10.8l7.4-4.1M8.3 13.2l7.4 4.1" stroke={color} strokeWidth="1.6" />
    </svg>
  )
}

export function IconMail({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconApple({ size = 24, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 2.9 2.2 1.2-.1 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.4-.9-2.5-3.4zM14.3 5.6c.6-.8 1.1-1.9.9-3-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3z" />
    </svg>
  )
}

export function IconGoogle({ size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.7 3.7 14.6 2.7 12 2.7 6.9 2.7 2.7 6.9 2.7 12S6.9 21.3 12 21.3c5.2 0 8.6-3.6 8.6-8.7 0-.6-.1-1-.1-1.4H12z" />
      <path fill="#4285F4" d="M12 10.2v3.6h5.1a4.4 4.4 0 0 0-1.9 2.7h0l3 2.4c1.8-1.6 2.4-4 2.4-6.7 0-.6 0-1.1-.1-1.5L12 10.2z" />
      <path fill="#34A853" d="M6.9 13.9l-3 2.3C5.3 19.2 8.4 21.3 12 21.3c2.5 0 4.6-.8 6.1-2.2l-3-2.4c-.8.6-1.9 1-3.1 1-2.4 0-4.4-1.6-5.1-3.8z" />
      <path fill="#FBBC05" d="M6.9 10.1c.2-.6.5-1.2.9-1.7l-3-2.2C3.4 7.8 3 9.8 3 12c0 1.1.2 2.1.6 3.1l3.3-2.5c-.1-.5-.2-1-.2-1.5.1-.3.1-.7.2-1z" />
    </svg>
  )
}

export function IconBolt({ size = 16, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  )
}

export function IconFridge({ size = 32, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="8" y="4" width="16" height="24" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M8 14h16" stroke={color} strokeWidth="1.6" />
      <path d="M12 8v3M12 17v4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconNas({ size = 32, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="6" y="6" width="20" height="20" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M10 12h12M10 16h12M10 20h8" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconRouter({ size = 32, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="5" y="18" width="22" height="8" rx="2" stroke={color} strokeWidth="1.6" />
      <circle cx="10" cy="22" r="1.2" fill={color} />
      <circle cx="15" cy="22" r="1.2" fill={color} />
      <path d="M16 18V10M12 12c1.2-1.5 2.8-2.2 4-2.2s2.8.7 4 2.2M9.5 9.5C11.8 7 14 5.8 16 5.8s4.2 1.2 6.5 3.7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconBattery({ size = 18, color = 'currentColor', fillPct = 100 }: IconProps & { fillPct?: number }) {
  const w = Math.max(0, Math.min(100, fillPct)) / 100 * 10
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <rect x="1.5" y="5" width="13" height="8" rx="1.5" stroke={color} strokeWidth="1.3" />
      <rect x="15" y="7.5" width="1.5" height="3" rx="0.5" fill={color} />
      <rect x="3" y="6.5" width={w} height="5" rx="0.5" fill={color} />
    </svg>
  )
}

export function DeviceGlyph({ name, size = 32 }: { name: string; size?: number }) {
  const n = name.toLowerCase()
  if (n.includes('fridge')) return <IconFridge size={size} />
  if (n.includes('nas')) return <IconNas size={size} />
  return <IconRouter size={size} />
}
