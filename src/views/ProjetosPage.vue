<template>
    <div>
        <NavPages />
        <header>
            <h1>Projetos</h1>
            <div class="header__footer">
                <button class="black_btn">Ver projeto</button>
                <p>Projetos destaque 2023</p>
                <button class="blue_btn">Quero expor meu projeto</button>
            </div>
        </header>
        <el-carousel :interval="5000" arrow="always" height="100vh">
            <el-carousel-item>
                <img class="carousel-img" src="projetos/banner3.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img class="carousel-img" src="projetos/banner2.jpg">
            </el-carousel-item>
            <el-carousel-item>

                <img class="carousel-img" src="projetos/banner1.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img class="carousel-img" src="projetos/banner4.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img class="carousel-img" src="projetos/banner5.jpg">
            </el-carousel-item>
        </el-carousel>

        <div class="container">
            <div class="popup" v-if="popupValue">
                <div class="popup__overflow" @click="upPopup">
                    <div class="popup__container">
                        <button class="popup__close">✕</button>
                        <header-popup>
                            <p class="font-light">5° Semestre</p>
                            <div class="title-popup">
                                <h5>Logomarca</h5>
                                <tag type="white">Editorial</tag>
                            </div>
                            <p class="font-light">Um pouco sobre como foi o projeto</p>
                        </header-popup>

                        <!-- portfolio -->

                        <div class="vitrine-grid" id="grid">
                            <img v-for="portfolio in projects[indexPopup].portfolios" :src="'projetos/' + portfolio">
                        </div>

                        <!-- Descrições -->

                        <div class="description">
                            <p v-for="teste in projects[indexPopup].description" style="margin-bottom: 6px;">
                                &nbsp;&nbsp;{{ teste }} </p>
                        </div>

                        <h6>Criadores</h6>
                        <hr>
                        <br>
                        <br>
                        <br>
                        <el-row>
                            <el-col :span="18">
                                <div class="grid__criadores">

                                    <div class="criadores" v-for="userInfos in projects[indexPopup].owner">

                                        <div class="criadores__container">
                                            <img class="grid__criadores__imgs" :src="'projetos/' + userInfos.userFoto" />
                                            <p class="criadores__name">{{ userInfos.name }}</p>
                                        </div>
                                        <div class="redes__sociais">
                                            <a v-for="medias in userInfos.socialMedia" :href="medias.link"
                                                target="_blank">{{ medias.plataform }}</a>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div>
                                    <hr>
                                    <h6>Professores orientadores</h6>
                                    <p class="popup__docentes">
                                    <p>Prof. Me. Carlos Marcelo Campos Teixeira</p>
                                    <p>Prof. Dr. Célio Martins da Matta </p>
                                    <p>Profª. Me. Grace Kishimoto</p>
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="4" :offset="1">
                                <h6>Laboratórios utilizados</h6>
                                <li class="font-light">Impressão</li>
                                <li class="font-light">Vidro</li>
                                <li class="font-light">Marcenaria</li>
                                <h6>Palavras chave</h6>
                                <div class="grid__tags">
                                    <tag type="black">gaming</tag>
                                    <tag type="black">tabuleiro</tag>
                                    <tag type="black">vermelho</tag>
                                    <tag type="black">design</tag>
                                    <tag type="black">produto</tag>
                                    <tag type="black">board</tag>
                                </div>
                            </el-col>
                        </el-row>
                        <p class="data_publi">Publicação: 2 de março de 2022</p>
                    </div>
                </div>
            </div>

            <div class="container-projetos">
                <div class="projeto" v-for="(project, index) in projects" :key="index" @click="upPopup($event, index)">

                    <img class="projeto_thumb" :src="'projetos/' + project.thumb">
                    <div class="container_user">

                        <div class="user" v-for="ownersv in project.owner">
                            <img class="user_img" :src="'projetos/' + ownersv.userFoto" />
                            <p class="user_name">{{ ownersv.name }}</p>
                        </div>
                    </div>
                    <div class="projectName">
                        <p>{{ project.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterPage />
    </div>
</template>

<script>
import NavPages from '../components/NavPages.vue'
import FooterPage from '../components/FooterPage.vue'
import { datePickTypes } from 'element-plus'

export default {
    name: 'ProjetosPage',
    components: { FooterPage, NavPages },
    data() {
        return {
            projects: [
                {
                    name: 'Mun | Arandela',
                    thumb: 'mun/imagens/3.jpg',
                    owner: [
                        {
                            name: 'Mateus Durães dos Santos',
                            userFoto: 'mun/mateus.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Instagram',
                                    link: 'https://www.instagram.com/mateusduraes_',
                                },
                                {
                                    plataform: 'Unsplash',
                                    link: 'https://unsplash.com/@mateus_duraes',
                                },
                                {
                                    plataform: 'Behance',
                                    link: 'https://www.behance.net/mateusduraes',
                                },
                            ],

                        },
                        {
                            name: 'Pantera Negra',
                            userFoto: 'mun/pantera.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Will Smith',
                            userFoto: 'mun/will.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Instagram',
                                    link: 'https://www.instagram.com/willsmith/?hl=en'
                                },
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Beyonce',
                            userFoto: 'mun/beyonce.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'mun/imagens/1.jpg',
                            'mun/imagens/2.jpg',
                            'mun/imagens/3.jpg',
                        ],
                    description: ['Uma luminária é um objeto que tem como função principal iluminar um ambiente.Ela pode ser usada para criar diferentes atmosferas e tornar um espaço mais acolhedor e confortável.As luminárias podem ser feitas de diferentes materiais, como metal, vidro, tecido, madeira e plástico, e podem ter diversos formatos e tamanhos.Existem luminárias de mesa, de chão, de parede e de teto, cada uma com sua própria função e estilo.',
                        'As luminárias também são uma peça importante na decoração de interiores, pois podem ser escolhidas de acordo com o estilo do ambiente, como moderno, clássico, rústico, entre outros.Além disso, a iluminação adequada é essencial para valorizar a decoração e destacar pontos específicos do ambiente.'],
                },
                {
                    name: 'Fotografia',
                    thumb: 'fotografia/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Prisma Brasil',
                            userFoto: 'fotografia/prisma.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'João Alexandre',
                            userFoto: 'fotografia/joao.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=ifji2WooHtM&list=RDEM0CGAcnQJSCMjnUhCI1zUVQ&start_radio=1&ab_channel=JaideMenezes'
                                }
                            ],
                        },
                        {
                            name: 'Vocal Livre',
                            userFoto: 'fotografia/vocal.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                },
                                {
                                    plataform: 'Instagram',
                                    link: 'https://www.instagram.com/vocal_livre/'
                                },
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=Pwkz_F0y7jM&list=PL5zWF3xO0ZETHKblr5w0WDhR8TjdCBOMj&index=8&ab_channel=VocalLivre-Topic'
                                },
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'fotografia/imagens/1.jpg',
                            'fotografia/imagens/2.jpg',
                        ],
                    description: [
                        'Fotografia é uma arte visual que envolve capturar imagens através de um processo de registro ótico e eletrônico. A fotografia permite que momentos e memórias sejam preservados para sempre, bem como possibilita a criação de obras de arte únicas e inspiradoras.',
                        'Desde sua invenção, a fotografia tem sido usada para documentar a vida cotidiana, registrar eventos históricos, expressar ideias e transmitir emoções. Com o avanço da tecnologia, a fotografia tornou-se mais acessível e versátil, permitindo que mais pessoas possam explorar e experimentar com essa arte.',
                        'Hoje em dia, a fotografia é uma das formas mais populares de expressão artística e é utilizada em diversas áreas, como moda, publicidade, jornalismo, cinema e documentação científica. Seja como um hobby ou profissão, a fotografia continua a fascinar e inspirar pessoas em todo o mundo.']

                },
                {
                    name: 'Relógio de Pulso',
                    thumb: 'relogio/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Cartola',
                            userFoto: 'relogio/cartola.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Mumuzinho',
                            userFoto: 'relogio/mumuzinho.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Péricles',
                            userFoto: 'relogio/pericles.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'relogio/imagens/1.jpg',
                            'relogio/imagens/2.jpg',
                            'relogio/imagens/3.jpg',
                        ],
                    description: [
                        'Relógios de pulso são acessórios muito populares e utilizados por homens e mulheres de todas as idades em todo o mundo. Além de serem usados para mostrar a hora, eles também são considerados itens de moda e estilo. Existem vários tipos de relógios de pulso, desde modelos simples e clássicos até designs mais modernos e elegantes. ',
                        'Os relógios de pulso também podem ter várias funções, como cronômetro, alarme, calendário, bússola, entre outras. Eles podem ser feitos de vários materiais, como aço inoxidável, couro, borracha, cerâmica e até mesmo ouro e diamantes. ', 'Os colecionadores de relógios de pulso valorizam muito os modelos antigos e raros, muitas vezes pagando preços altíssimos em leilões. Eles apreciam a precisão, a história e a arte que envolvem a fabricação desses objetos. ', 'Independentemente do tipo ou estilo, os relógios de pulso são acessórios úteis e elegantes que continuam a ser usados e apreciados por pessoas em todo o mundo.'
                    ]
                },
                {
                    name: 'Mesa Gamer',
                    thumb: 'mesa/imagens/2.jpg',
                    owner: [
                        {
                            name: 'Tayler James',
                            userFoto: 'mesa/tayler.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Rihanna',
                            userFoto: 'mesa/rihanna.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'The Wekeend',
                            userFoto: 'mesa/the.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'mesa/imagens/1.jpg',
                            'mesa/imagens/2.jpg',
                            'mesa/imagens/3.jpg',
                            'mesa/imagens/4.jpg',
                            'mesa/imagens/5.jpg',
                        ],
                    description: ['As mesas gamer de madeira são uma excelente escolha para os jogadores que buscam conforto e funcionalidade. Geralmente, essas mesas são feitas de madeira maciça e possuem design ergonômico para acomodar monitores, teclados, mouses e outros acessórios de jogos. Além disso, muitas delas possuem iluminação LED, porta-copos, organizadores de cabos, entre outras funcionalidades. ',
                        'A madeira é um material durável e resistente, capaz de suportar o peso dos equipamentos e as vibrações causadas pelo jogo. Além disso, as mesas de madeira podem ser personalizadas de acordo com o estilo de cada jogador, permitindo escolher acabamentos, cores e formatos diferenciados.']
                },
                {
                    name: 'Ascenção dos deuses',
                    thumb: 'tabuleiro/imagens/1.jpg',
                    owner: [

                        {
                            name: 'Bob Marley',
                            userFoto: 'tabuleiro/bob.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Instagram',
                                    link: 'https://www.instagram.com/'
                                },
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                },
                                {
                                    plataform: 'Unsplash',
                                    link: 'https://www.unsplash.com/'
                                },
                            ],
                        },
                        {
                            name: 'Rey Charles',
                            userFoto: 'tabuleiro/rey.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Guilherme Nogueira',
                            userFoto: 'tabuleiro/guilherme.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Instagram',
                                    link: 'https://www.instagram.com/_guiinogueira'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'tabuleiro/imagens/1.jpg',
                            'tabuleiro/imagens/2.jpg',
                            'tabuleiro/imagens/3.jpg',
                            'tabuleiro/imagens/4.jpg',
                            'tabuleiro/imagens/5.jpg',
                            'tabuleiro/imagens/6.jpg',
                            'tabuleiro/imagens/7.jpg',
                            'tabuleiro/imagens/8.jpg',
                        ],
                    description: ['Jogos de tabuleiro são uma forma de entretenimento que tem sido apreciada há séculos em diferentes culturas ao redor do mundo. Eles são geralmente jogados em um tabuleiro, que pode ser feito de vários materiais, e envolvem o movimento de peças em um determinado padrão, seguindo regras específicas. ',
                        'Os jogos de tabuleiro podem ser jogados por qualquer pessoa, independentemente da idade ou habilidade. Eles podem ser jogados em grupo ou individualmente e são uma ótima maneira de passar o tempo e socializar com amigos e familiares. Além do entretenimento, os jogos de tabuleiro também oferecem benefícios cognitivos e sociais. Eles podem ajudar a desenvolver habilidades de pensamento crítico, resolução de problemas, planejamento estratégico e comunicação interpessoal.']
                },
                {
                    name: 'Chimarrão',
                    thumb: 'chimarrao/imagens/1.jpg',
                    owner: [

                        {
                            name: 'Jade Novah',
                            userFoto: 'chimarrao/jade.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Mahalia',
                            userFoto: 'chimarrao/mahalia.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Mariana Froes',
                            userFoto: 'chimarrao/mariana.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=EgcXUX8IzSo&list=RDEMLEzck50GEvc6rKjhPufFHw&start_radio=1&ab_channel=MariFroes'
                                },
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                },
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                },
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'chimarrao/imagens/1.jpg',
                            'chimarrao/imagens/2.jpg',
                            'chimarrao/imagens/3.jpg',
                            'chimarrao/imagens/4.jpg',
                        ],
                    description: ['O chimarrão é uma bebida típica da região sul do Brasil, especialmente dos estados do Rio Grande do Sul, Santa Catarina e Paraná. Feito a partir da infusão das folhas da erva-mate em água quente, é consumido em uma cuia, por meio de um canudo, chamado de bomba.',
                        ' Além de ser um símbolo da cultura gaúcha, o chimarrão é conhecido por ter benefícios para a saúde. A erva-mate é rica em antioxidantes, vitaminas e minerais, e pode ajudar a melhorar a digestão, a concentração e ',
                        ' O chimarrão é consumido em diversas ocasiões, desde encontros informais com amigos e familiares até em rodas de chimarrão em praças públicas. É uma bebida que representa a hospitalidade e a convivência, e faz parte da identidade cultural da região sul do Brasil.']
                },
                {
                    name: 'Buttlerfly',
                    thumb: 'butterfly/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Chris Rock',
                            userFoto: 'butterfly/rock.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Selena Gomes',
                            userFoto: 'butterfly/Selena.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Alok',
                            userFoto: 'butterfly/alok.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Melanie',
                            userFoto: 'butterfly/melanie.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'butterfly/imagens/1.jpg',
                            'butterfly/imagens/2.jpg',
                            'butterfly/imagens/3.jpg',
                            'butterfly/imagens/4.png',
                        ],
                    description: [

                        'Pingentes de borboleta são joias delicadas e elegantes que podem ser usadas por pessoas de todas as idades. Eles são populares por sua aparência graciosa e simbolismo. Borboletas representam transformação, renovação e beleza, tornando-as um símbolo popular para jóias.',
                        'Os pingentes de borboleta vêm em uma variedade de estilos e materiais, desde os mais simples até os mais elaborados. Alguns são feitos de metais preciosos como ouro e prata, enquanto outros são feitos de materiais mais acessíveis, como aço inoxidável ou metais folheados.',
                        'Muitos pingentes de borboleta também apresentam pedras preciosas ou semi-preciosas, como diamantes, safiras ou ametistas, para adicionar ainda mais brilho e beleza à joia. Alguns pingentes também apresentam detalhes adicionais, como gravações, texturas ou cores adicionais.',
                        'Independentemente do estilo ou material escolhido, um pingente de borboleta é uma adição elegante e significativa a qualquer coleção de joias.',]
                },
                {
                    name: 'Desenhos',
                    thumb: 'desenhos/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Hope Tala',
                            userFoto: 'desenhos/hope.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Andrea Abocelli',
                            userFoto: 'desenhos/andrea.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=jI7zeFpI2dY&ab_channel=AndreaBocelliVEVO'
                                },
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Ana Carolina',
                            userFoto: 'desenhos/ana.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'desenhos/imagens/1.jpg',
                            'desenhos/imagens/2.jpg',
                            'desenhos/imagens/3.jpg',
                            'desenhos/imagens/4.jpg',
                            'desenhos/imagens/5.jpg',
                        ],
                    description: [
                        'Desenhos digitais e à lápis são duas formas de arte diferentes, mas que possuem suas próprias características e vantagens.',
                        'O desenho à lápis é uma técnica tradicional, que tem sido utilizada por artistas há séculos. Ele envolve a criação de um desenho usando um lápis ou grafite em um papel. A técnica permite uma grande variedade de estilos e texturas, e é muitas vezes utilizada para retratos, paisagens e ilustrações.',
                        'Já o desenho digital é uma técnica mais moderna, que utiliza programas de computador para criar imagens. O desenho é criado usando uma mesa digitalizadora e uma caneta stylus, que permitem ao artista criar desenhos com precisão e facilidade de edição. O desenho digital é frequentemente utilizado na criação de personagens de jogos, ilustrações digitais e designs gráficos.',
                        'Ambas as técnicas têm suas próprias vantagens e podem ser utilizadas de formas complementares. Enquanto o desenho à lápis oferece uma sensação mais tátil e artesanal, o desenho digital oferece uma precisão e facilidade de edição que podem ser úteis em certos projetos. No final das contas, a escolha entre uma técnica ou outra dependerá das preferências e habilidades do artista, bem como das necessidades do projeto em questão.'
                    ]
                },
                {
                    name: 'Cômoda',
                    thumb: 'comoda/imagens/3.jpg',
                    owner: [
                        {
                            name: 'JP Cooper',
                            userFoto: 'comoda/jp.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'vrosemusic',
                            userFoto: 'comoda/vrosemusic.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Elliott Trent',
                            userFoto: 'comoda/elliott.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'comoda/imagens/1.jpg',
                            'comoda/imagens/2.jpg',
                            'comoda/imagens/3.jpg',
                            'comoda/imagens/4.jpg',
                        ],
                    description: [
                        'As cômodas são móveis muito úteis e populares em quartos, salas e outros espaços de armazenamento. Elas são geralmente baixas e largas, com gavetas ou prateleiras para guardar roupas, documentos, livros e outros objetos. ',
                        'As cômodas podem ser feitas de diversos materiais, como madeira, metal, vidro e plástico, e estão disponíveis em uma ampla variedade de estilos e designs, desde os mais tradicionais até os mais modernos e minimalistas. Além disso, muitas cômodas são utilizadas como objetos decorativos, contribuindo para a estética do ambiente em que estão inseridas. Seja qual for o estilo escolhido, as cômodas são sempre uma ótima opção para quem busca praticidade, organização e beleza em um único móvel.']
                },
                {
                    name: 'Cobogó',
                    thumb: 'cobogo/imagens/3.jpg',
                    owner: [
                        {
                            name: 'Caleb',
                            userFoto: 'cobogo/caleb.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Lecrae',
                            userFoto: 'cobogo/lecrae.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Sasha Alex Sloan ',
                            userFoto: 'cobogo/sasha.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                    ],
                    portfolios:
                        [
                            'cobogo/imagens/1.jpg',
                            'cobogo/imagens/2.jpg',
                            'cobogo/imagens/3.jpg',
                            'cobogo/imagens/4.jpg',
                        ],
                    description: ['Cobogó é um elemento arquitetônico bastante utilizado na construção civil brasileira. É uma espécie de elemento vazado, geralmente fabricado em cerâmica ou concreto, que permite a passagem de ar e luz, sem comprometer a privacidade do ambiente.',
                        ' O nome "cobogó" tem origem na junção dos sobrenomes dos seus criadores, Amadeu Oliveira Coimbra, Ernest August Boeckmann e Antônio de Góis.O elemento se popularizou no Nordeste do Brasil a partir da década de 1920, sendo muito utilizado em construções residenciais e comerciais.']
                },
            ],
            popupValue: false,
            indexPopup: null,
            numberColumn: 2
        }
    },

    methods: {
        upPopup(event, index) {

            const clicked = event.target.classList[0]

            if (event.currentTarget.classList[0] == 'projeto' || clicked == 'popup__overflow' || clicked == 'popup__close') {
                this.indexPopup = index

                this.popupValue = !this.popupValue

                if (this.popupValue == true) {
                    document.body.style.overflow = "hidden"
                } else {
                    document.querySelector('body').removeAttribute('style')
                }
            }

            //A função precisa ser realizada depois que o layout foi criado, para isso, o setTimeout
            if (this.popupValue == true) {
                setTimeout(() => {
                    this.changeGrid()
                }, 1);
            }
        },

        changeGrid() {

            const grid = document.getElementById('grid')

            if (grid.childElementCount >= this.numberColumn && this.numberColumn > 1) {
                for (let x = 0; x <= grid.childElementCount; x++) {
                    for (let i = 0; i <= this.numberColumn - 1; i++) {
                        if (document.getElementById('column-1') == null) {

                            let fr = ''

                            for (let y = 1; y <= this.numberColumn; y++) {
                                fr += '1fr '
                            }

                            document.getElementById('grid').setAttribute('style', `grid-template-columns: ${fr}`)
                            console.log(fr)

                            for (let a = 0; a <= this.numberColumn - 1; a++) {

                                grid.innerHTML += `<div class="vitrine-count" id="column-${a}"></div>`
                            }
                        }
                        if (grid.children.length != this.numberColumn) {
                            document.getElementById(`column-${i}`).appendChild(grid.children[0])
                        }
                    }
                }
            }
        },
    },
}

