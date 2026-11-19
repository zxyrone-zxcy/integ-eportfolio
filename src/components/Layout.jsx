import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { DotGrid } from './Icons'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/quizzes', label: 'Quizzes' },
  { to: '/performance-tasks', label: 'Performance Tasks' },
  { to: '/collaboration', label: 'Group Collaboration' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="brand">
          <DotGrid />
          <span>{profile.name.toUpperCase()}</span>
        </NavLink>
        <nav aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-right">
          <ThemeToggle />
        </div>
      </header>
      <main className={isHome ? '' : 'container'}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>© {profile.name.toUpperCase()} — {new Date().getFullYear()}</span>
        <span>{profile.course.toUpperCase()} · {profile.school.toUpperCase()}</span>
      </footer>
    </>
  )
}
