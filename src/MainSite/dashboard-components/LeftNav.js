import React from 'react'
import { leftNavItemsManagement , leftNavItemsUser } from './components/sidebar/leftNavData'
import dashLogo from '../../media/images/logo5.png'
import LeftLink from './components/sidebar/LeftLink';


const LeftNav = () => {
  return (
    <div className='left_nav'>
      <div className='dash_logo'>
        <img src={dashLogo} ></img>
      </div>
      <LeftLink data={leftNavItemsManagement} title={"MANAGEMENT"} />
      <LeftLink data={leftNavItemsUser} title={"USERS"} />
    </div>
  )
}

export default LeftNav;