import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className='gptxxx_blog section_padding' id='blog'>
      <div className='gptxxx_blog-heading'>
        <h1 className='gradient_text'>A lot is happening! We are blogging about it.</h1>
      </div>

      <div className='gptxxx_blog-container'>
        <div className='gptxxx_blog-container_gpA'>
          <Article imgUrl={blog01} date="Jul 17, 2023" title="GPTxxx dictumst vestibulum rhoncus est pellentesque!" />
        </div>
        <div className='gptxxx_blog-container_gpB'>
          <Article imgUrl={blog02} date="Jul 17, 2023" title="GPTxxx pharetra convallis posuere morbi leo." />
          <Article imgUrl={blog03} date="Jul 17, 2023" title="GPTxxx iaculis eu non diam phasellus." />
          <Article imgUrl={blog04} date="Jul 17, 2023" title="GPTxxx praesent tristique magna sit amet." />
          <Article imgUrl={blog05} date="Jul 17, 2023" title="GPTxxx feugiat nisl pretium fusce id." />
        </div>
      </div>
    </div>
  );
}

export default Blog