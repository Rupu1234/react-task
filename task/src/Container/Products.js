import React from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { ProductList } from '../Datas/ProductsList'
import { addItems } from './Redux/Reducer/Card';

export default function Products() {
     
     const dispatch =useDispatch();
     const param =useParams();
     const item =ProductList.find((element)=> element.id===parseInt(param.id));
     
     const addToCard =()=>{ 
        dispatch(addItems(item))
     };

  return (
    <div className='cart m-2 '>
        <div className='mt-2'>
           <img src={item.thumbnail} height={350} width={400} alt={item.title}  className='image'/>
        </div>
    
    <div className='card-body mt-3'>
        <h5 className='card-title'>{item.title}</h5>
        <h6 className='mt-2'>price:{`$${item.price}`}</h6>
        <h6 className='mt-2'>Discount:{item.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating:{item.rating}</h6>
        <div className='mt-4'>
            {item.stock >0?(
            <>
            <button className='btn btn-success'>Buy now</button>
            <button className='ms-3 btn btn-success' onClick={addToCard}>Add To Card</button>
            </>):
            (<button className='btn btn-outline-danger'>out of stock</button>
            )}
        </div>
    </div>
   </div>
  )
}
