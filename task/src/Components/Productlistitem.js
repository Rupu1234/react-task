import React from 'react'

export default function Productlistitem(props) {
  return (
    <div>Productlistitem

<div className='cart m-2 cursor-pointer'>
        <div className='mt-2'>
           <img src={props.thumbnail} height={150} width={180} alt={props.title}  className='image'/>
        </div>
    

    <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>price:{`$${props.price}`}</h6>
        <h6 className='mt-2'>Discount:{props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating:{props.rating}</h6>
        <div>
            {props.stock >0?<button className='btn btn-success'>Available</button>:
            <button className='btn btn-outline-danger'>out of stock</button>}
        </div>
    </div>
   </div>  
    </div>
  )
}
