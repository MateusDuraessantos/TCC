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
        <el-carousel :interval="5000" arrow="always" height="100vh">
            <el-carousel-item>
                <img src="projetos/1.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/2.jpg">
            </el-carousel-item>
        </el-carousel>

        <div class="container">


            <div class="container-projetos">

                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/1.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">Mateus Durães</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">Carla Macedo</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">Fernando Castro</p>
                        </div>
                    </div>

                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Butlerfly</p>
                    </div>


                </div>

                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/2.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/1.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">Mateus Durães</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                    </div>

                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Gamer Table</p>
                    </div>

                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/3.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/1.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                    </div>
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Mun 2.0</p>
                    </div>
                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/4.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/1.avif" class="user_img" />
                            <p class="user_name">Marcela Solap</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">Carla Macedo</p>
                        </div>
                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">Mateus Durães</p>
                        </div>
                    </div>
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Wristwatch</p>
                    </div>
                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/5.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">User Name 2</p>
                        </div>
                    </div>
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Ascensão dos deuses</p>
                    </div>
                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/6.png">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/1.avif" class="user_img" />
                            <p class="user_name">User Name 0</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">User Name 1</p>
                        </div>
                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">Mateus Durães</p>
                        </div>
                    </div>
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Project Name</p>
                    </div>
                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/7.jpg">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/1.avif" class="user_img" />
                            <p class="user_name">User Name 2</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">User Name</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">User Name 4</p>
                        </div>
                    </div>
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Photoshop Collage</p>
                    </div>
                </div>
                <div class="projeto">
                    <img class="projeto_thumb" src="projetos/8.png">
                    <div class="container_user">

                        <!-- User -->

                        <div class="user">
                            <img src="users/4.avif" class="user_img" />
                            <p class="user_name">User Name 0</p>
                        </div>
                        <div class="user">
                            <img src="users/mateus.jpg" class="user_img" />
                            <p class="user_name">Mateus Durães</p>
                        </div>
                        <div class="user">
                            <img src="users/3.avif" class="user_img" />
                            <p class="user_name">User Name 1</p>
                        </div>
                        <div class="user">
                            <img src="users/2.avif" class="user_img" />
                            <p class="user_name">User Name 2</p>
                        </div>
                    </div>
                    
                    <!-- Projetc name -->

                    <div class="projectName">
                        <p>Athelstan</p>
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
    components: { FooterPage, NavPages }
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
</style>

