import Vue from 'vue'
import VueRouter from 'vue-router'
import FoodList from '../components/FootList.vue'
import CreateFood from '../components/CreateFood.vue'

Vue.use(VueRouter)

  const routes = [
    {
      name: 'FoodList',
      path: '/food_list',
      component: FoodList
    },
    {
      name: 'CreateFood',
      path: '/create_food',
      component: CreateFood
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
