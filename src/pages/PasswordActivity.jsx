import { useState } from 'react'

function PasswordActivity() {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('Enter a password to check its strength.')
  const [level, setLevel] = useState('none')

  const handleCheck = (event) => {
    event.preventDefault()

    const length = password.length

    if (!password) {
      setResult('Please enter a password.')
      setLevel('none')
      return
    }

    if (length < 6) {
      setResult('Weak Password')
      setLevel('weak')
      return
    }

    if (length < 10) {
      setResult('Medium Password')
      setLevel('medium')
      return
    }

    setResult('Strong Password')
    setLevel('strong')
  }

  const handleClear = () => {
    setPassword('')
    setResult('Enter a password to check its strength.')
    setLevel('none')
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Activity 3 - Password Strength Checker</h2>
        <p>Classify the password by length.</p>
      </div>

      <form className="form-grid" onSubmit={handleCheck}>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Type a password"
          />
        </label>

        <div className="button-row">
          <button type="submit" className="primary-button">
            Check Password
          </button>
          <button type="button" className="secondary-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      <div className="result">
        <p>{result}</p>
        <div className={`strength-bar ${level}`}>
          <span />
        </div>
      </div>
    </section>
  )
}

export default PasswordActivity
