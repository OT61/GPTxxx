import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='gptxxx_features-container_feature'>
      <div className='gptxxx_features-container_feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gptxxx_features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature