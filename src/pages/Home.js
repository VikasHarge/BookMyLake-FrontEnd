import React, { useEffect } from 'react'
import LandingSection from '../components/landing/LandingSection'
import '../components/Home.css'
import InfoSection from '../components/info_section/InfoSection'
import ScheduleSection from '../components/schedule/ScheduleSection'
import CampSiteSection from '../components/campsite/CampSiteSection'
import CampPhotoSection from '../components/campphotosec/CampPhotoSection'
import { photoObj, imgArr } from '../components/context/PhotoContext'
import { photoContext } from '../components/context/PhotoContext'
import { Fade } from "react-awesome-reveal";
import MetaData from '../components/metadata/MetaData'
import { fetchCampSiteData2 } from '../features/campsites/campsiteSlice'



const Home = () => {

  return (
    <>
    <MetaData title="Home | Pawna | BookMyLake" ></MetaData>
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
      <photoContext.Provider value={{photoObj}}  >
        <CampPhotoSection/>
      </photoContext.Provider>
      </Fade>
      </div>

    </>
  )
}

export default React.memo(Home)
