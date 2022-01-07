import React from 'react';
import { Feature } from '../../components'
import './formation.css'

const Formation = () => {
    return (
        <div className='gpt3___whatgpt3 gradient__bg section__padding section__margin' id="whatgpt3">
            <div className='gtp3__whatgtp3-feature'>
                <Feature title="Comment je me suis formé." text="Bricoleur, concepteur, créatif, ou encore inventeur. Depuis l’enfance, je suis fasciné par les sciences et la technique. Démonter, remonter et voir comment les choses fonctionnent et s’imbriquent ne me demandait aucun effort."/>
            </div>
            <div className='gtp3__whatgtp3-heading'>
                <h1 className='gradient__text'>Etudes, formations courtes, cours en ligne ont parfait mes connaissances de développeur web.</h1>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Développeur front-end" text="Autodidacte, je me suis formé sur les technos Javascript Vue.js et React.js"/>
                <Feature title="Développeur web avec Le Wagon Marseille" text="Formation aux techniques de développement web fullstack. Développement d’une marketplace mettant en relation pilote et passagers : www.makemefly.fr"/>
                <Feature title="BTS informatique industrielle" text="Programmation orientée objet et développement sur les langages compilés suivants : C – C++ - Assembleur 80x86"/>
            </div>
        </div>
    );
};

export default Formation;