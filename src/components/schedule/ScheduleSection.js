import React from 'react'
import SvgSchedule from './SvgSchedule'

const ScheduleSection = () => {
  return (
    <div className='Schedule_container' >
      <div className='container head_container' >
        <div >
          <h1 className='heading_prime' >Camping Schedule</h1>
        </div>
        <SvgSchedule />
      </div>
    </div>
  )
}

export default ScheduleSection
