<template>
    <nav>
        <div class="blue-bar">
            <div class="nav-width">
                <div class="redes-sociais">
                    <img src="facebook.png">
                    <img src="twitter.jpg">
                    <img src="youtube.png">
                    <img src="linkedin.png">
                    <img src="instagram.png">
                </div>
                <div class="opções">
                    <p>Aluno e Antigo Aluno</p>
                    <p>Blog</p>
                    <p>Biblioteca</p>
                    <p>Eventos</p>
                    <p>Mídias / Notícias</p>
                    <p>Colaboradores</p>
                    <p>Atendimento</p>
                </div>
                <div class="linguagem">
                    <img src="brasil.png">
                    <img style="opacity: 0.5;" src="usa.png">
                    <img style="opacity: 0.5;" src="espanha.png">
                </div>
            </div>
        </div>

        <div class="ground">
            <div class="nav-width" style="height: 100%;">
                <span class="logo-mack">
                    <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">

                    <i>Universidade - Campus Higienópolis</i>
                </span>
                <span style="display: flex; align-items: center; gap: 20px;">
                    <div class="mackStore">Mack Store</div>

                    <b class="internation">INTERNATIONAL AFFAIR</b>
                </span>
            </div>
        </div>

        <div class="red-bar">
            <div class="cont-red">
                <div class="nav-button" v-for="(navOption, index) in navOptions" :id="'nav-' + index" :key="index">
                    {{ navOption }}
                </div>
            </div>
        </div>

        <div class="black-bar">
            <div class="nav-width">

                <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">

                <div class="nav__options" id="navMenu" @click="close">
                    <div class="options__nav" @click="scrollUp">
                        <img class="logo mobile" src="mack_logo.png" alt="Logo Mackenzie">
                        <router-link to="/" class="dropdown-link">

                            <aconra>
                                Sobre o curso
                                <arrow>❯</arrow>
                            </aconra>
                            <div class="subMenu" id="subMenu">
                                <a @click="scrollToSection('link_objetivo')">Objetivos</a>
                                <a @click="scrollToSection('link_matriz')">Matérias | Matriz Curricular</a>
                                <a @click="scrollToSection('link_predio')">Prédio 9 | Arquitetura e Design</a>
                                <a @click="scrollToSection('link_laboratorios')">Laboratorios</a>
                                <a @click="scrollToSection('link_horarios')">Sobre o curso</a>
                                <a @click="scrollToSection('link_docentes')">Docentes</a>
                            </div>

                        </router-link>
                        <router-link class="dropdown-link" to="projetos">Projetos desenvolvidos</router-link>

                        <router-link class="dropdown-link" to="matricula">

                            <aconra>
                                Matrícula/Bolsas
                                <arrow>❯</arrow>
                            </aconra>

                            <div class="subMenu" id="subMenu">
                                <a @click="scrollToSection('link_aulas')">Início das Aulas</a>
                                <a @click="scrollToSection('link_matriculas')">Matrículas</a>
                                <a @click="scrollToSection('link_bolsa')">Setor de bolsas</a>
                                <a @click="scrollToSection('link_mensalidade-matricula')">Mensalidade</a>
                                <a @click="scrollToSection('link_perguntas')">Perguntas frequentes</a>
                                <a @click="scrollToSection('link_contato')">Entre em contato</a>
                            </div>
                        </router-link>

                        <div class="nav-button--mobile">
                            <hr class="hr" style="border-color: #1f1f1f">
                            <br>
                            <br>
                            <div class="nav-button " v-for="(navOption, index) in navOptions" :id="'nav-' + index"
                                :key="index">
                                {{ navOption }}
                            </div>
                        </div>

                        <button class="button__close">✕</button>
                    </div>
                    <div class="background_nav"></div>
                    <div class="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'NavPages',
    data() {
        return {
            navOptions: [
                'Universidade',
                'Tour Virtual 360°',
                'Processos Seletivos',
                'Matrículas',
                'Graduação',
                'Pós Graduação',
                'Curta Duração',
                'Extensão',
                'EaD',
                'Pesquisa e Inovação',
                'Portal Mackenzie',
            ]
        }
    },
    methods: {
        scrollUp(event) {
            if (event.target.classList[0] == 'router-link-active')
                setTimeout(() => {
                    this.$nextTick(() => {
                        window.scrollTo(0, 0);
                    });
                }, 10);
        },
        //Ativa o menu lateral mobile
        close(event) {
            const nav = document.getElementById('navMenu')

            const elementClicked = event.target.classList[0]

            if (nav.classList[1] == undefined) {
                nav.classList.add('ativar')
            } else if (elementClicked == 'button__close' || elementClicked == 'background_nav' || elementClicked == 'router-link-active' || elementClicked == undefined) {

                nav.classList.add('opacityTransition')
                setTimeout(() => {
                    nav.classList.remove('ativar')
                    nav.classList.remove('opacityTransition')
                }, 400);
            }
        },

        //Leva o usuário até o link clicado
        scrollToSection(ancora) {
            setTimeout(() => {
                const section = document.getElementById(ancora);
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth',
                })
            }, 50);
        },
    }
}
</script>
  
