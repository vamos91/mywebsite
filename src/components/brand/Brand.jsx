import React from 'react';
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './import'
import video from "../../assets/codes.mp4"
import ButtonCV from '../buttonCV/ButtonCV';

const Brand = () => {
    return (
        <div className='gpt3__brand-container'>
            <ButtonCV />
            <div className='gpt3__brand center'>
                <div>
                    <img src={google} alt="google" />
                </div>
                <div>
                    <img src={slack} alt="slack" />
                </div>
                <div>
                    <img src={atlassian} alt="atlassian" />
                </div>
                <div>
                    <img src={dropbox} alt="dropbox" />
                </div>
                <div>
                    <img src={shopify} alt="shopify" />
                </div>
        </div>
        
        </div> 
    );
};

export default Brand;