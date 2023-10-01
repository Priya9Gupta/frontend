import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom';

const ManageUsers = () => {

  const [userList,setUserList]=useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);
    const data= await res.json();
   
    console.table(data);
    setUserList(data);
  };

  
// useeffect is use for the result on manageuser without click the button

  useEffect(() => {
  fetchUserData();
  }, []);
  
  const deleteUser =async(id)=>{
    console.log(id)
    const res = await fetch('http://localhost:5000/user/delete/'+id,{
    method :'DELETE'
   });
   console.log(res.status)
   // to show the deleted component on page without refresh the page.
   if (res.status === 200){
   fetchUserData();
   toast.success('User Deleted Successfully');
   }
  }
  
  return (

    <div className='vh-100 bg-body-dark'>
     <div className='container py-3'>
     <h1 className='text-center my-4'>Manage Users</h1>
     </div>
      
    <table className="table table-success">
  <thead>
    <tr> 
      {/* // table row = tr*/}
      <th scope="col">S. No.</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      {/* <th scope="col">Last Name</th> */}
      <th scope="col">Email</th>
      <th scope="col">Passward</th>
       {/* <th>Edit</th>       */}
      
       <th colSpan={2}>Actions</th>
        
    </tr>
  </thead>
  <tbody>
   {
    userList.map((user,index)=>(
    <tr key = {user._id}>
      <td>{index+1}</td>
      <td>{user._id}</td>
      <td>{user.fullname}</td>
      {/* <td>{user.lastname}</td> */}
      <td>{user.email}</td>
      <td>{user.passward}</td>
      <td><Link to={'/updateuser/'+user._id} className='btn btn-primary'>
        Edit
        </Link></td>
       <td> <button className='btn btn-success' onClick={()=>{deleteUser(user._id)}}>Delete</button></td>

    </tr>
    ))
    }
  </tbody>
</table>
</div>
  )
}

export default ManageUsers;