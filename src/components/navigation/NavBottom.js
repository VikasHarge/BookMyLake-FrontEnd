import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navMenu, galleryDrop, campDrop } from "./NavItems";

const NavBottom = () => {
  return (
    <div className="bottom_nav_container">
      <ul>
        {navMenu &&
          navMenu.filter((item, index)=>{
            let ids = [1, 2, 3, 4, 5, 6, 7];
            return ids.includes(item.id)
          }).map((item, index) => {
            return (
              <NavLink key={item.id} end  to={item.path} >
                <li key={item.id}>
                  <p className="navbottom_icon_container" >{item.icon}</p>
                </li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );
};

export default NavBottom;
