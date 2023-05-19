<template>
    <main>
        <div class="lab-title">
            Laboratório de Marcenaria
        </div>
        <div class="container-grid">
            <div>
                <div class="container-labs">
                    <h3>Sobre o laboratório</h3>
                    <br>
                    <img class="imgVideo" src="espanha.png" />
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
                            equipamentos deste laboratório (Salvo materias como: Lixas,
                            tintas e etc).
                        </li>
                        <li>
                            Os equipamento devem ser utilizados
                            <strong> apenas com a instrução e presença </strong>
                            do técnico do laboratório.
                        </li>
                        <li>
                            Qualquer dano físico causado aos equipamentos, é incubencia do
                            <strong>responsável</strong> pelo ato de arcar com os custos
                            para o reparo.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <aside class="container-aside">
                    <div class="cont-container-aside">
                        <p class="sobre">Sobre o laboratório</p>
                    </div>
                    <div class="cont-container-aside">
                        <b class="bold-sobre">Horário de funcionamento:</b>
                    </div>
                    <p class="light">13h às 16h</p>
                    <hr />
                    <p class="sobre">Localização</p>
                    <p class="light" style="color: #0054a8">
                        Campus Higienópolis - <b>Prédio 9 - Arquitetura e Design</b>
                    </p>
                    <p class="light">R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907</p>
                    <hr />
                    <div class="prof">
                        <img class="img-prof" src="espanha.png" alt="Ivo Pons" />
                        <div>
                            Nara
                            <p>Coordenador do laboratório</p>
                        </div>
                    </div>
                    <p>Técnicos responsáveis - Lab</p>
                    <div class="container-tecnico">
                        <div>
                            <div style="display: flex; align-items: center; gap: 10px">
                                <img class="perfil-tecnico" src="espanha.png" />
                                <div class="container-tec">
                                    <p class="nome">Jake Sully</p>
                                    <p class="email">avatar2brabo@century.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        <!-- Equipamentos disponibilizados -->

        <div>
            <div class="equiDispo">
                <h3>Equipamentos disponíveis</h3>
                <div style="width: 50px; height: 4px; transform: translatey(6px); background-color: #CC141D;"></div>
            </div>

            <!-- Agendar horário -->

            <div class="container-labs">
                <div class="sobre-equipamentos">
                    <button class="red_btn">
                        Agendar horário
                    </button>
                </div>
                <div class="grid__ferramentas">
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/furadeira.jpg" />
                        <div class="cont-ferramentas">
                            <p class="ferramenta"> Serra de corte</p>
                            <p class="ferramenta"> Unidades: 2</p>
                            <button class="saiba-red_btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/furadeira-de-bancada.jpg" />
                        <div class="cont-ferramentas">
                            <p class="ferramenta"> Furadeira de Bancada</p>
                            <p class="ferramenta"> Unidades: 1</p>
                            <button class="saiba-red_btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/lixadeira-angular.jpg" />
                        <div class="cont-ferramentas">
                            <p class="ferramenta">Lixadeira Angular</p>
                            <p class="ferramenta"> Unidades: 2</p>
                            <button class="saiba-red_btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/parafusadeira.jpg" />
                        <div class="cont-ferramentas">
                            <p class="ferramenta"> Parafusadeira</p>
                            <p class="ferramenta"> Unidades: 2</p>
                            <button class="saiba-red_btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/serra_de_corte.jpg" />
                        <div class="cont-ferramentas">
                            <p class="ferramenta"> Serra de Corte</p>
                            <p class="ferramenta"> Unidades: 2</p>
                            <button class="saiba-red_btn">
                                Saiba mais
                            </button>
                        </div>
                    </div>
                    <div class="equipamentos">
                        <img class="img-equipamentos" src="design/laboratorios/ferramentas/serra-de-bancada.jpg" />
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
        </div>

        <!-- Imagens do laboratório -->

        <div class="container-barra">
            <div class="barra"></div>
            <div class="cont-title-img-lab">
                <div class="vert"></div>
                <p class="title-img-lab">Imagens do laboratório</p>
            </div>
        </div>

        <div class="grid-imagens">
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
main {
    position: relative;
    color: #A0A0A0;
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

.imgVideo {
    margin-top: 20px;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
}

.container-barra {
    display: flex;
    align-items: center;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 100%;
    max-width: 1150px;
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
    background: #00547f;
    color: white;
    font-size: 17px;
    width: max-content;
    margin: 25px 0 25px 0;
    padding: 10px 20px;
}

/* aside */

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

.container-aside {
    background-color: black;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
    padding: 30px;
    width: 100%;
    height: max-content;
    margin-bottom: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.sobre {
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 10px 0;
}

.bold-sobre,
.light {
    display: block;
}

.bold-sobre {
    font-size: 18px;
}

.light {
    font-weight: 400;
}

.prof {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0;
}

.prof p {

    font-weight: 400;
    font-size: 14px;
}

/* contato */
.saiba-red_btn {
    color: white;
    border: none;
    border: 2px solid #5f0005;
    background: #410003;
    height: 26px;
    padding: 0 12px;
    margin-top: 8px;
    border-radius: 50px;
    cursor: pointer;
    width: max-content;
    transition: .2s;
}

.saiba-red_btn:hover {
    transition: .2s;
    background: #5f0005;
}

.grid-imagens {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    width: 100%;
}

.grid-imagens img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.img-prof {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
    margin-right: 20px;
}

h1 {
    margin: 0 0 15px 0;
}

.container-tecnico {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.container-tec {
    display: flex;
    flex-direction: column;
}

.nome {
    white-space: nowrap;
    font-weight: 500;
    font-size: 18px;
}

.email {
    font-weight: 400;
    font-size: 16px;
    word-break: break-word;
}

.perfil-tecnico {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
}

/* Footer */


.cont-title-img-lab {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 50px 0;
}

.vert {
    background: #7a1f7f;
    width: 5px;
    height: 30px;
}

.container-labs {
    display: flex;
    flex-direction: column;
    background: black;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.582);
    border-radius: 8px;
    padding: 30px;
    height: max-content;
}

.equipamentos {
    display: flex;
    margin-bottom: 20px;
}

.img-equipamentos {
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
    font-size: 14px;
    font-weight: 600;
}

h3 {
    font-size: 17px;

    font-weight: 400;
}

/*  */

.sobre-equipamentos {
    margin: 0 0 40px 0;
}

.equiDispo {
    margin: 40px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    .grid-imagens {
        grid-template-columns: 1fr;
    }
}
</style>