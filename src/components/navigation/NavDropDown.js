import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

const NavDropDown = ({dropDownObj}) => {

    const [dropdown, setDropdown] = useState(false)


  return (
  
        <ul className={dropdown ? 'dropdown_items clicked' : 'dropdown_items'} onClick={()=> setDropdown(!dropdown)} >
            {
                dropDownObj.map((item, i)=>{

                    return <li key={item.id} className={item.className} onClick={()=> setDropdown(false)} >
                        <a>{item.icon}</a>
                        <Link to={item.path} >{item.title}</Link>
                    </li>
                })
            }
        </ul>

  )
}

export default NavDropDown