<style scoped>
/*  */
.subMenu {
    position: absolute;
    display: none;
    top: 66px;
    flex-direction: column;
    white-space: nowrap;
    font-size: 1rem;
    background: #1f1f1f;
    border-radius: 8px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.4);
    z-index: 1;
    overflow: hidden;
}

.subMenu a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: .2s;
    min-height: 64px;
    border-bottom: 1px solid #4b4b4b;
    cursor: pointer;
    padding: 0.6vw 1.4vw;
    padding-right: 60px;

}

.subMenu a:hover {
    background: #2c2c2c;
    transition: .2s;
}

aconra {
    display: flex;
    flex-wrap: nowrap;
    gap: 14px;
}

arrow {
    transform: rotate(90deg);
    width: max-content;
    font-size: 0.9rem;
}

/*  */
nav {
    position: sticky;
    top: -104px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: white;
    z-index: 11;
}

.ground {
    background: #cc141d;
    background: #212121;
    height: 70px;
    width: 100%;
}

.red-bar {
    background: var(--red-mack);
    background: #2E2E2E;
    height: 44px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 14;
}

.cont-red {
    display: flex;
    height: 100%;
    width: 100%;
    margin: auto;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    justify-content: space-between;
}

#nav-4 {
    background: #05547f;
    cursor: pointer;
    transition: .2s;
}

#nav-4:hover {
    background: #033B59;
    transition: .2s;
}

.nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0 10px;
    width: 100%;
    white-space: nowrap;
    cursor: pointer;
    font-size: 0.8rem;
}


.nav-button:hover {
    background: #7A1110;
}

.blue-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #05547f;
    color: #fff;
    font-size: 0.8rem;
    height: 34px;
    width: 100%;
}

.black-bar {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 80px;
    bottom: -80px;
    backdrop-filter: blur(5px);

}

.black-bar .logo {
    visibility: hidden;
    opacity: 0.8;
    height: 3vw;
    min-height: 34px;
    max-height: 52px;

}

.blue-bar div {
    align-items: center;
    display: flex;
    gap: 14px;

}

.redes-sociais img {
    height: 18px;
}

.linguagem img {
    height: 25px;
    border-radius: 50px;
    border: 2px solid #fff
}

.opções {
    display: flex;
    gap: 20px;
}

.nav-width {
    display: flex;
    align-items: center;
    width: calc(100% - 200px);
    justify-content: space-between;
    position: relative;
    z-index: 3;
    align-items: center;
    margin: auto;

}

.logo-mack {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo-mack i {
    font-size: 0.8rem;
}



.logo-mack .logo {
    border-right: 1px solid rgba(255, 255, 255, 0.233);
    padding-right: 20px;

}

.logo {
    height: 50px;
    object-fit: contain;

}

.internation {
    font-size: 0.75rem;
}

.mackStore {
    display: flex;
    align-items: center;
    padding: 0 26px;
    height: 33px;
    color: var(--red-mack);
    font-size: 0.8rem;
    background: white;
    border-radius: 50px;
}


.nav__options {
    display: flex;
    align-items: center;
    gap: 50px;
}

.arrow {
    height: 5px;
    margin-bottom: 3px;
    margin-left: 4px;
}

* {
    outline: none;

}

.menu-icon--mobile {
    display: none;
}

.menu-icon span {
    display: block;
    position: relative;
    width: 100%;
    height: 2px;
    background: #d4d4d4;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
}

@media screen and (min-width: 1280px) {

    .mackStore,
    .internation,
    .blue-bar,
    .nav-button,
    .logo-mack i,
    .opções {
        font-size: 0.62rem;
    }
}


@media only screen and (min-width: 1600px) {
    .cont-red {
        width: calc(100% - 200px);
    }

}

@media only screen and (max-width: 1145px) {
    .nav-button {
        padding: 0 4px;

    }
}

@media only screen and (max-width: 1000px) {

    .subMenu,
    arrow {
        display: none !important;
    }

    .blue-bar,
    .red-bar,
    .ground {
        display: none;
    }

    nav {
        position: fixed;
        top: 0;
    }

    .black-bar .logo {
        visibility: visible;
    }
}


@media only screen and (max-width: 880px) {
    .blue-bar {
        display: none;
    }

    nav {
        margin-top: 0;
    }
}

@media only screen and (max-width: 700px) {
    .nav-width {
        width: calc(100% - 50px);
    }
}

@media only screen and (max-width: 400px) {

    .dropdown-link {
        padding-left: 36px;
        height: 56px;
        font-size: 1rem;
    }


}
</style>

<style>
.options__nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: max-content;
    /* min-width: 500px; */
    background: none;
    gap: 40px;
}

