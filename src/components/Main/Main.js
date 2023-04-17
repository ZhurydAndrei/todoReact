import React from 'react'
import './Main.scss'

import Input from "./Inputs/Input"
import {AddButton} from "../Buttons/Button"
import Card from "./Card/Card"


const Main = () => {
  return (
    <div className="main">
      <div className="main__content">

        <Input />

        <AddButton>
          Добавить
        </AddButton>

      </div>
        <Card />
    </div>
  )
}

export default Main