import CustomButton from './CustomButton'

const TipButtons = ({ tip, setTip, setReset }) => {
  const buttonAmount = [
    {
      id: '1',
      name: '5%',
      value: 5,
    },
    {
      id: '2',
      name: '10%',
      value: 10,
    },
    {
      id: '3',
      name: '15%',
      value: 15,
    },
    {
      id: '4',
      name: '25%',
      value: 25,
    },
    {
      id: '5',
      name: '50%',
      value: 50,
    }
  ]

  return (
    <div className='btn_container'>
      {buttonAmount.map((i) => (
        <button
          className='tip_btn'
          type='button'
          onClick={() => setTip(i.value)}
          key={i.id}
        >
          {i.name}
        </button>
      ))}
      <CustomButton tip={tip} setTip={setTip} />
    </div>
  )
}

export default TipButtons