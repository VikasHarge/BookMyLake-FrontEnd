import React, {useState, useEffect} from "react";
import bwlogo from "../../media/images/small_Logo_(bw).png";
import clrLogo from "../../media/images/small_logo_clr.png";
import logoB from "../../media/images/Small_Logo_(B).png"
import logo1 from '../../media/images/logo5.png'
import NavBarMain from "./NavBarMain";
import './NavBar.css'

const NavBar = () => {

  const [offset, setOffset] = useState(0);

  useEffect(()=>{
    const onScroll = ()=> {
      setOffset(window.pageYOffset)
    }
    // cleanup code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, {passive : true});
    return ()=> window.removeEventListener('scroll', onscroll)
  }, [offset])

  return (
    <>
      <div className="container nav_containner">
        <div className="nav_box">
          <div className="nav_logo">
            <img className="big_logo" src={ offset > 20 ? logo1 : bwlogo}></img>
          </div>
          <NavBarMain />
        </div>
      </div>
    </>
  );
};

export default React.memo(NavBar);
