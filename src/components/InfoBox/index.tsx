import React from 'react'

import './styles.css'

interface Properties {
    title: string;
    description?: string;
}

const InfoBox:React.FC<Properties> = ({title, description, children}) => {
    return(
        <div id="info-box">
            <h5>{title}</h5>
            <span>{description}</span>
            {children}
        </div>
    );
         
}

export default InfoBox;
