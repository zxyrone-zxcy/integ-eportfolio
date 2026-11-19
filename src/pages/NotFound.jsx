import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <>
      <p className="kicker">■ 404</p>
      <h1>That page doesn&apos;t exist</h1>
      <p className="lead">The link may be old or mistyped. Pick one of the pages below.</p>
      <div className="ctas">
        <Link className="btn solid" to="/">
          Back to home <ArrowRight />
        </Link>
        <Link className="btn outline" to="/quizzes">
          Quiz results <ArrowRight />
        </Link>
      </div>
    </>
  )
}
