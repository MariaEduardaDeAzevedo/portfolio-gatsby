import React from 'react';

import { Nav } from 'react-bootstrap';
import Emoji from '../Emoji';

import './styles.css'

interface Properties {
    hidden: boolean;
}

const Navigator:React.FC<Properties> = ({hidden}) => {

    return(
        <div id="navigator" className={hidden ? "hidden" : "show"}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/" className="title">
                    <img src="https://blush.ly/O3BaEchZv/p" alt=""/>
                    <div className="text">
                        <h4>Maria Eduarda de Azevedo</h4>
                        <span>
                        <Emoji src="https://image.flaticon.com/icons/svg/261/261586.svg"/>
                        Estudante de Ciência da Computação
                        </span>
                    </div>
                </Nav.Link>
                <Nav.Link href="#sobre" eventKey="link-1" className="link-navigator">
                    Quem sou eu?
                    <img src="https://blush.ly/HDIbpsSFv/p"/>
                </Nav.Link>
                <Nav.Link href="#minhas-conquistas" eventKey="link-2" className="link-navigator">
                    <img src="https://blush.ly/GW1ekutDf/p"></img>
                    Minhas conquistas
                </Nav.Link>
                <Nav.Link href="#linguagens-e-tecnologias" eventKey="link-3" className="link-navigator">
                    Linguagens e Tecnologias
                    <img src="https://blush.ly/tlptP2QWb/p"></img>
                </Nav.Link>
                <Nav.Link href="#meus-repositorios" eventKey="link-4" className="link-navigator">
                    <img src="https://blush.ly/9aQOP0YX9/p"></img>
                    Meus Repositórios
                </Nav.Link>
                <Nav.Link href="#contatos" eventKey="link-4" className="link-navigator">
                    Por onde me encontrar
                    <img src="https://blush.ly/ga99XcUwn/p"></img>
                </Nav.Link>
                <Nav.Link href="/blog" eventKey="link-4" className="link-navigator">
                    <img src="https://blush.ly/dRukeeBZc/p" />
                    Eduarda está digitando...
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Navigator;