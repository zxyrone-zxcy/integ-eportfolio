import { collaboration as c } from '../data/collaboration'
import { formatDate } from '../utils'
import { ArrowUpRight } from '../components/Icons'

export default function Collaboration() {
  return (
    <>
      <p className="kicker">■ GROUP COLLABORATION</p>
      <h1>{c.project}: group project</h1>
      <p className="lead">{c.fullTitle}</p>

      <section className="card">
        <h2>Project overview</h2>
        <p>{c.summary}</p>
        <dl className="inline-dl">
          <div><dt>Course</dt><dd>{c.course}</dd></div>
          <div><dt>Duration</dt><dd>{c.duration}</dd></div>
          {c.role && <div><dt>My role</dt><dd>{c.role}</dd></div>}
          {c.demo && (
            <div>
              <dt>Live site</dt>
              <dd>
                <a className="inline-link" href={c.demo} target="_blank" rel="noreferrer">
                  {c.demo.replace('https://', '')} <ArrowUpRight />
                </a>
              </dd>
            </div>
          )}
          {c.repo && <div><dt>Repository</dt><dd><a href={c.repo} target="_blank" rel="noreferrer">{c.repo}</a></dd></div>}
        </dl>
        <div>
          {c.tech.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Objectives</h2>
        <ul>
          {c.objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>The team</h2>
        <ul className="team">
          {c.team.map((m) => (
            <li key={m.name}>
              <strong>{m.name}</strong>
              {m.role && <span className="muted">{m.role}</span>}
            </li>
          ))}
        </ul>
      </section>

      {c.contributions.length > 0 && (
        <section>
          <h2>My contributions</h2>
          <ol className="timeline">
            {c.contributions.map((x) => (
              <li key={x.id}>
                <h3>{x.title}</h3>
                <p>{x.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section>
        <h2>What the system does</h2>
        <div className="grid cards">
          {c.features.map((f) => (
            <div className="card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {c.screenshots.length > 0 && (
        <section>
          <h2>The product</h2>
          <div className="grid cards">
            {c.screenshots.map((s) => (
              <figure className="shot" key={s.src}>
                <img src={s.src} alt={s.caption} loading="lazy" width="560" height="350" />
                <figcaption className="muted">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2>How it works</h2>
        <ol className="steps">
          {c.workflow.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Project milestones</h2>
        <ol className="timeline">
          {c.milestones.map((x) => (
            <li key={x.id}>
              <time>{formatDate(x.date)}</time>
              <h3>{x.title}</h3>
              <p>{x.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Limitations and next steps</h2>
        <div className="grid cards">
          {c.challenges.map((x) => (
            <div className="card" key={x.problem}>
              <p><strong>Limitation:</strong> {x.problem}</p>
              <p><strong>Response:</strong> {x.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Key takeaways</h2>
        <ul>
          {c.learnings.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
