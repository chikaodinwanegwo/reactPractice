import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import address from '../../assets/address.png'
import right_arrow from '../../assets/right_arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36c59849-649e-4b27-9abc-68280dacaf73");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
    <div className='contact-col'>
        <h3>Send Us a Message <img src={msg} alt=""/></h3>
        <p>Feel Free to reach out through contact form or find our
        contact information below. Your feedback, questions, and suggestions are
        important to us as we strive to provide exceptional service to
        our university community.</p>
        <ul>
            <li><img src={email} alt="" />Contact@healthcare.org</li>
            <li><img src={phone} alt="" />+ 123 356 1678</li>
            <li><img src={address} alt="" /> 77 North Ave, Atlanta Georgia</li>
        </ul>
    </div>
    <div className='contact-col'>
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" required/>
        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder="Enter Your Phone Number" required/>
        <label>Write Your Message</label>
        <textarea name="message" row="6" placeholder="Enter Your Message Here" required/>
        <button type="submit" className="btn dark-btn">Submit Now<img src={right_arrow} alt=""/></button>

      </form>
      <span>{result}</span>
    </div>
    
    </div>
  )
}

export default Contact