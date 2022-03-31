import React from 'react'

const Output = () => {
  return (
    <div className="output">
      <div className="amount">
        <div className="amount_wrap">
          <div className="tipAmount">
            <label>Tip Amount</label>
            <p>/ person</p>
          </div>
          <div className="value">$0.00</div>
        </div> 
        <div className="amount_wrap"> 
          <div className="totalAmount">
            <label>Total</label>
            <p>/ person</p>
          </div>
          <div className="value">$0.00</div>
        </div>
      </div>
      <div className="bottom">
        <button className="reset-btn">RESET</button>
      </div>
    </div> 
  )
}

export default Output