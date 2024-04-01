import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar } from './layout/AppBar/AppBar'
import {HomePage} from './pages/HomePage'
import { Banner } from './layout/Banner'
import { ContentCards } from './layout/ContentCards'
import AboutText from './components/AboutText'
function App() {

  return (
    <>
      <AppBar />
      <Banner />  
      <HomePage />
      <ContentCards />

    </>
  )
}

export default App
