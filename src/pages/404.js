import React from 'react'

import { ArrowLeft } from 'react-feather'

import '../styles/page-not-found.css'

const PageNotFound = () => {

    return(
        <div id="page-not-found">
            <img src="https://blush.ly/Y3awXxp6G/p" alt="Maria Eduarda de Azevedo"/>
            <div className="text">
                <h1>404: Vish, tem é nada aqui...</h1>
                <a href="javascript:history.go(-1)"> <ArrowLeft /> Volte para a página anterior</a>
            </div>
        </div>
    );
}

export default PageNotFound;