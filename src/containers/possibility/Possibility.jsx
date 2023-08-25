import React from 'react';

import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gptxxx_possibility section_padding' id='possibility'>
        <div className='gptxxx_possibility-image'>
          <img src={possibilityImage} alt='possibility' />
        </div>
        <div className='gptxxx_possibility-content'>
          <h4>Request Early Access and Get Started</h4>
          <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum. Volutpat blandit aliquam etiam erat velit scelerisque in. Dictum non consectetur a erat nam at lectus.</p>
          <h4>Request Early Access and Get Started</h4>
        </div>
    </div>
  );
}

export default Possibility;