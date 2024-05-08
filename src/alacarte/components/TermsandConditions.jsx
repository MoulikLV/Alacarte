import React, { useEffect } from 'react'

const TermsandConditions = () => {

    useEffect(()=>{
       
        document.title="Terms & Conditions | Alacarte"
    },[])

  return (
    <>
      <div className='terms'>
      <section>
         <div className='rules'>
            <h3>A la`carte</h3>&nbsp;&nbsp;&nbsp;
            <p>Terms and Conditions</p>
         </div>
      </section>
    </div>
    <div className='termstext'>
        <p style={{fontWeight:'600'}}>A la`carte-Terms of Use- V08-May 2024</p>
        <p>{`By accessing and using our platform, you agree to 
        comply with these terms and conditions. 
        Our platform serves as a marketplace connecting 
        users with restaurants and delivery partners for 
        food delivery services. While we strive to provide 
        accurate information and ensure a seamless experience, 
        we do not guarantee the availability, accuracy, or quality 
        of the services provided by restaurants or 
        delivery partners. Users are responsible for
         verifying the details of orders and ensuring 
         their satisfaction with the products and services 
         received. We reserve the right to modify, suspend, 
         or terminate our services at any time without prior 
         notice. By using our platform, you acknowledge and 
         accept these terms and conditions, as well as our privacy policy.`}</p>
         <p style={{fontWeight:'600'}}>Terms of Use</p>
         <p className='termspara' style={{marginLeft:'35px'}}>{`Furthermore, users are required to provide accurate and up-to-date information during registration and ordering processes. Any misuse or fraudulent activities on our platform are strictly prohibited and may result in the suspension or termination of user accounts. Users are solely responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their accounts. We will not be liable for any loss or damage arising from unauthorized access to user accounts or misuse of account information.

Additionally, users agree to abide by all applicable laws and regulations governing online transactions and food delivery services in their respective jurisdictions. Any disputes or claims arising from the use of our platform shall be resolved through arbitration in accordance with the laws of INDIA. These terms and conditions constitute the entire agreement between users and our platform, superseding any prior agreements or understandings. We reserve the right to update or modify these terms and conditions at any time, and users are encouraged to review them periodically for changes.`}</p>

        
    </div>
    </>
  )
}

export default TermsandConditions
