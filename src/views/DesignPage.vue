<template class="teste">
  <div>
    <NavPages />
    <header>
      <p class="design">Design</p>
      <p class="faculdade">
        Faculdade de Arquitetura e Urbanismo | Campus Higienópolis
        <br>
        Mackenzie
      </p>
      <img class="banner" src="design/banner.jpg" alt="banner">
      <div class="shadow" />

    </header>
    <FooterPage />
  </div>
</template>

<script>
import NavPages from '../components/NavPages.vue'
import FooterPage from '../components/FooterPage.vue'

export default {
  name: 'DesignPage',
  components: { FooterPage, NavPages }
}
</script>


<style scoped>


.banner {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.design {
  position: absolute;
  z-index: 2;
  font-size: 144px;
  text-align: center;
  font-weight: 100;
}

.faculdade {
  position: absolute;
  bottom: 50px;
  font-weight: 300;
  line-height: 50px;
  z-index: 2;
  font-size: 18px;
  text-align: center;

}
</style>