import React, { useState } from "react";
import { Link,} from "react-router-dom";
import { navMenu, galleryDrop, campDrop } from "./NavItems";
import NavDropDown from "./NavDropDown.js";


const NavBarMain = () => {

  const [showGalDrop, setShowGalDrop] = useState(false)
  const [showCampDrop, setShowCampDrop] = useState(false)

  return (
    <>
      <nav className="nav_right_main">
        <ul className="nav_items">
          {navMenu.map((item, i) => {
            if (item.isIcon === true) {
              return (
                <Link key={item.id} to={item.path}>
                <li  className={item.className}>
                <p>{item.icon}</p>
                </li>
                </Link>
              );
            } else if(item.title === "Gallery") {
              return (
                <Link key={item.id} to={item.path}>
                <li  className={item.className} onMouseEnter={()=> setShowGalDrop(true)} onMouseLeave={()=> setShowGalDrop(false)}  >
                  <p>{item.icon}</p>
                  <p>{item.title}</p>
                  <p>{showGalDrop ? item.upArrow : item.dropArrow}</p>
                  { showGalDrop && <NavDropDown dropDownObj = {galleryDrop} />}
                </li>
                </Link>
              );
            } else if(item.title === "Camp Sites") {
              return (
                <Link key={item.id} to={item.path}>
                <li   className={item.className} onMouseEnter={()=> setShowCampDrop(true)} onMouseLeave={()=> setShowCampDrop(false)} >
                  <p>{item.icon}</p>
                  <p>{item.title}</p>
                  <p>{showCampDrop ? item.upArrow : item.dropArrow}</p>
                  { showCampDrop && <NavDropDown dropDownObj = {campDrop} />}
                </li>
                </Link>
              );
            } else {
              return (
                <Link key={item.id} to={item.path}>
                <li  className={item.className}>
                  <p>{item.icon}</p>
                  <p>{item.title}</p>
                </li>
                </Link>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarMain;
