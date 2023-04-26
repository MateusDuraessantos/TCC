<template>
    <div>
        <header>
            <h1>Projetos</h1>
            <div class="header__footer">
                <button class="black_btn">Ver projeto</button>
                <p>Projetos destaque 2023</p>
                <button class="cadastro_btn blue_btn" @click="exporProjeto">Quero expor meu projeto</button>
            </div>
        </header>

        <!-- Cadastro -->

        <div v-if="cadastro" class="cadastro" @click="exporProjeto">

            <button class="cadastro__close" @click="exporProjeto">✕</button>
            <div class="cadastro__campos">

                <p class="cadastro__title">Preencha os campos a seguir!</p>


                <p class="cadastro__subtitle">Sobre os alunos</p>

                <div class="cont_inputs__cadastro" v-for="(coisa, index) in 2" :key="index">
                    <p>{{ index + 1 }}° Aluno</p>
                    <br>
                    <hr>
                    <br>
                    <div class="inputs__cadastro">
                        <div>
                            <label for="nome">Nome*</label>
                            <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                        </div>
                        <div>
                            <label for="nome">TIA*</label>
                            <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                        </div>
                        <div>
                            <label for="nome">Número para contato*</label>
                            <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                        </div>
                        <div>
                            <label for="nome">Email*</label>
                            <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                        </div>
                        <div>
                            <p>Imagem do aluno*</p>
                            <label for="upload" class="upload">
                                <button class="blue_btn ">Campo de upload <img src="upload.svg"></button>

                            </label>
                            <input type="file" id="upload">

                        </div>
                    </div>
                    <button class="delete">Deletar ✕</button>
                </div>
                <div style="width: 100%; justify-content: center; display: flex;"><button
                        class="blue_btn adicionar">Adicionar aluno <span style="font-size: 24px;">🞢</span></button>
                </div>
                <hr>
                <p class="cadastro__subtitle">Sobre os projeto</p>

                <div class="inputs__cadastro">
                    <div>
                        <label for="nome">Semestre do projeto*</label>
                        <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                    </div>
                    <div>
                        <label for="nome">Laboratórios utilizados*</label>
                        <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                    </div>
                    <div>
                        <label for="nome">Categoria*</label>
                        <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                    </div>
                    <div>
                        <label for="nome">Nome dos docentes*</label>
                        <input type="text" id="nome" class="pesquisa" placeholder="Digite aquit">
                    </div>
                </div>

                <hr>

                <p>Descreva o seu projeto para que outras pessoas possam entende-lo melhor:* </p>
                <div class="textarea">
                    <p>Digite aqui</p>
                </div>

                <hr>
                <span>
                    <p>Anexo de imagens</p>
                    <br>
                    <span>Escolha de 4 à 6 imagens para mostrar seu projeto, as melhores, para divulgação*</span>
                    <br>
                    <br>
                    <div>
                        <label for="upload" class="upload" style="gap: 20px; max-width: max-content; padding-right: 36px;">
                            <button class="blue_btn ">Campo de upload <img src="upload.svg"></button>
                            <p>Arraste um arquivo aqui ou <br>
                                <span style="color: #E1001E">
                                    clique para fazer upload
                                </span>
                            </p>
                        </label>
                        <p class="light">Arquivos .jpg .png inferiores à 5MB</p>
                        <input type="file" id="upload">
                    </div>
                    <br>
                    <p>Arquivos selecionados:</p>
                    <br>
                    <div class="cadastro__imagens">
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src=" projetos/mesa/imagens/1.jpg">
                            <p>mesa imagem.jpg</p>
                        </div>
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src="projetos/mesa/imagens/2.jpg">
                            <p>imagem.jpg</p>
                        </div>
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src="projetos/mesa/imagens/3.jpg">
                            <p>Solda.jpg</p>
                        </div>
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src="projetos/mesa/imagens/4.jpg">
                            <p>Extrutura.jpg</p>
                        </div>
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src="projetos/mesa/imagens/5.jpg">
                            <p>imagem.jpg</p>
                        </div>
                        <div class="image__cont_cadastro">
                            <div class="delete_image">✕</div>
                            <img src="projetos/mesa/imagens/6.jpg">
                            <p>black table.jpg</p>
                        </div>
                    </div>
                </span>

                <hr>

                <span>
                    <p>Tags<span style="color:#E1001E">*</span></p>
                    <br>
                    <div style="display: flex;gap: 10px;">
                        <tag type="black" style="background: black">Design</tag>
                        <tag type="black" style="background: black">UX/UI</tag>
                        <tag type="black" style="background: black">WebSite</tag>
                        <tag type="black" style="background: black">OnePage</tag>
                        <tag type="black" style="background: black">Frontend</tag>
                        <tag type="black" style="background: black">CSS</tag>
                        <tag type="black" style="background: black">HTML</tag>
                    </div>
                </span>
                <hr>



                <span>
                    <p>Anexe o documento final do projeto</p>
                    <br>
                    <p>Para um conhecimento bem detalhado do projeto, anexe abaixo o documento final desenvolvido para a
                        finalização do projeto.</p>
                    <br>
                    <div>
                        <label for="upload" class="upload" style="gap: 20px; max-width: max-content; padding-right: 36px;">
                            <button class="blue_btn ">Campo de upload <img src="upload.svg"></button>
                            <p>Arraste um arquivo aqui ou <br>
                                <span style="color: #E1001E">
                                    clique para fazer upload
                                </span>
                            </p>
                        </label>
                        <p class="light">Arquivos .jpg .png inferiores à 5MB</p>
                        <input type="file" id="upload">
                        <br>
                        <p>Arquivo selecionado:</p>

                        <p style="color: #A6A6A6">TCC Final - Mateus Durães dos Santos.pdf</p>
                    </div>
                </span>




                <div class="termos">
                    <p>Li os termos de compromisso de imagem e aceito.</p>
                    <br>
                    <button class="blue_btn">Enviar</button>
                </div>


            </div>


        </div>


        <!--  -->

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

        <div class="body">
            <section-projects>
                <div class="filtro_por_filtro">
                    Escolher categoria:
                    <div class="cont_filtro">
                        <select type="text" class="filtro" placeholder="Pesquisar:">
                            <option value="">Todos os anos</option>
                            <option value="" v-for="(coisas, index) in 14" :key="index">20{{ index + 10 }}
                            </option>
                        </select>
                        <input type="text" class="buscar" placeholder="Pesquisar:">
                    </div>
                </div>
                <div class="cont_tags" @click="category">
                    <filter filter="ativo">
                        Todos
                    </filter>
                    <filter>
                        Editorial
                    </filter>
                    <filter>
                        Mobiliario
                    </filter>
                    <filter>
                        Renders 3D
                    </filter>
                    <filter>
                        Desenho
                    </filter>
                    <filter>
                        Fotografia
                    </filter>
                </div>
                <div class="popup" v-if="popupValue">
                    <button class="popup__close" @click="upPopup">✕</button>
                    <!-- Change Layout -->
                    <div class="container__alteraLayout">
                        <div class="cont__alteraLayout">
                            <div style="display: flex; flex-direction: column; gap: 6px; ">
                                <div class="download">
                                    <img src="/projetos/download.svg">
                                    <p>Relatório final</p>
                                </div>
                                <br>
                                <br>
                                <br>
                                <div class="layout" @click="alteraLayout">
                                    <div class="layout__container" id="layout">
                                        <div class="alteraLayout" v-for="coisa in coisas" />
                                    </div>
                                    <p>Layout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="popup__overflow" @click="upPopup">
                        <div class="popup__container">
                            <header-popup>
                                <p class="font-light">5° Semestre</p>
                                <div class="title-popup">
                                    <h5>Logomarca</h5>
                                    <tag type="white">Editorial</tag>
                                </div>
                                <p class="font-light">Um pouco sobre como foi o projeto</p>
                            </header-popup>
                            <!-- Vitrine das imagens -->
                            <div class="vitrine-grid" id="grid">
                                <img class="img_popup" v-for="portfolio in projects[indexPopup].portfolios"
                                    @load="loadImage" :src="'projetos/' + portfolio">
                            </div>
                            <!-- Descrições -->
                            <div style="padding: 40px">
                                <div class="description">
                                    <p v-for="teste in projects[indexPopup].description" style="margin-bottom: 6px;">
                                        &nbsp;&nbsp;{{ teste }} </p>
                                </div>
                                <h6>Criadores</h6>
                                <hr>
                                <br>
                                <br>
                                <br>
                                <div class="container__footer">
                                    <div class="footer__popup">
                                        <div class="grid__criadores">
                                            <div class="criadores" v-for="userInfos in projects[indexPopup].owner">
                                                <div class="criadores__container">
                                                    <img class="grid__criadores__imgs"
                                                        :src="'projetos/' + userInfos.userFoto" />
                                                    <p class="criadores__name">{{ userInfos.name }}</p>
                                                </div>
                                                <div class="redes__sociais">
                                                    <a v-for="medias in userInfos.socialMedia" :href="medias.link"
                                                        target="_blank">{{ medias.plataform }}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <br>
                                            <hr>
                                            <br>
                                            <h6>Professores orientadores</h6>
                                            <p class="popup__docentes">
                                            <p>Prof. Me. Carlos Marcelo Campos Teixeira</p>
                                            <p>Prof. Dr. Célio Martins da Matta </p>
                                            <p>Profª. Me. Grace Kishimoto</p>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="footer__popup">
                                        <h6>Laboratórios utilizados</h6>
                                        <li class="font-light">Impressão</li>
                                        <li class="font-light">Vidro</li>
                                        <li class="font-light">Marcenaria</li>
                                        <br>
                                        <h6>Palavras chave</h6>
                                        <div class="grid__tags">
                                            <tag type="black">gaming</tag>
                                            <tag type="black">tabuleiro</tag>
                                            <tag type="black">vermelho</tag>
                                            <tag type="black">design</tag>
                                            <tag type="black">produto</tag>
                                            <tag type="black">board</tag>
                                        </div>
                                    </div>
                                </div>
                                <p class="data_publi">Publicação: 2 de março de 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-projetos">
                    <div class="projeto" v-for="(project, index) in projects" :key="index" @click="upPopup($event, index)">
                        <img class="projeto_thumb" :src="'projetos/' + project.thumb" loading="lazy">
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
            </section-projects>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjetosPage',
    data() {
        return {
            imagesNumber: 0,
            numImgGrid: '',
            cadastro: false,
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
                            'mun/imagens/4.jpg',

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
                            'fotografia/imagens/3.jpg',
                            'fotografia/imagens/4.jpg',
                            'fotografia/imagens/5.jpg',
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
                            name: 'selena Gomes',
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
                    name: 'Desenhos Coloridos',
                    thumb: 'desenhos_2/imagens/4.jpg',
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
                            'desenhos_2/imagens/1.jpg',
                            'desenhos_2/imagens/2.png',
                            'desenhos_2/imagens/3.png',
                            'desenhos_2/imagens/4.jpg',
                            'desenhos_2/imagens/5.png',
                            'desenhos_2/imagens/6.png',
                            'desenhos_2/imagens/7.jpg',
                        ],
                    description: [
                        'Desenhos digitais e à lápis são duas formas de arte diferentes, mas que possuem suas próprias características e vantagens.',
                        'O desenho à lápis é uma técnica tradicional, que tem sido utilizada por artistas há séculos. Ele envolve a criação de um desenho usando um lápis ou grafite em um papel. A técnica permite uma grande variedade de estilos e texturas, e é muitas vezes utilizada para retratos, paisagens e ilustrações.',
                        'Já o desenho digital é uma técnica mais moderna, que utiliza programas de computador para criar imagens. O desenho é criado usando uma mesa digitalizadora e uma caneta stylus, que permitem ao artista criar desenhos com precisão e facilidade de edição. O desenho digital é frequentemente utilizado na criação de personagens de jogos, ilustrações digitais e designs gráficos.',
                        'Ambas as técnicas têm suas próprias vantagens e podem ser utilizadas de formas complementares. Enquanto o desenho à lápis oferece uma sensação mais tátil e artesanal, o desenho digital oferece uma precisão e facilidade de edição que podem ser úteis em certos projetos. No final das contas, a escolha entre uma técnica ou outra dependerá das preferências e habilidades do artista, bem como das necessidades do projeto em questão.'
                    ]
                },
                {
                    name: 'Desenhos Realistas | Preto e branco',
                    thumb: 'desenhos/imagens/1.png',
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
                            'desenhos/imagens/1.png',
                            'desenhos/imagens/2.jpg',
                            'desenhos/imagens/3.jpg',
                            'desenhos/imagens/4.jpg',
                            'desenhos/imagens/5.jpg',
                            'desenhos/imagens/6.jpg',
                            'desenhos/imagens/7.jpg',
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
                    name: 'Cobogó | Mackenzie',
                    thumb: 'cobogo/imagens/3.jpg',
                    owner: [

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
                {
                    name: 'Banners Youtube',
                    thumb: 'banners/imagens/3.png',
                    owner: [

                        {
                            name: 'Zevnikov',
                            userFoto: 'banners/zevnikov.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=q8AuPWZNxpY&list=PL5zWF3xO0ZERzh1x6iHoDmxLKoXh3Muqv&index=4&ab_channel=zevnikov'
                                }
                            ],
                        },
                        {
                            name: 'Djavan',
                            userFoto: 'banners/djavan.jpg',
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
                            'banners/imagens/1.png',
                            'banners/imagens/2.png',
                            'banners/imagens/3.png',
                            'banners/imagens/4.png',
                            'banners/imagens/5.png',
                            'banners/imagens/6.png',
                        ],

                },
                {
                    name: 'Editorial',
                    thumb: 'editorial/imagens/1.png',
                    owner: [
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
                            'editorial/imagens/1.png',
                            'editorial/imagens/2.png',
                            'editorial/imagens/3.png',
                            'editorial/imagens/4.png',

                        ],
                    description: [
                        'Trabalhos editoriais são aqueles relacionados à criação de conteúdo editorial, como livros, revistas, jornais, manuais, entre outros. O processo editorial envolve desde a concepção do conteúdo até a sua finalização e publicação.',
                        'Os trabalhos editoriais podem ser realizados por uma equipe composta por diversos profissionais, como editores, revisores, diagramadores, designers gráficos, ilustradores, entre outros. Cada um desses profissionais desempenha um papel específico para garantir que o conteúdo seja bem estruturado, tenha uma boa aparência e esteja de acordo com as normas de publicação.',
                        'Os editores são responsáveis por selecionar o conteúdo, coordenar a produção editorial, revisar e corrigir os textos, definir o projeto gráfico, entre outras atividades. Os diagramadores são responsáveis por organizar o conteúdo em páginas e definir a sua aparência. Já os designers gráficos são responsáveis por criar as ilustrações, as capas e outros elementos visuais do material editorial.',
                        'Em resumo, o trabalho editorial é fundamental para garantir a qualidade do conteúdo publicado e para que ele atenda às necessidades e expectativas do público-alvo.'

                    ]
                },
                {
                    name: 'Mechardising',
                    thumb: 'merchandising/imagens/2.jpg',
                    owner: [
                        {
                            name: 'Metallica',
                            userFoto: 'merchandising/metallica.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Red Band',
                            userFoto: 'merchandising/red.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Starset',
                            userFoto: 'merchandising/starset.jpg',
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
                            'merchandising/imagens/1.jpg',
                            'merchandising/imagens/2.jpg',
                            'merchandising/imagens/3.png',
                            'merchandising/imagens/4.jpg',
                            'merchandising/imagens/5.jpg',
                            'merchandising/imagens/6.jpg',
                        ],
                    description: ['Merchandising é uma estratégia de marketing que busca promover e valorizar determinado produto ou marca no ponto de venda, utilizando técnicas de exposição, decoração, sinalização, promoções, entre outras. É uma forma de estimular o interesse e a compra do consumidor, a partir de uma apresentação atrativa e persuasiva do produto ou serviço. O merchandising pode ser feito em lojas físicas, e-commerces, supermercados, entre outros ambientes de venda. Além disso, também pode ser utilizado em eventos, shows, programas de TV, filmes e outras produções audiovisuais como uma forma de publicidade.']
                },
                {
                    name: 'Montagens',
                    thumb: 'montagem/imagens/2.jpg',
                    owner: [
                        {
                            name: 'Metallica',
                            userFoto: 'merchandising/metallica.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Red Band',
                            userFoto: 'merchandising/red.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Starset',
                            userFoto: 'merchandising/starset.jpg',
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
                            'montagem/imagens/1.jpg',
                            'montagem/imagens/2.jpg',
                            'montagem/imagens/3.jpg',
                        ],
                    description: [
                        'Montagens e colagens com Photoshop são técnicas de edição de imagem que permitem combinar várias imagens em uma única composição. O Photoshop é uma ferramenta poderosa para realizar esse tipo de trabalho, pois oferece diversas ferramentas de edição, como a seleção de objetos, recorte, ajustes de cor e brilho, entre outras.',
                        'A montagem de imagens é amplamente utilizada em publicidade, propaganda, design gráfico e fotografia. Por exemplo, uma campanha publicitária pode usar a montagem de imagens para criar um anúncio que transmita uma ideia ou conceito de forma criativa e impactante.',
                        'Já a colagem de imagens pode ser usada para criar composições artísticas, como cartazes, pôsteres, capas de livros e revistas, entre outros. A colagem permite que o artista ou designer crie uma composição única a partir de diversas imagens, recortes e texturas.']
                },
                {
                    name: 'Fotografias | Preto e branco',
                    thumb: 'fotografia_01/imagens/2.jpg',
                    owner: [
                        {
                            name: 'System of Down',
                            userFoto: 'fotografia_01/system.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=I7BaFAromz4&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=48&ab_channel=Red-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Fire Flight Rock',
                            userFoto: 'fotografia_01/fireflight.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=NVJFQMSZFyo&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=50&ab_channel=Fireflight-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Five Finger Death Punch',
                            userFoto: 'fotografia_01/five.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=Ci0jakuERic&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=54&ab_channel=FiveFingerDeathPunch-Topic'
                                }
                            ],
                        },

                    ],

                    portfolios:
                        [
                            'fotografia_01/imagens/1.jpg',
                            'fotografia_01/imagens/2.jpg',
                            'fotografia_01/imagens/3.jpg',
                            'fotografia_01/imagens/4.jpg',
                            'fotografia_01/imagens/5.jpg',
                        ],
                    description: ['Cobogó é um elemento arquitetônico bastante utilizado na construção civil brasileira. É uma espécie de elemento vazado, geralmente fabricado em cerâmica ou concreto, que permite a passagem de ar e luz, sem comprometer a privacidade do ambiente.',
                        ' O nome "cobogó" tem origem na junção dos sobrenomes dos seus criadores, Amadeu Oliveira Coimbra, Ernest August Boeckmann e Antônio de Góis.O elemento se popularizou no Nordeste do Brasil a partir da década de 1920, sendo muito utilizado em construções residenciais e comerciais.']
                },
                {
                    name: 'blvckfinance',
                    thumb: 'blvckfinance/imagens/2.jpg',
                    owner: [
                        {
                            name: 'Stenio Marcius',
                            userFoto: 'blvckfinance/stenio.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=utaXbF-ZZsE&list=PL5zWF3xO0ZETHKblr5w0WDhR8TjdCBOMj&index=4&ab_channel=St%C3%AAnioMarcius-Topic'
                                }
                            ],
                        },
                        {
                            name: 'O Rappa',
                            userFoto: 'blvckfinance/rappa.webp',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=wspAURE8eYk&list=PL5zWF3xO0ZEQBywAyykLet88kStJETrXC&index=54&ab_channel=VictorX.'
                                }
                            ],
                        },

                    ],

                    portfolios:
                        [
                            'blvckfinance/imagens/1.jpg',
                            'blvckfinance/imagens/2.jpg',
                            'blvckfinance/imagens/3.jpg',
                            'blvckfinance/imagens/4.jpg',
                            'blvckfinance/imagens/5.jpg',
                            'blvckfinance/imagens/6.jpg',
                        ],
                    description: [
                        'Mockups são representações visuais estáticas ou interativas de um design de produto ou interface de usuário. Eles são usados para fornecer uma visão geral do design, layout e funcionalidades de um produto, antes mesmo de ser construído ou desenvolvido. Geralmente, os mockups são criados como modelos de design em papel ou digitalmente, utilizando softwares de design gráfico, como o Adobe Photoshop, Sketch ou Figma.',
                        'Os mockups são utilizados por equipes de design, desenvolvedores e stakeholders para validar conceitos de design, testar a funcionalidade do produto e avaliar a aparência e usabilidade do produto. Eles podem ser criados para diferentes tipos de projetos, incluindo aplicativos móveis, websites, produtos físicos, e-commerce e muito mais.',
                        'Os mockups são uma parte importante do processo de design e podem ajudar a economizar tempo e dinheiro, permitindo que a equipe antecipe problemas e solucione problemas de design antes mesmo de começar a codificar ou produzir um produto final.'
                    ]
                },
                {
                    name: 'Websites | Frontend',
                    thumb: 'websites/imagens/4.jpg',
                    owner: [
                        {
                            name: 'JVKE',
                            userFoto: 'websites/jvke.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=91RmY7To89Y&ab_channel=Lierix'
                                }
                            ],
                        },
                        {
                            name: 'Mato Seco',
                            userFoto: 'websites/matoseco.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=ONVHecN-RAs&list=PL5zWF3xO0ZEQ4sZxkNXdKhRsKGzY7j26q&index=11&ab_channel=MatoSeco'
                                }
                            ],
                        },
                        {
                            name: 'Paula Fernandes',
                            userFoto: 'websites/paula.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=G-SeTaxtrJo&ab_channel=PaulaFernandes-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Benito di Paula',
                            userFoto: 'websites/benito.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=-YeVxeyWDHo&ab_channel=BenitoDiPaulaVEVO'
                                }
                            ],
                        },


                    ],

                    portfolios:
                        [
                            'websites/imagens/1.png',
                            'websites/imagens/2.jpg',
                            'websites/imagens/3.jpg',
                            'websites/imagens/4.jpg',
                            'websites/imagens/5.jpg',
                        ],
                    description: [
                        'Os web designers que também fazem o front-end são responsáveis por criar a interface visual de um site ou aplicativo. Eles utilizam uma variedade de ferramentas e tecnologias, incluindo o Adobe Photoshop, Sketch, Adobe XD, entre outros, para criar um layout atraente e funcional que possa ser implementado no código.',
                        'Além de criar o design, os web designers também podem estar envolvidos no processo de desenvolvimento do front-end. Eles trabalham com programadores front-end para garantir que o código HTML, CSS e JavaScript reflita corretamente o design e funcione corretamente em diferentes dispositivos e navegadores.',
                        'O trabalho dos web designers que também fazem o front-end é muito importante para garantir que os sites e aplicativos tenham uma aparência atraente e sejam fáceis de usar. Eles precisam ter uma compreensão sólida de design, bem como conhecimento técnico em HTML, CSS e JavaScript.',

                    ]
                },
                {
                    name: 'Mun | Arandela',
                    thumb: 'mun/imagens/4.jpg',
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
                            'mun/imagens/4.jpg',

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
                            'fotografia/imagens/3.jpg',
                            'fotografia/imagens/4.jpg',
                            'fotografia/imagens/5.jpg',
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
                    thumb: 'tabuleiro/imagens/7.jpg',
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
                            name: 'selena Gomes',
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
                    name: 'Desenhos Coloridos',
                    thumb: 'desenhos_2/imagens/1.jpg',
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
                            'desenhos_2/imagens/1.jpg',
                            'desenhos_2/imagens/2.png',
                            'desenhos_2/imagens/3.png',
                            'desenhos_2/imagens/4.jpg',
                            'desenhos_2/imagens/5.png',
                            'desenhos_2/imagens/6.png',
                            'desenhos_2/imagens/7.jpg',
                        ],
                    description: [
                        'Desenhos digitais e à lápis são duas formas de arte diferentes, mas que possuem suas próprias características e vantagens.',
                        'O desenho à lápis é uma técnica tradicional, que tem sido utilizada por artistas há séculos. Ele envolve a criação de um desenho usando um lápis ou grafite em um papel. A técnica permite uma grande variedade de estilos e texturas, e é muitas vezes utilizada para retratos, paisagens e ilustrações.',
                        'Já o desenho digital é uma técnica mais moderna, que utiliza programas de computador para criar imagens. O desenho é criado usando uma mesa digitalizadora e uma caneta stylus, que permitem ao artista criar desenhos com precisão e facilidade de edição. O desenho digital é frequentemente utilizado na criação de personagens de jogos, ilustrações digitais e designs gráficos.',
                        'Ambas as técnicas têm suas próprias vantagens e podem ser utilizadas de formas complementares. Enquanto o desenho à lápis oferece uma sensação mais tátil e artesanal, o desenho digital oferece uma precisão e facilidade de edição que podem ser úteis em certos projetos. No final das contas, a escolha entre uma técnica ou outra dependerá das preferências e habilidades do artista, bem como das necessidades do projeto em questão.'
                    ]
                },
                {
                    name: 'Desenhos Realistas | Preto e branco',
                    thumb: 'desenhos/imagens/4.jpg',
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
                            'desenhos/imagens/1.png',
                            'desenhos/imagens/2.jpg',
                            'desenhos/imagens/3.jpg',
                            'desenhos/imagens/4.jpg',
                            'desenhos/imagens/5.jpg',
                            'desenhos/imagens/6.jpg',
                            'desenhos/imagens/7.jpg',
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
                    thumb: 'comoda/imagens/4.jpg',
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
                    name: 'Cobogó | Mackenzie',
                    thumb: 'cobogo/imagens/4.jpg',
                    owner: [

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
                {
                    name: 'Banners Youtube',
                    thumb: 'banners/imagens/4.png',
                    owner: [

                        {
                            name: 'Zevnikov',
                            userFoto: 'banners/zevnikov.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=q8AuPWZNxpY&list=PL5zWF3xO0ZERzh1x6iHoDmxLKoXh3Muqv&index=4&ab_channel=zevnikov'
                                }
                            ],
                        },
                        {
                            name: 'Djavan',
                            userFoto: 'banners/djavan.jpg',
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
                            'banners/imagens/1.png',
                            'banners/imagens/2.png',
                            'banners/imagens/3.png',
                            'banners/imagens/4.png',
                            'banners/imagens/5.png',
                            'banners/imagens/6.png',
                        ],

                },
                {
                    name: 'Editorial',
                    thumb: 'editorial/imagens/4.png',
                    owner: [
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
                            'editorial/imagens/1.png',
                            'editorial/imagens/2.png',
                            'editorial/imagens/3.png',
                            'editorial/imagens/4.png',

                        ],
                    description: [
                        'Trabalhos editoriais são aqueles relacionados à criação de conteúdo editorial, como livros, revistas, jornais, manuais, entre outros. O processo editorial envolve desde a concepção do conteúdo até a sua finalização e publicação.',
                        'Os trabalhos editoriais podem ser realizados por uma equipe composta por diversos profissionais, como editores, revisores, diagramadores, designers gráficos, ilustradores, entre outros. Cada um desses profissionais desempenha um papel específico para garantir que o conteúdo seja bem estruturado, tenha uma boa aparência e esteja de acordo com as normas de publicação.',
                        'Os editores são responsáveis por selecionar o conteúdo, coordenar a produção editorial, revisar e corrigir os textos, definir o projeto gráfico, entre outras atividades. Os diagramadores são responsáveis por organizar o conteúdo em páginas e definir a sua aparência. Já os designers gráficos são responsáveis por criar as ilustrações, as capas e outros elementos visuais do material editorial.',
                        'Em resumo, o trabalho editorial é fundamental para garantir a qualidade do conteúdo publicado e para que ele atenda às necessidades e expectativas do público-alvo.'

                    ]
                },
                {
                    name: 'Mechardising',
                    thumb: 'merchandising/imagens/6.jpg',
                    owner: [
                        {
                            name: 'Metallica',
                            userFoto: 'merchandising/metallica.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Red Band',
                            userFoto: 'merchandising/red.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Starset',
                            userFoto: 'merchandising/starset.jpg',
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
                            'merchandising/imagens/1.jpg',
                            'merchandising/imagens/2.jpg',
                            'merchandising/imagens/3.png',
                            'merchandising/imagens/4.jpg',
                            'merchandising/imagens/5.jpg',
                            'merchandising/imagens/6.jpg',
                        ],
                    description: ['Merchandising é uma estratégia de marketing que busca promover e valorizar determinado produto ou marca no ponto de venda, utilizando técnicas de exposição, decoração, sinalização, promoções, entre outras. É uma forma de estimular o interesse e a compra do consumidor, a partir de uma apresentação atrativa e persuasiva do produto ou serviço. O merchandising pode ser feito em lojas físicas, e-commerces, supermercados, entre outros ambientes de venda. Além disso, também pode ser utilizado em eventos, shows, programas de TV, filmes e outras produções audiovisuais como uma forma de publicidade.']
                },
                {
                    name: 'Montagens',
                    thumb: 'montagem/imagens/3.jpg',
                    owner: [
                        {
                            name: 'Metallica',
                            userFoto: 'merchandising/metallica.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Red Band',
                            userFoto: 'merchandising/red.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Linkedin',
                                    link: 'https://www.linkedin.com/'
                                }
                            ],
                        },
                        {
                            name: 'Starset',
                            userFoto: 'merchandising/starset.jpg',
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
                            'montagem/imagens/1.jpg',
                            'montagem/imagens/2.jpg',
                            'montagem/imagens/3.jpg',
                        ],
                    description: [
                        'Montagens e colagens com Photoshop são técnicas de edição de imagem que permitem combinar várias imagens em uma única composição. O Photoshop é uma ferramenta poderosa para realizar esse tipo de trabalho, pois oferece diversas ferramentas de edição, como a seleção de objetos, recorte, ajustes de cor e brilho, entre outras.',
                        'A montagem de imagens é amplamente utilizada em publicidade, propaganda, design gráfico e fotografia. Por exemplo, uma campanha publicitária pode usar a montagem de imagens para criar um anúncio que transmita uma ideia ou conceito de forma criativa e impactante.',
                        'Já a colagem de imagens pode ser usada para criar composições artísticas, como cartazes, pôsteres, capas de livros e revistas, entre outros. A colagem permite que o artista ou designer crie uma composição única a partir de diversas imagens, recortes e texturas.']
                },
                {
                    name: 'Fotografias | Preto e branco',
                    thumb: 'fotografia_01/imagens/5.jpg',
                    owner: [
                        {
                            name: 'System of Down',
                            userFoto: 'fotografia_01/system.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=I7BaFAromz4&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=48&ab_channel=Red-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Fire Flight Rock',
                            userFoto: 'fotografia_01/fireflight.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=NVJFQMSZFyo&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=50&ab_channel=Fireflight-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Five Finger Death Punch',
                            userFoto: 'fotografia_01/five.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=Ci0jakuERic&list=PL5zWF3xO0ZEQvH91JDtPYJHMx_16k3Fdy&index=54&ab_channel=FiveFingerDeathPunch-Topic'
                                }
                            ],
                        },

                    ],

                    portfolios:
                        [
                            'fotografia_01/imagens/1.jpg',
                            'fotografia_01/imagens/2.jpg',
                            'fotografia_01/imagens/3.jpg',
                            'fotografia_01/imagens/4.jpg',
                            'fotografia_01/imagens/5.jpg',
                        ],
                    description: ['Cobogó é um elemento arquitetônico bastante utilizado na construção civil brasileira. É uma espécie de elemento vazado, geralmente fabricado em cerâmica ou concreto, que permite a passagem de ar e luz, sem comprometer a privacidade do ambiente.',
                        ' O nome "cobogó" tem origem na junção dos sobrenomes dos seus criadores, Amadeu Oliveira Coimbra, Ernest August Boeckmann e Antônio de Góis.O elemento se popularizou no Nordeste do Brasil a partir da década de 1920, sendo muito utilizado em construções residenciais e comerciais.']
                },
                {
                    name: 'blvckfinance',
                    thumb: 'blvckfinance/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Stenio Marcius',
                            userFoto: 'blvckfinance/stenio.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=utaXbF-ZZsE&list=PL5zWF3xO0ZETHKblr5w0WDhR8TjdCBOMj&index=4&ab_channel=St%C3%AAnioMarcius-Topic'
                                }
                            ],
                        },
                        {
                            name: 'O Rappa',
                            userFoto: 'blvckfinance/rappa.webp',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=wspAURE8eYk&list=PL5zWF3xO0ZEQBywAyykLet88kStJETrXC&index=54&ab_channel=VictorX.'
                                }
                            ],
                        },

                    ],

                    portfolios:
                        [
                            'blvckfinance/imagens/1.jpg',
                            'blvckfinance/imagens/2.jpg',
                            'blvckfinance/imagens/3.jpg',
                            'blvckfinance/imagens/4.jpg',
                            'blvckfinance/imagens/5.jpg',
                            'blvckfinance/imagens/6.jpg',
                        ],
                    description: [
                        'Mockups são representações visuais estáticas ou interativas de um design de produto ou interface de usuário. Eles são usados para fornecer uma visão geral do design, layout e funcionalidades de um produto, antes mesmo de ser construído ou desenvolvido. Geralmente, os mockups são criados como modelos de design em papel ou digitalmente, utilizando softwares de design gráfico, como o Adobe Photoshop, Sketch ou Figma.',
                        'Os mockups são utilizados por equipes de design, desenvolvedores e stakeholders para validar conceitos de design, testar a funcionalidade do produto e avaliar a aparência e usabilidade do produto. Eles podem ser criados para diferentes tipos de projetos, incluindo aplicativos móveis, websites, produtos físicos, e-commerce e muito mais.',
                        'Os mockups são uma parte importante do processo de design e podem ajudar a economizar tempo e dinheiro, permitindo que a equipe antecipe problemas e solucione problemas de design antes mesmo de começar a codificar ou produzir um produto final.'
                    ]
                },
                {
                    name: 'Websites | Frontend',
                    thumb: 'websites/imagens/1.png',
                    owner: [
                        {
                            name: 'JVKE',
                            userFoto: 'websites/jvke.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=91RmY7To89Y&ab_channel=Lierix'
                                }
                            ],
                        },
                        {
                            name: 'Mato Seco',
                            userFoto: 'websites/matoseco.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=ONVHecN-RAs&list=PL5zWF3xO0ZEQ4sZxkNXdKhRsKGzY7j26q&index=11&ab_channel=MatoSeco'
                                }
                            ],
                        },
                        {
                            name: 'Paula Fernandes',
                            userFoto: 'websites/paula.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=G-SeTaxtrJo&ab_channel=PaulaFernandes-Topic'
                                }
                            ],
                        },
                        {
                            name: 'Benito di Paula',
                            userFoto: 'websites/benito.jpg',
                            socialMedia: [
                                {
                                    plataform: 'Youtube',
                                    link: 'https://www.youtube.com/watch?v=-YeVxeyWDHo&ab_channel=BenitoDiPaulaVEVO'
                                }
                            ],
                        },


                    ],

                    portfolios:
                        [
                            'websites/imagens/1.png',
                            'websites/imagens/2.jpg',
                            'websites/imagens/3.jpg',
                            'websites/imagens/4.jpg',
                            'websites/imagens/5.jpg',
                        ],
                    description: [
                        'Os web designers que também fazem o front-end são responsáveis por criar a interface visual de um site ou aplicativo. Eles utilizam uma variedade de ferramentas e tecnologias, incluindo o Adobe Photoshop, Sketch, Adobe XD, entre outros, para criar um layout atraente e funcional que possa ser implementado no código.',
                        'Além de criar o design, os web designers também podem estar envolvidos no processo de desenvolvimento do front-end. Eles trabalham com programadores front-end para garantir que o código HTML, CSS e JavaScript reflita corretamente o design e funcione corretamente em diferentes dispositivos e navegadores.',
                        'O trabalho dos web designers que também fazem o front-end é muito importante para garantir que os sites e aplicativos tenham uma aparência atraente e sejam fáceis de usar. Eles precisam ter uma compreensão sólida de design, bem como conhecimento técnico em HTML, CSS e JavaScript.',

                    ]
                },
            ],
            popupValue: false,
            indexPopup: null,
            coisas: 4,
        }
    },

    methods: {
        upPopup(event, index) {

            const clicked = event.target.classList[0]
            this.imagesNumber = 0
            //É nessário que o popup apareça/desapareça, somenente se alguns determinados elementos forem clicados

            if (event.currentTarget.classList[0] == 'projeto' || clicked == 'popup__overflow' || clicked == 'popup__close') {
                this.indexPopup = index

                this.popupValue = !this.popupValue

                if (this.popupValue == true) {
                    document.body.style.overflow = "hidden"

                } else {
                    document.querySelector('body').removeAttribute('style')
                }
            }

            //A função precisa ser realizada depois que o layout for criado, para isso, o setTimeout

            if (this.popupValue == true && clicked != undefined) {
                setTimeout(() => {
                    this.criaColunas()

                }, 1);
            }

        },

        async criaColunas() {
            const grid = document.getElementById('grid')

            this.numImgGrid = grid.children.length

            if (grid.childElementCount > 2) {
                for (let x = 0; x <= grid.childElementCount; x++) {

                    for (let i = 0; i < 2; i++) {
                        if (document.getElementById('column-0') == null) {
                            grid.innerHTML += `<div class="vitrine-count" id="column-0"></div>`
                            grid.innerHTML += `<div class="vitrine-count" id="column-1"></div>`
                        }
                        if (grid.children.length > 2) {
                            document.getElementById(`column-${i}`).appendChild(grid.children[0])
                        }
                    }
                }
            }

            if (grid.style.gridTemplateColumns == '') {
                this.alteraLayout()
            }
        },

        alteraLayout() {
            // Observa quantos grids o container id="grid" se iniciou ao subir o popup

            const grid = document.getElementById('grid')
            let layout = document.getElementById('layout')

            layout.style.gridTemplateColumns = '1fr 1fr'

            if (grid.style.gridTemplateColumns == '1fr 1fr') {

                grid.style.gridTemplateColumns = '1fr'
                layout.style.gridTemplateColumns = '1fr'
                this.coisas = 2
            } else {
                grid.style.gridTemplateColumns = '1fr 1fr'
                layout.style.gridTemplateColumns = '1fr 1fr'
                this.coisas = 4
            }

        },
        loadImage() {

            this.imagesNumber += 1

            setTimeout(() => {

                if (this.numImgGrid == this.imagesNumber) {
                    //faz comparações de tamanho de coluna para tentar manter as duas no mesmo tamanho
                    let column0 = document.getElementById('column-0')
                    let column1 = document.getElementById('column-1')

                    if (column0.clientHeight - column0.children[column0.children.length - 1].clientHeight - 10 > column1.clientHeight) {
                        column1.appendChild(column0.childNodes[column0.children.length - 1])
                    }

                }
            }, 1);
        },
        category(event) {

            const filterSelected = event.target
            const filter = document.querySelector('[filter]')

            if (filterSelected.getAttribute('filter') == null && filterSelected.tagName == 'FILTER') {
                filter.removeAttribute('filter')
                filterSelected.setAttribute('filter', 'ativo')
            }
        },
        exporProjeto(event) {
            const e = event.target.classList[0]

            if (e == 'cadastro_btn') {
                this.cadastro = true
                document.body.style.overflow = "hidden"
            } else if (e == 'cadastro' || e == 'cadastro_close') {
                this.cadastro = false
                document.body.removeAttribute('style')
            }
        }
    },
}

