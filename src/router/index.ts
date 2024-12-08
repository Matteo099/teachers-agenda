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
      component: HomeView
    },
    {
      path: '/schools',
      name: 'schools',
      component: ManageSchoolView
    },
    {
      path: '/school/:id',
      component: SchoolView,
      meta: { transition: 'v-slide-x-transition' }
    },
    {
      path: '/lesson/:id',
      name: 'lessons',
      component: LessonsView
    },
    {
      path: '/recoveries',
      name: 'recoveries',
      component: HomeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
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
    {
      path: '/test',
      name: 'test',
      component: WeekLessonEditor
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
