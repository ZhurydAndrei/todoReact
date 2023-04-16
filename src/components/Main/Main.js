import React from 'react'
import './Main.scss'

import Input from "./Inputs/Input"
import {Button} from "../Buttons/Button"

const Main = () => {
  return (
    <div className="main">
      <div className="main__content">

        <Input />


        <Button/>

      </div>
      <div className="main__cards">
        <div className="main__card">
          <div className="main__card-content">
            <span className="main__card-title">##TITLTE##</span>
            <span className="main__card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odit.</span>
          </div>
          <div className="main__card-buttons">
            <button className="main__card-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main