import { createRouter, createWebHistory } from 'vue-router'

import BusinessPage from '@/views/BusinessPage.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/:business',
      name: 'business',
      component: BusinessPage
    }
  ]
})

export default router