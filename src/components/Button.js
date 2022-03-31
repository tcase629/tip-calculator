import React from 'react'

const Button = ({ value }) => {
  return (
    <button className="tip_btn">
      {value}%
    </button>
  )
}

export default Button