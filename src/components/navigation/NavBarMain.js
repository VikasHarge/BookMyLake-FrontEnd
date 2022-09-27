import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                <li key={item.id} className={item.className}>
                  <Link to={item.path}>{item.icon}</Link>
                </li>
              );
            } else if(item.title === "Gallery") {
              return (
                <li key={item.id} className={item.className} onMouseEnter={()=> setShowGalDrop(true)} onMouseLeave={()=> setShowGalDrop(false)}  >
                  <a>{item.icon}</a>
                  <Link to={item.path}>{item.title}</Link>
                  { showGalDrop && <NavDropDown dropDownObj = {galleryDrop} />}
                </li>
              );
            } else if(item.title === "Camp Sites") {
              return (
                <li key={item.id} className={item.className} onMouseEnter={()=> setShowCampDrop(true)} onMouseLeave={()=> setShowCampDrop(false)} >
                  <a>{item.icon}</a>
                  <Link to={item.path}>{item.title}</Link>
                  { showCampDrop && <NavDropDown dropDownObj = {campDrop} />}
                </li>
              );
            } else {
              return (
                <li key={item.id} className={item.className}>
                  <a>{item.icon}</a>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarMain;
