import React, { useState } from 'react'
import { itemdata } from '../data'

const Itemsdata = () => {

    const [displayItems,setDisplayItems]=useState(itemdata)
    console.log(displayItems)

  return (
  <>
    <h2 className='mind'>What's on your mind?</h2>
    <div className='itemSection'>
      
      
      {displayItems.map((item)=>{
        return (
           <div className='gallery'>
            <img src={item.item_img} alt={item.item_img}/>
           </div>
        )
      })}
      
    </div>
  </>
  )
}

export default Itemsdata
