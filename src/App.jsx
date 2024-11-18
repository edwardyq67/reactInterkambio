import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Interkambio from './view/Interkambio'
import NavBar from './NavBar/NavBar'
import Example from './view/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Interkambio />} />
      </Routes>
    </HashRouter>
  )
}

export default App
