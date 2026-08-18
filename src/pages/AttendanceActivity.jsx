import { useState } from 'react'

function AttendanceActivity() {
  const [employee, setEmployee] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const parsedTime = Number(timeIn)

    if (!employee.trim() || timeIn === '' || Number.isNaN(parsedTime)) {
      setResult('Please enter an employee name and a valid time-in value.')
      return
    }

    let status = 'On Time'
    let message = 'Status: On Time - Good job!'

    if (parsedTime > 8) {
      status = 'Very Late'
      message = 'Status: Very Late - Report to your supervisor.'
    } else if (parsedTime > 7) {
      status = 'Late'
      message = 'Status: Late - Please be on time tomorrow.'
    }

    setResult(`${employee.trim()} - Time In: ${parsedTime}. ${message} (${status})`)
  }

  const handleReset = () => {
    setEmployee('')
    setTimeIn('')
    setResult(null)
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Activity 5 - Employee Attendance Checker</h2>
        <p>Use decimal input and conditional rendering for attendance status.</p>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          Employee Name
          <input
            value={employee}
            onChange={(event) => setEmployee(event.target.value)}
            type="text"
            placeholder="Alex Cruz"
          />
        </label>

        <label>
          Time In
          <input
            value={timeIn}
            onChange={(event) => setTimeIn(event.target.value)}
            type="number"
            min="0"
            step="0.1"
            placeholder="8.5"
          />
        </label>

        <div className="button-row">
          <button type="submit" className="primary-button">
            Check Attendance
          </button>
          <button type="button" className="secondary-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {result ? <div className="result">{result}</div> : (
        <div className="result muted-box">
          <p>Result panel will show the attendance status and message.</p>
        </div>
      )}
    </section>
  )
}

export default AttendanceActivity
