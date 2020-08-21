import React from 'react'
import PageHeader from '../../components/PageHeager'

import '../../styles/blog.css'
import TypingEffect from '../../animations/typing';
import PostBox from '../../components/PostBox';
import icons from '../../images/adresses/icons';
import PageFooter from '../../components/PageFooter';

const Blog = () => {
    return(
        <div id="blog">
            <PageHeader />
            <main>
                <div className="presentation">
                    <img src="https://blush.ly/tEgp2Tsot/p" alt="Eduarda está digitando..."/>
                    <div className="text">
                        <h2>Eduarda está digitando...</h2>
                        <TypingEffect text="Um blog sobre tecnologia, empoderamento, aletoriedades, interesses, min" otherText=" e outras coisas." clean={true} chars={47}/>
                    </div>
                </div>
                <div className="post-list">
                    <PostBox 
                        href="/blog/eu-escolhi-computacao"
                        title="Eu escolhi Computação"
                        description="Como que eu acabei parando em Ciência da Computação?"
                        day="21"
                        month="08"
                        year="2020"
                        author="Maria Eduarda de Azevedo"
                        src={icons.random}
                    />
                </div>
            </main>
            <PageFooter />
        </div>
    );
};

export default Blog;