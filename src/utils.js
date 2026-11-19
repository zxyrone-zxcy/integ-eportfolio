export const percent = (score, total) =>
  score === null || !total ? null : Math.round((score / total) * 1000) / 10

export function summarize(items) {
  const graded = items.filter((i) => i.score !== null)
  const score = graded.reduce((s, i) => s + i.score, 0)
  const total = graded.reduce((s, i) => s + i.total, 0)
  return {
    count: items.length,
    gradedCount: graded.length,
    score,
    total,
    percent: percent(score, total),
  }
}

export const formatPercent = (p) => (p === null ? '—' : `${p}%`)

export function level(p) {
  if (p === null) return 'pending'
  if (p >= 90) return 'high'
  if (p >= 75) return 'mid'
  return 'low'
}

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
