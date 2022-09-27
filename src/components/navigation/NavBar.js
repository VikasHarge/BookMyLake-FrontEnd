import React from "react";
import bwlogo from "../../media/images/small_Logo_(bw).png";
import clrLogo from "../../media/images/small_logo_clr.png";
import logoB from "../../media/images/Small_Logo_(B).png"
import logo1 from '../../media/images/logo5.png'
import NavBarMain from "./NavBarMain";
import './NavBar.css'

const NavBar = ({offset}) => {
  return (
    <>
      <div className="container nav_containner">
        <div className="nav_box">
          <div className="nav_logo">
            <img className="big_logo" src={ offset > 520 ? logo1 : bwlogo}></img>
          </div>
          <NavBarMain />
        </div>
      </div>
    </>
  );
};

export default NavBar;
