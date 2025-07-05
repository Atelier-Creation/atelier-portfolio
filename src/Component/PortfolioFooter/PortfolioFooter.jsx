import React from 'react'
import './PortfolioFooter.css'
import { useNavigate } from 'react-router-dom'
function PortfolioFooter() {
  const navigate = useNavigate()
  return (
    <div className='portfolio-footer-container'>
    <div className='footer-container-port'>
      <div className='portfolio-left-conatiner'>
        <h1>Let's Connect</h1>
        <div className='footer-left-text'>
        <p className='portfolio-para'>Tell us about your business. Let's get this conversation started. Fill in the form or send us an email.</p>
        <div className="footer-arrow-icon-text">
            <i className="bi bi-arrow-right"></i>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atelierhub.official@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="connect-link-footer"
>
  atelierhub.official@gmail.com
</a>

        </div>
            <div className='footer-left-connect-container'>
                <div className='address-head'>
                    <p>(connect)</p>
                    <a className="social-link" href="https://www.facebook.com/share/15MJ3q1Z4y/" target="_blank" rel="noopener noreferrer">
  <h4>Facebook</h4>
</a>

<a className="social-link" href="https://www.instagram.com/atelier__creations?igsh=MWIyMzBlMmZ4MmFxeg==" target="_blank" rel="noopener noreferrer">
  <h4>Instagram</h4>
</a>

<a className="social-link" href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
  <h4>Linkedin</h4>
</a>

                </div>
                <div className='address-head'>
                    <p>(Visit Us)</p>
                    <h4>#129, ground floor 6th cross Bapuji</h4>
                    <h4>layout Chandra layout Vijaynagar,</h4>
                    <h4>Bangalore-560040, India</h4>
                </div>
            </div>
        </div>
      </div>
      <div className='footer-form'>
        <div className='text-and-input'>
            <p>Name</p>
            <input type='text' placeholder='john doe'/>
        </div>
        <div className='text-and-input'>
            <p>Email Address</p>
            <input type='text' placeholder='abc@gmail.com'/>
        </div>
        <div className='text-and-input'>
            <p>Company Name</p>
            <input type='text' placeholder='ABC company'/>
        </div>
        <div className='text-and-input'>
            <p>Message</p>
            <textarea placeholder='i want to build a..'/>
        </div>
        <button className='footer-submit-btn'>Submit</button>
      </div>
    </div>
    <hr className='footer-hr-line'/>
    <div className='copy-right-text'>
        <p>Copyright © 2025 Atelier Creation. All rights reserved.</p>
        <a
  href="#top"
  style={{ color: "white", cursor: "pointer", textDecoration: 'underline' }}
>
  Back to top
</a>


        <p onClick={()=>navigate('/')}>created by <strong style={{color:"white",cursor:"pointer"}}>Atelier Creation</strong></p>
    </div>
    </div>
  )
}

export default PortfolioFooter
