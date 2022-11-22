import React from 'react'
import LandingSection from '../components/landing/LandingSection'
import '../components/Home.css'
import InfoSection from '../components/info_section/InfoSection'
import ScheduleSection from '../components/schedule/ScheduleSection'
import CampSiteSection from '../components/campsite/CampSiteSection'
import CampPhotoSection from '../components/campphotosec/CampPhotoSection'
import { photoObj } from '../components/context/PhotoContext'
import { photoContext } from '../components/context/PhotoContext'
import { Fade } from "react-awesome-reveal";



const Home = () => {
  return (
    <>
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
      <Fade  direction='up' triggerOnce={true} fraction={0} >
      <CampSiteSection />
      </Fade>
      <Fade direction='up' triggerOnce={true} fraction={0} >
      <CampSiteSection />
      </Fade>
      <Fade direction='up' triggerOnce={true} fraction={0} >
      <photoContext.Provider value={photoObj} >
        <CampPhotoSection/>
      </photoContext.Provider>
      </Fade>
      <photoContext.Provider value={photoObj} >
        <CampPhotoSection/>
      </photoContext.Provider>
      <photoContext.Provider value={photoObj} >
        <CampPhotoSection/>
      </photoContext.Provider>
      </div>

    </>
  )
}

export default Home
