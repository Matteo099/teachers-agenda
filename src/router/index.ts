import { createRouter, createWebHashHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'
import HomeView from '../views/HomeView.vue'
import ManageSchoolView from '@/views/ManageSchoolView.vue'
import SchoolView from '@/views/SchoolView.vue'
import SchoolLessonView from '@/views/SchoolLessonView.vue'
import DailyLessonView from '@/views/DailyLessonView.vue'
import CalendarView from '@/views/CalendarView.vue'
import SettingsView from '@/views/SettingsView.vue'
import LoginView from '@/views/LoginView.vue'
import DebuggerView from '@/views/DebuggerView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      // // component: () => import('../views/HomeView.vue'),
      component: HomeView,
    },
    {
      path: '/schools',
      name: 'schools',
      meta: { requiresAuth: true },
      // component: () => import('../views/ManageSchoolView.vue'),
      component: ManageSchoolView,
    },
    {
      path: '/school/:id',
      meta: { requiresAuth: true, transition: 'v-slide-x-transition' },
      // component: () => import('../views/SchoolView.vue'),
      component: SchoolView,
    },
    {
      path: '/lessons/:id',
      name: 'lessons',
      meta: { requiresAuth: true },
      // component: () => import('../views/SchoolLessonView.vue'),
      component: SchoolLessonView,
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      meta: { requiresAuth: true },
      // component: () => import('../views/DailyLessonView.vue'),
      component: DailyLessonView,
    },
    {
      path: '/recoveries',
      name: 'recoveries',
      meta: { requiresAuth: true },
      // component: () => import('../views/HomeView.vue'),
      component: HomeView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      meta: { requiresAuth: true },
      // component: () => import('../views/CalendarView.vue'),
      component: CalendarView,
    },
    {
      path: '/reports',
      name: 'reports',
      meta: { requiresAuth: true },
      // component: () => import('../views/HomeView.vue'),
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'settings',
      meta: { requiresAuth: true },
      // component: () => import('../views/SettingsView.vue'),
      component: SettingsView,
    },
    {
      path: '/login',
      name: 'login',
      // component: () => import('../views/LoginView.vue'),
      component: LoginView,
    },
    {
      path: '/debugger',
      name: 'debugger',
      // component: () => import('../views/DebuggerView.vue'),
      component: DebuggerView,
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue'),
    // }
  ]
})

router.beforeEach(async (to) => {
  if (to.name == "login") {
    const currentUser = await getCurrentUser()
    if (currentUser) return {
      path: "/"
    }
  }
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: '/login',
        query: {
          // we keep the current path in the query so we can
          // redirect to it after login with
          // `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      }
    }
  }
})

export default router
