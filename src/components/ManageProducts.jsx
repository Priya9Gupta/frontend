import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom';


const   ManageProducts = () => {

  const [productList,setproductList]=useState([]);
  const fetchProductData = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    console.log(res.status);
    const data= await res.json();
   
    console.table(data);
    setproductList(data);
  };


// useeffect is use for the result on manageuser without click the button 
  useEffect(() => {
  fetchProductData();
  }, []);
  
  const deleteProduct =async(id)=>{
    console.log(id)
    const res = await fetch('http://localhost:5000/product/delete/'+id,{
    method :'DELETE'
   });
   console.log(res.status)
   // to show the deleted component on page without refresh the page.
   if (res.status === 200){
   fetchProductData();
   toast.success('Product Deleted Successfully');
   }
  }
  
  return (
    
    <div className='vh-100 bg-body-dark'>
     <div className='container py-3'>
     <h1 className='text-center my-2'>Manage Product</h1>
     </div>
      
    <table className="table table-success">
  <thead>
    <tr> 
      {/* // table row = tr*/}
      <th scope="col">S. No.</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Core</th>
      <th scope="col">Price</th>
       {/* <th>Edit</th>       */}
      
       <th colSpan={2}>Actions</th>
       
    </tr>
  </thead>
  <tbody>

    {
       productList.map((product,index)=>(
    <tr key = {product._id}>
      <td>{index+1}</td>
      <td>{product.name}</td>
      <td>{product.brand}</td>
      <td>{product.core}</td>
      <td>{product.price}</td>
      <td><Link to={'/updateproduct/'+product._id} className='btn btn-primary'>
        Edit
        </Link></td>
       <td> <button className='btn btn-success' onClick={()=>{deleteProduct(product._id)}}>Delete</button></td>

    </tr>
    ))
    }
  </tbody>
</table>
</div>
  )
}

export default ManageProducts;