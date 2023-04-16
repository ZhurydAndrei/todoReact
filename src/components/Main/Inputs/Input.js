import React from 'react'
import './Inputs.scss'

const Input = () => {
  return (
    <div className="main__inputs">
      <input type="text" placeholder="Введите название" className="main__input"/>
      <input type="text" placeholder="Введите описание" className="main__input"/>
    </div>
  )
}

export default Input