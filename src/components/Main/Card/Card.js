import React from 'react'
import './Card.scss'
import {RemoveButton} from "../../Buttons/Button"

const Card = () => {
  return (
    <div className="main__cards">
      <div className="main__card">
        <div className="main__card-content">
          <span className="main__card-title">##TITLTE##</span>
          <span className="main__card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit.</span>
        </div>

        <RemoveButton>
          Удалить
        </RemoveButton>

      </div>
    </div>
  )
}

export default Card