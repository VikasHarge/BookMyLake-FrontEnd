import React from "react";
import WaveSection from "./WaveSection";
import bigLogo from '../../media/images/big_logo.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const motionOption = {
  initial:{
    y:'100px',
    overflow:'hidden',
    opacity:0
  },
  whileInView:{
    y:'0',
    // overflow:'hidden',
    opacity:1
  }
}

const LandingSection = () => {
  return (
    <div className="LandingSection">
      <div className="landing_container">
        <div className="landing_box">
          <img className="landing_logo" src={bigLogo} ></img>
          <div className="logo_head" >
            <h1>BookMyLake</h1>
            <h4>Life under the stars.</h4>
          </div>
          <h1 className="main_heading" >THE PAWNA LAKE</h1>
          <motion.div className="head_tag" transition={{delay:0.2}} {...motionOption}><span> | </span><small>CAMPING</small><span> | </span><small>ADVENTURE</small><span> | </span><small>TRAKING</small><span> | </span><small>EVENTS</small><span> | </span></motion.div>
          <div className="landing_btn" >
            <Link className="link_btn" to='/bookings' ><button className="btn btn-primary" >Book Now</button></Link>
            <Link className="link_btn" to='/get-quotation' ><button className="btn btn-primary" >Get Quotation</button></Link>
            <Link className="link_btn" to='/events' ><button className="btn btn-primary" >Up Coming Events</button></Link>
          </div>
        </div>
      </div>
      <WaveSection />
    </div>
  );
};

export default LandingSection;
