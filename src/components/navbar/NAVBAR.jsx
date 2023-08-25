import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#agptxxx'>About GPTxxx</a></p>
  <p><a href='#possibility'>Open-source AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

const NAVBAR = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gptxxx_navbar'>
        <div className='gptxxx_navbar-links'>
          <div className='gptxxx_navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>

          {/* Navigation Bar Links */}
          <div className='gptxxx_navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='gptxxx_navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='gptxxx_navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={26} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={26} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gptxxx_navbar-menu_container scale-up-center'>
              <div className='gptxxx_navbar-menu_container-links'>
                <Menu />
                <div className='gptxxx_navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
          
        </div>
    </div>
  )
}

export default NAVBAR