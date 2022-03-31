import money from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import TipButtons from './TipButtons'

const Input = () => {
  return (
    <div className="input">
      <div className="bill">
        <div className="label_wrap">
          <label>Bill</label>
        </div>
        <div className="input_wrap">
          <img src={money} alt="" />
          <input 
            className="input_text"
            name="bill"
            type="text" 
            placeholder="0"
          />
        </div>
      </div>
      <div className="tip">
        <div className="label_wrap">
          <label>Select Tip %</label>
        </div>
        <div className="button_container">
          <TipButtons />
        </div>
      </div>
      <div className="people">
        <div className="label_wrap">
          <label>Number of People</label>
        </div>
        <div className="input_wrap">
          <img src={person} alt="" />
          <input 
            className="input_text"
            name="people"
            type="text" 
            placeholder="0"
          />
        </div>
      </div>
    </div>
  )
}

export default Input