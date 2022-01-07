import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/hexagon.svg'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaGitSquare, FaBars } from 'react-icons/fa'


const Menu = () => (
    <>
        <p><a href="#home">Qui suis-je</a></p>
        <p><a href="#whatgpt3">Formation</a></p>
        <p><a href="#features">Expériences</a></p>
        <p><a href="#blog">Mes créations</a></p>
        <p><a href="#footer">Contact</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='gtp3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__logo-navbar'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                 <Menu />   
                </div>
            </div>
            <div className='gpt3__navbar-signin'>
                <button className='github'><FaGitSquare className='social-icon' /><a href="https://github.com/vamos91">Github</a></button>
                <button className='linkedin'><AiOutlineLinkedin className='social-icon' /><a href="https://www.linkedin.com/in/nicolas-acard-a4644466/">Linkedin</a></button>
            </div>
            <div className='gpt3__navbar-menu'>
                {
                    toggleMenu ?
                        <RiCloseLine color='white' size={27} onClick={ () => setToggleMenu(false) } />
                        : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true) }/>
                }
                {
                    toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                <Menu />
                                <div className='gpt3__navbar-signin gpt3__navbar-menu_container-links-signin'>
                                    <button className='github'><FaGitSquare className='social-icon' /><a href="https://github.com/vamos91">Github</a></button>
                                    <button className='linkedin'><AiOutlineLinkedin className='social-icon' /><a href="https://www.linkedin.com/in/nicolas-acard-a4644466/">Linkedin</a></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default Navbar;