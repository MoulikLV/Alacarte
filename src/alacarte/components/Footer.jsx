import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerDetails'>
       <div className='companyName'>
        <h3> A la`carte</h3>
        <p>By Moulik Lv</p>
        
        </div>
       <div className='contact'>
           <h4>Contact US</h4>
             <p><a href='mailto:saimoulik05bunny@gmail.com'>saimoulik05bunny@gmail.com</a></p>
       </div>
       <div className='legal'>
           <h4>Legal</h4>
           <Link   to='/terms-and-conditions' target='_self'  ><p>Terms & Conditions</p></Link>
       </div>
      </div>
    </div>
  )
}

export default Footer
