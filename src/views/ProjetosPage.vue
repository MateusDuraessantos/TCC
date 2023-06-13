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
            <button class="cadastro__close">✕</button>

            <div class="cadastro__campos">

                <h2 class="cadastro__title">Preencha os campos a seguir!</h2>

                <title-section class="aulas__title">
                    <p>Sobre os alunos</p>
                </title-section>

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
                        <div class="grid-upload">
                            <p>Imagem do aluno*</p>
                            <label for="upload" class="upload ">
                                <button class="blue_btn ">Campo de upload <img src="upload.svg"></button>
                                <p>Arraste um arquivo aqui ou <br>
                                    <span style="color: #E1001E">
                                        clique para fazer upload
                                    </span>
                                </p>
                            </label>
                            <input type="file" id="upload">

                        </div>
                    </div>
                    <button class="delete">Deletar ✕</button>
                </div>
                <div style="width: 100%; justify-content: center; display: flex;"><button
                        class="blue_btn adicionar">Adicionar aluno <span style=" font-size: 1.8rem;">🞢</span></button>
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

                <title-section class="aulas__title">
                    <p>Descreva o seu projeto para que outras pessoas possam entende-lo melhor:*</p>
                </title-section>

                <div class="textarea">
                    <p>Digite aqui</p>
                </div>

                <hr>
                <div class="imagens_camp">

                    <title-section class="aulas__title">
                        <p>Anexo de imagens</p>
                    </title-section>

                    <span>Escolha de 4 à 6 imagens para mostrar seu projeto, as melhores, para divulgação*</span>
                    <br>
                    <br>
                    <div>
                        <label for="upload" class="upload">
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
                            <img src="projetos/mesa/imagens/1.jpg">
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
                </div>

                <hr>

                <div class="tags__expor">
                    <p>Tags<span style="color:#E1001E">*</span></p>
                    <br>
                    <div>
                        <tag type="black" style="background: black">Design</tag>
                        <tag type="black" style="background: black">UX/UI</tag>
                        <tag type="black" style="background: black">WebSite</tag>
                        <tag type="black" style="background: black">OnePage</tag>
                        <tag type="black" style="background: black">Frontend</tag>
                        <tag type="black" style="background: black">CSS</tag>
                        <tag type="black" style="background: black">HTML</tag>
                    </div>
                </div>
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

        <el-carousel :interval="5000" arrow="always" height="85vh">
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
            <div class="filtro_por_filtro">
                <div class="cont_filtro">

                    <div class="box-select">
                        <select class="filtro" placeholder="Pesquisar:">
                            <option selected>Todos os anos</option>
                            <option value="" v-for="(coisas, index) in 14" :key="index">20{{ index + 10 }}
                            </option>
                        </select>
                    </div>



                    <div class="barra-de-pesquisa" @click="barSearch">
                        <input type="text" autocomplete="off" class="barra-de-pesquisa__input" id="FieldCamp"
                            @focus="showOffResults" @blur="showOffResults" @input="gridLength" v-model="valueInput"
                            placeholder="Pesquisar:">

                        <div class="barra-de-pesquisa__dropdown barra-de-pesquisa__button" v-if="fewfew">
                            <button style="pointer-events: none;" v-if="semResultados">Sem resultados</button>
                            <div id="resultadosDeBusca"></div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Filtro por tags  -->

            <div class="filter-tags">
                <div class="cont_tags" @click="category">
                    <filter tabindex="0" categoryName="todos" filter="ativo" @click="mateusLindo">
                        Todos
                    </filter>
                    <filter tabindex="0" categoryName="produto">
                        Produto
                    </filter>
                    <filter tabindex="0" categoryName="mobiliario">
                        Mobiliário
                    </filter>
                    <filter tabindex="0" categoryName="modelagem">
                        Renders 3D
                    </filter>
                    <filter tabindex="0" categoryName="fotografia">
                        Fotografia
                    </filter>
                    <filter tabindex="0" categoryName="desenho">
                        Desenho
                    </filter>
                    <filter tabindex="0" categoryName="joia">
                        Jóia
                    </filter>
                    <filter tabindex="0" categoryName="websites">
                        UX/UI
                    </filter>
                    <filter tabindex="0" categoryName="editorial">
                        Editorial
                    </filter>
                    <filter tabindex="0" categoryName="grafico">
                        Gráfico
                    </filter>
                </div>
            </div>





            <!-- Popup -->

            <div class="popup" v-if="popupValue">

                <div class="container-loading">
                    <span>carregando</span>
                    <div class="loading"></div>
                </div>


                <button class="popup__close" @click="upPopup">✕</button>

                <div class="popup__overflow" @click="upPopup">
                    <div class="popup_buttons">
                        <!-- Layout -->

                        <div class="layout" @click="square">
                            <div class="layout__container" id="layout">
                                <div class="square" v-for="coisa in coisas" />
                            </div>
                            <p>Mudar Layout</p>
                        </div>
                    </div>

                    <!-- Passar e voltar -->

                    <div class="pass" v-if="passImagens">

                        <div class="teste pass__container" v-if="next" id="next">
                            <button class="reload next"></button>
                            <p>→</p>
                        </div>

                        <div class="teste pass__container" v-if="back" id="back">
                            <button class="reload back"></button>
                            <p>←</p>
                        </div>
                    </div>

                    <!--  -->

                    <div class="popup__container" id="popup__container">
                        <header-popup>
                            <span>
                                <p class="font-light">5° Semestre</p>
                                <div class="title-popup">
                                    <h5>
                                        <span v-for="portfolio in projects[indexPopup].name">
                                            {{ portfolio }}
                                        </span>
                                    </h5>
                                    <tag type="white">
                                        <span v-for="portfolio in projects[indexPopup].categoria">
                                            {{ portfolio }}
                                        </span>
                                    </tag>

                                </div>
                                <p class="font-light">Um pouco sobre como foi o projeto</p>
                            </span>
                        </header-popup>

                        <!-- Vitrine das imagens -->

                        <div class="vitrine-grid" id="grid">
                            <img class="img_popup" v-for="portfolio in projects[indexPopup].portfolios" @load="loadImage"
                                :src="'projetos/' + portfolio">
                        </div>

                        <!-- Descrições -->

                        <div class="cont_description">
                            <div class="description">
                                <span>
                                    <p v-for="teste in projects[indexPopup].description">
                                        &nbsp;&nbsp;{{ teste }}
                                        <br>
                                        <br>
                                    </p>
                                </span>

                                <!-- Download -->

                                <div class="download">
                                    <div class="download__bubble">
                                        <img class="download__img" src="/projetos/download.svg">
                                    </div>
                                    <p>Relatório final</p>
                                </div>
                            </div>
                            <h6>Alunos designers projetistas</h6>
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
                                        <tag type="black" v-for="portfolio in projects[indexPopup].palavrasChave">
                                            {{ portfolio }}
                                        </tag>

                                    </div>
                                    <p class="data_publi">Publicação: 2 de março de 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--  -->

            <div class="container-projetos">
                <div :class="`projeto categoria__${project.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`"
                    v-for="(project, index) in limitedItems" :key="index"
                    @click="upPopup($event, index, project.categoria)">

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
            <div class="carregar"><button class="blue_btn" @click="changenumber">Carregar mais projetos</button>
            </div>
        </div>
    </div>