</script>

<style scoped>
.body {
    max-width: 1400px;
    margin: auto;

}

section-projects {
    margin: 100px;
    max-width: 1400px;
    width: calc(100% - 25px);
}

@keyframes opacitySuave {
    from {
        opacity: 0;
        transform: translatey(-30px);
    }

    to {
        opacity: 1;
        transform: translatey(0);
    }
}

/* Quero Expor meu Projeto */

.cadastro {
    animation-name: opacitySuave;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    z-index: 100;
}

.cadastro__close {
    position: fixed;
    right: 30px;
    top: 30px;
    background: none;
    font-size: 24px;
    color: white;
    border: none;
    cursor: pointer;
}


.cadastro__campos {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 1000px;
    width: 100%;
    height: calc(100vh - 60px);
    margin-top: 60px;
    background: #1f1f1f;
    padding: 20px;
    padding-bottom: 60px;
}

.cadastro__title {
    font-size: 22px;
    font-weight: 800;
}

.cadastro__subtitle {
    font-size: 20px;
    font-weight: 400;
    border-width: 0 0 0 3px;
    border-style: solid;
    border-color: #CC141D;
    padding-left: 10px;
    padding: 6px 0 6px 14px;
}

.cadastro__imagens {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 4px;
}

.cadastro__imagens img {
    width: 100%;
}

