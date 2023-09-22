import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  Firstname: Yup.string()
    .min(2, 'Too Short!')
    // Too short give msz
    .max(50, 'Too Long!')
    .required('Required'),
  Lastname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Signup = () => {
  // initialize formik
  const signupForm = useFormik({
    initialValues: {
      Firstname: '',
      Lastname: '',
      email: '',
      Password: '',
      

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

    },
     validationSchema : SignupSchema
  })
  // npm i yup command run to apply validation

  return (
    <div className='container' style={{ width: '1600px', height: '800px', border: '2px solid black', backgroundImage: 'url("https://img.freepik.com/premium-photo/spring-nature-concept_52701-112.jpg?w=2000")' }}>

      <div className='card' style={{
        height: '700px', width: '410px', border: '2px sold black', display: 'flex'
        , alignItems: 'center', marginLeft: '400px', boxShadow: '5px', fontFamily: 'Arial', marginTop: '40px', borderRadius: '10px', backgroundColor: 'transparent', paddingLeft: '20px'
      }}>
        <h2 style={{ marginTop: '10px', textShadow: '2px 2px green' }}>Sign Up</h2>
        <form onSubmit={signupForm.handleSubmit} style={{ marginLeft: '10px' }}>
          <label >First name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.Firstname}</span>
          
          <input id="Firstname" onChange={signupForm.handleChange} value={signupForm.values.Firstname} style={{ width: '330px', borderRadius: '3px', height: '30px', borderBottom: '2px solid black' }} type="text" placeholder='First name' required /><br />
          {/* ******** ****** ******** */}
          <label style={{ marginTop: '20px' }}>Last name</label><br />
          <span style={{color:'red',fontSize:'10px',marginLeft:'10px'}} >{signupForm.errors.Lastname}</span>
          <input id="Lastname" onChange={signupForm.handleChange} value={signupForm.values.Lastname}  style={{ width: '330px', borderRadius: '3px', height: '30px', marginTop: '10px' }} type="text" placeholder='Last name' required /><br />
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

    </div>
  )
}

export default Signup;