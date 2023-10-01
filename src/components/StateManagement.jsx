import React, { useState } from 'react'

const StateManagement = () => {
    const [likes, setlikes] = useState(0)
    const [comments, setcomments] = useState(10)
  return (
    <div className="container">
<h1>State Management</h1>
<hr />
<button className='btn btn-primary mt-4'
onClick={()=>{setlikes(likes+1)}}>{likes}likes</button><br />
<button className='btn btn-secondary mt-4' onClick={()=>{setcomments(comments+2)}}>{comments}Comments</button>
    </div>
  )
}

export default StateManagement;