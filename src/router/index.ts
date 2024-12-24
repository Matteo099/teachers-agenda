import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageSchoolView from '@/views/ManageSchoolView.vue'
import SchoolView from '@/views/SchoolView.vue'
import LessonsView from '@/views/DailyLessonView.vue'
import DailyLessonCalendar from '@/components/calendar/DailyLessonCalendar.vue'
import CalendarView from '@/views/CalendarView.vue'
import WeekLessonEditor from '@/components/lesson/WeekLessonEditor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/schools',
      name: 'schools',
      component: () => import('../views/ManageSchoolView.vue'),
    },
    {
      path: '/school/:id',
      component: () => import('../views/SchoolView.vue'),
      meta: { transition: 'v-slide-x-transition' }
    },
    {
      path: '/lessons/:id',
      name: 'lessons',
      component: () => import('../views/SchoolLessonView.vue')
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: () => import('../views/LessonView.vue')
    },
    {
      path: '/recoveries',
      name: 'recoveries',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/HomeView.vue')
    }

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
