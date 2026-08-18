import { useState } from 'react'

function BillActivity() {
  const [customer, setCustomer] = useState('')
  const [consumption, setConsumption] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const kwh = Number(consumption)

    if (!customer.trim() || consumption === '' || Number.isNaN(kwh) || kwh <= 0) {
      setResult('Please enter a customer name and a valid consumption value.')
      return
    }

    let rate

    if (kwh <= 100) {
      rate = 10
    } else if (kwh <= 200) {
      rate = 12
    } else if (kwh <= 300) {
      rate = 15
    } else {
      rate = 18
    }

    const totalBill = kwh * rate
    const status = totalBill >= 5000 ? 'High Electricity Usage' : 'Normal Electricity Usage'

    setResult(
      `${customer.trim()} - Consumption: ${kwh} kWh, Rate: ${rate}, Total Bill: ${totalBill}. ${status}.`,
    )
  }

  const handleClear = () => {
    setCustomer('')
    setConsumption('')
    setResult(null)
  }

  return (
    <section className="panel">
      <div className="section-heading">
        <h2>Activity 4 - Electricity Bill Calculator</h2>
        <p>Use numeric input and multiple conditions for billing tiers.</p>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          Customer Name
          <input
            value={customer}
            onChange={(event) => setCustomer(event.target.value)}
            type="text"
            placeholder="Maria Santos"
          />
        </label>

        <label>
          Consumption (kWh)
          <input
            value={consumption}
            onChange={(event) => setConsumption(event.target.value)}
            type="number"
            min="0"
            step="0.1"
            placeholder="150"
          />
        </label>

        <div className="button-row">
          <button type="submit" className="primary-button">
            Calculate Bill
          </button>
          <button type="button" className="secondary-button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {result ? <div className="result">{result}</div> : (
        <div className="result muted-box">
          <p>Result panel will show the total bill and usage status.</p>
        </div>
      )}
    </section>
  )
}

export default BillActivity
