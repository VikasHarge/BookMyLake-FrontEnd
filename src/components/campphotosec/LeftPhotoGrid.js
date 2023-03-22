import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { photoContext } from "../context/PhotoContext";

const LeftPhotoGrid = () => {

    const {photoObj} = useContext(photoContext)

  return (
    <div className="photo_grid">
      <div className="photo_grid_1 relative ">
        <img alt="" className="camp_card_img" src={photoObj.img_3} ></img>
      </div>
      <div className="photo_grid_2 relative ">
        <img alt="" className="camp_card_img" src={photoObj.banner} ></img>
      </div>
      <div className="photo_grid_3 relative ">
        <img alt="" className="camp_card_img" src={photoObj.img_2} ></img>
      </div>
      <div className="photo_grid_4 relative ">
        <img alt="" className="camp_card_img" src={photoObj.img_4} ></img>
      </div>
      <div className="photo_grid_5 relative ">
        <img alt="" className="camp_card_img" src={photoObj.img_5} ></img>
      </div>
      <div className="photo_grid_6">
        <div className="last_grid relative" >
            <div className="grid_img" >
                <img alt="" className="camp_card_img" src={photoObj.img_6} ></img>
            </div>
        </div>
        <div className="grid_btn" >
            <button className="btn2 btn-gallery" ><Link className="link_btn" to='/gallery' >View Gallery</Link></button>
        </div>
      </div>
      <div className="photo_grid_7 relative ">
        <img alt="" className="camp_card_img" src={photoObj.img_7} ></img>
      </div>
      <div className="photo_grid_8 relative">
        <img alt="" className="camp_card_img" src={photoObj.img_8} ></img>
      </div>
    </div>
  );
};

export default LeftPhotoGrid;
