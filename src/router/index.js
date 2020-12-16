import Vue from 'vue'
import VueRouter from 'vue-router'
import Calorie from '../views/Calorie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calorie',
    component: Calorie
  },

  {
    path: '/calorie',
    name: 'Calorie',
    component: Calorie
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
