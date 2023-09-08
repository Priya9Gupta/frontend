import React, { useState } from 'react'
import productData from './dummydata';
const ProductList = () => {
  // by usestate snippet
  const [productArray, setProductArray] = useState(productData);
  return (
    <div>
      <div className='container'>
        <div className='row'>
      {productArray.map((product)=>{
        return ( 
        <div className='col-md-3'>
        <div className='card p-3' style={{width:'300px',height:'400px'}}>
          {/* {product.model} */}
        <img className='myimg' src={product.Image} alt="" />
        <div className='card-body'>
          <p>{product.brand}</p>
          <h4>{product.model}</h4>
          <p>{product.price}</p>
        </div>
        </div>
        </div>
      )
      })}
      </div>
    </div>
    </div>
  )
}

export default ProductList;