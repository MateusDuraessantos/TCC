<template>
  <div>
    <NavPages />
    <div class="contato">
      <img class="contato__icon" src="fone.svg" alt="Contato">
      <p class="contato__text">Contato</p>
    </div>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>

import FooterPage from './components/FooterPage.vue'

import NavPages from './components/NavPages.vue'

export default {
  components: { NavPages, FooterPage },
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
/* font-family: 'Roboto', sans-serif; */

html {
  scroll-behavior: smooth;
}

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background: transparent;
}

*::-webkit-scrollbar-track {
  display: none;
}

*::-webkit-scrollbar-thumb {
  background-color: #474747;
  border-radius: 6px;
}

.light {
  font-weight: 300;
}

body {
  color: white;
  position: relative;
  background: black;
  overflow-y: overlay;
  overflow-x: hidden;
}

.body {
  display: flex;
  justify-content: center;
}

:root {
  --page-width: 1280px;
  --blue-mack: #00547F;
  --red-mack: #CC141D;
}

/* Tamanho das tipografias */

@media only screen and (min-width: 1420px) {
  html {
    font-size: 22px;
    line-height: 1.6rem;
  }
}

@media only screen and (max-width: 1420px) {
  html {
    font-size: 20px;
    line-height: 1.6rem;
  }
}

@media only screen and (max-width: 1280px) {
  html {
    font-size: 16px;
    line-height: 1.6rem;
  }
}

/*  */

@media only screen and (min-width: 1280px) {
  :root {
    --page-width: 1480px;
  }
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  color: white;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
}

.contato {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  gap: 20px;
  height: 48px;
  background: #790000;
  cursor: pointer;
  border-radius: 100px;
  position: fixed;
  bottom: 40px;
  right: 60px;
  transition: .3s;
  z-index: 4;
}

.contato__icon {
  height: 50%;
  position: absolute;
  left: 12px;
}

.contato__text {
  text-decoration: none;
  transition: .3s;
  color: transparent;
  opacity: 0;
  margin-bottom: 2px;
  margin-left: 32px;
}

.contato:hover p {
  position: relative;
  color: white;
  opacity: 1;
  transition: .3s;
}

.contato:hover {
  width: 130px;
  background: #ae0e16;
  opacity: 1;
  transition: .3s;
}

.blue_btn,
.red_btn,
.black_btn {
  min-height: 36px;
  max-height: 60px;
  height: 2vw;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 40px;
  transition: .3s;
  cursor: pointer;
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.4);
}

.blue_btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: max-content;
  background: var(--blue-mack);
}

.black_btn {
  background: #000;
}

.red_btn {
  background: var(--red-mack);
  transition: .3s;
  cursor: pointer;
}

.blue_btn:hover {
  background: #00689c;
  transition: .2s;
}

.black_btn:hover {
  background: gray;
  transition: .2s;
}

.red_btn:hover {
  background: rgb(123, 0, 0);
  transition: .2s;
}


.shadow {
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
}

/* Collapse */

.el-collapse-item__header {
  background: #212121;
  border-radius: 1.6vw;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 10px;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  min-height: 2.4vw;
  height: max-content;
  line-height: 1.6rem;
}

.el-collapse,
.el-collapse-item__wrap {
  border: none;
}

.el-collapse-item {
  margin-bottom: 4px;
}

.el-collapse-item__wrap {
  background: #131313;
  border-radius: 25px;
}

.el-collapse-item__content {
  color: white;
  padding: 20px;
  font-size: 1rem;
  font-weight: 400;
}

/* Classes globais */

.global__banner_font {
  font-size: 144px;
}

@media only screen and (max-width: 1000px) {

  .global__banner_font {
    font-size: 80px;
  }

  header {
    height: 700px;
  }

}

@media only screen and (max-width: 700px) {

  .global__banner_font {
    font-size: 80px;
  }

  .contato {
    display: none;
  }
}
</style>
