import React from 'react'
import { leftNavItemsManagement , leftNavItemsUser } from './components/sidebar/leftNavData'
import dashLogo from '../../media/images/logo5.png'
import LeftLink from './components/sidebar/LeftLink';
import { useNavigate } from 'react-router-dom';


const LeftNav = () => {

  const navigate = useNavigate();


  return (
    <div className='left_nav'>
      <div className='dash_logo'>
        <img onClick={()=>navigate("/")} src={dashLogo} ></img>
      </div>
      <div className='leftnav_wrapper' >
      <LeftLink data={leftNavItemsManagement} title={"MANAGEMENT"} />
      <LeftLink data={leftNavItemsUser} title={"USERS"} />
      </div>
    </div>
  )
}

export default LeftNav;