import React from 'react'

const Signup = () => {
  return (
    <div className='container' style={{width:'1600px',height:'600px',border:'2px solid black',backgroundImage:'url("https://img.freepik.com/premium-photo/spring-nature-concept_52701-112.jpg?w=2000")'}}>
     
      <div className='card' style={{ height:'550px',width:'410px',border:'2px sold black',display:'flex'
    ,alignItems:'center',marginLeft:'400px',boxShadow:'5px',fontFamily:'Arial',marginTop:'40px',borderRadius:'10px',backgroundColor:'transparent',paddingLeft:'20px'}}>
       <h2 style={{marginTop:'10px',textShadow:'2px 2px green'}}>Sign Up</h2> 
       <div style={{marginLeft:'10px'}}>
       <label >First name</label><br />
       <input mb-4 style={{width:'330px', borderRadius:'3px', height:'30px',borderBottom:'2px solid black'}} type="text" placeholder='First name' required /><br />
       {/* ******** ****** ******** */}
       <label style={{marginTop:'20px'}}>Last name</label><br />
       <input mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="text" placeholder='Last name' required /><br />
       {/* ******* ****** ******* ***** */}
       <label style={{marginTop:'20px'}}>Email</label><br />
       <input mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="text" placeholder='Your email' required /><br />
           {/* ******* ****** ******* ***** */}
       
       <label style={{marginTop:'20px'}}>Password</label><br />
       <input mb-4 style={{width:'330px', borderRadius:'3px', height:'30px'}} type="number" placeholder='Password' required />
       <p className='text-center' style={{fontSize:'large',marginLeft:'10px'}}>Already a member?<p style={{color:'blue'}}>Login</p></p>
       
       <button style={{height:'40px',width:'100px',backgroundColor:'black',color:'white', borderRadius:'5px',
        marginBottom:'15px'
      }}>Sign up</button>
       <p style={{color:'red', textAlign:'center'}}>If an error occurs when filling a form, a message will show here.</p>
       </div>
      </div>

    </div>
  )
}

export default Signup ;