import React, { useState } from 'react'
import useAppContext from './AppContext';
import Swal from 'sweetalert2';


const UserAuth = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
//   const {currentUser } = useAppContext();
   
  if (currentUser==null) {
    return children;
  }
  else{
    Swal.fire({
       icon :'error',
       title :'Permission Denied',
       text :'You need to Login first!!' 
    })
  }

}

export default UserAuth;