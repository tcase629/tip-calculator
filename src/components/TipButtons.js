import Button from './Button'

const TipButtons = () => {
  return (
    <div className='btn_container'>
      <Button value={5} />
      <Button value={10} />
      <Button value={15} />
      <Button value={25} />
      <Button value={50} />
      <Button value={0} />
    </div>
  )
}

export default TipButtons