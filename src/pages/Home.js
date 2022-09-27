import React from 'react'
import LandingSection from '../components/landing/LandingSection'
import '../components/Home.css'
import InfoSection from '../components/info_section/InfoSection'
import ScheduleSection from '../components/schedule/ScheduleSection'
import CampSiteSection from '../components/campsite/CampSiteSection'
import CampPhotoSection from '../components/campphotosec/CampPhotoSection'

const Home = () => {
  return (
    <>
      <LandingSection/>
      <InfoSection />
      <ScheduleSection />
      <CampSiteSection />
      <CampSiteSection />
      <CampSiteSection />
      <CampSiteSection />
      <CampPhotoSection/>
    </>
    
  )
}

export default Home
