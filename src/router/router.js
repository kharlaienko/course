import Vue from 'vue';
import VueRouter from 'vue-router';
import isAuth from './middleware/isAuth';

Vue.use(VueRouter);

const Courses = () => import('../views/Courses.vue')
const Login = () => import('../views/Login.vue')
const Course = () => import('../views/Course.vue')
const Results = () => import('../views/Results.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
   {
      path: '/',
      component: Courses,
      name: 'home',
   },
   {
      path: '/course/:id',
      component: Course,
      name: 'lessons',
      beforeEnter: isAuth,
   },
   {
      path: '/results',
      component: Results,
      name: 'results',
      beforeEnter: isAuth,
   },
   {
      path: '/login',
      component: Login,
      name: 'login',
   },
   {
      path: '*',
      component: NotFound,
      name: '404'
   },
];

const router = new VueRouter({
   routes,
   mode: 'history',
});

router.beforeEach((to, from, next) => {

   document.title = `${to.name ? to.name.toUpperCase() : 'Courses'} - Learn to live`;
   next();
});

export const routesList = routes.filter(el => ['home', 'results'].includes(el.name)).map(el => ({ name: el.name, path: el.path }))

export default router;