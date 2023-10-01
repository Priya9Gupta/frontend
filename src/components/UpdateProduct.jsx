import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const {id}=useParams();
    const fetchProductData = async ()=>{
            const res = await fetch('http://localhost:5000/product/getbyid/'+id);
            const data = await res.json();
            console.log(data);
    }
    useEffect(() => {
      fetchProductData();
    }, [])
    
  return (
    <div>
        <h1>{id}</h1>
       
    </div>
  )
}

export default UpdateProduct;