import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import playicon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
    <div className='about-left'>
        <img src={about} alt='' className='about-img' />
        <img src={playicon} alt='' className='play-icon' />
 
    </div>
    <div className='about-right'>
        <h3>ABOUT HEALTHCARE</h3>
        <h2>Providing quality Healthcare for all</h2>
        <p>Healthcare is a vital sector that focuses on promoting, maintaining, and restoring health
         through medical services, research, and education. </p>
        <p>It encompasses a wide range of services,
          from preventive care to emergency interventions, and is essential for enhancing quality of 
          life and increasing life expectancy. Advances in healthcare technology, such as telemedicine 
          and artificial intelligence, are transforming patient care, making it more accessible, personalized,
           and efficient.</p>
        <p>
            Healthcare organizations play a crucial role in supporting and improving the quality of healthcare,
             providing access to essential services, and promoting health equity. By providing a variety of
             healthcare options, including primary care, specialty care, and preventive care,
             healthcare organizations aim to reduce health inequalities and improve overall health outcomes.
        </p>
       
    </div>

   </div>
  )
}

export default About