import { TERMS } from '../data/profile'

export default function TermTabs({ value, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Term">
      {TERMS.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          className={value === t.id ? 'tab active' : 'tab'}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
