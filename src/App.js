import React from 'react'
import './styles/index.scss'

import Header from './components/Header/Header'
import Main from "./components/Main/Main"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  )
}

export default App