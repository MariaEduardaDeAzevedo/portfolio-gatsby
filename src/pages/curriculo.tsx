import React from 'react'
import {ListGroup, ProgressBar, Button} from 'react-bootstrap';
import socialNetwork from '../links/social-network'
import {MapPin, Phone, Mail, Link, Download} from 'react-feather'
import CurriculumSection from '../components/CurriculumSection'
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas'

import '../styles/curriculum.css'
import InfoBox from '../components/InfoBox';

const Curriculum = () => {

    function download() {
        location.href = "https://firebasestorage.googleapis.com/v0/b/mariaeduardadeazevedo-5765a.appspot.com/o/mariaeduardadeazevedo_firebaseapp_com_curriculo.pdf?alt=media&token=a1415d4c-4251-4d66-87ea-6efe03a4f7ef"
    }
    return(
        <div id="curriculum-page">
            <header>
                <img className="pic" src={`${socialNetwork.github}.png`} alt="Maria Eduarda de Azevedo"/>
                <div className="presentation">
                    <h1>
                        Maria Eduarda de Azevedo Silva
                    </h1>
                    <span>Futura Cientista da Computação, entusiasta em programação e tecnologia</span>
                </div>
            </header>
            <ListGroup horizontal className="infos">
                <ListGroup.Item className="item">
                    <h6>Localização <MapPin /></h6>
                    <p>Campina Grande - PB, Brasil</p>
                </ListGroup.Item>
                <ListGroup.Item className="item">
                    <h6>Telefone <Phone/></h6>
                    <p>(83) 98855-7132</p>
                </ListGroup.Item>
                <ListGroup.Item className="item">
                    <h6>E-mail <Mail/></h6>
                    <p>maria.silva@ccc.ufcg.edu.br</p>
                </ListGroup.Item>
            </ListGroup>
            <main> 
                <CurriculumSection 
                    title="Objetivos Profissionais" 
                    subtitle="Visão geral"
                >
                    <p>
                        Programadora e estudante de Ciência da
                        Computação na Universidade Federal de 
                        Campina Grande (UFCG). Construí alguns 
                        projetos com workshops em eventos de
                        desenvolvimento web, utilizando JavaScript, 
                        TypeScript, HTML5, CSS3, Node.js, React.js e 
                        React Native. Além disso, desenvolvi alguns
                        projetos de interesse próprio em Python3,
                        utilizando bibliotecas como Matplotlib, OpenCV,
                        OS, Sys, Pygame, Tweepy e outras. Além disso, já desenvolvi
                        e lidei com Java e Linguagem C, mais voltado para uma
                        roupagem acadêmica. Procuro vagas e estágios
                        em que eu possa utilizar e aperfeiçoar meus
                        conhecimentos e experiências com desenvolvimento web,
                        dados e/ou Python em geral.
                    </p>
                </CurriculumSection>
                <CurriculumSection 
                title="Educação e Capacitação"
                subtitle="Formação escolar, acadêmica e outros">
                
                <InfoBox 
                title="Ensino Fundamental"
                description="Colégio Autêntico - Campina Grande - PB (2007 - 2015)"/>

                <InfoBox 
                title="Ensino Médio"
                description="Colégio Autêntico - Campina Grande - PB (2016 - 2018)"/>

                <InfoBox 
                title="Graduação - Bacharelado em Ciência da Computação"
                description="Universidade Federal de Campina Grande (UFCG) - PB, Brasil (2019 - em andamento com término previsto para 2023)"/>
                
                <InfoBox 
                title="Fundamentos do Suporte Técnico"
                description="Google Inc. - Cresça com o Google - Coursera (2020)"/>

                </CurriculumSection>
                <CurriculumSection
                title="Habilidades"
                subtitle="Linguagens, tecnologias e outros"
                >
                    <InfoBox 
                    title="Python"
                    >
                        <ProgressBar now={80} label={`85%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="Java"
                    >
                        <ProgressBar now={70} label={`70%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="JavaScript"
                    >
                        <ProgressBar now={70} label={`70%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="TypeScript"
                    >
                        <ProgressBar now={70} label={`70%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="Linguagem C"
                    >
                        <ProgressBar now={50} label={`50%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="React"
                    >
                        <ProgressBar now={70} label={`70%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="Gatsby"
                    >
                        <ProgressBar now={60} label={`60%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="Node.js"
                    >
                        <ProgressBar now={50} label={`50%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="Git"
                    >
                        <ProgressBar now={80} label={`80%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="HTML5"
                    >
                        <ProgressBar now={75} label={`75%`}></ProgressBar>
                    </InfoBox>
                    <InfoBox 
                    title="CSS3"
                    >
                        <ProgressBar now={75} label={`75%`}></ProgressBar>
                    </InfoBox>
                </CurriculumSection>
                <CurriculumSection
                title="Habilidades Pessoais"
                subtitle="Referentes a minha pessoa"
                >
                    <InfoBox 
                    title="Alto interesse em aprender"
                    description="Sempre estou disposta a me capacitar mais e aprender sobre novas tecnologias"
                    />
                    <InfoBox 
                    title="Disponibilidade em auxiliar pessoas em aprendizado"
                    description="Estou apta a ajudar pessoas acerca de temáticas, tecnologias e conteúdos que entendo ou domino"
                    />
                    <InfoBox 
                    title="Apta a desafios"
                    description="Desafios de projetos inovadores, que me façam aprender e crescer me interessam bastante. Herdo isso de minhas experiências como aluna de olimpíadas do conhecimento nos ensinos fundamental e médio."
                    />
                    <InfoBox 
                    title="Facilidade em aprender"
                    description="Sempre que engajada ou focada em uma atividade, consigo aprender relativamente rápido o que preciso, principalmente quando envolve muita prática e aplicação"
                    />
                </CurriculumSection>
                <CurriculumSection
                title="Portfólios e Projetos"
                subtitle="Alguns dos meus projetos no GitHub"
                >
                    <InfoBox 
                    title="Portfólio e site pessoal com Gatsby"
                    description="Meu portfólio feito em Gatsby"
                    >
                    <a target="_blank" href="https://mariaeduardadeazevedo.firebaseapp.com/">https://mariaeduardadeazevedo.firebaseapp.com/<Link /></a>
                    </InfoBox>
                    <InfoBox 
                    title="Portfólio do GitHub"
                    description="Meu portfólio feito com HTML5 e CSS3"
                    >
                    <a target="_blank" href="https://mariaeduardadeazevedo.github.io/"> https://mariaeduardadeazevedo.github.io/<Link /></a>
                    </InfoBox>
                    <InfoBox 
                    title="Projetos de desenvolvimento web"
                    >
                    <span>Projeto web/mobile feito com o workshop do evento Next Level Week #1, que consiste em uma plataforma de mobilização de coleta de resíduos, utilizando React e Node.js</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/projeto_NextLevelWeek">https://github.com/MariaEduardaDeAzevedo/projeto_NextLevelWeek <Link/></a>
                    <span>Projeto web/mobile feito com o workshop do evento Next Level Week #2. Este consiste em uma plataforma de ensino remoto, na qual alunos conseguem encontrar e contatar professores para ter aulas particulares. Também feito com React e Node.js</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/Proffy">https://github.com/MariaEduardaDeAzevedo/Proffy <Link/></a>
                    <span>Código do meu portfólio feito com Gatsby.</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/portfolio-gatsby">https://github.com/MariaEduardaDeAzevedo/portfolio-gatsby <Link/></a>                            
                    </InfoBox>

                    <InfoBox 
                    title="Projetos diversos com Python"
                    >
                    <span>Código utilizado no bot @corona_news_br, que mantenho no Twitter para informar acerca da situação da Covid-19 no Brasil</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/bot_coronavirus_news">https://github.com/MariaEduardaDeAzevedo/bot_coronavirus_news <Link/></a>                            
                    <span>Programa para terminal/linha de comando que importa conteúdo de um arquivo em outro</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/header">https://github.com/MariaEduardaDeAzevedo/header <Link/></a>
                    <span>Programa utilizando OpenCV e Python que reconhece e classifica formas geométricas em um vídeo ou imagem</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/reconhecimento-de-formas">https://github.com/MariaEduardaDeAzevedo/reconhecimento-de-formas <Link/></a>
                    <span>Codificação de uma interface de código em linha de comando para acesso da API de dados do IBGE referente à ocorrência de nomes no Brasil.</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/ocorrencia-de-nome-no-brasil">https://github.com/MariaEduardaDeAzevedo/ocorrencia-de-nome-no-brasil <Link/></a>
                    <span>Simulador de estruturas genéticas utilizando Python</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/trabalho_fmcc2">https://github.com/MariaEduardaDeAzevedo/trabalho_fmcc2 <Link/></a>                            
                    <span>Implementação de algoritmos referentes à fórmula Horn e CNF</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/logica">https://github.com/MariaEduardaDeAzevedo/logica <Link/></a>                            
                    </InfoBox>

                    <InfoBox 
                    title="Projetos com Java e Linguagem C"
                    >
                    <span>Corretor ortográfico para terminal/linha de comando desenvolvido em Linguagem C</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/projeto_Linguagem_C">https://github.com/MariaEduardaDeAzevedo/projeto_Linguagem_C <Link/></a>
                    <span>Back-end de sistema de cadastro e desenvolvimento de pesquisas acadêmicas em Java</span>
                    <a target="_blank" href="https://github.com/MariaEduardaDeAzevedo/projeto_lp2">https://github.com/MariaEduardaDeAzevedo/projeto_lp2 <Link/></a>
                    </InfoBox>
                </CurriculumSection>
                <CurriculumSection
                title="Outros contatos e informações"
                subtitle="Algumas redes e contatos alternativos"
                >
                    <InfoBox 
                    title="GitHub"
                    description="MariaEduardaDeAzevedo"
                    >
                        <a href={`${socialNetwork.github}`}>https://www.github.com/MariaEduardaDeAzevedo <Link/></a>
                    </InfoBox>
                    <InfoBox 
                    title="Linkedin"
                    description="Maria Eduarda de Azevedo Silva"
                    >
                        <a href={`${socialNetwork.linkedin}`}>https://www.linkedin.com/in/maria-eduarda-de-azevedo-silva-a9a134191/ <Link/></a>
                    </InfoBox>
                    <InfoBox
                    title="Currículo Lattes"
                    description="Maria Eduarda de Azevedo Silva"
                    >
                        <a href="http://lattes.cnpq.br/8256422030181680">http://lattes.cnpq.br/8256422030181680 <Link/></a>
                    </InfoBox>
                    <InfoBox
                    title="Currículo Online"
                    >
                        <a href="https://mariaeduardadeazevedo.firebaseapp.com/">https://mariaeduardadeazevedo.firebaseapp.com/curriculo <Link/></a>
                    </InfoBox>
                    <InfoBox
                    title="E-mail alternativo"
                    description="maria-eduarda-azevedo@hotmail.com"
                    />
                </CurriculumSection>
                <Button> <Download /> Baixar PDF </Button>
            </main>
        </div>        
    );
};

export default Curriculum;
