import React from "react";
import WaveSection from "./WaveSection";
import bigLogo from '../../media/images/big_logo.png'
import { Link } from "react-router-dom";

const LandingSection = () => {
  return (
    <div className="LandingSection">
      <div className="landing_container">
        <div className="landing_box">
          <img className="landing_logo" src={bigLogo}  ></img>
          <div className="logo_head" >
            <h1>BookMyLake</h1>
            <h4>Life under the stars.</h4>
          </div>
          <h1 className="main_heading" >THE PAWNA LAKE</h1>
          <p className="head_tag" ><span> | </span>CAMPING<span> | </span>ADVENTURE<span> | </span>TRAKING<span> | </span>EVENTS<span> | </span></p>
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
