import React from 'react';
import {useFormik} from 'formik';


const Login = () => {
const LoginForm = useFormik({
initialValues:{
  Email:'',
  Password:'',
  ConfirmPassword:'',
},
onSubmit: (values) => {
  console.table(values);
  
}
});

  return (
    
        <div className='container mt-3 ' style={{fontStyle:'inherit',fontFamily:'Arial',border:"2px solid black", height:'580px', width:"600px",backgroundImage:'url("https://www.nawpic.com/media/2020/solid-color-nawpic-8-e1648060962831.jpg")'
      ,backgroundRepeat:'no-repeat'}}>
     <div className='card mt-3' style={{ height:'530px',width:'450px',border:'2px sold black',display:'flex'
   ,alignItems:'center',marginLeft:'200px',backgroundColor:'aqua',boxShadow:'2px 2px  black',fontFamily:'Arial',borderRadius:'10px',paddingLeft:'30px'}}>
      <h2 style={{marginTop:'10px',textShadow:'2px 2px green'}}>Login form</h2> 
      <form onSubmit={LoginForm.handleSubmit} style={{marginLeft:'10px'}}>
      
      {/* ******** ****** ******** */}
      
      <label style={{marginTop:'20px'}}>Email</label><br />
      <input id="Email" onChange={LoginForm.handleChange} value={LoginForm.values.Email} mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="text" placeholder='Your email' required /><br />
          {/* ******* ****** ******* ***** */}
      
      <label style={{marginTop:'20px'}}>Password</label><br />
      <input id="Password" onChange={LoginForm.handleChange} value={LoginForm.values.Password} mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="Password" placeholder='Password' required />
      {/* ******* ****** ****** ***** */}
      <label style={{marginTop:'20px'}}>Confirm  Password</label><br />
      <input id="ConfirmPassword" onChange={LoginForm.handleChange} value={LoginForm.values.Password} mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="Password" placeholder='Confirm Password' required />

            <p className='text-center' style={{fontSize:'large',marginTop:'15px'}}>Already a member?<p style={{color:'blue'}}>Login</p></p>

      <input type="checkbox" /> Remember me <br />
      <button style={{height:'40px',width:'150px',backgroundColor:'blue',color:'white', borderRadius:'5px',
       marginBottom:'15px',marginTop:'10px',boxShadow:'1px 1px 1px 1px black'
     }} type='submit'>Login</button>
     <p className='text-center fw-bold mt-3'  style={{color:'blue'}}>Forgot Password</p>
      </form>
     </div>

               
          

        </div>
    
  )
}

export default Login