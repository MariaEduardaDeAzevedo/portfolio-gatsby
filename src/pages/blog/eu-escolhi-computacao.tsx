import React from 'react'
import PageHeader from '../../components/PageHeager'

import '../../styles/post.css'

import Post from '../../components/Post'
import PageFooter from '../../components/PageFooter';

const Blog = () => {
    return(
        <div id="post-page">
            <PageHeader />
            <Post
                title="Eu escolhi Computação"
                description="Vou compartilhar com vocês
                a jornada da minha decisão na escolha 
                desse curso, pelo qual hoje sou 
                perdidamente apaixonada."
                author="Maria Eduarda de Azevedo"
                day="21"
                month="08"
                year="24"
                category="Aleatório"
            >
                <p>
                    A escolha da carreira é definitivamente uma das escolhas mais
                    complicadas, confusas e difíceis da nossa vida. A pressão 
                    dos processos seletivos, dos familiares e da sociedade em geral
                    nos deixam cada vez mais ansiosos e inseguros de nossas escolhas,
                    principalmente por estarmos sendo cobrados pelos nossos futuros.
                    Neste post irei contar um pouco de toda minha tragetória na escolha
                    da graduação que escolhi cursar.
                </p>
                <p>
                    Quando somos crianças, sempre somos indagados com a famosa pergunta
                    "o que você quer ser quando crescer?" e sempre escutamos as mais
                    variadas profissões. A minha resposta era sempre "professora". Acredito 
                    que, pelo fato do ambiente escolar me fazer muito bem, pois era lá que
                    eu tinha as respostas para minhas perguntas e meus amigos (alguns me
                    acompanham até hoje), eu não queria deixar aquele lugar.
                </p>
                <p>
                    Apesar de responder que iria ser professora, por algum tempo o meu cérebro
                    travava na pergunta seguinte: professora de quê? Pois bem, eu não sabia,
                    apenas queria ensinar. Porém, o tempo foi passando e ainda no ensino fundamental
                    eu comecei a me apaixonar por uma das mais belas áreas do conhecimento: a matemática.
                    Sempre me fascinou o jeito que nela tudo fazia sentido e, de algum modo, tudo 
                    acabava se encaixando no fim.
                </p>
                <p>
                    Desse modo, comecei a me engajar em fazer olimpíadas do conhecimento, principalmente de
                    matemática e astronomia. Durante os dois primeiros anos não consegui nenhuma premiação,
                    mas continuava empolgada e buscando fazer as provas, até que em 2014, no auge dos meus
                    13 anos de idade, eu finalmente consegui minha primeira conquista em uma olimpíada. 
                    Foi aquela mensão honrosa na Olimpíada Campinense de Matemática que me deu um norte:
                    eu vou ser professora de matemática.
                </p>
                <p>
                    Assim, continuei a participar das competições, ganhei premiações em química, física, 
                    astronomia, matemática, alguns reconhecimentos, dentre eles uma bolsa integral na escola 
                    que estudava e comecei a me apaixonar cada vez mais pelas ciências exatas e da natureza. 
                    Quando me perguntavam o que eu queria estudar na universidade falava "matemática" sem 
                    pestanejar. Os professores me apoiavam, meus amigos igualmente, mas minha família...
                    tivemos uma luta.
                </p>
                <p>
                    Quando falei a minha mãe que queria estudar matemática, ela não se agradou muito, mas depois
                    de muita conversa e de muitos argumentos de minha parte consegui o apoio dela. E foi com o apoio
                    de todo mundo que eu estava quase firme de que esse seria o meu futuro. Quase. O que eu não esperava
                    era a loucura que é viver o ensino médio, mais especificamente o último ano.
                </p>
                <p>
                    Em 2018 o meu terceiro ano bateu na porta e eu continuava firme de minha decisão. O tempo foi passando,
                    mês a mês, mais pressão, a insegurança batendo, um monte de questionamentos, até que, cerca de seis meses
                    antes de prestar o ENEM eu pensei "e se matemática não for o que realmente eu quero?". Foi nesse ponto que
                    eu decidi me abrir para novas possibilidades, porém, quais?
                </p>
                <p>
                    Sempre que eu fazia testes vocacionais me listavam dezenas de engenharias, mas eu nunca me interessei por 
                    nenhuma delas. Até que, em um certo sábado daquele ano, fui a um aulão daqueles organizados por cursinhos,
                    esse, especificamente, no auditório de uma universidade particular de minha cidade. Estava tendo uma feira
                    de profissões e eu e meu amigo nos aproximamos de alguns para conhecer, até que vimos outro amigo nosso no
                    stand de Sistemas de Informação.
                </p>
                <p>
                    Fomos até lá e batemos um papo com um dos organizadores do curso, que fez uma ótima propaganda da graduação e
                    da área de TI, de forma indireta. Comecei a cogitar uma certa possibilidade ali e meus amigos, vendo meu possível
                    interesse já brincavam "é TI, Duda, vamos pra TI", mas eu ainda estava muito confunsa acerca de tudo, aliás,
                    matemática era quase meu sonho de infância.
                </p>
                <p>
                    Passou-se mais um tempo, acredito que cerca de três meses antes do ENEM, voltei àquela universidade para participar
                    de um workshop do curso de Sistemas de Informação. Até então, meu maior contato com programação havia sido um pouco de
                    lógica com portugol, utilizando o VisualG para escrever, interpretar e executar os algoritmos. Mas eu não esperava o
                    que estava por vir. Naquele dia, eu programei em uma linguagem de programação pela primeira vez, Python, para ser mais
                    específica e eu senti a identificação no mesmo momento. 
                </p>
                <p>
                    Eu cheguei em casa determinada a aprender a programar em Python, lembro que baixei o QPython, um ambiente para programar
                    Python em mobile, e comecei a fazer alguns programas bem básicos para treinar o que eu já sabia. Mas, eu ainda não estava
                    decidida, então, até que o ENEM chegasse, eu decidi simplesmente esquecer que eu teria uma escolha a fazer depois que a nota
                    saísse.
                </p>
                <p>
                    E assim foi, prestei o ENEM <s>e sumi da escola para a preocupação de todos</s>, levei meu tempo para entender os fins e os
                    novos começos e relaxar a mente. Depois de tomado meu espaço, durante as minhas férias decidi estudar programação. Fiz um
                    curso de Python e já estava cheia de ideias para utilizar o que tinha aprendido. Fui mais além, utilizei módulos de interface
                    GUI, de banco de dados e mesmo antes de entrar para a graduação eu já estava completamente fascinada.
                </p>
                <p>
                    Quando chegou o Sisu, coloquei Ciências da Computação como primeira opção. Primeiramente, a minha lógica foi pela nota de corte
                    ser mais alta que minha segunda opção, Matemática, assim, eu teria uma chance de não me frustrar caso não passasse na primeira
                    opção e não me sentiria culpada caso eu não tivesse entrado em Computação para ver no que iria dar. No fim de uma semana de espera,
                    eu fui aprovada em Ciências da Computação na Universidade Federal de Campina Grande, mas de mente aberta para pular fora caso não 
                    me identificasse.
                </p>
                <p>
                    Fiz minha matrícula e na primeira semana já me senti muito acolhida e um pouco parte daquilo tudo. Com o decorrer do período, eu só
                    me interessava mais pela TI, adorei pagar cada uma das disciplinas, contar minhas experiências aos meus amigos de fora da área,
                    compartilhar conhecimento com os que haviam ingressado junto comigo. Eu me sentia cada vez mais empoderada estudando formas tão ativas 
                    de mudar o mundo ao meu redor. No fim do meu primeiro período, aquele que eu entrei pensando "há uma possibilidade de eu cair fora no fim", eu já não queria mais sair 
                    dali.
                </p>
                <p>
                    Por fim, a minha mensagem para todos que estão com dúvidas em qual graduação escolher, ou que, assim como eu, mudou de ideia em uma escolha
                    que já estava bem consolidada, é: não tenham medo de apostar. Quando estamos findando a vida escolar temos muito medo do que vai vir
                    depois, de como vai ser dali para frente e a verdade é que não temos muitas experiências reais para saber com o que realmente a gente se
                    identifica. E se você já terminou a escola há um tempo, o conselho também serve, pois nunca é tarde demais para viver novas experiências! 
                </p>
                <p>
                    A minha dica para você que ainda não sabe é, também, pesquisar vários aspectos de vários cursos diferentes, desde a grade curricular, 
                    as universidades e faculdades que têm essas graduações, mas também, o leque de possibilidades de carreiras dentro da área e até a história!
                    Lembro que uma das coisas que mais me deram vontade de ser uma mulher na TI foi pesquisar um pouco da minha história como mulher dentro da
                    tecnologia, isso me deu muito inspiração e vontade para me jogar nessa possibilidade.
                </p>
                <p>
                    Finalmente, o que importa é que você esteja bem, seja feliz e se sinta parte daquilo que você faz, a escolha é sua e será parte de sua vida,
                    apenas você poderá dizer onde quer estar e com o que quer trabalhar, então, despreze comentários maldosos e desnecessários acerca do que quiser
                    seguir e saiba que a capacidade para enfrentar qualquer área você tem. E, claro, o conselho do mestre Yoda que nunca fica velho "Faça ou não faça.
                    Tentativa não há", independente do que você escolher como possibilidade, vai tirar bons ensinamentos dali.
                </p>
            </Post>
            <PageFooter />
        </div>
    );
};

export default Blog;