import React, { useState } from "react";
import {Link} from "react-router-dom"
import { BsHeart, BsHeartFill, BsStarFill } from "react-icons/bs";
import camp_a from "../../media/images/camp-a.jpeg";
import camp_b from "../../media/images/camp-b.jpeg";
import camp_c from "../../media/images/camp-c.jpg";
import camp_d from "../../media/images/camp-d.jpeg";


const CampSiteCard = ({ data }) => {

  const [fev, setFev] = useState(false)

  const addToFev = ()=>{
    setFev(!fev)
    alert(data.camp_name)
  }

  return (
    <div className="camp_card_container" >
      <div className="site_card">
        <img src={camp_a} alt={data.camp_name} className="camp_card_img"></img>
        <div className="card_rating_div">
          <a className="rating_star" >{<BsStarFill/>}<span>({data.numOfReviews}) Reviews</span></a>
          <a 
            className="fev_heart" 
            onClick={addToFev}
          >{ fev ? <BsHeartFill/> : <BsHeart />}</a>
        </div>
      </div>
      <div className="card_footer" >
        <h4>{data.camp_name}</h4>
        <div className="card_footer_sec " >
          <div className="card_max_price" ><span>{`₹ ${data.max_price} `}</span><p>{`₹ ${data.sale_price}`}</p></div>
          <Link to={`/campsites/${data._id}`} className="btn btn-booking" >Book</Link>
        </div>
      </div> 
    </div>
  );
};

export default React.memo(CampSiteCard);
