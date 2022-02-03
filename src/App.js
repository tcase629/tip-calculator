import { useState } from 'react';
import './App.css';

const App = () => {
  const [bill, setBill] = useState('')
  const [tipAmount, setTipAmount] = useState('')
  const [total, setTotal] = useState('')
  const [totalPeople, setTotalPeople] = useState('')
  const [percent, setPercent] = useState('')

  

  return(
    <>
      <div className='container'>
        <div className="header"></div>
        <div className="card">
          <div className="input">
            <div className="bill">
              <h3>Bill</h3>
              <input 
                type="text" 
                placeholder="images/icon-dollar.svg"
              />
            </div>
            <div className="tip">
              <h3>Select Tip %</h3>
              <select name="percent_amount" id="percent">
                <option value="1">5%</option>
                <option value="2">10%</option>
                <option value="3">15%</option>
                <option value="4">25%</option>
                <option value="5">50%</option>
                <option value="6">Custom</option>
              </select>
            </div>
            <div className="people">
            <h3>Number of People</h3>
              <input 
                type="text" 
                placeholder="images/icon-person.svg"
              />
            </div>
          </div>
          <div className="output">
            <div className="top">
              <div className="tipAmount">
                <h3>Tip Amount</h3>
                <p>/ person</p>
              </div>
              <div className="totalAmount">
                <h3>Total</h3>
                <p>/ person</p>
              </div>
            </div>
            <div className="bottom">
              <button>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
