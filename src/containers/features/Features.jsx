import React from 'react';
import { Feature } from '../../components'
import ButtonCV from '../../components/buttonCV/ButtonCV';
import './features.css'
import logoCapsule from "../../assets/capsule.png"
import logoSimplon from "../../assets/simplon.png"
import logoGep from '../../assets/gep.png'
import logoSkypicture from "../../assets/sky.jpeg"
import logoPlateforme from '../../assets/plateforme.png'
import logoWild from '../../assets/wild.png'


const Features = () => {
    const featureData = [
        {
            title: "LA WILD CODE SCHOOL",
            text: "En charge de l'accompagnement des apprenants vers le titre professionnel de niveau IV sur les parties WEB fullstack JAVASCRIPT et mobile.",
            img: logoWild
        },
        {
            title: "LA PLATEFORME MARSEILLE",
            text: "En charge de l'accompagnement des apprenants vers le titre professionnel de niveau IV sur les parties WEB fullstack et mobile.",
            img: logoPlateforme
        },
        {
            title: "LA CAPSULE ACADEMY",
            text: "Coding Bootcamp en 10 semaines pour apprendre à coder et devenir développeur web ou avoir les compétences techniques pour travailler dans la tech. Formation et accompagnement d’une promo Développeur Web & Mobile vers le titre de niveau VI(niveau Bac + 3 / 4).",
            img: logoCapsule
        },
        {
            title: "SIMPLON PACA",
            text: "Formation et accompagnement d'une promotion de 24 étudiants vers le titre de niveau III « Développeur web et web mobile ». Création et animation des cours, gestion des projets web par les étudiants en méthodes ‘Agile’, constitution des évaluations en cours de formation (ECF). Cours effectués à distance la moitié du temps avec Discord",
            img: logoSimplon
        },
        {
            title: "GROUPE ÉCOLE PRATIQUE",
            text: "Formation et accompagnement d’une promo « Développeur web et web mobile » vers le titre de niveau III (bac+2) et d’une promo « concepteur et développeur d’application » vers le bachelor (bac+3). Cours effectués à distance la moitié du temps avec Microsoft Team’s.",
            img: logoGep
        },
        {
            title: "SIMPLON PACA",
            text: "Formation et accompagnement d'une promotion 100% femme vers le titre de niveau III « Développeuse web et web mobile ». Création et animation des cours, gestion des projets web par les étudiants en méthodes ‘Agile’ par groupe, constitution des évaluations en cours de formation (ECF). Organisation de sorties pédagogique pour assister à des conférences techs et meetup sur Marseille et Aix-en-Provence.",
            img: logoSimplon
        },
        {
            title: "SKYPICTURE",
            text: "Développement de sites web applicatif. Ecoute et analyse des besoins, conseil et accompagnement en stratégie digitale.",
            img: logoSkypicture
        }
    ]
    return (
        <div className='gpt3__features section__padding' id="features">
            <div className='gpt3__feature-header'>
                <p>Mes expériences en tant que développeur et formateur.</p>
                <h1 className='gradient__text'>J’affectionne les technologies digitales, l’innovation numérique, et l’impact qu’elles ont sur le monde et nos habitudes.</h1>
                <ButtonCV />
            </div>
            <div className='gpt3__features-container'>
                {
                    featureData.map((data) => (
                        <Feature title={data.title} text={data.text} logo={data.img} margin="2rem"/>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;