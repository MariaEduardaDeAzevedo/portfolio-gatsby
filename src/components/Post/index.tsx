import React from 'react';

import './styles.css'

interface Properties {
    title: string;
    description: string;
    day: string;
    month: string;
    year: string;
    author: string;
    category: string;
}

const Post:React.FC<Properties> = ({title, description, author, category, day, month, year, children}) => {
    return(
        <div id="post">
            <header>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="post-info">
                    <span>por {author} em {day}/{month}/{year}</span>
                    <span>{category}</span>
                </div>
            </header>
            <div className="childreen">
                {children}
            </div>
        </div>
    );
};

export default Post;