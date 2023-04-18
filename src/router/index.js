import { createRouter, createWebHashHistory } from 'vue-router'
import DesignPage from '../views/DesignPage.vue'
import ProjetosPage from '../views/ProjetosPage.vue'
import MatriculaPage from '../views/MatriculaPage.vue'

const routes = [
  {
    path: '/',
    name: 'DesignPage',
    component: DesignPage
  },
  {
    path: '/projetos',
    name: 'ProjetosPage',
    component: ProjetosPage
  },
  {
    path: '/matricula',
    name: 'MatriculaPage',
    component: MatriculaPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;