.mobile,
.button__close,
.nav__options .menu-icon {
    display: none;
}

.dropdown-link {
    position: relative;
    flex-direction: column;
    justify-content: center;
    border: none;
    gap: 20px;
    text-decoration: none;
    color: white;
    height: 80px;
    font-size: 1.13rem;
    font-weight: 400;
    transition: .3s;
    z-index: 3;
    display: flex;
}

.dropdown-link:hover {
    color: white;
    transition: .3s;
}

.dropdown-link:hover .subMenu {
    display: flex;
}

.el-dropdown-link {
    outline: none;
}

.el-popper.is-light .el-popper__arrow::before,
.el-dropdown-menu {
    border: none;
    background: #1E1E1E;
}

.el-dropdown__popper.el-popper {
    border: none;
    color: #8A8A8A;
    font-weight: 400;
}

.el-dropdown-menu__item {
    text-decoration: none;
    height: 40px;
    color: #8A8A8A;
    font-size: 1rem;
}

.el-dropdown-menu__item:hover {
    background: #4F4F4F;
    color: white;
}

.el-popper.is-light {
    background: none;
}

.el-scrollbar {
    border-radius: 9px;
}

.router-link-active {
    color: white;
}

.options__nav .nav-button--mobile {
    display: none;
}

@media only screen and (max-width: 1000px) {
    @keyframes opacitySuave {
        from {
            opacity: 0;
            transform: translatex(-30px);
        }

        to {
            opacity: 1;
            transform: translatex(0);
        }
    }

    @keyframes opacityRevert {
        from {
            opacity: 1;
            left: 0;
        }

        to {
            opacity: 0;
            left: -30px;
        }
    }

    .opacityTransition.ativar .options__nav,
    .opacityTransition.ativar .background_nav {
        animation-name: opacityRevert;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
    }

    .ativar .mobile,
    .ativar,
    .ativar .button__close,
    .nav__options .menu-icon {
        display: block;
    }

    .options__nav .nav-button--mobile {

        display: block;
    }

    .nav-button--mobile {
        margin-top: 58px;
    }

    .nav-button--mobile .nav-button {
        text-align: start;
        height: 50px;
        justify-content: flex-start;
        padding-left: 36px;
        border: none;
        background: #9c9c9c36;
        font-size: 1rem;
        margin: 4px 0;
    }

    .nav-button--mobile .nav-button:hover {
        background: var(--red-mack);
    }

    .options__nav {
        display: none;
        animation-name: opacitySuave;
        animation-duration: 0.4s;
        animation-fill-mode: forwards;
    }

    .ativar .options__nav {
        position: relative;
        display: block;
        position: fixed;
        justify-content: flex-start;
        height: 100vh;
        background: black;
        left: 0;
        top: 0;
        flex-direction: column;
        width: 300px;
        gap: 0;
        overflow: auto;
        z-index: 3;
        padding-bottom: 50px;
        padding-right: 3px;
    }

    .ativar .mobile {
        margin: 24px;
    }

    .dropdown-link {
        padding: 26px;
        margin-bottom: 4px;
        background: #9c9c9c36;
    }

    .router-link-active {
        background: var(--red-mack);
    }

    .dropdown-link:hover {
        color: white;
        background: rgb(32, 32, 32);
    }

    .menu-icon {
        width: 24px;
        cursor: pointer;
    }

    .ativar .button__close {
        position: absolute;
        right: 20px;
        top: 12px;
        z-index: 3;
        color: gray;
        font-size: 1.8rem;
        background: none;
        border: none;
        transition: .2s;
        cursor: pointer;
        z-index: 2;
    }

    .ativar .button__close:hover {
        color: white;
        transition: .2s;
    }

    .background_nav {
        display: none;
        width: 100vw;
        height: 100vh;
        background: rgba(2, 3, 0, 0.6);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
    }

    .ativar .background_nav {
        display: block;
    }
}
</style>