import React from 'react';
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { Techno } from '../../components'

const Header = () => {
    return (
        <div className='gpt3__header section__padding'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>
                    Nicolas Acard. Développeur web Fullstack et formateur.
                </h1>
                <p>Formateur et passionné de code, je coach et j'accompagne des apprenants vers le titre RNCP, les rendant ainsi attractif sur la marché de l'emploi. Je suis curieux avec une vision large et polyvalente, j’aime adapter un langage technique à un langage profane. En tant que développeur, je code des applications avec des technologies modernes telles que: </p>
                {/* <div className='gpt3__header-content_input center'>
                    <input type="email" placeholder='Ex: lisa@gmail.com' />
                    <button type="button">Get started</button>
                </div> */}
                <div className='gpt3__header-content-image'>
                    <Techno />
                </div>
            </div>  
            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
};

export default Header;