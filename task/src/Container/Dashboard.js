import React from 'react'
import ProductCart from '../Components/ProductCart'
import { ProductList } from '../Datas/ProductsList'

export default function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {ProductList.map((Product)=> <ProductCart {...Product} key={Product.id}/>)}
    </div>
  )
}
