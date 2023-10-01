import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
       

const UpdateUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate()

    const fetchUserData = async ()=>{
            const res = await fetch('http://localhost:5000/user/getbyid/'+id);
            const data = await res.json();
            console.log(data);
            setUserData(data);}
           
            useEffect(() => {
              fetchUserData();
            }, [])
           
           
            const submitform = async (values) => {
              const res = await fetch ('http://localhost:5000/user/update/'+id,{
                method:'PUT',
                body:JSON.stringify(values),
                headers:{
                  'Content-Type' :'application/json'
                }
              });
            
            
            

            console.log(res.status);
            if (res.status===200){
              Swal.fire({
                icon:'icon',
                title:'User Updated'
              });
              navigate('/ManageUsers');
            }
          }
    
   
    
    
  return (
    <div>
        <div className='card' style={{
        height: '700px', width: '410px', border: '2px sold black', display: 'flex'
        , alignItems: 'center', marginLeft: '400px', boxShadow: '5px', fontFamily: 'Arial', marginTop: '40px', borderRadius: '10px', backgroundColor: 'transparent', paddingLeft: '20px'
      }}>
        <h2 style={{ marginTop: '10px', textShadow: '2px 2px green' }}>Create Account</h2>
           
       {
        userData!==null?(
         
         
          <Formik
          initialValues={userData}
          onSubmit={submitform}
          >
         {
         (signupForm) => (
          <form onSubmit={signupForm.handleSubmit} style={{ marginLeft: '10px' }}>
          <label >First name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.firstname}</span>
          
          <input id="firstname" onChange={signupForm.handleChange} value={signupForm.values.firstname} style={{ width: '330px', borderRadius: '3px', height: '30px', borderBottom: '2px solid black' }} type="text" placeholder='First name' required /><br />
          {/* ******** ****** ******** */}
          <label style={{ marginTop: '20px' }}>last name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.lastname}</span>
          <input id="lastname" onChange={signupForm.handleChange} value={signupForm.values.Lastname}  style={{ width: '330px', borderRadius: '3px', height: '30px', marginTop: '10px' }} type="text" placeholder='Last name' required /><br />
          {/* ******* ****** ******* ***** */}
          <label style={{ marginTop: '20px' }}>Email</label><br />
          <input id="email" onChange={signupForm.handleChange} value={signupForm.values.email} style={{ width: '330px', borderRadius: '3px', height: '30px', marginTop: '10px' }} type="text" placeholder='Your email' required /><br />
          {/* ******* ****** ******* ***** */}
            
          <label style={{ marginTop: '20px' }}>Password</label><br />
          <input id="Password" onChange={signupForm.handleChange} value={signupForm.values.Password} style={{ width: '330px', borderRadius: '3px', height: '30px' }} type="password" placeholder='Password' required />
          <p className='text-center' style={{ fontSize: 'large', marginLeft: '10px', marginTop: '15px' }}>Already a member?<span style={{ color: 'blue' }}>Login</span></p>
          
          <button style={{
            height: '40px', width: '100px', backgroundColor: 'black', color: 'white', borderRadius: '5px',
            marginBottom: '15px'
          }} type='submit'>Sign up</button>
          <p style={{ color: 'red', textAlign: 'center' }}>If an error occurs when filling a form, a message will show here.</p>
          <p className='text-center' style={{ color: 'blue' }}>Forgot Password</p>
        </form>)
         }

        </Formik>
        ) : <h1 className='text-center my-5'>Loading....</h1>}
  
        
        
        
        
      </div>
       
    </div>
  )
  
        }
export default UpdateUser 