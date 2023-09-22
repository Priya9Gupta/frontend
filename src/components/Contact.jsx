import React from 'react'

const Contact = () => {
  return (
    <div className='container d-flex flexDirection-row'>
     <form className='card' style={{width:'350px',height:'620px',marginTop:'10px',marginLeft:'350px',borderTop:'2px solid black',boxShadow:'0px 2px 0px 2px blue',borderBottom:'2px solid black',borderRadius:'10px',fontFamily:'cursive'}}>
      <h3 className='text-center mt-1'>Contact Us </h3>
      <p className='text-center text-secondary mt-0'>we will get back to you asap!</p>
     <label style={{marginLeft:'20px'}} htmlFor="">Full name <sup style={{color:'red'}}>*</sup></label>
     <input type="text" style={{width:'290px',height:'30px',marginLeft:'20px',marginBottom:'5px'}} placeholder='Enter your name' required/>
     <label style={{marginLeft:'20px'}}  htmlFor="">Email<sup style={{color:'red'}}>*</sup></label>
     <input type="text" style={{width:'290px',height:'30px',marginLeft:'20px',marginBottom:'5px'}} placeholder='Enter your mail' required/>
     <label style={{marginLeft:'20px'}}  htmlFor="">Message<sup style={{color:'red'}}>*</sup></label>
     <input type="text" style={{width:'290px',height:'30px',marginLeft:'20px',marginBottom:'5px'}} placeholder='Message' required/>
     <label style={{marginLeft:'20px'}}  htmlFor="">Additional Address<sup style={{color:'red'}}>*</sup></label>
     <input type="text" style={{width:'290px',height:'70px',marginLeft:'20px',marginBottom:'5px'}} required/>
     <br />
     <button className='my-btn' style={{width:'210px',height:'35px',borderRadius:'10px',marginLeft:'60px',backgroundColor:'blue',color:'white',marginTop:'none'}} type="submit">Submit</button>     
     <hr  className='mx-4'/>
     <h4 style={{color:'crimson',marginBottom:'10px',marginLeft:'30px'}}>Contact Information</h4>
     <button style={{width:'300px',background:'transparent',border:'none'}}>
     <i class="fa-solid fa-location-dot d-flex justify-content-space-around"></i>
      <p style={{margin:'0px',paddingBottom:'10px'}}>vill-Korauli,Post-Gontha,Dist-Mau</p>
     </button>
     <button style={{width:'210px',border:'none',background:'transparent'}}> 
     <i class="fa-solid fa-phone mx-3" ></i>+91 1234567890</button>
     <button style={{width:'210px',border:'none',background:'transparent'}}>
     <i class="fa-solid fa-envelope mx-3" ></i>jsbh@gmail.com
     </button>
     
     </form>
     {/* <div className='card2' style={{width:'350px',height:'500px',marginTop:'50px',boder:'2px solid black',boxShadow:'0px 0px 2px 2px red'}}>

     </div> */}

    </div>
  )
}

export default Contact;