import React from 'react'
import CampSiteCard from './CampSiteCard'
import { camp_data } from './Camp_site_data'

const CampSiteSection = () => {
  return (
    <div className='campsite_section' >
      <div className='container head_container' >
        <div >
          <h1 className='heading_prime' >Top Camp Sites</h1>
        </div>
        <div className='campsite_main' >
          {
            camp_data.map((item, i)=>{
              return <CampSiteCard key={i}  data={item} />
            })
          }
        </div>
      </div>    
    </div>
  )
}

export default CampSiteSection
