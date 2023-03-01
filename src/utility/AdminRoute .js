import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Adminroute = ({children}) => {

    const {userData} = useSelector((state)=>state.userData)



    if(userData === null || userData.user.role !== 'admin'){
      toast.error("Not Authorised to use resourse")
      return <Navigate to="/login" replace={true} />
    }

  return children;
}

export default Adminroute


