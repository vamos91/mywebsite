import React from 'react';
import './blog.css'
import Article from '../../components/articles/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import { FaNodeJs, FaReact, FaGitSquare, FaVuejs, FaPhp } from 'react-icons/fa'
import { SiRubyonrails, SiJavascript } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id="blog">
            <div className='gpt3__blog-header'>
                <h1 className='gradient__text'>
                    Exemples de quelques sites web et applications, UI/UX, prototypage et web design.
                </h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container-groupA'>
                    <Article imgUrl={blog01} date="12 dec 2020" techno={[< FaNodeJs color="#88C248" />, <SiExpress />]} title="Site vitrine pour la promotion de cours dans le domaine du numérique tels que l'apprentissage du code et de ses bonnes pratiques."/>
                </div>
                <div className='gpt3__blog-container-groupB'>
                    <Article imgUrl={blog02} date="12 dec 2018" techno={[< FaVuejs color="#3FB17F" />]} title="Prototype d'application de tableau de bord pour la société Arcure. L'application permet d'observer des données en temps réel." />
                    <Article imgUrl={blog03} date="12 dec 2021" techno={[< FaVuejs color="#3FB17F" />, < SiMysql color="#DD8B00" />]} title="Système de gestion client (CRM) permettant à de commerciaux de gérer leur portfeuille de praticien. Projet pédagogique." />
                    <Article imgUrl={blog04} date="12 dec 2021" techno={[< SiRubyonrails color="#C60700" />, < SiMysql color="#DD8B00" />]} title="Application de mise ne relation entre des pilotes et des passagers. Il s'agit d'un projet de fin d'étude au Wagon." />
                    <Article imgUrl={blog05} date="12 dec 2021" techno={[< FaVuejs color="#3FB17F" />, < SiMysql color="#DD8B00" />, < FaPhp color="#5D7DB0" />]} title="Application de musique basé sur l'API de Deezers. Projet pédagogique à destination d'élève de Bachelor." />
                </div>
            </div>
        </div>
    );
};

export default Blog;