.image__cont_cadastro {
    position: relative;
}

.image__cont_cadastro:hover .delete_image {
    opacity: 1;
    transition: .2s;
}

.delete_image {
    position: absolute;
    opacity: 0.7;
    font-size: 22px;
    top: 5px;
    right: 8px;
    transition: .2s;
    cursor: pointer;
    color: rgb(182, 182, 182);
}

input[type="file"] {
    display: none;
}

.upload {
    display: flex;
    border-radius: 50px;
    border: 1px solid white;
    cursor: pointer;
    padding: 8px;
    margin-bottom: 6px;
}

.upload button {
    gap: 20px;
}

.upload button img {
    width: 24px;
}

.cont_inputs__cadastro {
    position: relative;
    background: black;
    padding: 40px;
    border-radius: 8px;
}

.adicionar {
    gap: 12px;
}

.delete {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    border: none;
    border-color: rgb(187, 187, 187);
    padding-bottom: 4px;
    border-style: solid;
    border-width: 0 0 1px 0;
    color: rgb(187, 187, 187);
    background: none;
    font-size: 16px;
    transition: .2s;
}

.delete:hover {
    opacity: 0.7;
    transition: .2s;
}




.buscar {
    width: 100%;
}

.inputs__cadastro {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 40px;
}

.inputs__cadastro div {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

label {
    font-size: 16px;
}

.textarea {
    background: #2c2c2c;
    padding: 12px 12px 120px 12px;
    resize: none;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    color: gray;
}

.termos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
}

