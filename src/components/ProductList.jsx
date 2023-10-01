import React, { useState } from 'react'
import productData from './dummydata';
const ProductList = () => {
  // by usestate snippet
  const [productArray, setProductArray] = useState(productData);
  let brands  = ['Acer','Apple','DELL','hp','Samsung','Vivo','Lenovo','ASUS'];

  const searchProduct = (e)=>{
 let search = e.target.value;
//  .toLowercase use for search when user search with any size of data like capital or small alphabet
 let filterData = productData.filter((product)=>{return product.model.toLowerCase().includes(search.toLowerCase())});
   setProductArray(filterData);
  }
  
  const filterbrand = (e)=>{
    let search = e.target.value;
    let filterData = productData.filter((product)=>{return product.brand.toLowerCase().includes(search.toLowerCase())});
   setProductArray(filterData);

  }


  return (
    <div>
      <header className='bg-dark'>
        <div className="container py-5">
          <h1 className='text-center display-2 fw-bold text-white'>Product listing Page</h1>
          <input onChange={searchProduct} type="text" className='form-control my-4 w-75 mx-auto' />
          <select onChange = {filterbrand} className='form-control w-25 mt-4'>
            {
              brands.map((b)=>{
                return <option value={b}>{b}</option>
              })
            }
            
          </select>
        </div>
         </header> 
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