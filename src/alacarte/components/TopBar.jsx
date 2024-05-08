import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className='topBarSection'>
        <div className='companyTitle' >
            <Link to='/' className='link'>
             <h2>A la carte</h2>
            </Link>
        </div>
        <div className='searchInput'>
            <input type='text' placeholder='search..'/>
        </div>
        <div className='authUser'>
            Login / SignUp
        </div>
      
    </div>
  )
}

export default TopBar
