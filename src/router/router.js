import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Main = () => import('../views/Main.vue')
const Results = () => import('../views/Results.vue')

const routes = [
   {
      path: '/',
      component: Main,
      name: 'home',
   },
   {
      path: '/results',
      component: Results,
      name: 'results',
   },
];

const router = new VueRouter({
   routes,
   mode: 'history', // Use "history" mode for cleaner URLs, requires server configuration
});

export default router;