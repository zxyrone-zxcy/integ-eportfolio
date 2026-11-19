import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Quizzes from './pages/Quizzes'
import PerformanceTasks from './pages/PerformanceTasks'
import Collaboration from './pages/Collaboration'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="performance-tasks" element={<PerformanceTasks />} />
          <Route path="collaboration" element={<Collaboration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
