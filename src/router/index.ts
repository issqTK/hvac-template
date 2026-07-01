import { createRouter, createWebHistory } from 'vue-router'

import BusinessPage from '@/views/BusinessPage.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/:business',
      name: 'business',
      component: BusinessPage
    }
  ]
})

export default router