</template>

<script>
import { dados } from './projectsInfos'

export default {
    name: 'ProjetosPage',
    data() {
        return {
            imagesNumber: 0,
            numImgGrid: '',
            projects: dados.projects,
            cadastro: false,
            popupValue: false,
            indexPopup: null,
            coisas: 4,
            maxItems: 60,
            /* Passar projetos com seta */
            next: true,
            back: true,
            /*  */
            passImagens: true,
            // valueInput: null,
            valueInput: null,
            semResultados: true,
            fewfew: false,

        }
    },
    computed: {
        limitedItems() {
            return this.projects.slice(0, this.maxItems);
        }
    },
    mounted() {
        this.scrolltoTop()
    },
    methods: {
        scrolltoTop() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },

        showOffResults() {

            setTimeout(() => {
                this.fewfew = !this.fewfew


            }, 100);

            this.semResultados == !this.semResultados

        },

        gridLength() {

            this.valueInput = document.getElementById(`FieldCamp`).value
            let projetos = document.querySelectorAll(`.projeto`)

            let resultadosDeBusca = document.getElementById('resultadosDeBusca')


            for (let i = 0; projetos.length > i; i++) {

                if (projetos[i].classList[1].split('categoria__')[1].includes(this.valueInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && !this.valueInput == ``) {

                    resultadosDeBusca.innerHTML = ''
                    setTimeout(() => {

                        // resultadosDeBusca.innerHTML += `<button>${projetos[i].classList[1].split('categoria__')[1]}</button> <br>`
                        resultadosDeBusca.innerHTML += `<button categoria="${projetos[i].classList[1]}">${projetos[i].querySelector(`.projectName`).innerText}</button> <br>`



                        this.semResultados = false
                    }, 1);

                }
                else {
                    resultadosDeBusca.innerHTML = ''
                    this.semResultados = true
                }

            }
        },


        changenumber() {
            if (this.maxItems < this.projects.length) {
                this.maxItems += 20
            } else {
                this.maxItems == this.projects.length
            }
        },
        upPopup(event, index) {

            const clicked = event.target.classList[0]

            this.imagesNumber = 0

            setTimeout(() => {
                if (this.popupValue) {
                    //O if é para evitar erros ao fechar o popupo, para não adicionar a classe ao fechar o popup
                    document.getElementById('popup__container').classList.add('popup--animation')
                }
            }, 100);

            if (event.currentTarget.classList[0] == 'projeto' || clicked == 'popup__overflow' || clicked == 'popup__close') {
                //É nessário que o popup apareça/desapareça, somenente se alguns determinados elementos forem clicados

                this.indexPopup = index

                this.popupValue = !this.popupValue

                if (this.popupValue == true) {
                    document.body.style.overflow = "hidden"
                } else {
                    document.querySelector('body').removeAttribute('style')
                    this.next = true
                    this.back = true
                }
            }

            //A função precisa ser realizada depois que o layout for criado, para isso, o setTimeout

            if (this.popupValue == true && clicked != undefined) {
                setTimeout(() => {
                    this.criaColunas()

                }, 1);
            }

            /* Alterar projeto de acordo com a setas clicada */

            setTimeout(() => {

                if (this.indexPopup == this.maxItems - 1) {
                    this.next = false
                }
                if (this.indexPopup == 0) {

                    this.back = false
                }

            }, 1);

            if (clicked == 'reload') {

                if (event.target.classList[1] == 'next') {


                    if (this.indexPopup == this.maxItems - 1) {
                        this.next = false

                    } else {
                        this.indexPopup++
                        this.back = true
                    }

                }
                if (event.target.classList[1] == 'back') {
                    if (this.indexPopup == 0) {
                        this.back = false

                    }
                    else {
                        this.indexPopup--
                        this.next = true
                    }
                }

                this.popupValue = false
                setTimeout(() => {
                    this.popupValue = true


                    if (this.popupValue == true) {
                        setTimeout(() => {
                            this.criaColunas()
                            document.getElementById('popup__container').classList.remove('popup--animatio')
                        }, 9);
                    }

                }, 10);
            }
        },

        async criaColunas() {

            const grid = document.getElementById('grid')

            this.numImgGrid = grid.children.length

            if (grid.childElementCount > 2) {

                for (let x = 0; x <= grid.childElementCount; x++) {

                    for (let i = 0; i < 2; i++) {
                        if (document.getElementById('column-0') == null) {
                            grid.innerHTML += `<div class="vitrine-count"  id="column-0"></div>`
                            grid.innerHTML += `<div class="vitrine-count"  id="column-1"></div>`
                        }
                        if (grid.children.length > 2) {
                            document.getElementById(`column-${i}`).appendChild(grid.children[0])
                        }
                    }
                }
            }

            if (grid.style.gridTemplateColumns == '') {
                this.square()
            }
        },

        square() {

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

            // this.imagesNumber começa com 0, conforme as imagens carregam, a função é executada e é acrescentado +1, quando esse valor for igual a this.numImgGrid (array das imagens), ele executa a função
            if (this.numImgGrid == this.imagesNumber) {

                setTimeout(() => {

                    //Faz comparações de tamanho de coluna para tentar manter as duas no mesmo tamanho

                    let column0 = document.getElementById('column-0')
                    let column1 = document.getElementById('column-1')

                    if (column0.clientHeight - column0.children[column0.children.length - 1].clientHeight - 10 > column1.clientHeight) {
                        column1.appendChild(column0.childNodes[column0.children.length - 1])
                    }
                }, 10);
            }
        },

        barSearch(event) {

            if (event.target.classList[0] == undefined) {

                this.category(null, event.target.getAttribute(`categoria`).split(`categoria__`)[1])
            }
        },

        category(event, eventBarraDePesquisa) {


            const clickedfilter = event ? event.target.getAttribute(`categoryname`) : eventBarraDePesquisa

            const elementsFilterd = document.querySelectorAll(`.projeto`)

            // Filtra os projetos que aparecerem

            if (clickedfilter !== null) {
                for (let i = 0; i < elementsFilterd.length; i++) {

                    //Faz os elementos ocultados aparecerem, para que o if abaixo possa fazer a tag selecionada, filtrar os projetos
                    if (elementsFilterd[i].style.display == `none`) {

                        elementsFilterd[i].style.display = `block`

                    }

                    //Faz os elementos que não são os selecionados, sumirem
                    if (elementsFilterd[i].classList[1] !== `categoria__${clickedfilter}`) {

                        elementsFilterd[i].style.display = `none`

                        this.passImagens = false

                    }
                    //Faz todos os elementos aparecerem novamente
                    if (clickedfilter == `todos`) {

                        elementsFilterd[i].removeAttribute(`style`)
                        this.passImagens = true
                    }
                }
            }

            //Tira e ativa o background dos filtros clicados

            const filter = document.querySelector('[filter]')
            const clickedfilterx = event.target

            if (clickedfilterx.getAttribute('filter') == null && clickedfilterx.tagName == 'FILTER') {
                filter.removeAttribute('filter')
                clickedfilterx.setAttribute('filter', 'ativo')
            }
        },

        exporProjeto(event) {
            const e = event.target.classList[0]

            if (e == 'cadastro_btn') {
                this.cadastro = true
                document.body.style.overflow = "hidden"
            } else if (e == 'cadastro' || e == 'cadastro__close') {
                this.cadastro = false
                document.body.removeAttribute('style')
            }
        }
    },
}
</script>

