<template>
  <div>
    <router-link to="" class="contato">
      <img class="contato__icon" src="fone.svg" alt="Contato">
      <p class="contato__text">Contato</p>
    </router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app'
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


body {
  overflow: overlay;
  color: white;
  position: relative;
  background: black;
}

.body {
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    width: var(--page-width);
}

:root {
  --page-width: 1420px;
  --blue-mack: #00547F;
  --red-mack: #CC141D;
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
  z-index: 20;
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

.dropdown-link {
  display: flex;
  align-items: center;
  border: none;
  text-decoration: none;
  color: #828282;
  font-size: 18px;
  height: 30px;
  font-weight: 300;
  mix-blend-mode: difference;
  transition: .3s;
}

.dropdown-link:hover {
  color: white;
  transition: .3s;
}

.router-link-active {
  color: white;
}

.blue_btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  width: max-content;
  background: var(--blue-mack);
  height: 36px;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 16px;
  font-weight: 300;
  padding: 0 40px;
  transition: .3s;
  cursor: pointer;
  box-shadow: 3px 3px 14px rgba(0, 0, 0, 0.4);
}

.blue_btn:hover {
  background: #00689c;
  transition: .2s;
}

.black_btn {
  background: #000;
  height: 36px;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 16px;
  font-weight: 300;
  padding: 0 40px;
  transition: .3s;
  cursor: pointer;

}

.black_btn:hover {
  background: gray;
  transition: .2s;
}

.red_btn {
  background: #CC141D;
  height: 36px;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 16px;
  font-weight: 300;
  padding: 0 40px;
  transition: .3s;
  cursor: pointer;
}

.red_btn:hover {
  background: gray;
  transition: .2s;
}

.shadow {
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
}

/* Collapse */

.el-collapse-item__header {
  background: #212121;
  border-radius: 20px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 10px;
  height: max-content;
  color: white;
  font-weight: 300;
  font-size: 16px;
  border: none;
  line-height: 30px;
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
  font-size: 16px;
  font-weight: 300;
}
</style>
