import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gptxxx_footer section_padding'>
      <div className='gptxxx_footer-heading'>
        <h1 className='gradient_text'>Do you want to walk into the future before others</h1>
      </div>

      <div className='gptxxx_footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gptxxx_footer-links'>
        <div className='gptxxx_footer-links_logo'>
          <img src={logo} alt='logo' />
          <p>Imaginary address you're welcome to. All rights reserved</p>
        </div>

        <div className='gptxxx_footer-links_div'>
          <h4>Links</h4>
          <p>xxxxxxxxxx</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gptxxx_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gptxxx_footer-links_div'>
          <h4>Get in touch</h4>
          <p>xxxxxxxxxxImaginary address you're welcome to</p>
          <p>123-456-000</p>
          <p>gptxxx@info.com</p>
        </div>
      </div>

      <div className='gptxxx_footer-copyright'>
        <p> ©️ 2023 GPTXXX. All rights reserved.</p>
      </div>  
    </div>
  )
}

export default Footer