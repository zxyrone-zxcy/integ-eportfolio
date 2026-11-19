export function ArrowRight({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="icon"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="icon"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Sun({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="icon">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function Moon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

export function DotGrid({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <g fill="currentColor">
        <circle cx="3" cy="3" r="1.6" /><circle cx="9" cy="3" r="1.6" />
        <circle cx="3" cy="9" r="1.6" /><circle cx="9" cy="9" r="1.6" /><circle cx="15" cy="9" r="1.6" />
        <circle cx="3" cy="15" r="1.6" /><circle cx="9" cy="15" r="1.6" /><circle cx="15" cy="15" r="1.6" />
      </g>
    </svg>
  )
}

const glyphProps = { width: 56, height: 56, viewBox: '0 0 56 56', 'aria-hidden': true, className: 'glyph' }
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.2 }

export function GlyphQuiz() {
  return (
    <svg {...glyphProps}>
      <g {...stroke}>
        <rect x="4" y="4" width="20" height="20" /><rect x="32" y="4" width="20" height="20" />
        <rect x="18" y="32" width="20" height="20" /><path d="M14 24v4h14v4M42 24v4H28" />
      </g>
    </svg>
  )
}

export function GlyphTask() {
  return (
    <svg {...glyphProps}>
      <g {...stroke}>
        <circle cx="28" cy="28" r="22" /><circle cx="28" cy="28" r="12" /><path d="M6 28h44M28 6v44" />
      </g>
    </svg>
  )
}

export function GlyphTeam() {
  return (
    <svg {...glyphProps}>
      <g {...stroke}>
        <path d="M8 48V8M8 16h18M8 32h30M8 48h40" />
        <circle cx="26" cy="16" r="3" /><circle cx="38" cy="32" r="3" /><circle cx="48" cy="48" r="3" />
      </g>
    </svg>
  )
}
