import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCart(props) {

      const navigate=useNavigate()

  return (
    <div className='cart m-2 cursor-pointer' role='button' style={{width:300}} onClick={()=>navigate(`/Products/${props.id}`)}>
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
  )
}
