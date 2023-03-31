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
        <el-carousel :interval="2000" arrow="always" height="100vh">
            <el-carousel-item>
                <img src="projetos/banner1.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/banner2.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/banner3.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/banner4.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/banner5.jpg">
            </el-carousel-item>
        </el-carousel>

        <div class="container">
            <!-- popupValue -->
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
                            <p class="font-light">Diferentes logos e identidades visuais</p>
                        </header-popup>

                        <!-- portfolio -->

                        <div class="portfolio">
                            <img v-for="portfolio in projects[indexPopup].portfolios" :src="'projetos/' + portfolio">
                        </div>

                        <!-- Descrições -->

                        <div class="description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the
                            leap into electronic typesetting, rem Ipsum.
                        </div>

                        <h6>Criadores</h6>
                        <el-row>
                            <el-col :span="18">
                                <div class="grid__criadores">
                                    <div class="criadores">
                                        Mateus Durães dos santos
                                        <div class="redes__sociais">
                                            <a href="#">Instagram</a>
                                        </div>
                                    </div>
                                    <div class="criadores">
                                        Marcos Martins Nascimento
                                        <div class="redes__sociais">
                                            <a href="#">Instagram</a> <br>
                                            <a href="#">Linkedin</a>
                                        </div>
                                    </div>
                                    <div class="criadores">
                                        João Nogueira Da silva
                                        <div class="redes__sociais">
                                            <a href="#">Instagram</a> <br>
                                            <a href="#">Linkedin</a> <br>
                                            <a href="#">Email</a>
                                        </div>
                                    </div>
                                    <div class="criadores">
                                        Pedro Ferreira Barraira
                                        <div class="redes__sociais">
                                            <a href="#">Instagram</a><br>
                                            <a href="#">Linkedin</a> <br>
                                            <a href="#">Email</a>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <div>
                                    <hr>
                                    <h6>Professores orientadores</h6>
                                    <p class="docentes">
                                    <p>Prof. Me. Carlos Marcelo Campos Teixeira</p>
                                    <p>Prof. Dr. Célio Martins da Matta </p>
                                    <p>Profª. Me. Grace Kishimoto</p>
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="4" :offset="1">
                                <h6>Laboratórios utilizados</h6>
                                <li class="font-light">Impressão</li>
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
                            userFoto: 'mun/mateus.jpg'
                        },
                        {
                            name: 'Pantera Negra',
                            userFoto: 'mun/pantera.jpg'
                        },
                        {
                            name: 'Will Smith',
                            userFoto: 'mun/will.jpg'
                        },
                        {
                            name: 'Beyonce',
                            userFoto: 'mun/beyonce.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'mun/imagens/1.jpg',
                            'mun/imagens/2.jpg',
                            'mun/imagens/3.jpg',

                        ]
                },
                {
                    name: 'Fotografia',
                    thumb: 'fotografia/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Prisma Brasil',
                            userFoto: 'fotografia/prisma.jpg'
                        },
                        {
                            name: 'João Alexandre',
                            userFoto: 'fotografia/joao.jpg'
                        },
                        {
                            name: 'Vocal Livre',
                            userFoto: 'fotografia/vocal.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'fotografia/imagens/1.jpg',
                            'fotografia/imagens/2.jpg',
                        ]
                },
                {
                    name: 'Relógio de Pulso',
                    thumb: 'relogio/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Cartola',
                            userFoto: 'relogio/cartola.jpg'
                        },
                        {
                            name: 'Mumuzinho',
                            userFoto: 'relogio/mumuzinho.jpg'
                        },
                        {
                            name: 'Péricles',
                            userFoto: 'relogio/pericles.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'relogio/imagens/1.jpg',
                            'relogio/imagens/2.jpg',
                            'relogio/imagens/3.jpg',
                            'relogio/imagens/4.jpg',
                            'relogio/imagens/5.jpg',
                        ]
                },
                {
                    name: 'Mesa Gamer',
                    thumb: 'mesa/imagens/2.jpg',
                    owner: [
                        {
                            name: 'Tayler James',
                            userFoto: 'mesa/tayler.jpg'
                        },
                        {
                            name: 'Rihanna',
                            userFoto: 'mesa/rihanna.jpg'
                        },
                        {
                            name: 'The Wekeend',
                            userFoto: 'mesa/the.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'mesa/imagens/1.jpg',
                            'mesa/imagens/2.jpg',
                            'mesa/imagens/3.jpg',
                            'mesa/imagens/4.jpg',
                            'mesa/imagens/5.jpg',
                        ]
                },
                {
                    name: 'Ascenção dos deuses',
                    thumb: 'tabuleiro/imagens/1.jpg',
                    owner: [

                        {
                            name: 'Bob Marley',
                            userFoto: 'tabuleiro/bob.jpg'
                        },
                        {
                            name: 'Rey Charles',
                            userFoto: 'tabuleiro/rey.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'tabuleiro/imagens/1.jpg',
                        ]
                },
                {
                    name: 'Chimarrão',
                    thumb: 'chimarrao/imagens/1.jpg',
                    owner: [

                        {
                            name: 'Jade Novah',
                            userFoto: 'chimarrao/jade.jpg'
                        },
                        {
                            name: 'Mahalia',
                            userFoto: 'chimarrao/mahalia.jpg'
                        },
                        {
                            name: 'Mariana Froes',
                            userFoto: 'chimarrao/mariana.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'chimarrao/imagens/1.jpg',
                            'chimarrao/imagens/2.jpg',
                            'chimarrao/imagens/3.jpg',
                            'chimarrao/imagens/4.jpg',
                        ]
                },
                {
                    name: 'Buttlerfly',
                    thumb: 'butterfly/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Chris Rock',
                            userFoto: 'butterfly/rock.jpg'
                        },
                        {
                            name: 'Selena Gomes',
                            userFoto: 'butterfly/Selena.jpg'
                        },
                        {
                            name: 'Alok',
                            userFoto: 'butterfly/alok.jpg'
                        },
                        {
                            name: 'Melanie',
                            userFoto: 'butterfly/melanie.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'butterfly/imagens/1.jpg',
                            'butterfly/imagens/2.jpg',
                            'butterfly/imagens/3.jpg',
                        ]
                },
                {
                    name: 'Desenhos',
                    thumb: 'desenhos/imagens/1.jpg',
                    owner: [
                        {
                            name: 'Hope Tala',
                            userFoto: 'desenhos/hope.jpg'
                        },
                        {
                            name: 'Andrea Abocelli',
                            userFoto: 'desenhos/andrea.jpg'
                        },
                        {
                            name: 'Ana Carolina',
                            userFoto: 'desenhos/ana.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'desenhos/imagens/1.jpg',
                            'desenhos/imagens/2.jpg',
                            'desenhos/imagens/3.jpg',
                            'desenhos/imagens/4.jpg',
                            'desenhos/imagens/5.jpg',
                        ]
                },
                {
                    name: 'Cômoda',
                    thumb: 'comoda/imagens/3.jpg',
                    owner: [
                        {
                            name: 'JP Cooper',
                            userFoto: 'comoda/jp.jpg'
                        },
                        {
                            name: 'vrosemusic',
                            userFoto: 'comoda/vrosemusic.jpg'
                        },
                        {
                            name: 'Elliott Trent',
                            userFoto: 'comoda/elliott.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'comoda/imagens/1.jpg',
                            'comoda/imagens/2.jpg',
                            'comoda/imagens/3.jpg',
                            'comoda/imagens/4.jpg',
                        ]
                },
                {
                    name: 'Cobogó',
                    thumb: 'cobogo/imagens/3.jpg',
                    owner: [
                        {
                            name: 'Caleb',
                            userFoto: 'cobogo/caleb.jpg'
                        },
                        {
                            name: 'Lecrae',
                            userFoto: 'cobogo/lecrae.jpg'
                        },
                        {
                            name: 'Sasha Alex Sloan ',
                            userFoto: 'cobogo/sasha.jpg'
                        },
                    ],
                    portfolios:
                        [
                            'cobogo/imagens/1.jpg',
                            'cobogo/imagens/2.jpg',
                            'cobogo/imagens/3.jpg',
                            'cobogo/imagens/4.jpg',
                        ]
                },
            ],
            popupValue: false,
            indexPopup: null

        }
    },
    methods: {
        upPopup(event, index) {
            this.indexPopup = index

            const clicked = event.target.classList[0]
            if (event.currentTarget.classList[0] == 'projeto' || clicked == 'popup__overflow' || clicked == 'popup__close') {
                this.popupValue = !this.popupValue
                if (this.popupValue == true) {
                    document.body.style.overflow = "hidden"
                } else {
                    document.querySelector('body').removeAttribute('style')
                }
            }
        },
    }
}

</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    width: 100%;
    min-height: 200px;
    max-height: 500px;
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
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.6)
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
    width: var(--page-width);
    padding: 40px;
    background: black;
    background: rgb(45, 45, 45);
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
    font-size: 18px;
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
}

.redes__sociais a {
    text-decoration: none;
    color: #006DBC;
    font-weight: 300;
    transition: .1s;
    padding: 2px;
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
    background: #171717;
    color: white;
    font-size: 14px;
    font-weight: 300;
    padding: 6px 11px;

}

.data_publi {
    width: 100%;
    text-align: center;
    font-weight: 300;
    color: #A0A0A0;
    margin-top: 100px;
}

.docentes {
    line-height: 26px;
    color: #A0A0A0;
    font-size: 16px;
    font-weight: 300;
}
</style>

