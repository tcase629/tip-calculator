import React, { useState } from 'react'
import Input from './Input'
import Output from './Output'

const Calculator = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  const [reset, setReset] = useState(false)

  const onReset = () => {
    if (reset) {
      setBill(0)
      setPeople(0)
      setTip(0)
      setReset(false)
    }
  }

  return (
    <div className="container" onChange={() => setReset(true)}>
      <Input bill={bill} setBill={setBill} tip={tip} setTip={setTip} people={people} setPeople={setPeople} setReset={setReset} />
      <Output bill={bill} tip={tip} people={people} calcReset={onReset} reset={reset} />
    </div>
  )
}

export default Calculator