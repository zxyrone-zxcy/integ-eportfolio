import { useState } from 'react'
import { TERMS } from '../data/profile'
import { quizzes } from '../data/quizzes'
import { percent, summarize, formatPercent, formatDate } from '../utils'
import TermTabs from '../components/TermTabs'
import ScoreBar from '../components/ScoreBar'

export default function Quizzes() {
  const [term, setTerm] = useState('prelim')
  const items = quizzes[term]
  const sum = summarize(items)
  const best = items
    .filter((q) => q.score !== null)
    .sort((a, b) => percent(b.score, b.total) - percent(a.score, a.total))[0]

  return (
    <>
      <p className="kicker">■ QUIZZES</p>
      <h1>Quiz results, prelim to final</h1>
      <p className="lead">Every quiz score by term, with the topics covered.</p>

      <TermTabs value={term} onChange={setTerm} />

      <div className="card">
        <div className="card-head">
          <h2>{TERMS.find((t) => t.id === term).label} quizzes</h2>
          <span>
            {sum.gradedCount}/{sum.count} graded
            {best && <> · Best: {best.title.split(' – ')[0]}</>}
          </span>
        </div>
        {items.length === 0 && (
          <p className="empty">No quizzes recorded for this term yet. Add them in src/data/quizzes.js.</p>
        )}
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Date</th>
                <th>Topics</th>
                <th>Score</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {items.map((q) => {
                const p = percent(q.score, q.total)
                return (
                  <tr key={q.id}>
                    <td>
                      <strong>{q.title}</strong>
                      {q.remarks && <div className="muted">{q.remarks}</div>}
                    </td>
                    <td>{formatDate(q.date)}</td>
                    <td>
                      {q.topics.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </td>
                    <td className="nowrap">
                      {q.score === null ? 'Pending' : `${q.score} / ${q.total}`}
                    </td>
                    <td className="result">
                      <ScoreBar percent={p} />
                      <span>{formatPercent(p)}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
