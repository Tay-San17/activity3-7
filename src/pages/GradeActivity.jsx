import { useState } from 'react'

function GradeActivity() {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedScore = Number(score)

    if (!name.trim() || score === '' || Number.isNaN(parsedScore)) {
      setResult('Please enter a student name and a valid score.')
      return
    }

    if (parsedScore < 0 || parsedScore > 100) {
      setResult('Score must be between 0 and 100.')
      return
    }

    let remarks = 'Failed'

    if (parsedScore >= 90) {
      remarks = 'Excellent'
    } else if (parsedScore >= 85) {
      remarks = 'Very Good'
    } else if (parsedScore >= 80) {
      remarks = 'Good'
    } else if (parsedScore >= 75) {
      remarks = 'Passed'
    }

    setResult(`${name.trim()} scored ${parsedScore}. Remarks: ${remarks}.`)
  }

  const handleClear = () => {
    setName('')
    setScore('')
    setResult(null)
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Activity 2 - Student Grade Evaluation</h2>
        <p>Input validation and if / else if / else grading logic.</p>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          Student Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Juan Dela Cruz"
          />
        </label>

        <label>
          Score
          <input
            value={score}
            onChange={(event) => setScore(event.target.value)}
            type="number"
            min="0"
            max="100"
            placeholder="90"
          />
        </label>

        <div className="button-row">
          <button type="submit" className="primary-button">
            Evaluate
          </button>
          <button type="button" className="secondary-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {result ? <div className="result">{result}</div> : (
        <div className="result muted-box">
          <p>Result panel will show the student name, score, and remarks.</p>
        </div>
      )}
    </section>
  )
}

export default GradeActivity
