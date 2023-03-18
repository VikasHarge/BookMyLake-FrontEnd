import React, { useEffect, useState } from 'react'
import SvgSchedule from './SvgSchedule'
import SvgScheduleVertical from './SvgScheduleVertical'

const ScheduleSection = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setWindowWidth(window.innerWidth)
    })

    return () => window.removeEventListener("resize", ()=>{
      setWindowWidth(window.innerHeight)
    });
  },[])


  return (
    <div className='Schedule_container' >
      <div className='container head_container' >
        <div >
          <h1 className='heading_prime' >Camping Schedule</h1>
        </div>
        <div className='svg_container' >
          {
            windowWidth < 600 ? <SvgScheduleVertical windowWidth={windowWidth} /> : <SvgSchedule/>
          }

        </div>
      </div>
    </div>
  )
}

export default ScheduleSection
