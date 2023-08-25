import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
    {
        title: 'Aliquam etiam erat velit',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer. Suspendisse ultrices gravida dictum fusce ut placerat orci.',
    },
    {
        title: 'Cursus mattis molestie a',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo donec enim diam vulputate ut. Posuere morbi leo urna molestie at elementum eu.',
    },
    {
        title: 'Quam vulputate dignissim suspendisse',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien eget. Dui nunc mattis enim ut tellus.',
    },
    {
        title: 'Et tortor consequat id',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada. Neque convallis a cras semper auctor neque vitae.',
    },
]

const Features = () => {
  return (
    <div className='gptxxx_features section_padding' id='features'>
       <div className='gptxxx_features-heading'>
            <h1 className='gradient_text'>The Future is Here and You Just Need To Realize It. Step Into The Future Today & Make It Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </div>

        <div className='gptxxx_features-container'>
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))}
        </div>
    </div>
  )
}

export default Features