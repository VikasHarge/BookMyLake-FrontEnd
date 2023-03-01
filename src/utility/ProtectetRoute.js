import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectetRoute = ({children}) => {

    const {userData} = useSelector((state)=>state.userData)

    if(userData === null){
        return <Navigate to="/login" replace={true} />
    }

  return children;
}

export default ProtectetRoute