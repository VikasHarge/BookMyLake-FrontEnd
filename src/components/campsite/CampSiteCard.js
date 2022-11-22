import React, { useState } from "react";
import { BsHeart, BsHeartFill, BsStarFill } from "react-icons/bs";


const CampSiteCard = ({ data }) => {

  const [fev, setFev] = useState(false)

  const addToFev = ()=>{
    setFev(!fev)
    alert(data.camp_name)
  }

  return (
    <div className="camp_card_container" >
      <div className="site_card">
        <img src={data.img} alt="" className="camp_card_img"></img>
        <div className="card_rating_div">
          <a className="rating_star" >{<BsStarFill/>}<span>{data.reviews}</span></a>
          <a 
            className="fev_heart" 
            onClick={addToFev}
          >{ fev ? <BsHeartFill/> : <BsHeart />}</a>
        </div>
      </div>
      <div className="card_footer" >
        <h4>{data.camp_name}</h4>
        <div className="card_footer_sec " >
          <div className="card_max_price" ><span>{data.max_price}</span><p>{data.sale_price}</p></div>
          <button className="btn btn-booking" >Book</button>
        </div>
      </div>
    </div>
  );
};

export default CampSiteCard;
