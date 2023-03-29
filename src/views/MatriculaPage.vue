<template>
    <div>
        <NavPages />
        <header>
            <div class="shadow" />
            <div class="container__title">
                <span>
                    <p class="header__banner">Matrícula</p>
                    <p class="header__ano">
                        2023
                    </p>
                </span>
                <button class="blue_btn">Inscreva-se</button>
            </div>
            <p class="subtitle">Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
                <br>
                Mackenzie
            </p>
        </header>
        <FooterPage />
    </div>
</template>

<script>
import NavPages from '../components/NavPages.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
    name: 'MatriculaPage',

    components: { FooterPage, NavPages }
}
</script>

<style scoped>
.container__title {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    gap: 40px;
}


header {
    background-image: url('../../public/matricula/banner.jpg');
    cursor: default;
}

.header__banner {
    font-size: 122px;
    font-weight: 100;
}

.header__ano {
    font-size: 75px;
    letter-spacing: 108px;
}

.header__ano,
.header__banner {
    font-weight: 100;

}



.subtitle {
    position: absolute;
    bottom: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    z-index: 1;

}
</style>