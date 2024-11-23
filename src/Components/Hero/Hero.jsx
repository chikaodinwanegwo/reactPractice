import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>We Ensure Quality Healthcare for all Patients </h1>
        <p>Our mission is to provide exceptional healthcare services
         for our patients, with a focus on sustainability, innovation, 
         and customer satisfaction.</p>
         <button className='btn'>Learn More <img src={right_arrow} alt=""/></button>

        </div>

    </div>
  )
}

export default Hero
