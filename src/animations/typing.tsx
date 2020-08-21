import React from 'react'

import Typing from 'react-typing-animation';

interface Properties {
    text:string;
    otherText: string;
    chars: number;
    clean: boolean;
}

const TypingEffect:React.FC<Properties> = ({text, chars, clean, otherText}) => {
    return (
        <>
            <Typing>
            {text}
            {
                clean ? <Typing.Backspace count={chars}/> : {}
            }
            {otherText}
            </Typing>
            
        </>
    );
}

export default TypingEffect;