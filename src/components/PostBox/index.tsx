import React from 'react'

import './styles.css';

interface Properties {
    title: string;
    description: string;
    day: string;
    month: string;
    year: string;
    author: string;
    src: string;
    href: string;
}

const PostBox:React.FC<Properties> = ({title, description, day, month, year, author, src, href}) => {
    return(
            <div id="post-box">
                <a href={href}>
                    <header>
                        <h1>{title}</h1>
                        <img src={src} alt=""/>
                    </header>
                    <p>{description}</p>
                    <footer>
                        <span>por {author}</span>
                        {day}/{month}/{year}
                    </footer>
                </a>
            </div>
    );
}

export default PostBox