/*  */
.inputs {
    margin-bottom: 40px;
}

.filtro {
    padding-right: 50px;
    outline: none;
    cursor: pointer;
}

.filtro option {
    height: 30px;
}

.filtro,
input[type="text"] {
    background: #2c2c2c;
    height: 36px;
    border-radius: 20px;
    border: none;
    color: white;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 400;
}

input[type="text"] {
    width: 100%;
}

input[type="text"]::placeholder {
    color: gray;
}

/* Filtro por tags */

.filtro_por_filtro {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
}

.cont_filtro {
    display: grid;
    grid-template-columns: 300px 1fr;
    width: 100%;
    gap: 40px;
}

.cont_tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 65px;
}

filter {
    display: block;
    padding: 6px 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: .2s;
    color: #c9c9c9;
    border-color: rgb(107, 4, 4);
    border-width: 0 3px 2px 0;
    border-style: solid;
    box-shadow: 3px 3px 8px black;
}

filter:hover {
    background: rgb(172, 0, 0);
    transition: .2s;
}

[filter="ativo"] {
    background: rgb(107, 4, 4);
}

/*  */

#teste img {
    width: 100%;
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
    font-size: 22px;
    font-weight: 100;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: absolute;
}

.container__alteraLayout {
    font-weight: 400;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    z-index: 1;
}

