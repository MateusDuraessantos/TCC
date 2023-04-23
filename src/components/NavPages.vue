<template>
    <nav>
        <div id="nav">
        </div>
        <div class="container">
            <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">
            <div class="nav__options" id="navMenu" @click="close">
                <div class="options__nav">
                    <img class="logo mobile" src="mack_logo.png" alt="Logo Mackenzie">
                    <router-link to="/" class="dropdown-link">Sobre o curso</router-link>
                    <router-link class="dropdown-link" to="projetos">Projetos desenvolvidos</router-link>
                    <router-link class="dropdown-link" to="matricula">Matrícula</router-link>
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
    methods: {
        close(event) {
            const nav = document.getElementById('navMenu')

            const elementClicked = event.target.classList[0]
            console.log(elementClicked)

            if (nav.classList[1] == undefined) {
                nav.classList.add('ativar')
            } else if (elementClicked == 'button__close' || elementClicked == 'background_nav' || elementClicked == 'router-link-active') {
                nav.classList.remove('ativar')
            }
        }
    }
}


</script>
  
<style scoped>
nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
    background: rgba(0, 0, 0, 0.322);
    backdrop-filter: blur(5px);
    z-index: 100;
    height: 80px;
}

.container {
    position: relative;
    z-index: 3;
    width: calc(100% - 200px);
    display: flex;
    justify-content: space-between;
}

.logo {
    width: 144px;
    object-fit: contain;
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
    background: #333;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
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



@media only screen and (max-width: 880px) {

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
        background: rgba(0, 0, 0, 0.9);
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


<style>
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
</style>