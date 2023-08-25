import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Home page</h1>
         <h1 style={{color :'red',backgroundColor:'yellow'}} >Using Inline CSS in JSX </h1>
        <input type="text" />
        <h2 className='Myclass'>Using classname</h2>
    </div>
  )
}

export default Home;