</script>

<style>
:root {
    --gap-img: 10px
}

.vitrine-grid {
    display: grid;
    width: 100%;
    min-height: 100px;
    margin: auto;
    gap: var(--gap-img);
    margin-top: 40px;
}

.vitrine-count {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gap-img);
}

.vitrine-grid img {
    object-fit: contain;
    width: 100%;
}
</style>

<style scoped>
.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: absolute;
}

header {
    position: absolute;
    z-index: 1;
    width: calc(100% - 200px);
    margin: 0 100px;
}

.header__footer {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    bottom: 80px;
    width: 100%;
    font-weight: 100;
    font-size: 22px;
}

h1 {
    font-weight: 100;
    font-size: 80px;
    margin-left: 100px;
    text-align: start;
    width: 100%;
}

.container {
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    width: var(--page-width);
}

/* USER ANIMATION */

.container-projetos {
    column-count: 3;
    column-gap: 20px;
    color: white;
}

.projeto {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
}

.projeto_thumb {
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    min-height: 120px;
    max-height: 520px;
    transition: .5s;
}

.container_user {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    width: 100%;
    padding: 10px 10px 0 0;
    border-radius: 8px 8px 0 0;
    gap: 10px;
    top: 0;
    height: 50px;
    z-index: 10;
    opacity: 0;
    transition: .1s;
}

