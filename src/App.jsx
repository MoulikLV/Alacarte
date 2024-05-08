import React from 'react'
import LandingPage from './alacarte/pages.jsx/LandingPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Productsmenu from './alacarte/components/Productsmenu'
import TermsandConditions from './alacarte/components/TermsandConditions'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/productsmenu/:firmId/:firmName' element={<Productsmenu/>} />
         <Route path='/terms-and-conditions' element={<TermsandConditions/>}/>
      </Routes>
    </div>
  )
}

export default App
