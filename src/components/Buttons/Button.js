import React from 'react'
import './Button.scss'

export const AddButton = props => {
  return (
    <div className="buttons">
      <button className="button addBtn">
        {props.children}
      </button>
    </div>
  )
}

export const RemoveButton = props => {
  return (
    <div className="main__card-buttons">
      <button className="main__card-button button removeBtn">
        {props.children}
      </button>
    </div>
  )
}