import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageSchoolView from '@/views/ManageSchoolView.vue'
import SchoolView from '@/views/SchoolView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/schools',
      name: 'schools',
      component: ManageSchoolView
    },
    {
      path: '/school/:id',
      component: SchoolView
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: HomeView
    },
    {
      path: '/recoveries',
      name: 'recoveries',
      component: HomeView
    },
    {
      path: '/reports',
      name: 'reports',
      component: HomeView
    },
    {
      path: '/settings',
      name: 'settings',
      component: HomeView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
