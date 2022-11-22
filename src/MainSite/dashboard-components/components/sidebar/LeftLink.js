import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LeftLink = ({data, title}) => {
  return (
    <div className='left_link' >
        <h5>{title}</h5>
        <nav>
          {
            data.map((item, index)=>{
              return <NavLink key={index} to={item.path} className="nav_link" >
                <p>{item.icon}</p>
                <span>{item.heading}</span>
              </NavLink>
            })
          }
        </nav>
    </div>
  )
}

export default LeftLink