import React from 'react'

import './styles.css'

import {OverlayTrigger, Tooltip} from 'react-bootstrap'

interface Properties {
    title: string;
    href?: string;
    description?: string;
    src: string;
};

const IconBox:React.FC<Properties> = ({title, href, src, description}) => {
    return(
        <OverlayTrigger
            placement="top"
            overlay={
            <Tooltip 
            className="tooltip"
            id="tooltip-top">
                {
                    description ? description : title
                }
            </Tooltip>
            }
        >
        <a className="" target="_blank" id="icon-box" href={href}>
            <img src={src} alt={title}/> <span>{title}</span>
        </a>
    </OverlayTrigger>
    );
};

export default IconBox;