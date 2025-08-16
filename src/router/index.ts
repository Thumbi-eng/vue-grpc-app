import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: About,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/todo/:id',
      name: 'TodoDetail',
      component: () => import('@/views/TodoDetail.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
