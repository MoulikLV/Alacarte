import React from 'react'
import TopBar from '../components/TopBar'
import Itemsdata from '../components/Itemsdata'
import Chains from '../components/Chains'
import Firmcollections from '../components/Firmcollections'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <>
      
      <div className='topBar'>
        <TopBar  />
        </div>
      <div className='landingSectionItems'>
      <Itemsdata/>
      <Chains/>
      <Firmcollections/>
     
      </div>
      <Footer/>
    
    
    </>
      
    
  )
}

export default LandingPage
