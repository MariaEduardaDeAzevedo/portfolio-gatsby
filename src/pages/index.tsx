import React, { useState, useEffect } from 'react'

import '../styles/home.css'

import Section from '../components/Section'
import Navigator from '../components/Navigator'
import IconBox from '../components/IconBox'
import { Menu, ChevronsLeft } from 'react-feather';
import { Button } from 'react-bootstrap';
import icons from '../images/adresses/icons'
import socialNetworks from '../links/social-network'

const Home = () => {

    const [hiddenSideBar, setHiddenSideBar] = useState(true);
    const [mouseOver, setMouseOver] = useState(false);
    const [buttonText, setButtonText] = useState("Mostrar menu lateral");

    useEffect(() => {
        setMouseOver(false);
        if (hiddenSideBar) {
            setButtonText("Mostrar menu lateral");
        } else {
            setButtonText("Esconder menu lateral");
        }
    }, [hiddenSideBar]);

    return(
        <div id="home-page">
            <main className={hiddenSideBar ? "hidden-sidebar" : "no-hidden-sidebar"}>
                <div className="sections-block">
                    <Section 
                        id="sobre"
                        src="https://blush.ly/HDIbpsSFv/p"
                        title="Quem sou eu?" 
                        description="Um pouco sobre quem vos fala"
                    >
                        <div>
                            <p>
                                Olá, Mundo! Me chamo Maria Eduarda de Azevedo
                                e atualmente sou estudante de Ciências da Computação
                                na Universidade Federal de Campina Grande (UFCG).
                            </p>
                            <p>
                                Iniciei minha relação direta com a área de tecnologia quando 
                                decidi ingressar na minha graduação no ano de 2019, estimulada
                                pela minha paixão por ciências e matemática, alimentadas pelas 
                                minhas participações em olimpíadas do conhecimento durante os 
                                ensinos fundamental e médio. 
                            </p>
                        </div>
                        <div>
                            <p>
                                Meus maiores interesses na TI são em dados, desenvolvimento web 
                                e mobile, mas estou em constante interesse e aprendizado pelo
                                leque de possibilidades que essa área nos trás.
                            </p>
                            <p>
                                Como profissional, espero contribuir de forma ativa para melhorar 
                                as relações nessa nova era e utilizar dos meus meios para desenvolver
                                em prol da sociedade.
                            </p>
                        </div>
                    </Section>
                    <Section 
                        id="minhas-conquistas"
                        src="https://blush.ly/GW1ekutDf/p"
                        title="Minhas Conquistas" 
                        description="Premiações, medalhas e outras coisas que conquistei"
                    >
                        <IconBox 
                            src={icons.second} 
                            description="Olimpíada Brasileira de Astronomia - 2014" 
                            title="OBA"
                        />
                        <IconBox 
                            src={icons.first} 
                            description="Olimpíada Brasileira de Astronomia - 2015" 
                            title="OBA"
                        />
                        <IconBox 
                            src={icons.second} 
                            description="Olimpíada Brasileira de Astronomia - 2016" 
                            title="OBA"
                        />
                        <IconBox 
                            src={icons.second} 
                            description="Olimpíada Brasileira de Astronomia - 2017" 
                            title="OBA"
                        />
                        <IconBox 
                            src={icons.third} 
                            description="Olimpíada Brasileira de Física (Fase Estadual) - 2014" 
                            title="OBF"
                        />
                        <IconBox 
                            src={icons.first} 
                            description="Olimpíada Brasileira de Física (Fase Estadual) - 2015" 
                            title="OBF"
                        />
                        <IconBox 
                            src={icons.second} 
                            description="Olimpíada Brasileira de Física (Fase Estadual) - 2017" 
                            title="OBF"
                        />
                        <IconBox 
                            src={icons.third} 
                            description="Olimpíada Campinense de Física - 2017" 
                            title="OCF"
                        />
                        <IconBox 
                            src={icons.third} 
                            description="Olimpíada Brasileira de Química Jr - 2014" 
                            title="OBQJr"
                        />
                        <IconBox 
                            src={icons.third} 
                            description="Olimpíada Brasileira de Química Jr - 2015" 
                            title="OBQJr"
                        />
                        <IconBox 
                            src={icons.third} 
                            description="Olimpíadas InterGEO (3° lugar de melhor desempenho nacional em Química) - 2015" 
                            title="Olimpíadas InterGEO"
                        />
                        <IconBox 
                            src={icons.second} 
                            description="Olimpíada Paraibana de Química - 2015" 
                            title="OPBQ"
                        />
                        <IconBox 
                            src={icons.certificate} 
                            description="Olimpíada Campinense de Matemática - 2014" 
                            title="OCM"
                        />
                        <IconBox 
                            src={icons.certificate} 
                            description="Olimpíada Campinense de Matemática - 2015" 
                            title="OCM"
                        />
                        <IconBox 
                            src={icons.certificate} 
                            description="Prêmio Inovação Científica (Secretaria de Ciências, Tecnologias e Inovação de Campina Grande) - 2018" 
                            title="Inovação Científica"
                        />
                        <IconBox 
                            src={icons.certificate} 
                            description="Prêmio Capes Talento Universitário - 2019" 
                            title="Talento Universitário"
                        />
                    </Section>
                    <Section 
                        id="linguagens-e-tecnologias"
                        src="https://blush.ly/tlptP2QWb/p"
                        title="Linguagens e Tecnologias" 
                        description="O que venho estudando e no que venho programando"
                    >
                        <IconBox src={icons.python} title="Python"/>
                        <IconBox src={icons.java} title="Java"/>
                        <IconBox src={icons.c_language} title="Linguagem C"/>
                        <IconBox src={icons.javascript} title="JavaScript"/>
                        <IconBox src={icons.typescript} title="TypeScript"/>
                        <IconBox src={icons.javascript} title="JavaScript"/>
                        <IconBox src={icons.html} title="HTML5"/>
                        <IconBox src={icons.css} title="CSS3"/>
                        <IconBox src={icons.react} title="React"/>
                    </Section>
                    <Section 
                        id="meus-repositorios"
                        src="https://blush.ly/9aQOP0YX9/p"
                        title="Meus Repositórios" 
                        description="Alguns dos meus repositórios no GitHub"
                    >
                        <IconBox 
                            src={icons.python_file} 
                            description="Programa em Python3 que importa conteúdo de um arquivo pré-salvo em outro." 
                            title="Header"
                            href={`${socialNetworks.github}/header`}
                        />
                        <IconBox 
                            src={icons.python_file} 
                            description="Código do bot @corona_news_br, que atualiza os seguidoras acerca da situação da COVID-19 no Brasil." 
                            title="Bot Coronavírus"
                            href={`${socialNetworks.github}/bot_coronavirus_news`}
                        />
                        <IconBox 
                            src={icons.c_file} 
                            description="Corretor ortográfico para terminal/linha de comando desenvolvido como projeto final de curso de Linguagem C." 
                            title="Corretor Ortográfico"
                            href={`${socialNetworks.github}/projeto_Linguagem_C`}
                        />
                        <IconBox 
                            src={icons.java_file} 
                            description="Back-end de sistema de cadastro de pesquisas acadêmicas feito em Java como projeto da disciplina de Laboratório de Programação II." 
                            title="Psquiza"
                            href={`${socialNetworks.github}/projeto_lp2`}
                        />
                        <IconBox 
                            src={icons.python_file} 
                            description="Programa em Python que gera um gráfico com a frequência de registros de um nome pesquisado entre os censos de 1930 e 2010, com base na API de Nomes do IBGE." 
                            title="Ocorrência de nomes"
                            href={`${socialNetworks.github}/ocorrencia-de-nome-no-brasil`}
                        />
                        <IconBox 
                            src={icons.web} 
                            description="Projeto de desenvolvimento web/mobile feito com workshop do evento da Next Level Week #2, promovido pela Rocketseat. O projeto consiste em um sistema de cadastro de professores para promover aulas remotas." 
                            title="Proffy"
                            href={`${socialNetworks.github}/Proffy`}
                        />
                        <IconBox 
                            src={icons.web} 
                            description="Projeto de desenvolvimento web/mobile feito com workshop do evento da Next Level Week #1, promovido pela Rocketseat. O projeto consiste em uma plataforma de cadastro de pontos de coleta de resíduos." 
                            title="Ecoleta"
                            href={`${socialNetworks.github}/projeto_NextLevelWeek`}
                        />
                    </Section>
                    <Section 
                        id="contatos"
                        src="https://blush.ly/ga99XcUwn/p"
                        title="Por onde me encontrar" 
                        description="Voce me encontra em..."
                    >
                        <IconBox title="GitHub" src={icons.github} href={socialNetworks.github} description="MariaEduardaDeAzevedo"/>
                        <IconBox title="Linkedin" src={icons.linkedin} href={socialNetworks.linkedin} description="Maria Eduarda de Azevedo Silva"/>
                        <IconBox title="Twitter" src={icons.twitter} href={socialNetworks.twitter} description="@ddt_azevedo"/>
                    </Section>
                </div>
            </main>
            <div onMouseOut={() => setMouseOver(false)} onMouseOver={() => setMouseOver(true)} className="button-block" id={hiddenSideBar ? "button-block-menu" : "button-block-hidden"}>
                <Button onClick={() => {setHiddenSideBar(!hiddenSideBar)}} className="mini-button">
                    {
                        hiddenSideBar ? <Menu /> : <ChevronsLeft />
                    }
                </Button>
                <span>
                    {mouseOver ? buttonText : <></>}
                </span>
            </div>
            <Navigator hidden={hiddenSideBar}/>
        </div>
    );    
}

export default Home;