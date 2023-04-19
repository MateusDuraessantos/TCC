<template>
    <nav>
        <div id="nav">
        </div>
        <div class="container">
            <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">
            <div class="nav__options">
                <!-- trigger="click" -->
                <el-dropdown>
                    <router-link to="/" class="dropdown-link">
                        Sobre o curso
                        <img class="arrow" src="ArrowDown.svg">
                    </router-link>
                    <template #dropdown>
                        <el-dropdown-menu @click="hashSemHash">
                            <a class="el-dropdown-menu__item" href="/#link_objetivo">Objetivos</a>
                            <a class="el-dropdown-menu__item" href="/#link_matriz">Matriz curricular</a>
                            <a class="el-dropdown-menu__item" href="/#link_predio">Prédio 9 | Design</a>
                            <a class="el-dropdown-menu__item" href="/#link_horarios">Horários/Períodos</a>
                            <a class="el-dropdown-menu__item" href="/#docentes">Docentes</a>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <router-link class="dropdown-link" to="projetos">Projetos desenvolvidos</router-link>

                <el-dropdown>
                    <span>
                        <router-link class="dropdown-link" to="matricula">
                            Matrícula <img class="arrow" src="ArrowDown.svg" />
                        </router-link>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu @click="hashSemHash">
                            <a class="el-dropdown-menu__item" href="/matricula#link_aulas">Início das aulas</a>
                            <a class="el-dropdown-menu__item" href="/matricula#link_matriculas">Matrículas</a>
                            <a class="el-dropdown-menu__item" href="/matricula#link_bolsa">Setor de bolsas</a>
                            <a class="el-dropdown-menu__item" href="/matricula#link_faq">Perguntas frequêntes</a>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </nav>
</template>
  
<script>

export default {
    name: 'NavPages',
    mounted() {
        this.scrollDown()
    },
    methods: {
        scrollDown() {

            let navbar = document.getElementById('nav');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    navbar.style.opacity = '1';
                } else {
                    navbar.style.opacity = '0';
                }
            });
        },

        hashSemHash(e) {
            setTimeout(() => {
                history.pushState("", document.title, location.pathname)
                e.preventDefault()
            }, 1);
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
    z-index: 100;
    height: 80px;
}

#nav {
    position: absolute;
    height: 140px;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    transition: .3s;
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