import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gptxxx_header section_padding' id='home'>
        <div className='gptxxx_header-content'>
          <h1 className='gradient_text'>Let's create something amazing with GPTxxx Open-source AI</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui natus, vel laborum architecto maxime eos, quaerat, pariatur cum sequi sed. Facilis, alias obcaecati voluptatem nisi debitis ipsa qui soluta!</p>

          <div className='gptxxx_header-content_input'>
            <input type='email' placeholder='Email Address'/>
            <button type='button'>Get Started</button>
          </div>

          <div className='gptxxx_header-content_people'>
            <img src={people} alt='people'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        
        <div className='gptxxx_header-image'>
          <img src={ai} alt='ai'/>
        </div>
    </div>
  )
}

export default Header