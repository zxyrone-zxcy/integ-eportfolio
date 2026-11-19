import { useState } from 'react'
import { TERMS } from '../data/profile'
import { tasks } from '../data/tasks'
import { percent, summarize, formatPercent, formatDate, level } from '../utils'
import TermTabs from '../components/TermTabs'
import StatCard from '../components/StatCard'
import ScoreBar from '../components/ScoreBar'
import { ArrowRight } from '../components/Icons'

export default function PerformanceTasks() {
  const [term, setTerm] = useState('prelim')
  const overall = summarize(Object.values(tasks).flat())

  return (
    <>
      <p className="kicker">■ PERFORMANCE TASKS</p>
      <h1>Performance tasks, prelim to final</h1>
      <p className="lead">The projects I built each term, with scores and what I took from them.</p>

      <div className="grid stats">
        {TERMS.map((t) => {
          const s = summarize(tasks[t.id])
          return (
            <StatCard
              key={t.id}
              label={`${t.label} average`}
              value={formatPercent(s.percent)}
              note={`${s.gradedCount}/${s.count} graded`}
              tone={level(s.percent)}
            />
          )
        })}
        <StatCard label="Overall" value={formatPercent(overall.percent)} note={`${overall.score}/${overall.total} pts`} tone={level(overall.percent)} />
      </div>

      <TermTabs value={term} onChange={setTerm} />

      {tasks[term].length === 0 && (
        <p className="empty">No performance tasks recorded for this term yet. Add them in src/data/tasks.js.</p>
      )}
      <div className="grid cards">
        {tasks[term].map((t) => {
          const p = percent(t.score, t.total)
          return (
            <article className="card task" key={t.id}>
              <div className="fig"><span>{formatDate(t.date)}</span></div>
              <h3>{t.title}</h3>
              {t.description && <p>{t.description}</p>}
              {t.remarks && <p className="muted">{t.remarks}</p>}
              <div>
                {t.tech.map((x) => (
                  <span className="chip" key={x}>{x}</span>
                ))}
              </div>
              <div className="score-line">
                <strong>{t.score === null ? 'Pending' : `${t.score} / ${t.total}`}</strong>
                <span>{formatPercent(p)}</span>
              </div>
              <ScoreBar percent={p} />
              {t.reflection && <p className="muted"><strong>Reflection:</strong> {t.reflection}</p>}
              {t.link && (
                <a className="inline-link" href={t.link} target="_blank" rel="noreferrer">
                  View work <ArrowRight size={14} />
                </a>
              )}
            </article>
          )
        })}
      </div>
    </>
  )
}
