import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id="possibility">
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Aujourd’hui les jouets de construction ont laissé la place au numérique, au conseil et à l’accompagnement.</h4>
                <h1 className='gradient__text'>Nicolas Acard. Développeur web fullstack.</h1>
                <p>De l’idée à la réalisation, j’aime conseiller et concevoir vers le résultat souhaité. Je suis curieux avec une vision large et polyvalente, j’aime adapter un langage technique à un langage profane.</p>
                <h4>Je pratique les méthodes Agile avec Scrum</h4>
            </div>
        </div>
    );
};

export default Possibility;