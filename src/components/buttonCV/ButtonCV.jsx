import React from 'react';
import './button.css'
import file from './cv_2021_formateur.pdf'


const ButtonCV = () => {
    return (
        <div className='gpt3__cv-container'>
            <a href={file} download><button>Télécharger CV</button></a> 
        </div>
    );
};

export default ButtonCV;