.container_user img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    transition: .1s;
}

.projeto:hover .container_user {
    opacity: 1;
    transition: .1s;
}

.user {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.user_img {
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.6);
    object-fit: cover;
}

.user_name {
    position: absolute;
    bottom: -24px;
    white-space: nowrap;
    text-align: center;
    opacity: 0;
    transition: .2s;
    font-weight: 300;
    text-shadow: 2px 3px 10px rgba(0, 0, 0, 1);
}

.user:hover .user_name {
    transition: .2s;
    opacity: 1;
}

.projectName {
    position: absolute;
    bottom: 0;
    opacity: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    font-weight: 300;
    transition: .2s;
    padding: 0 20px;
    font-size: 16px;
    color: rgb(211, 211, 211);
}

.projeto:hover .projectName {
    transition: .2s;
    opacity: 1;
}

/* popup */

h6 {
    font-size: 22px;
    font-weight: 400;
    margin: 34px 0;
}

.popup {
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    z-index: 100;
}

.popup__overflow {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: overlay;
    height: 100vh;
    width: 100%;
}

.popup__container {
    position: relative;
    width: calc(100% - 100px);
    max-width: 80vw;
    padding: 40px;
    background: rgb(26, 26, 26);
    background: black;
    margin-bottom: 60px;
}

