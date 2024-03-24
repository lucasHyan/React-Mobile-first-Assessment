import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar } from './layout/AppBar/AppBar'
import {HomePage} from './pages/HomePage'

function App() {

  return (
    <>
      <AppBar />  
      <HomePage />

    </>
  )
}

export default App