<style>
/* Barra de pesquisa */

.barra-de-pesquisa {
    position: relative;
}

.barra-de-pesquisa__input {
    width: 100%;
}

.barra-de-pesquisa__button button {
    background: none;
    border: none;
    color: #fff;
    padding: 20px 30px;
    width: 100%;
    transition: .2s;
    font-size: 1rem;
    cursor: pointer;
    text-align: start;
}

.barra-de-pesquisa__button button:hover {
    background-color: #414141;
    transition: .2s;
}

.barra-de-pesquisa__dropdown {
    padding-top: 10px;
    position: absolute;
    background-color: #2c2c2c;
    transform: translatey(2px);
    border-radius: 22px;
    z-index: 6;
    overflow: hidden;
}

.inputs__cadastro {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'empty empty empty'
        'null uploadCampo uploadCampo';
    gap: 20px 40px;
}

/* Grid do popup */

.vitrine-count {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: var(--gap-img);
    height: max-content;
}

/* Loading */

.container-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;

}

.container-loading span {
    font-size: 15px;
    font-weight: 400;
    color: #b5b5b5;
}

.loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 9px dotted rgb(183 183 183);
    z-index: 1;
    animation-name: loading;
    animation-duration: 12s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    border-spacing: 17px;
}

@keyframes loading {

    from {
        transform: rotate(0);
    }

    to {

        transform: rotate(360deg);
    }
}