.popup__close {
    position: absolute;
    top: 30px;
    right: 30px;
    border: none;
    background: none;
    color: white;
    font-weight: 400;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 24px;
    cursor: pointer;
}

header-popup {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* portfolio */

.portfolio {
    margin-top: 30px;

}

/* Descriçoes' */

.description {
    column-count: 2;
    margin: 80px 0;
    font-weight: 300;
    line-height: 26px;
}

.title-popup {
    display: flex;
    gap: 14px;
    align-items: center;
}

.title-popup h5 {
    font-size: 30px;
    font-weight: 500;
}

.font-light {
    font-weight: 300;
    font-size: 17px;
    color: #A0A0A0;
}

hr {
    border-width: 1px 0 0 0;
    border-color: #656565;
    border-style: solid;
}

.grid__criadores {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 26px;
    font-size: 16px;
    gap: 20px;
}

.criadores {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.criadores__container {
    display: flex;
    align-items: center;
    gap: 12px;
}

.criadores__name {
    font-weight: 400;
    color: white;
    font-size: 18px;
}

.grid__criadores__imgs {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}

.redes__sociais {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.redes__sociais a {
    cursor: pointer;
    text-decoration: none;
    color: #006DBC;
    font-weight: 300;
    transition: .1s;
}

.redes__sociais a:hover {
    color: #0095ff;
    text-decoration: underline;
    transition: .1s;
}

.grid__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

[type="white"] {
    padding: 6px 20px;
    border-radius: 50px;
    background: white;
    color: black;
    font-size: 16px;
}

[type="black"] {
    border-radius: 8px;
    background: black;
    color: #7f7f7f;
    font-size: 15px;
    font-weight: 400;
    padding: 6px 11px;
}

.data_publi {
    width: 100%;
    text-align: center;
    font-weight: 300;
    color: #A0A0A0;
    margin-top: 100px;
}

.popup__docentes {
    line-height: 26px;
    color: #A0A0A0;
    font-size: 16px;
    font-weight: 300;
}
</style>

