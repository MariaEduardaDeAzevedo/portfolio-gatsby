import React from 'react'

import './styles.css'

interface Properties {
    src: string;
}

const Emoji:React.FC<Properties> = ({src}) => {
    return(
        <img id="emoji" src={src}/>
    );
}

export default Emoji;
