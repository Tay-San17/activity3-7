import { useState } from 'react'

function LoginActivity() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('Enter username and password.')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername || !trimmedPassword) {
      setMessage('Please enter username and password.')
      return
    }

    if (trimmedUsername === 'admin' && trimmedPassword === 'admin123') {
      setIsLoggedIn(true)
      setMessage('Login successful!')
      return
    }

    setMessage('Invalid username or password.')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
    setMessage('Logged out.')
  }

  const handleClear = () => {
    setUsername('')
    setPassword('')
    setMessage('Enter username and password.')
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Activity 1 - Login Authentication</h2>
        <p>Use username, password, validation, and conditional rendering.</p>
      </div>

      {isLoggedIn ? (
        <div className="result success-box">
          <h3>Welcome, {username.trim()}!</h3>
          <p>{message}</p>
          <button type="button" className="secondary-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="admin"
            />
          </label>

          <label>
            Password
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="admin123"
            />
          </label>

          <div className="button-row">
            <button type="submit" className="primary-button">
              Login
            </button>
            <button type="button" className="secondary-button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      )}

      <div className="status-message">{message}</div>
    </section>
  )
}

export default LoginActivity
