import React from 'react'
import './programs.css'
import program_1 from '../../assets/program_1.png'
import program_2 from '../../assets/program_2.png'
import program_3 from '../../assets/program_3.png'
import programoneicon from '../../assets/programoneicon.png'
import programtwoicon from '../../assets/programtwoicon.png'
import programthreeicon from '../../assets/programthreeicon.png'

const programs = () => {
  return (
    <div className='programs'>
     <div className='program'>
        <img src={program_1} alt='' />
        <div className='caption'>
          <img src={programoneicon} alt=''/>
          <p>General Medicine</p> 
        </div>
     </div>
     <div className='program'>
        <img src={program_2} alt='' />
        <div className='caption'>
          <img src={programtwoicon} alt=''/>
          <p>Surgical Medicine</p> 
        </div>
     </div>
     <div className='program'>
        <img src={program_3} alt='' />
        <div className='caption'>
          <img src={programthreeicon} alt=''/>
          <p>Pediatric Medicine</p> 
        </div>
     </div>

    </div>
  )
}

export default programs