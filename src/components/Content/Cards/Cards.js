import React from 'react'
import {RemoveButton} from "../../Buttons/Button"
import Card from "../Card/Card"
import './Cards.scss'

const Cards = () => {
  return (
    <div className="main__cards">
      <div className="main__card">
        <Card />
        <RemoveButton>
          Удалить
        </RemoveButton>
      </div>
    </div>
  )
}

export default Cards