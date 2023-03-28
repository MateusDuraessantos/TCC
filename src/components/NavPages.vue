<template>
    <nav>
        <div class="container">
            <img class="logo" src="mack_logo.png" alt="Logo Mackenzie">
            <div class="nav__options">
                <!-- trigger="click" -->
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Sobre o curso <img class="arrow" src="ArrowDown.svg">
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Objetivos</el-dropdown-item>
                            <el-dropdown-item>Matriz curricular</el-dropdown-item>
                            <el-dropdown-item>Prédio 9 | Design</el-dropdown-item>
                            <el-dropdown-item>Laboratórios</el-dropdown-item>
                            <el-dropdown-item>Horários/Períodos</el-dropdown-item>
                            <el-dropdown-item>Docentes</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <a>Projetos desenvolvidos</a>
                <el-dropdown>
                    <router-link to="matricula">
                        <span class="el-dropdown-link">
                            Matrícula <img class="arrow" src="ArrowDown.svg">
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                    </router-link>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Início das aulas</el-dropdown-item>
                            <el-dropdown-item>Matrículas</el-dropdown-item>
                            <el-dropdown-item>Setor de bolsas</el-dropdown-item>
                            <el-dropdown-item>Perguntas frequêntes</el-dropdown-item>
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

}


</script>
  
  
<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
    z-index: 100;
    height: 110px;
}

.container {
    width: calc(100% - 200px);
    display: flex;
    justify-content: space-between;

}

.logo {
    width: 144px;
}

.nav__options {
    display: flex;
    font-size: 18px;
    gap: 50px;
    color: #828282;
    font-weight: 300;

}

.el-dropdown-link,
a {
    cursor: pointer;
    transition: .2s;
    font-size: 18px;

}

.el-dropdown-link:hover,
a:hover {
    color: white;
    transition: .2s;
}



.arrow {
    height: 5px;
    margin-bottom: 3px;
    margin-left: 4px;
}
</style>

<style>
.el-dropdown-link {
    outline: none;
}

.el-dropdown-menu {
    background: #1E1E1E;
}

.el-dropdown__popper.el-popper {
    border: none;
    color: #8A8A8A;
    font-weight: 300;

}

.el-dropdown-menu__item {
    color: #8A8A8A;
    font-size: 16px !important;
}

.el-dropdown-menu__item:hover {
    background: #4F4F4F !important;
    color: white !important;
}

.el-dropdown__popper.el-popper {
    border-radius: 6px;
}
</style>