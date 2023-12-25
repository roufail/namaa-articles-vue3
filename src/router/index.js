import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeComponent.vue')
    },
    {
      path: '/article/:id/show',
      name: 'article',
      component: () => import('@/views/home/FullArticleComponent.vue')
    },
  ]
})

export default router
