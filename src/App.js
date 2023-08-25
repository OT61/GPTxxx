import React from 'react';

import { Footer, Blog, Possibility, Features, About, Header } from './containers';
import { CTA, Brand, NAVBAR } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <NAVBAR />
            <Header />
        </div>
        <Brand />
        <About />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App