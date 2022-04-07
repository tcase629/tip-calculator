import React from 'react'

const Output = ({ bill, tip, people, calcReset }) => {
  const tipAmount = (bill * tip) / (100 * people)
  const total = bill / people + tipAmount

  return (
    <div className="output">
      <div className="amount">
        <div className="amount_wrap">
          <div className="tipAmount">
            <label>Tip Amount</label>
            <p>/ person</p>
          </div>
          <div className="value">${bill !== "" && people !== "" && people !== "0" ?
            tipAmount.toFixed(2) : "0.00"}
          </div>
        </div> 
        <div className="amount_wrap"> 
          <div className="totalAmount">
            <label>Total</label>
            <p>/ person</p>
          </div>
          <div className="value">${bill !== "" && people !== "" && people !== "0" ?
            total.toFixed(2) : "0.00"}</div>
        </div>
      </div>
      <div className="bottom">
        <button className="reset-btn" type="button" onClick={calcReset}>RESET</button>
      </div>
    </div> 
  )
}

export default Output