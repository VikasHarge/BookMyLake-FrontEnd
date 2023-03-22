import React, { useEffect } from 'react'
import LandingSection from '../components/landing/LandingSection'
import '../components/Home.css'
import InfoSection from '../components/info_section/InfoSection'
import ScheduleSection from '../components/schedule/ScheduleSection'
import CampSiteSection from '../components/campsite/CampSiteSection'
import CampPhotoSection from '../components/campphotosec/CampPhotoSection'

import { Fade } from "react-awesome-reveal";
import MetaData from '../components/metadata/MetaData'
import { fetchCampSiteData2 } from '../features/campsites/campsiteSlice'
import ScrollToTop from '../utility/ScrollToTop'



const Home = () => {



  return (
    <>
    <MetaData title="Home | Pawna | BookMyLake" ></MetaData>
      <ScrollToTop />
      <LandingSection/>
      <div className='background_white' >
      <Fade direction='up' triggerOnce={true} fraction={0.3} >
        <InfoSection />
      </Fade>
      <Fade direction='up' triggerOnce={true} fraction={0} >
      <ScheduleSection />
      </Fade>
      <Fade direction='up' triggerOnce={true} fraction={0} >
      <CampSiteSection />
      
      </Fade>
      <Fade direction='up' triggerOnce={true} fraction={0} >
        <CampPhotoSection/>
      </Fade>
      </div>

    </>
  )
}

export default React.memo(Home)
