import React, { useRef } from 'react'
import './Testimonials.css'
import next_arrow from '../../assets/next_arrow.png'
import back_arrow from '../../assets/back_arrow.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  
const slideForward = ()=> {
  if(tx > -50){
    tx -= 25;  
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=> {
  if(tx < 0){
    tx += 25;  
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}







  return (
    <div className='testimonials'>
     <img src={next_arrow} alt="" className='next-btn' onClick={slideForward}/>
     <img src={back_arrow} alt="" className='back-btn'  onClick={slideBackward}/>
     <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user1} alt="" className='user-img'/>
              <div>
              <h3>John Merry</h3>
              <span>Patient</span>
              </div>
            </div>
            <p>The care I received was excellent; the staff 
            was attentive, and my doctor took the
             time to explain everything clearly. 
            I felt supported throughout my treatment and
             am grateful for the compassionate service.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user2} alt="" className='user-img'/>
              <div>
              <h3>Henry Ford</h3>
              <span>Patient</span>
              </div>
            </div>
            <p>The care I received was excellent; the staff 
            was attentive, and my doctor took the
             time to explain everything clearly. 
            I felt supported throughout my treatment and
             am grateful for the compassionate service.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user3} alt="" className='user-img'/>
              <div>
              <h3>Katrien</h3>
              <span>Patient</span>
              </div>
            </div>
            <p>The care I received was excellent; the staff 
            was attentive, and my doctor took the
             time to explain everything clearly. 
            I felt supported throughout my treatment and
             am grateful for the compassionate service.</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="userinfo">
              <img src={user4} alt="" className='user-img'/>
              <div>
              <h3>Maggie Henson</h3>
              <span>Patient</span>
              </div>
            </div>
            <p>The care I received was excellent; the staff 
            was attentive, and my doctor took the
             time to explain everything clearly. 
            I felt supported throughout my treatment and
             am grateful for the compassionate service.</p>
          </div>
        </li>
      </ul>
     </div> 
    
    </div>
  )
}

export default Testimonials