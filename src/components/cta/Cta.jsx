import React from 'react';
import ButtonCV from '../buttonCV/ButtonCV';
import './cta.css'

const Cta = () => {
    return (
        <div className='gpt3__cta section__padding'>
            <div className='gpt3__cta-content'>
                <p>Méthode Agiles</p>
                <h3>Que ce soit en développement d'application ou en formation professionnelle, j'applique la gestion de projet Scrum.</h3>
            </div>
            <div className='gpt3__cta-button'>
                <ButtonCV />
            </div>
        </div>
    );
};

export default Cta;