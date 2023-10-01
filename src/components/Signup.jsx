import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';
// 
import {motion} from 'framer-motion';


const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    // Too short give msz
    .max(30, 'Too Long!')
    .required('Required'),
  // Lastname: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
const navigate = useNavigate();


  // initialize formik
  const signupForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      

    },
    onSubmit: async (values) => {
      console.table(values);
      
     const res = await fetch('http://localhost:5000/user/add',{
       method:'POST',
       body:JSON.stringify(values),
       headers : {
       
        'Content-Type' : 'application/json',
        
       }
      });
      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon :'success',
          title :'Signup Success',
          text :'Now Login to continue'
        })
        navigate('/Login');
      }
      else{
        Swal.fire({
          icon : 'error',
          title :'Something went wrong',
          text :'Please Try Again'
        })
      }

    },
     validationSchema : SignupSchema
  })
  // npm i yup command run to apply validation
    
  return (
    <motion.div 

    // framer-motion animation
    // y and x direction y are opposite
    initial={{opacity:0,scale:0.1,x:'100%'}}
    animate={{opacity:1,scale:1,x:0}}
    transition={{duration:0.5, type:'spring',damping:15, stiffness:100}}
    
    className='container' style={{ width: '1600px', height: '800px', border: '2px solid black', backgroundImage: 'url("https://img.freepik.com/premium-photo/spring-nature-concept_52701-112.jpg?w=2000")' }}>

      <div className='card' style={{
        height: '700px', width: '410px', border: '2px sold black', display: 'flex'
        , alignItems: 'center', marginLeft: '400px', boxShadow: '5px', fontFamily: 'Arial', marginTop: '40px', borderRadius: '10px', backgroundColor: 'transparent', paddingLeft: '20px'
      }}>
        <h2 style={{ marginTop: '10px', textShadow: '2px 2px green' }}>Sign Up</h2>
        <form onSubmit={signupForm.handleSubmit} style={{ marginLeft: '10px' }}>
          <label >Full name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.fullname}</span>
           
          <input id="fullname" onChange={signupForm.handleChange} value={signupForm.values.fullname} style={{ width: '330px', borderRadius: '3px', height: '30px', borderBottom: '2px solid black' }} type="text" placeholder='Full name' required /><br />
          {/* ******** ****** ******** */}
          {/* <label style={{ marginTop: '20px' }}>Last name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.Lastname}</span>
          <input id="Lastname" onChange={signupForm.handleChange} value={signupForm.values.Lastname}  style={{ width: '330px', borderRadius: '3px', height: '30px', marginTop: '10px' }} type="text" placeholder='Last name' required /><br /> */}
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
        </form>
      </div>

    </motion.div>
  )
}

export default Signup;