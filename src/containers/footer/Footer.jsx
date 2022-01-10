import React from 'react';
import './footer.css'
import gtp3Logo from '../../assets/logo.svg'
import ButtonCV from '../../components/buttonCV/ButtonCV';
import { FaNodeJs, FaReact, FaGitSquare, FaVuejs, FaPhp } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='gtp3__footer section__padding' id="footer">
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Créons quelque chose de fantastique ensemble.</h1>
            </div>
            <div className='gpt3__footer-btn center'>
                <ButtonCV />
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links-logo'>
                    <h2 className='gradient__text'>Nicolas Acard</h2>
                    <p>Tel: 0661568140</p>
                    <p>Mail: acardnicolas91@gmail.com</p>
                </div>
                <div className='gpt3__footer_links-div social'>
                    <h4></h4>
                    <div className='social-logo'>
                        <p> <a href="https://github.com/vamos91">< FaGitSquare /></a></p>
                        <p> <a href="https://www.linkedin.com/in/nicolas-acard-a4644466/">< FaLinkedin /></a></p>
                    </div>
                </div>
            </div>
            <div className='gtp3__footer-copyrigth'>
                <p></p>
            </div>
        </div>
    );
};

export default Footer;