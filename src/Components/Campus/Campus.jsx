import React from 'react'
import './Campus.css'
import galleryone from '../../assets/galleryone.png'
import gallerytwo from '../../assets/gallerytwo.png'
import gallerythree from '../../assets/gallerythree.png'
import galleryfour from '../../assets/galleryfour.png'
import right_arrow from '../../assets/right_arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={galleryone} alt="" />
            <img src={gallerytwo} alt="" />
            <img src={gallerythree} alt="" />
            <img src={galleryfour} alt="" />

        </div>
        <button className='btn dark-btn'>Get More Information Here <img src={right_arrow} alt=''/></button>
    </div>
  )
}

export default Campus