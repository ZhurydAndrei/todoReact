import React from 'react'
import './Button.scss'

export const Button = () => {
  return (
    <div className="buttons">
      <button className="button">
        Добавить
      </button>
    </div>
  )
}

export const logger = () => {
  console.log('LOGGER')
}

// export default Button