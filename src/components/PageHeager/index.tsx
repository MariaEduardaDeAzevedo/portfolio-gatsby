import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap';

import './styles.css'

const PageHeader = () => {
    return(
        <header id="page-header">
            <a href="/blog">
                <img src="https://blush.ly/tEgp2Tsot/p" alt="Eduarda está digitando..."/>
                <div className="text">
                    <h2>Eduarda está digitando...</h2>
                </div>
            </a>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">
                        Portfólio  
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Posts" id="nav-dropdown">
                    <NavDropdown title="Tecnologia" id="tecnology-nav-dropdown">   
                    </NavDropdown>
                    <NavDropdown title="Mulheres Inspiradoras" id="women-nav-dropdown">
                    </NavDropdown>
                    <NavDropdown title="Aleatórios" id="random-nav-dropdown">
                        <NavDropdown.Item>
                            <Nav.Link href="/blog/eu-escolhi-computacao">Eu escolhi Computação</Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </NavDropdown>
            </Nav>
        </header>
    );
};

export default PageHeader;