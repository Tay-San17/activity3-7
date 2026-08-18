import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import LoginActivity from './pages/LoginActivity.jsx'
import GradeActivity from './pages/GradeActivity.jsx'
import PasswordActivity from './pages/PasswordActivity.jsx'
import BillActivity from './pages/BillActivity.jsx'
import AttendanceActivity from './pages/AttendanceActivity.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activity-1" element={<LoginActivity />} />
            <Route path="/activity-2" element={<GradeActivity />} />
            <Route path="/activity-3" element={<PasswordActivity />} />
            <Route path="/activity-4" element={<BillActivity />} />
            <Route path="/activity-5" element={<AttendanceActivity />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function Header() {
  const navigate = useNavigate()

  return (
    <header className="navbar">
      <div>
        <h1>React Activity Portal</h1>
        <p>React JS practical activity</p>
      </div>

      <nav className="nav-links" aria-label="Main">
        <button type="button" className="nav-button" onClick={() => navigate('/')}>
          Home
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate('/activity-1')}
        >
          Activity 1
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate('/activity-2')}
        >
          Activity 2
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate('/activity-3')}
        >
          Activity 3
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate('/activity-4')}
        >
          Activity 4
        </button>
        <button
          type="button"
          className="nav-button"
          onClick={() => navigate('/activity-5')}
        >
          Activity 5
        </button>
      </nav>
    </header>
  )
}

export default App
