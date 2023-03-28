<template>
  <div>
    <div class="contato"><img src="fone.svg" alt="Contato"></div>
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

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;



}

body::-webkit-scrollbar {
  width: 7px;

}

body::-webkit-scrollbar-track {
  display: none;
}

body::-webkit-scrollbar-thumb {
  background-color: #381818;
  border-radius: 6px;
}


body {
  overflow: overlay;
  position: relative;
  background: black;
}

:root {
  --page-width: 1000px;

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #A30000;
  opacity: .4;
  cursor: pointer;
  border-radius: 100%;
  position: fixed;
  bottom: 40px;
  right: 60px;
  transition: .3s;
  z-index: 20;
}

.contato img {
  width: 50%;
}

.contato:hover {
  transform: scale(1.1);
  transition: .3s;
}

.el-dropdown-link,
a {
  border: none;
  text-decoration: none;
  color: #828282;
}

.blue_btn {
  background: var(--blue-mack);
  height: 36px;
  border: none;
  border-radius: 60px;
  color: white;
  font-size: 16px;
  width: 100%;
  font-weight: 300;
  padding: 0 40px;
  transition: .2s;
  cursor: pointer;
}

.blue_btn:hover {
  background: #00689c;
  transition: .2s;
}

.shadow {
  position: absolute;
  z-index: 1;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
}
</style>
