import React from "react";
import { info } from "./Info_data";

const InfoSection = () => {
  return (
    <div className="info_sec">
      <div className="container info_container">
        <div className="info_top">
          <div className="info_head">
            <h2 className="heading_prime_2">{info.h1}</h2>
            <p className="para_prime">{info.p.p1}</p>
          </div>
          <div className="info_img">
            <img src={info.img1}></img>
          </div>
        </div>

        <div className="info_top info_reverse">
          <div className="info_img">
            <img src={info.img2}></img>
          </div>
          <div className="info_head ">
            <h2 className="heading_prime_2 add_r_margin ">{info.h2}</h2>
            <p className="para_prime add_L_padd">{info.p.p1}</p>
            <p className="para_prime add_L_padd">{info.p.p2}</p>
            <p className="para_prime add_L_padd">{info.p.p3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
