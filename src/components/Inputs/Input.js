import React, {useState} from 'react'
import './Inputs.scss'

const Input = () => {
  const [title, setTitle] = useState('')


  const logger = () => {
    console.log('Logger')
  }

  return (
    <div className="main__inputs">
      <input
        type="text"
        placeholder="Введите название"
        className="main__input"
        onChange={logger}
      />
      <input type="text" placeholder="Введите описание" className="main__input"/>
    </div>
  )
}

export default Input