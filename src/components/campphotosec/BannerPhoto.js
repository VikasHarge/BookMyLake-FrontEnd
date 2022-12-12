import React, {useContext} from 'react'
import { photoContext } from "../context/PhotoContext";

const BannerPhoto = () => {

    const {photoObj} = useContext(photoContext)

  return (
                
        <div className='photo_banner relative' >
            <img alt="" className="camp_card_img"  src={photoObj.banner} ></img>
        </div>
    
  )
}

export default BannerPhoto