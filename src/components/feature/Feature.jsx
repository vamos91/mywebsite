import React from 'react';
import './feature.css'

const Feature = (props) => {
    return (
        <div className='gtp3__features-container__feature' style={{ marginTop: props.margin }}>
            <div className='gpt3__features-container__feature-title'>
                <div className='bar'></div>
                <div className='gtp3__features-container__feature-header'>
                    {props.logo ? <img src={props.logo} alt="" /> : '' }
                    <h1>{props.title}</h1> 
                </div>
            </div>
            <div className='gtp3__features-container__feature-text'>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Feature;