.popup--animation {
    animation-name: opacitySuave;
    animation-duration: .6s;
    animation-fill-mode: forwards;
}


@keyframes opacitySuave {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
        transform: translatey(-20px);
    }

    to {
        opacity: 1;
        transform: translatey(0);
    }
}
</style>

<style scoped>
.aulas__title {
    font-size: 1.2rem;
    border-color: #CC141D;
}

/*  */

.body {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 50px;
    width: calc(100% - 40px);
}


/* Quero Expor meu Projeto */

.cadastro {
    overflow: overlay;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 100;
}

.cadastro__close {
    position: fixed;
    right: 30px;
    top: 30px;
    background: none;
    font-size: 1.8rem;
    color: white;
    border: none;
    cursor: pointer;
}

.cadastro__campos {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 80%;
    width: 100%;
    height: max-content;
    margin-top: 60px;
    background: #1f1f1f;
    padding: 20px;
    padding-bottom: 60px;
    margin-bottom: 60px;
    border-radius: 25px;
}

.upload .blue_btn {
    max-height: initial;
    height: 72px;
}

.cadastro__title {
    font-size: 1.4rem;
    font-weight: 800;
}

.cadastro__subtitle {
    font-size: 1.2rem;
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

.image__cont_cadastro img {
    border-radius: 6px;
}

.image__cont_cadastro img {
    font-size: 0.9rem;
}

.image__cont_cadastro:hover .delete_image {
    opacity: 1;
    transition: .2s;
}

.delete_image {
    position: absolute;
    opacity: 0.7;
    font-size: 1.4rem;
    top: 5px;
    right: 8px;
    transition: .2s;
    cursor: pointer;
    color: rgb(182, 182, 182);
}

input[type="file"] {
    display: none;
}

/*  */

.imagens_camp {
    background: black;
    border-radius: 8px;
    padding: 40px;
}


/* tags Expor */

.tags__expor div {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

/*  */

.upload {
    display: flex;
    align-items: center;
    border-radius: 50px;
    border: 1px solid white;
    cursor: pointer;
    gap: 24px;
    margin-bottom: 6px;
    padding: 8px;
    padding-right: 28px;
    width: max-content;
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

.blue_btn.adicionar {
    padding: 0 20px;
    gap: 12px;
}

.delete {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding-bottom: 4px;
    border: 1px solid rgb(187, 40, 40);
    color: rgb(187, 40, 40);
    background: none;
    padding: 4px 10px;
    font-size: 1rem;
    transition: .2s;
    border-radius: 50px;
}

.delete:hover {
    opacity: 0.7;
    transition: .2s;
}

.grid-upload {
    grid-area: uploadCampo;
}

.inputs__cadastro div {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

label {
    font-size: 1rem;
}

.textarea {
    background: #2c2c2c;
    padding: 12px 12px 120px 12px;
    resize: none;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
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



.filtro,
filter,
input[type="text"] {
    border-radius: 50px;
    color: white;
    padding: 0 30px;
    font-size: 1rem;
    font-weight: 400;
    min-height: 36px;
    height: 3vw;
    max-height: 66px;
}



.filtro,
input[type="text"] {
    background: #2c2c2c;
}

input[type="text"] {
    width: 100%;
}

input[type="text"]::placeholder {
    color: gray;
}

.filtro {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    min-width: 280px;
    width: 100%;


}

.box-select {
    display: flex;
    position: relative;
    height: max-content;
    align-items: center;
}


.box-select::after {
    content: '❯';
    position: absolute;
    right: 28px;
    color: white;
    transform: rotate(90deg);
    pointer-events: none;
}

arrow {
    position: absolute;
    right: 28px;
    transform: rotate(90deg);
}

.filtro option {
    height: 30px;
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
    grid-template-columns: max-content 1fr;
    width: 100%;
    gap: 14px;
}

.cont_tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
}

.filter-tags {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin: auto;
    margin-top: 16px;
    margin-bottom: 64px;
}


filter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 18px;
    border-radius: 50px;
    cursor: pointer;
    width: 100%;
    transition: .2s;
    color: #c9c9c9;
    border-color: #7A1110;
    border-width: 4px;
    border-style: solid;
    box-shadow: 3px 3px 8px black;
    white-space: nowrap;
}

filter:hover {
    background: rgb(140, 0, 0);
    border-color: rgb(140, 0, 0);
    transition: .2s;
}

[filter="ativo"] {
    background: #7A1110;
}

#teste img {
    width: 100%;
}

header {
    position: absolute;
    z-index: 1;
    width: calc(100% - 200px);
    margin: 0 100px;
    height: calc(100vh - 148px);
}

.header__footer {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    bottom: 80px;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 100;
}

.header__footer {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: absolute;
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

h1 {
    font-weight: 100;
    font-size: 80px;
    margin-left: 100px;
    text-align: start;
    width: 100%;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
}

.projeto {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
    width: 100%;
    cursor: pointer;
    height: 300px;
}

.container-projetos {
    display: grid;
    column-gap: 20px;
    color: white;
    width: 100%;
    margin: auto;
    padding-bottom: 100px;
}

.projeto_thumb {
    border-radius: 8px;
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    height: 100%;
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
    z-index: 5;
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
    transition: .2s;
    padding: 0 20px;
    color: rgb(211, 211, 211);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
}

.projeto:hover .projectName {
    transition: .2s;
    opacity: 1;
}

h6 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 18px;
}

/* Pass Projetc */
.pass {
    visibility: hidden;
    position: fixed;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 12;
}

.pass button {
    cursor: pointer;
}

.pass p {
    pointer-events: none;
}

.pass__container {
    visibility: visible;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

#next,
#back {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    border-radius: 50%;
}

#next {
    right: 2vw;
}

#back {
    left: 2vw;
}

