import React from 'react'

const Output = () => {
  return (
    <div>
      <div className="output">
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
            <div className="bottom">
              <button>RESET</button>
            </div>
          </div>  
    </div>
  )
}

export default Output