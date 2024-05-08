import React from 'react'
import LandingPage from './alacarte/pages.jsx/LandingPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Productsmenu from './alacarte/components/Productsmenu'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/productsmenu/:firmId/:firmName' element={<Productsmenu/>} />
      </Routes>
    </div>
  )
}

export default App
