import React from 'react'
import BannerPhoto from './BannerPhoto'
import LeftPhotoGrid from './LeftPhotoGrid'

const CampPhotoSection = () => {
  return (
    <div className='camp_photo_section' >
      <div className='container head_container camp_photo_container' >
        <div>
          <h1 className='heading_prime'  >Explore Campsite Views</h1>
        </div>
        <div className='photo_sec_container make_center' >
          <div className='photo_sec_inner'>
            <LeftPhotoGrid />
            <BannerPhoto />
          </div>
        </div>
      </div>    
    </div>
  )
}

export default React.memo(CampPhotoSection)