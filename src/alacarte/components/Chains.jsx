import React, { useEffect, useState } from 'react'
import { API_URL } from '../../api'
import { LuArrowRightCircle } from "react-icons/lu";
import { LuArrowLeftCircle } from "react-icons/lu";

import { ThreeDots } from 'react-loader-spinner'






const Chains = () => {
    const [vendorData,setVendordata]=useState([])

    const [scrollbar,setScrollBar]=useState(0)

    const [loading,setLoading]=useState(false)

    const handleScroll=(direction)=>{
      const gallery = document.getElementById('chainGallery')
      const scrollAmount=650

      if(direction==="left"){
        gallery.scrollTo({
          left:gallery.scrollLeft-scrollAmount,
          behavior:"smooth"
        })
      }else if(direction==='right'){
        gallery.scrollTo({
          left:gallery.scrollLeft+scrollAmount,
          behavior:"smooth"
        })
      }
    }

    const getVendorData=async()=>{
        setLoading(true)
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)

            const newData= await response.json()
            setVendordata(newData)

            console.log('this is api data',newData)
        } catch (error) {
            console.error('Error fetching vendor data:', error);
            alert('Failed to fetch data,please try again')
        }finally{
          setLoading(false)
        }
    }

    useEffect(()=>{
        getVendorData()

    },[])

  return (
    <>

    {loading ? <div className='loaderSpinner'>
       
       <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> 
       
      <h5>Loading...</h5>
    </div>: <>
      <div className='chainsdiv'>
      <><div className='scrollbtns'>
          <h3>Top restaurant chains in Vizag</h3>
          <div className='scrollbutton'>
            <span className='scrollicons' onClick={() => handleScroll('left')}><LuArrowLeftCircle /></span>&nbsp;
            <span className='scrollicons' onClick={() => handleScroll('right')}><LuArrowRightCircle /></span>
          </div>
        </div>
        <div className='chainSection' id='chainGallery' onScroll={(e) => setScrollBar(e.setScrollBar.scrollLeft)}>
            {vendorData.vendors && vendorData.vendors.map((vendor) => {
              return (
                <>
                  <div className='vendorBox'>
                    {vendor.firm.map((item) => {
                      return (
                        <>

                          <div className='firmImage'>
                            <img src={`${API_URL}/uploads/${item.image}`} />
                          </div>
                          <div className='chainfirmName'>
                              <strong>{item.firmName}</strong>
                          </div>


                        </>

                      );
                    })}
                  </div>
                </>
              );
            })}
          </div></>
      </div>
    </> }
    
   
    </>
    
  )
}

export default Chains
