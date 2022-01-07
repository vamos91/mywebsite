import React from 'react';
import './feature.css'
import { FaNodeJs, FaReact, FaGitSquare, FaVuejs, FaPhp, FaBootstrap } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

const Feature = () => {
    return (
        <div className='gtp3__features__techno-container__feature'>
            <div className='bar'></div>
            <div className='gtp3__features__techno-icon'>
                <FaNodeJs className='icon' />
                <SiExpress className='icon' />
                <SiMongodb className='icon' />
                <FaPhp className='icon' />
                <SiMysql className='icon' />
                <FaReact className='icon' />
                <FaVuejs className='icon' />
                <FaGitSquare className='icon' />
                <FaBootstrap className='icon' />
            </div>
        </div>
    );
};

export default Feature;