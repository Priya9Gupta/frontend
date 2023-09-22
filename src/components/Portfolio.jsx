import React from 'react'

const Portfolio = () => {
  return (
    <div className=' head'style={{height:'1000px',width:'1350px',border:'2px solid black',background:'#23242c'}} >
      
    
    <div className='navbar text-white text-center'style={{height:'100px', width:'1200px',backgroundColor:'darkslateGrey',marginLeft:'30px',paddingright:'30px',border:'2px solid crimson'}} >
     
     <h2 style={{marginLeft:'400px'}}>Personal Portfolio Template</h2></div>
     
     <div style={{display:'flex',flexDirection:'row',marginLeft:'0px',marginRight:'0px'}} className=" w-100">
      <div style={{height:'900px',width:'320px',display:'flex',flexDirection:'column',marginTop:'10px'}}>
     <div className='card text-center' style={{height:'600px', width:'300px',marginLeft:'30px',paddingLeft:'10px',marginRight:'0px',backgroundColor:'#3d5a80',color:'white'}}>
     <img style={{height:'85px',width:'85px',borderRadius:'50%',marginLeft:'100px',marginTop:'20px'}}src="data:image/jpeg;base64,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" alt="" />
     <p className='mb-0 text-center'>Hello EVERYBODY, I AM</p>
     <h4 className='text-center mb-0'>Priya Gupta</h4> 
     <hr style={{marginLeft:'30px',marginRight:'30px'}} />
     

     <button className='btn btn-danger mb-2' style={{width:'150px',marginLeft:'60px'}}>Contact me</button>

      <button style={{border:'none',background:'transparent',color:'white'}}>
      <i className="fa-solid fa-phone" />     +91 7068076460
      </button>
      <button style={{border:'none',background:'transparent',marginBottom:'0px',display:'flex',justifyContent:'space-around',color:'white'}}>
      <i className="fa-regular fa-envelope" />priyagupta7068076460@gmail.com
      </button>
      <button style={{border:'none',background:'transparent',display:'flex',justifyContent:'space-around',color:'white'}}>
      <i className="fa-solid fa-address-card" />Vill-Korauli,Post-Gontha,Dist-Mau,Pin code-275303</button>
      <h5 classname=' para fs-100px' style={{color:'red'}}>Education</h5>
     <h5 classname=' para fs-100px' style={{color:'red'}}>Skills & Languages</h5>
     <h5 classname=' para fs-100px' style={{color:'red'}}> Experiences</h5>
     <h5 classname=' para fs-100px' style={{color:'red'}}>Interests</h5>
      
     <button style={{display:'flex',justifyContent:'space-around',border:'none',background:'none',marginTop:'10px'}}>
     <i className="fa-brands fa-facebook" style={{color:'white'}} />
     <i className="fa-solid fa-dove" style={{color:'white'}} />
     <i className="fa-brands fa-linkedin" style={{color:'white'}} />
     <i className="fa-brands fa-vimeo-v" style={{color:'white'}}/>
     
     </button> 
     <button className='btn btn-danger mt-4' style={{width:'150px',marginLeft:'53px'}}>Hire me</button>
     </div>
     <div style={{height:'180px',width:'300px',border:'2px solid black',padding:'10px',marginLeft:'30px',marginTop:'10px',borderRadius:'20px',backgroundColor:'#404443'}}>
     <h3 className='text-danger text-center '>Reference</h3>
      <ul className='text-white fs-larger'><li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iurm, 
         eius alias non dignissimos? Nemo, repellendus aut!</li></ul>
     </div>
     </div>
    {/* ****** ***** ***** ***** */}
   <div className='card1'style={{height:'700px',width:'1000px',border:'',borderRadius:'5px'}}>
   
    <div style={{height:'200px',width:'400px',border:'2px solid black',marginLeft:'30px',marginTop:'10px',borderRadius:'20px',margin:'none',backgroundColor:'#404443',boxSizing:'border-box',boxShadow:'4px 4px aqua'}}>
  <h3 className='text-center mt-2 text-danger' >About me :-</h3>
   <p className='px-3 fs-larger text-white' style={{fontFamily:'initial'}}>. kasfQf GBybbeIa oWZuWVRyHH6 zW0N mHiJsO3nGd 8vu5j8CRNc bfAn0Kg swPUjz4Ry hU6alfleQ 3JDKRxEfoO
     Mw8Db6wJuHrAp kasfQf GBybbeIa oWZuWVRyHH6 zW0N mHiJsO3nGd 8vu5j8CRNc bfAn0Kg swPUjz4Ry</p>
     
    </div>
    
    <div style={{height:'170px',width:'400px',border:'2px solid black',marginLeft:'450px',marginTop:'0px',borderRadius:'20px',backgroundColor:'#404443',boxSizing:'border-box',boxShadow:'4px 4px aqua'}}>
  <h3 className='text-center mt-2 text-danger' style={{fontFamily:'initial',}}>Education :-</h3>
   <ul className='text-white'>
    <li>
      Matrix
    </li>
    <li>Secondary</li>
    <li>B.Tech, KIPM College of Engineering & Technology, GIDA Gorakhpur</li>
   </ul>
   
   
   
    </div>
    <div  style={{height:'200px',width:'400px',border:'2px solid black',marginLeft:'30px',marginTop:'10px',borderRadius:'20px',backgroundColor:'#404443',boxSizing:'border-box',boxShadow:'4px 4px aqua'}}>
  <h3 className='text-center mt-2 text-danger' style={{fontFamily:'initial'}}>Skills & Language :-</h3>
   <ul  className='text-white'>
    <li> MERN Full Stack Developer</li>
    <li>Python by E & ICT Academy, IIT Kanpur</li>
    <li>Web Design</li>
    <li>Hindi</li>
    <li>English</li>
   </ul>
   
   
   
    </div>
    <div  style={{height:'200px',width:'400px',border:'2px solid black',marginLeft:'450px',marginTop:'0px',borderRadius:'20px',backgroundColor:'#404443',boxSizing:'border-box',boxShadow:'4px 4px aqua'}}>
  <h3 className='text-center mt-2 text-danger' style={{fontFamily:'initial'}}>Experiences :-</h3>
   <ul  className='text-white'>
    <li>IOT workshop, Blue Heart Lab</li>
    <li>Circuit Design</li>
    <li>MATLAB</li>
    <li>Excel</li>
    <li>Arduino Uno</li> 

   </ul>
   </div>
    <button className='btn btn-primary mt-4' type="submit" style={{marginLeft:'280px',width:'220px',height:'60px',fontSize:'large'}}>Download Resume
    <i className="fa-solid fa-arrow-down" style={{marginLeft:'10px',height:'30px',width:'20px'}} />

    </button>
   
 
    </div>
    
   </div>
/    </div>
  )
}

  

export default Portfolio;