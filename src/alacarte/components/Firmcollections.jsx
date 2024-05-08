import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api'
import { Link } from 'react-router-dom'

const Firmcollections = () => {

    const [firmData,setFirmData]=useState([])

    const [selectedRegion,setSelectedRegion]=useState('All')

    const getfirmDetails=async()=>{
        try {
            const response= await fetch(`${API_URL}/vendor/all-vendors`)
            const  newData= await response.json()
            setFirmData(newData)

            console.log('this is firmData2',newData)
        } catch (error) {
            
        }
    }

    const filterHandler=(region)=>{
        setSelectedRegion(region)
    }

    useEffect(()=>{
        getfirmDetails()
    },[])
  return (
    <>
     <h2>Restaurants with Online delivery in Vizag</h2>
     <button onClick={()=>filterHandler('All')}>All</button>
     <button onClick={()=>filterHandler('south-indian')}>South-Indian</button>
     <button onClick={()=>filterHandler('north-indian')}>North-Indian</button>
     <button onClick={()=>filterHandler('chinese')}>Chinese</button>
     <button onClick={()=>filterHandler('Bakery')}>Bakery</button>
     
    
    <div className='firmSection'>
      {firmData.vendors && firmData.vendors.map((vendor)=>{
        return (
            <>
            <div className='firmBox'>
                {vendor.firm.map((item)=>{
                    if(selectedRegion==='All' || 
                        item.region.includes(selectedRegion.toLocaleLowerCase())
                    ){
                        return(
                        <Link to={`/productsmenu/${item._id}/${item.firmName}`} className='link'>

         <div className='vendorGroupbox'>
                         <div className='vendorGroup'>
                            <img src={`${API_URL}/uploads/${item.image}`} />
                            <div className='firmOffer'>
                               {item.offer}
                            </div>
                            {/* {item._id} */}
                            <div className='firmDetails' >
                                
                             <strong>
                               {item.firmName}
                             </strong>
                           <div className='firmCate'>
                            {item.region.join(','," ")}
                            </div>
                           <div className='firmCate' >
                           {item.area}
                           </div>
                            
                           

                         </div>
                         </div>
                         
                     </div>
                     </Link>
                        
                )}
                
                    
      })}

            </div>
            </>
        )
        return null
      })}
    </div>
    </>
    
  )
}

export default Firmcollections
