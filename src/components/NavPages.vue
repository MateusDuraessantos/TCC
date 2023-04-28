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

        <div class="teste">
            <div class="nav-width">
                <span class="logo-mack">
                    <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">

                    <i>Universidade - Campus <br /> Higienópolis</i>
                </span>
                <span style="display: flex; align-items: center; gap: 20px;">
                    <div class="mackStore">Mack Store</div>

                    <b style="font-size: 12px;">INTERNATIONAL AFFAIR</b>
                </span>
            </div>
        </div>

        <div class="red-bar">
            <div class="cont-red">
                <div class="nav-mackenzie" v-for="(navOption, index) in navOptions" :id="'nav-' + index" :key="index">
                    {{ navOption }}
                </div>
            </div>
        </div>

        <div class="container nav-width">

            <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">

            <div class="nav__options" id="navMenu" @click="close">
                <div class="options__nav" @click="scrollUp">
                    <img class="logo mobile" src="mack_logo.png" alt="Logo Mackenzie">
                    <router-link to="/" class="dropdown-link">Sobre o curso</router-link>
                    <router-link class="dropdown-link" to="projetos">Projetos
                        desenvolvidos</router-link>
                    <router-link class="dropdown-link" to="matricula">Matrícula</router-link>



                    <div class="nav-mackenzie--mobile">
                        <hr style="border-color: #1f1f1f">
                        <div class="nav-mackenzie " v-for="(navOption, index) in navOptions" :id="'nav-' + index"
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

        close(event) {
            const nav = document.getElementById('navMenu')

            const elementClicked = event.target.classList[0]

            if (nav.classList[1] == undefined) {
                nav.classList.add('ativar')
            } else if (elementClicked == 'button__close' || elementClicked == 'background_nav' || elementClicked == 'router-link-active') {

                nav.classList.add('opacityTransition')
                setTimeout(() => {
                    nav.classList.remove('ativar')
                    nav.classList.remove('opacityTransition')
                }, 400);
            }
        }
    }

}
</script>
  
<style scoped>
nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 100;
}

.teste {
    background: #cc141d;
    height: 70px;
    width: 100%;
}

.red-bar {
    background: #B41C2C;
    height: 44px;
    width: 100%;
}

.cont-red {
    display: flex;
    height: 100%;
    width: 100%;
    margin: auto;
    border-right: 1px solid rgba(255, 255, 255, 0.3)
}

#nav-4 {
    background: #05547f
}

.nav-mackenzie {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0 10px;
    flex-wrap: nowrap;
    cursor: pointer;
    font-size: 14px;
    transition: .2s;
}

.nav-mackenzie:hover {
    background: #7e0612;
    transition: .2s;
}


.nav-mackenzie--mobile {
    margin-top: 30px;

}

.nav-mackenzie--mobile .nav-mackenzie {
    text-align: start;
    height: 50px;
    justify-content: flex-start;
    padding-left: 36px;
    border: none;
    background: #b41c2c36;
    margin: 4px 0;
}

.nav-mackenzie--mobile .nav-mackenzie:hover {
    background: #B41C2C;
}


.blue-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #05547f;
    color: #fff;
    font-size: 14px;
    height: 34px;
    width: 100%;
}

.container {
    height: 80px;
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
    height: 100%;
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
    font-size: 14px;
}

.logo-mack .logo {
    border-right: 1px solid rgba(255, 255, 255, 0.233);
    padding-right: 20px;

}

.logo {
    height: 50px;
    object-fit: contain;
}

.mackStore {
    display: flex;
    align-items: center;
    padding: 0 26px;
    height: 33px;
    color: #B41C2C;
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

@media only screen and (min-width: 1200px) {
    .cont-red {
        width: calc(100% - 200px)
    }

    .nav-mackenzie {
        width: 100%;
    }

}

@media only screen and (max-width: 1000px) {

    .blue-bar,
    .red-bar,
    .teste {
        display: none;
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
    .container {
        width: calc(100% - 50px);
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
    width: 500px;
    background: none;
    padding: 18px 0;
    gap: 40px;
}

.mobile,
.button__close,
.nav__options .menu-icon {
    display: none;
}


.dropdown-link {
    display: flex;
    align-items: center;
    border: none;
    text-decoration: none;
    color: #aeaeae;
    font-size: 18px;
    height: 30px;
    font-weight: 400;
    mix-blend-mode: difference;
    transition: .3s;
}

.dropdown-link:hover {
    color: white;
    transition: .3s;
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
    font-weight: 300;
}

.el-dropdown-menu__item {
    text-decoration: none;
    height: 40px;
    color: #8A8A8A;
    font-size: 16px;
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


.options__nav .nav-mackenzie--mobile {
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
        z-index: 3;
    }

    .ativar .mobile {
        margin: 24px;
    }

    .dropdown-link {
        padding: 26px;
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
        font-size: 24px;
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