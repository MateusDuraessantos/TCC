import { createRouter, createWebHistory } from 'vue-router'
import DesignPage from '../views/DesignPage.vue'
import MatriculaPage from '../views/MatriculaPage.vue'

const routes = [
  {
    path: '/',
    name: 'DesignPage',
    component: DesignPage
  },
  {
    path: '/matricula',
    name: 'MatriculaPage',
    component: MatriculaPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
