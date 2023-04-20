import React from 'react'
import './Main.scss'

import Input from "../Inputs/Input"
import {AddButton} from "../Buttons/Button"
import Cards from "../Content/Cards/Cards"


const Main = () => {
  return (
    <div className="main">
      <div className="main__content">

        <Input />

        <AddButton>
          Добавить
        </AddButton>

      </div>
        <Cards />
    </div>
  )
}

export default Main