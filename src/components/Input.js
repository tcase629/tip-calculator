import money from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import TipButtons from './TipButtons'

const Input = ({ bill, setBill, tip, setTip, people, setPeople, setReset }) => {
  return (
    <div className="input">
      <div className="bill">
        <div className="label_wrap">
          <label>Bill</label>
        </div>
        <div className="input_wrap">
          <img src={money} alt="" />
          <input
            type="number" 
            placeholder="0"
            value={bill || ''}
            autoComplete="off"
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
      </div>
      <div className="tip">
        <div className="label_wrap">
          <label>Select Tip %</label>
        </div>
        <div className="button_container">
          <TipButtons tip={tip} setTip={setTip} setRest={setReset} />
        </div>
      </div>
      <div className="people">
        <div className="label_wrap">
          <label>Number of People</label>
        </div>
        <div className="input_wrap">
          <img src={person} alt="" />
          <input
            type="number" 
            placeholder="0"
            value={people || ''}
            autoComplete="off"
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Input