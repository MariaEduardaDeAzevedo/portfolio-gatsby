import React from 'react'

import './styles.css'

interface Properties {
    title: string;
    subtitle: string;
}

const CurriculumSection:React.FC<Properties> = ({title, subtitle, children}) => {
    return(
        <section id="curriculum-section">
            <div className="title">
                <h2>
                    {title}
                </h2>
                <span>{subtitle}</span>
            </div>
            <div className="description">
                <div className="childreen">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default CurriculumSection;