#next button,
#back button {
    backdrop-filter: blur(12px);
    border-radius: 50%;
    width: 82px;
    height: 82px;
    background: rgba(255, 255, 255, 0.1);
    transition: .2s;
}




#next p,
#back p {
    position: absolute;
    font-size: 1rem;
}

#next:hover button {
    transform: rotate(90deg);
    transition: .3s;
}

#back:hover button {
    transform: rotate(-90deg);
    transition: .3s;
}


/* popup */

.popup {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    z-index: 11;
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
.cont__square {
    width: calc(100% - 400px);
    width: 80%;
}

.popup__container {
    position: relative;
    background: rgb(26, 26, 26);
    margin-bottom: 60px;
    opacity: 0;
    width: calc(100% - 400px);
    border-radius: 25px;
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
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 3;
}

header-popup {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 40px;
}

.cont_description {
    padding: 40px
}


.popup_buttons {
    pointer-events: none;
    position: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 40px;
    top: 93px;
    width: calc(100% - 400px);
    gap: 46px;
    margin: auto;
    transform: translateX(200px);
    white-space: nowrap;
    z-index: 3;
}


.download {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    white-space: nowrap;
    padding: 0 100px;
}

.download__bubble {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    background: #414141;
    border-radius: 50%;
    height: 3.3vw;
    width: 3.3vw;
    max-height: 70px;
    max-width: 70px;
    min-height: 44px;
    min-width: 44px;
    transition: .2s;
}

.download:hover .download__bubble {
    background: #b50009;
    transition: .2s;
}

.download__img {
    transition: .2s;
    margin-bottom: 3px;
    width: 86%;
}

.download:hover img {
    transform: translatey(-4px);
    transition: .2s;
}

.layout {
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1px;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    gap: 16px;
    pointer-events: initial;
    animation-name: opacitySuave;
    animation-duration: 1.1s;
    animation-fill-mode: forwards;
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
    width: 4.6vw;
    height: 4.6vw;
    min-height: 34px;
    max-width: 58px;
    max-height: 58px;
    gap: 6px;
    transition: .2s;
}


.layout:hover .square {
    transition: .2s;
    background: #b50009;
}

.layout:hover .square {
    transition: .2s;
    max-height: 70px;
    transform: translatey(-5px);
}

.square {
    background: #ab0000;
    padding: 8px;
    height: 100%;
    border-radius: 2px;
    transition: .2s;
}


/* portfolio */

.portfolio {
    margin-top: 30px;
}

/* Descriçoes' */

.description {
    display: flex;
    align-items: center;
    margin: 20px 0 60px 0;
    font-weight: 400;
}

.title-popup {
    display: flex;
    gap: 14px;
    align-items: center;
}

.title-popup h5 {
    font-size: 2rem;
    font-weight: 500;
}

.font-light {
    font-weight: 400;
    font-size: 0.9rem;
    color: #CCCCCC;
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
    margin-top: 30px;
}

.footer__popup {
    background: #2c2c2c;
    background: black;
    padding: 30px;
    border-radius: 22px;
}

.grid__criadores {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 1rem;
    gap: 14px;
}

.criadores {
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    margin-bottom: 30px;
    padding: 10px;
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
    font-size: 1.13rem;
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
    font-size: 1rem;
}

[type="black"] {
    border-radius: 8px;
    background: #1a1a1a;
    color: #7f7f7f;
    font-size: 1rem;
    font-weight: 400;
    padding: 6px 11px;
}

.data_publi {
    width: 100%;
    text-align: center;
    font-weight: 400;
    color: #CCCCCC;
    margin-top: 40px;
}

.popup__docentes {
    color: #CCCCCC;
    font-size: 1rem;
    font-weight: 400;
}

.pesquisa {
    width: 100vw;
}

.vitrine-grid {
    display: grid;
    width: 100%;
    min-height: 100px;
    margin: auto;
    gap: var(--gap-img);
}


.vitrine-grid img {
    object-fit: contain;
    width: 100%;
}

.carregar .blue_btn {
    margin: auto;
    margin-bottom: 100px;
}

@media only screen and (min-width:2001px) {
    .container-projetos {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width:2000px) {
    .container-projetos {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}

@media only screen and (max-width: 1980px) {
    .description {
        display: flex;
        flex-direction: column;
        gap: 38px;
    }
}

@media only screen and (max-width: 1800px) {
    .container-projetos {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}




@media only screen and (max-width: 1450px) {
    .container-projetos {
        grid-template-columns: 1fr 1fr 1fr;
    }


}

@media only screen and (max-width: 1000px) {


    #next button,
    #back button {
        width: 32px;
        height: 32px;
        background: rgba(255, 255, 255, 0.1);
        border: none;

    }

    /*  */

    .body {
        width: calc(100% - 26px);
    }

    .container-projetos {
        gap: 12px;

    }

    .projeto {
        margin: 0;
        height: 30vw;
    }

    /* Alteração do popup */

    .popup__container {
        width: calc(100% - 120px);
    }

    .popup__close {
        text-shadow: 2px 2px 2px black;
    }

    .container__square {
        display: none;
    }

    #grid {
        grid-template-columns: 1fr;
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

    .filter-tags {
        flex-direction: column;
    }

    .projectName {
        opacity: 1;
    }

    .header__footer {
        grid-template-columns: 1fr;
        gap: 14px;
        margin-top: 100px;
        bottom: 40px;
    }

    h1 {
        position: absolute;
        top: 124px;
    }

    /*  Quero expor meu projeto */


    .cadastro__campos {
        max-width: 100%;
        margin: 0;
        border-radius: 0;
    }

    .inputs__cadastro {
        display: flex;
        flex-direction: column;
    }

    .cadastro__imagens {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .popup_buttons {
        width: calc(100% - 500px);
    }

    filter {
        padding: 2px 15px;

        max-width: max-content;
    }


    .cont_tags {
        flex-wrap: wrap;
    }

    .filter-tag {
        gap: 10px;
    }

    .filtro {
        width: 100%;
    }


}

@media only screen and (max-width: 700px) {

    .popup_buttons {
        display: none;

    }


    .popup__container {
        width: calc(100% - 20px);
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

    h1 {
        margin: 0;
        text-align: center;
        font-size: 60px;
    }

    header {
        width: 100%;
        margin: 0;
    }

    .popup__overflow {
        padding: 0;
    }

    .popup__container {
        width: 100%;
        margin: 0;
    }

    .cont_description,
    .footer__popup,
    header-popup {
        padding: 10px
    }

    .cont_tags {
        justify-content: center;
    }

    .projeto {
        margin: 0;
    }

    .vitrine-grid {
        grid-template-columns: 1fr !important;
    }




}

/* Mobile */

@media only screen and (max-width: 500px) {
    .title-popup h5 {
        font-size: 1rem;
    }


    .projectName {
        display: none;
    }

    .container-projetos {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px;
    }



    .body {
        width: calc(100% - 12px);
    }

    [type="black"] {
        font-size: 1rem;
    }

    [type="white"] {
        padding: 2px 12px;
    }

    .criadores__name {
        font-size: 0.8rem;
    }

    .criadores__container {
        align-items: flex-start;
        flex-direction: column;
    }

    .description {
        font-size: 0.8rem;
        line-height: 1.2rem;
        margin: 0 0 20px 0;
    }

    header-popup {
        gap: 0;
    }

    .popup__container {
        max-width: 100%;
    }


    /* Quer expor meu projeto */

    .upload {
        flex-direction: column;
        border-radius: 13px;
        padding-right: 0;
        padding: 10px;
        width: 100%;
        gap: 10px;
        margin-bottom: 80px;
    }

    .upload .blue_btn {
        height: 40px;
        width: 100%;
        padding: 0 20px;
        justify-content: space-between;
    }

    .blue_btn.adicionar {
        width: 100%;
        justify-content: space-between;
    }

    .cont_inputs__cadastro,
    .imagens_camp {
        padding: 22px;
    }

    filter {
        border-width: 2px;
    }

}
</style>

<style>
:root {
    --gap-img: 10px
}
</style>