import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
          },
        {
            path: '/om-os',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/kontakt',
            name: 'kontakt',
            component: () => import('../views/ContactView.vue'),
        },
    ],
  })
  
  export default router