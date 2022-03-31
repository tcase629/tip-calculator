import React from 'react'

const Input = () => {
  return (
    <div>
      <div className="input">
            <div className="bill">
              <div className="label_wrap">
                <label>Bill</label>
              </div>
              <div className="input_wrap">
                <input 
                  className="input_text"
                  name="bill"
                  type="number" 
                  placeholder="0"
                />
                <img src="images/icon-dollar.svg" alt="" />
              </div>
            </div>
            <div className="tip">
              <div className="label_wrap">
                <label>Select Tip %</label>
              </div>
              <div className="button_container">
                <div className="btn">5%</div>
                <div className="btn">10%</div>
                <div className="btn">15%</div>
                <div className="btn">25%</div>
                <div className="btn">50%</div>
                <input 
                  className="input_text"
                  name="tip"
                  type="text"
                  placeholder="Custom"
                />
              </div>
            </div>
            <div className="people">
              <div className="label_wrap">
                <label>Number of People</label>
              </div>
              <div className="input_wrap">
                <input 
                  className="input_text"
                  name="people"
                  type="text" 
                  placeholder=""
                />
                <img src="images/icon-person.svg" alt="" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Input