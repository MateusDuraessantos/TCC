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
                <img src="projetos/mesa.jpg">
            </el-carousel-item>
            <el-carousel-item>
                <img src="projetos/gold.jpg">
            </el-carousel-item>
        </el-carousel>


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

.teste {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

