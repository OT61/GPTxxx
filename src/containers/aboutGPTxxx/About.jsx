import React from 'react';
import { Feature } from '../../components';
import './about.css';
// import Features from '../features/Features';

const About = () => {
  return (
    <div className='gptxxx_agptxxx section_margin' id='agptxxx'>
      <div className='gptxxx_agptxxx-feature'>
        <Feature title='What is GPTxxx' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut. Velit sed ullamcorper morbi tincidunt ornare massa eget.'/>
      </div>
      <div className='gptxxx_agptxxx-heading'>
        <h1 className='gradient_text'>The possibilities are beyond mere imagination</h1>
        <p>Explore The Library</p> 
      </div>
      <div className='gptxxx_agptxxx-container'>
        <Feature title='Chatbots' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Feature title='Knowledgebase' text='senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis' />
        <Feature title='Education' text='mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices' />
      </div>
    </div>
  )
}

export default About