.cont__alteraLayout {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 50px;
    transform: translate(100px, 100px);
}

.layout {
    animation-name: opacitySuave;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    gap: 20px;
}

@keyframes outraanimacao {
    0% {
        transform: translatey(0);
    }

    70% {
        transform: translatey(0);
    }

    75% {
        transform: translatey(-3px);
    }

    80% {
        transform: translatey(0);
    }

    95% {
        transform: translatey(-3px);
    }

    100% {
        transform: translatey(0);
    }
}

.layout__container {
    animation-name: outraanimacao;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 30px;
    gap: 4px;
    transition: .2s;
}

.alteraLayout {
    background: rgb(101, 101, 101);
    padding: 8px;
    border-radius: 2px;
    transition: .2s;
}

.layout:hover .alteraLayout {
    background: rgb(89, 89, 89);
    transition: .2s;
    transform: translatey(-5px);
}

.download {
    animation-name: opacitySuave;
    animation-duration: .6s;
    animation-fill-mode: forwards;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: rgb(89, 89, 89);
    border-radius: 50%;
}

.download p {
    position: absolute;
    bottom: -32px;
    white-space: nowrap;
}

.download img {
    transition: .2s;
    margin-bottom: 3px;
    width: 28px;
}

.download:hover img {
    transform: translatey(-4px);
    transition: .2s;
}

