import { Link } from 'react-router-dom'
import { profile, TERMS } from '../data/profile'
import { quizzes } from '../data/quizzes'
import { tasks } from '../data/tasks'
import { collaboration } from '../data/collaboration'
import { attendanceTotals } from '../data/attendance'
import { summarize, formatPercent } from '../utils'
import StatCard from '../components/StatCard'
import StippleSphere from '../components/StippleSphere'
import { ArrowRight, ArrowUpRight, GlyphQuiz, GlyphTask, GlyphTeam } from '../components/Icons'

function Terminal({ quizAvg, taskAvg, quizCount, taskCount }) {
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <i /><i /><i />
        <span>portfolio — zsh — 80×12</span>
      </div>
      <div className="terminal-body">
        <div><b>$</b> portfolio open ip1</div>
        <div><b>✓</b> {TERMS.length} terms loaded</div>
        <div><b>$</b> portfolio scores --all</div>
        <div><b>→</b> {quizCount} quizzes <b>{formatPercent(quizAvg)}</b></div>
        <div><b>→</b> {taskCount} performance tasks <b>{formatPercent(taskAvg)}</b></div>
        <div><b>$</b> portfolio team {collaboration.project.toLowerCase().replace(/\s+/g, '-')}</div>
        <div><b>✓</b> {collaboration.contributions.length} contributions logged</div>
        <div><b>$</b> <span className="cursor" /></div>
      </div>
    </div>
  )
}

export default function Home() {
  const allQuizzes = summarize(Object.values(quizzes).flat())
  const allTasks = summarize(Object.values(tasks).flat())
  const att = attendanceTotals()

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <p className="kicker"><span className="square" />{profile.course.toUpperCase()} / E-PORTFOLIO</p>
          <h1 className="headline">
            Scores, projects, teamwork.
            <br />
            <span className="grey">All in one place.</span>
          </h1>
          <p className="hero-desc">{profile.intro}</p>
          <div className="ctas">
            <Link className="btn solid" to="/quizzes">
              View my scores <ArrowUpRight />
            </Link>
            <Link className="btn outline" to="/collaboration">
              SignWise ASL work <ArrowRight />
            </Link>
          </div>
          <p className="mono-line">{profile.program} · {profile.section} · {profile.semester}</p>
          <dl className="meta-row">
            <div><dt>Student</dt><dd>{profile.name}</dd></div>
            <div><dt>School</dt><dd>{profile.school}</dd></div>
            <div><dt>Instructor</dt><dd>{profile.instructor}</dd></div>
          </dl>
        </div>

        <StippleSphere>
          <Terminal
            quizAvg={allQuizzes.percent}
            taskAvg={allTasks.percent}
            quizCount={allQuizzes.count}
            taskCount={allTasks.count}
          />
        </StippleSphere>
      </section>

      <section className="band">
        <div className="band-head">
          <div>
            <p className="kicker">■ 01 / RESULTS</p>
            <h2 className="display">
              Every score, by term.
              <br />
              <span className="grey">Averages update as I add work.</span>
            </h2>
          </div>
          <p>Quiz and performance task results are calculated from the data files, so this page never drifts from the detail pages.</p>
        </div>
        <div className="grid stats">
          <StatCard label="Quiz average" value={formatPercent(allQuizzes.percent)} note={`${allQuizzes.gradedCount} of ${allQuizzes.count} graded`} />
          <StatCard label="Performance task average" value={formatPercent(allTasks.percent)} note={`${allTasks.gradedCount} of ${allTasks.count} graded`} />
          <StatCard label="Attendance" value={att.present} note={`days present · ${att.pending} awaiting grade`} />
          <StatCard label="Group project" value={collaboration.project} note={collaboration.role} />
        </div>
      </section>

      <section className="band">
        <div className="band-head">
          <div>
            <p className="kicker">■ 02 / EXPLORE</p>
            <h2 className="display">
              Three places to look.
              <br />
              <span className="grey">Each one has the evidence.</span>
            </h2>
          </div>
        </div>
        <div className="grid cells">
          <Link className="cell" to="/quizzes">
            <div className="fig"><span>FIG. 02</span><span>QUIZZES</span></div>
            <GlyphQuiz />
            <h3>Quizzes</h3>
            <p>Scores and results for the prelim, midterm and final terms.</p>
          </Link>
          <Link className="cell" to="/performance-tasks">
            <div className="fig"><span>FIG. 03</span><span>TASKS</span></div>
            <GlyphTask />
            <h3>Performance tasks</h3>
            <p>Projects built each term, with scores and reflections.</p>
          </Link>
          <Link className="cell" to="/collaboration">
            <div className="fig"><span>FIG. 04</span><span>TEAM</span></div>
            <GlyphTeam />
            <h3>Group collaboration</h3>
            <p>What I contributed to the SignWise ASL website.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
