import { level } from '../utils'

export default function ScoreBar({ percent }) {
  return (
    <div
      className="bar"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent ?? 0}
    >
      <div className={`bar-fill lvl-${level(percent)}`} style={{ width: `${percent ?? 0}%` }} />
    </div>
  )
}
