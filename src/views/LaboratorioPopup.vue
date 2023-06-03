<template>
    <main>
        <div class="lab-title">
            Laboratório de Marcenaria
        </div>
        <!--   Sobre o laboratório -->

        <div class="container-grid">
            <div>
                <div class="video">
                    <h3 class="title">Sobre o laboratório</h3>
                    <video class="video__content" src="design/laboratorios/video_marcenaria_1.mp4" controls></video>
                    <br />
                    <strong>Curiosidades</strong>
                    <br />
                    <ul style="font-weight: 400">
                        <li>
                            <strong>Qualquer aluno matriculado</strong> na Universidade
                            Presbiteriana Mackenzie tem acesso ao laboratório.
                        </li>
                        <li>
                            Não é necessário nenhum investimento para desfrutar dos
                            ferramentas deste laboratório (Salvo materias como: Lixas,
                            tintas e etc).
                        </li>
                        <li>
                            Os equipamento devem ser utilizados
                            <strong> apenas com a instrução e presença </strong>
                            do técnico do laboratório.
                        </li>
                        <li>
                            Qualquer dano físico causado aos ferramentas, é incubencia do
                            <strong>responsável</strong> pelo ato de arcar com os custos
                            para o reparo.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <aside class="sobre">
                    <div class="sobre__container">
                        <p class="sobre__title">Sobre o laboratório</p>
                    </div>
                    <div class="sobre__container">
                        <b>Horário de funcionamento:</b>
                    </div>
                    <p>13h às 16h</p>
                    <hr />
                    <p class="sobre__title">Localização</p>
                    <p style="color: #00547F">
                        Campus Higienópolis - <b>Prédio 9 - Arquitetura e Design</b>
                    </p>
                    <p>R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907</p>
                    <hr />
                    <div class="prof">
                        <img class="img-prof" src="design/laboratorios/nieri.jpg" />
                        <div>
                            Nieri
                            <p>Coordenador do laboratório</p>
                        </div>
                    </div>
                    <p>Técnicos responsáveis - Lab</p>
                    <div class="container-tecnico">
                        <div>
                            <div style="display: flex; align-items: center; gap: 10px">
                                <img class="perfil-tecnico" src="design/laboratorios/mateus.png" />
                                <div class="container-tec">
                                    <p class="nome">Mateus Durães</p>
                                    <p class="email">mateus@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        <!-- Equipamentos Disponibilizados -->

        <br>
        <div class="video">
            <div style="display: flex;">
                <div class="equipamentos">
                    <h3 class="title">Ferramentas disponíveis</h3>
                    <div style="width: 50px; height: 4px; transform: translatey(6px); background-color: #CC141D;"></div>
                </div>
                <div class="sobre-ferramentas">
                    <button class="red_btn">
                        Agendar horário
                    </button>
                </div>
            </div>
            <div class="grid__ferramentas">
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/furadeira.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta"> Serra de corte</p>
                        <p class="ferramenta"> Unidades: 2</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/furadeira-de-bancada.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta"> Furadeira de Bancada</p>
                        <p class="ferramenta"> Unidades: 1</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/lixadeira-angular.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta">Lixadeira Angular</p>
                        <p class="ferramenta"> Unidades: 2</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/parafusadeira.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta"> Parafusadeira</p>
                        <p class="ferramenta"> Unidades: 2</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/serra_de_corte.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta"> Serra de Corte</p>
                        <p class="ferramenta"> Unidades: 2</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
                <div class="ferramentas">
                    <img class="img-ferramentas" src="design/laboratorios/ferramentas/serra-de-bancada.jpg" />
                    <div class="cont-ferramentas">
                        <p class="ferramenta"> Serra de Bancada</p>
                        <p class="ferramenta"> Unidades: 2</p>
                        <button class="saiba-red_btn">
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Imagens do Laboratório -->

        <div class="laboratorio">
            <div class="laboratorio__container">
                <div class="laboratorio__barra"></div>
                <p class="laboratorio__title">Imagens do laboratório</p>
            </div>
        </div>

        <div class="laboratorio__grid">
            <img src="design/laboratorios/marcenaria/marcenaria_1.jpg" />
            <img src="design/laboratorios/marcenaria/marcenaria_2.jpg" />
            <img src="design/laboratorios/marcenaria/marcenaria_3.jpg" />
            <img src="design/laboratorios/marcenaria/marcenaria_4.jpg" />
        </div>
    </main>
