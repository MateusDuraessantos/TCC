<template>
  <div>
    <NavPages />
    <div class="phone">
      <img class="phone__icon" src="fone.svg" alt="phone">
      <p class="phone__text">Contato</p>
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
  font-weight: 400;
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
  --red-mack: #E1001E;
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

/* Botão flutuante */

.phone {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  gap: 20px;
  height: 48px;
  background: #7A1110;
  cursor: pointer;
  border-radius: 100px;
  position: fixed;
  transition: .3s;
  bottom: 40px;
  right: 60px;
  z-index: 4;
}

.phone__icon {
  height: 50%;
  position: absolute;
  left: 12px;
}

.phone__text {
  text-decoration: none;
  transition: .3s;
  color: transparent;
  opacity: 0;
  margin-bottom: 2px;
  margin-left: 32px;
}

a {
  font-size: 1rem;
}

.phone:hover p {
  position: relative;
  color: white;
  opacity: 1;
  transition: .3s;
}

.phone:hover {
  width: 130px;
  background: #AF1816;
  opacity: 1;
  transition: .3s;
}

/* Botões */

.blue_btn,
.red_btn,
.black_btn {
  min-height: 36px;
  max-height: 60px;
  height: 2.6vw;
  padding: 0 40px;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 1rem;
  font-weight: 400;
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

/* Títulos das seções */

.aulas__title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-width: 0 0 0 4px;
  border-style: solid;
  min-height: 40px;
  padding-left: 20px;
}

.title {
  font-size: 1.4rem;
}

hr {
  border: none;
  border-style: solid;
  border-color: #333333;
  border-width: 3px 0 0 0;
  margin-top: 10px;
}

hr-color {
  margin-top: 10px;
  display: flex;
  position: absolute;
  width: 100px;
  background: #CC141D;
  height: 3px;
}

/* Inputs, Textarea */

input,
textarea,
select {
  outline: none;
  resize: none;
  outline: 2px solid transparent;
  transition: .2s;
  border: 4px solid transparent;
}

input:focus,
select:focus,
filter:focus {
  box-shadow: 0 0 16px rgb(183, 0, 0) !important;
  border: 4px solid #EB0029 !important;
  transition: .2s;
}

/* Collapse */

.el-collapse-item__header {
  background: #212121;
  border-radius: clamp(22px, 1.6vw, 34px);
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 10px;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  border: none;
  line-height: 1.6rem;
  height: fit-content;
  min-height: 2.8vw;
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


/* Mensalidade */


.mensalidade {
  width: 100%;
  min-height: 300px;
  font-size: 1.8rem;
  color: white;
  display: flex;
  gap: 40px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 13px;
  padding: 15px;
  z-index: 2;
  position: relative;
}

.mensalidade__background {
  background: black;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  padding: 34px 40px 34px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
}


.mensalidade__background span {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
  ;
}

.mensalidade__img {
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  object-fit: cover;
  z-index: 1;
}

.mensalidade__valor {
  font-size: 1rem;
}

.mensalidade__preco {
  font-size: 1.4rem;
}

.mensalidade__gostou {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 10px;
}

/* Classes globais */

.global__banner_font {
  font-size: 144px;
}

@media only screen and (min-width: 1420px) {
  html {
    font-size: 22px;
    line-height: 1.6rem;
  }
}

@media only screen and (max-width: 1980px) {

  .mensalidade__gostou {
    font-size: 1.4rem;
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

@media only screen and (max-width: 1000px) {

  .global__banner_font {
    font-size: 80px;
  }

  header {
    height: 700px;
  }

  .mensalidade__img {
    display: none;
  }

}

@media only screen and (max-width: 750px) {
  .aulas__title {
    margin-bottom: 27px;
    padding-left: 10px;
  }

  .global__banner_font {
    font-size: 80px;
  }

  .phone {
    bottom: 40px;
    right: 24px;
  }

  .mensalidade {
    padding: 2px;
  }

}

@media only screen and (max-width: 400px) {
  html {
    font-size: 12px;
  }

  .blue_btn,
  .red_btn,
  .black_btn {
    max-height: 60px;
    min-height: 26px;
    height: 2vw;
    padding: 0 18px;
  }

  #link_bolsa,
  #link_aulas,
  #link_matriculas,
  #link_perguntas {
    padding-top: 80px;
  }

  .title {
    margin-left: 0;
  }

  .aulas__title {
    margin: 0;
  }

  .mensalidade__gostou {
    font-size: 1.4rem;
  }

  .mensalidade span {
    padding: 14px;
  }

  .mensalidade {
    min-height: 220px;
    padding: 2px;
  }
}
</style>
