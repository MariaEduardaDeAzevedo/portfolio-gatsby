import React from 'react'
import icons from '../../images/adresses/icons'
import socialNetworks from '../../links/social-network'

import {ArrowUp} from 'react-feather'

import './styles.css'

const PageFooter = () => {
    return(
        <div id="page-footer">
            <div className="social-network">
                <a href={socialNetworks.github}>
                    <img src={icons.github} alt="GitHub"/>
                </a>
                <a href={socialNetworks.twitter}>
                    <img src={icons.twitter} alt="Twitter"/>
                </a>
                <a href={socialNetworks.linkedin}>
                    <img src={icons.linkedin} alt="Linkedin"/>
                </a>
            </div>
            <a className="go-top" href="#page-header">Voltar ao topo <ArrowUp className="icon"/></a>
            <a href="/blog" className="logo">
                <img src="https://blush.ly/tEgp2Tsot/p" alt="Eduarda está digitando..."/>
                <div className="text">
                    <h2>Eduarda está digitando...</h2>
                </div>
            </a>
            
        </div>
    );
};

export default PageFooter;