</template>
<script>
export default {
    name: "LaboratorioPopup",
};
</script>
  
<style scoped>
h1 {
    margin-left: 15px;
}

h3 {
    font-size: 0.9rem;
    font-weight: 400;
}

main {
    position: relative;
    color: #CCCCCC;
    padding: 30px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 200px);
    max-width: 1400px;
    margin-bottom: 100px;
    background: rgb(26, 26, 26);
}

.video__content {
    margin-top: 20px;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
}

.grid__ferramentas {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
}

hr {
    border-color: black;
}

ul {
    margin-left: 30px;
}

ul li {
    margin-bottom: 10px;
}

.lab-title {
    color: white;
    font-size: 1.8rem;
    width: max-content;
    margin: 25px 0;
}

/* Aside */

.container-grid {
    margin: auto;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    width: 100%;
    margin: 0;
    max-width: 1400px;
}

.sobre {
    background-color: black;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
    padding: 30px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.sobre__title {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0 0 10px 0;
}

.prof {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    margin: 20px 0;
}

.prof p {

    font-weight: 400;
    font-size: 0.8rem;
}

/* contato */
.saiba-red_btn {
    color: #CCCCCC;
    border: none;
    font-size: 0.9rem;
    border: 2px solid #850D13;
    background: #7A1110;
    min-height: 26px;
    padding: 4px 14px;
    margin-top: 8px;
    border-radius: 50px;
    cursor: pointer;
    width: max-content;
    transition: .2s;
}

.saiba-red_btn:hover {
    transition: .2s;
    background: #850D13;
}

.img-prof {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
    margin-right: 20px;
}

.container-tecnico {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.container-tec {
    display: flex;
    flex-direction: column;
}

.nome {
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.13rem;
}

.email {
    font-weight: 400;
    font-size: 1rem;
    word-break: break-word;
}

.perfil-tecnico {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
}


.video {
    display: flex;
    flex-direction: column;
    background: black;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
    border-radius: 8px;
    padding: 30px;
    height: max-content;
}

.ferramentas {
    display: flex;
    margin-bottom: 20px;
}

.img-ferramentas {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
}

.cont-ferramentas {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin: 0;
    margin-left: 10px;
}

.ferramenta {
    font-size: 0.9rem;
}


.sobre-ferramentas {
    white-space: nowrap;
    margin: 0 0 40px 0;
}

/* Equipamentos Disponibilizados   */
.equipamentos {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}



/* Imagens do Laboratório */
.laboratorio {
    display: flex;
    align-items: center;
    margin: auto;
    width: 100%;
}

.laboratorio__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 14px;
    width: 100%;
}

.laboratorio__grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}


.laboratorio__container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 40px 0;
    margin-left: 12px;
}

.laboratorio__title {
    font-size: 1.4rem;
}

.laboratorio__barra {
    background: #CC141D;
    width: 5px;
    height: 50px;
}

@media only screen and (max-width: 1000px) {
    main {
        width: 100%;
        padding: 10px;
        margin: 0;
    }

    .container-grid {
        grid-template-columns: 1fr;
    }

    .grid__ferramentas {
        display: grid;
        grid-template-columns: 1fr 1fr
    }
}

@media only screen and (max-width: 700px) {

    .grid__ferramentas,
    .laboratorio__grid {
        grid-template-columns: 1fr;
    }
}
</style>