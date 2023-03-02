import React, { useEffect, useState } from 'react'
import SvgSchedule from './SvgSchedule'
import SvgScheduleVertical from './SvgScheduleVertical'

const ScheduleSection = () => {

  const [isMobile, setIsMobile] = useState(false)

  console.log(window.screen.width)


  useEffect(()=>{
    console.log(window.screen.width)
    if(window.screen.width < 600){
      setIsMobile(true);
    } else {
      setIsMobile(false)
    }
  },[window.screen.width])


  return (
    <div className='Schedule_container' >
      <div className='container head_container' >
        <div >
          <h1 className='heading_prime' >Camping Schedule</h1>
        </div>
        <div className='svg_container' >
          {
            isMobile ? <SvgScheduleVertical/> : <SvgSchedule/>
          }
        </div>
      </div>
    </div>
  )
}

export default ScheduleSection
