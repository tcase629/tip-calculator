import Button from './Button'
import CustomButton from './CustomButton'

const TipButtons = () => {
  return (
    <div className='btn_container'>
      <Button value={5} />
      <Button value={10} />
      <Button value={15} />
      <Button value={25} />
      <Button value={50} />
      <CustomButton />
    </div>
  )
}

export default TipButtons