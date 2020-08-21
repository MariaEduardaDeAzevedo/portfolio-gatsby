import React, {useState} from 'react';

//Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

interface Properties {
    src: string;
    title: string;
    description: string;
    id: string;
}

const Section:React.FC<Properties> = ({src, title, description, children, id}) => {

  return(
    <section className="section" id={id}>
      <div className="header">
          <img src={src} alt=""/>
          <div className="text">
            <h1>{ title }</h1>
            {description}
          </div>
      </div>
      <div className="childreen">
        { children }
      </div>
    </section>
  );
}

export default Section;
