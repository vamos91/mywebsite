import React from 'react';
import './article.css'

const Article = (props) => {
    return (
        <div className='gpt3__blog-container_articles'>
            <div className='gpt3__blog-container_articles-image'>
                <img src={props.imgUrl} alt="" />
           </div>
            <div className='gpt3_blog-container_article-content'>
                <div>
                    <p>{props.date}</p>
                    <h3>{props.title}</h3>
                </div>
                <p>{
                        props.techno.map((logo) => (
                            <span style={{ margin: '10px'}}>{logo}</span> 
                        ))
                }</p>
            </div>
        </div>
    );
};

export default Article;