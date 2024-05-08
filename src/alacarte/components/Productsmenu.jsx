import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../api'
import TopBar from './TopBar'

import { ThreeDots } from 'react-loader-spinner'

const Productsmenu = () => {


    

    const [products,setProducts]=useState([])

    const {firmId,firmName}=useParams()

    const [loading,setLoading]=useState(false)

    const productsHandler=async()=>{
      setLoading(true)
        try {
            const response= await fetch(`${API_URL}/product/${firmId}/products`)
            const newData= await response.json()
            setProducts(newData.products)

            console.log('this is product data',newData)
        } catch (error) {
            
        }finally{
          setLoading(false)
        }
    }


    useEffect(()=>{
        productsHandler()
    },[])

  return (
   <>
 <TopBar/>
<section className='productSection'>
        <h3>{firmName}</h3>
        {loading? (
        <div className='loaderSpinner'>
          <ThreeDots visible={true} height="80" width="80" color="#4fa94d" radius="9" ariaLabel="three-dots-loading"
           wrapperStyle={{}}
           wrapperClass=""
           /> 
        </div> ): (
          <div>
                 {products.length>0? products.map((item)=>{
            return (
                <>
                
                 <div className='productDetails'>
                   <div className='productsVariables'>
                     
                      <div>{item.productName}</div>
                      <div>{`Rs.${item.price}`}</div>
                      <div className='description'>
                        <p>{item.description}</p>
                      </div>
                   </div>
                   <div className='productImage'>
                      <img src={`${API_URL}/uploads/${item.image}`}/>
                      <div className='addBtn'>ADD</div>
                   </div>
                 </div>
                </>
            )
        }): <p>Oops..No products </p>}
          </div>
        ) }
       
    </section>
   
   </>
  )
}

export default Productsmenu