h1 {
    font-weight: 100;
    font-size: 80px;
    margin-left: 100px;
    text-align: start;
    width: 100%;
}

/* USER ANIMATION */

.container-projetos {
    column-count: 3;
    column-gap: 20px;
    color: white;
    width: 100%;
}

@media only screen and (min-width: 1980px) {

    .container-projetos {
        column-count: 4;
    }

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
    font-weight: 400;
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
    font-weight: 400;
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
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 18px;
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

.popup__container,
.cont__alteraLayout {
    width: calc(100% - 400px);
    max-width: 1400px;
}

.popup__container {
    position: relative;
    background: rgb(26, 26, 26);
    margin-bottom: 60px;
    animation-name: opacitySuave;
    animation-duration: .6s;
    animation-fill-mode: forwards;
    max-width: 1400px;
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
    z-index: 3;
}

header-popup {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
}

/* portfolio */

.portfolio {
    margin-top: 30px;
}

/* Descriçoes' */

.description {
    column-count: 2;
    margin: 20px 0 60px 0;
    font-weight: 400;
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
    font-weight: 400;
    font-size: 17px;
    color: #A0A0A0;
}

hr {
    border-width: 1px 0 0 0;
    border-color: #656565;
    border-style: solid;
}

.container__footer {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
}

.footer__popup {
    background: #2c2c2c;
    background: black;
    padding: 30px;
    border-radius: 8px;
}

.grid__criadores {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 26px;
    font-size: 16px;
    gap: 14px;
}

.criadores {
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    margin-bottom: 30px;
    padding: 10px;
    line-height: 20px;
    border-radius: 8px;
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
    font-weight: 400;
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
    background: #1a1a1a;
    color: #7f7f7f;
    font-size: 15px;
    font-weight: 400;
    padding: 6px 11px;
}

.data_publi {
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #A0A0A0;
    margin-top: 40px;
}

.popup__docentes {
    line-height: 26px;
    color: #A0A0A0;
    font-size: 16px;
    font-weight: 400;
}

.pesquisa {
    width: 100vw;
}

@media only screen and (max-width: 1000px) {

    .container-projetos {
        gap: 3px;
    }

    .projeto {
        margin: 0;
    }

    /* Alteração do popup */

    .popup__container {
        width: calc(100% - 120px);
    }

    .popup__close {
        text-shadow: 2px 2px 2px black;
    }

    .container__alteraLayout {
        display: none;
    }

    #grid {
        grid-template-columns: 1fr !important;
    }

    .description {
        column-count: 1;
    }

    .grid__criadores {
        grid-template-columns: 1fr 1fr;
    }

    .popup {
        display: flex;
        justify-content: center;
    }

}

@media only screen and (max-width: 700px) {

    .projeto {
        margin: 0;
    }

    .popup__container {
        width: calc(100% - 20px);
    }

    .grid__criadores {
        grid-template-columns: 1fr;
    }

    .criadores {
        margin-bottom: 0;
    }

    .container__footer {
        display: grid;
        grid-template-columns: 1fr;
    }

    .container_user {
        display: none;
    }

    .projectName {
        font-size: 14px;
        opacity: 1;
    }

    .projectName {
        padding: 0 10px;
    }

    .cont_filtro {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .filtro_por_filtro {
        width: calc(100% - 40px);
        margin: auto;
        margin-bottom: 20px;
    }

}
</style>

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
}

.vitrine-count {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gap-img);
    height: max-content;
}

.vitrine-grid img {
    object-fit: contain;
    width: 100%;
}
</style>

