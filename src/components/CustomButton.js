const CustomButton = ({ tip, setTip }) => {
  return (
    <input 
      type="number" 
      placeholder="Custom" 
      className="custom_btn" 
      value={tip || 'Custom'}
      onChange={(e) => setTip(e.target.value)}
    />
  )
}

export default CustomButton