import React from 'react'
import { Outlet } from 'react-router-dom'
import RightNav from './components/toolebar/RightNav'

const RightDash = () => {
  return (
    <div className='right_dash' >
      <RightNav />
      <div className='main_dash_container' >
        < Outlet />
      </div>
    </div>
  )
}

export default RightDash