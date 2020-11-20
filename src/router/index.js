import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Parts from '../views/Parts.vue';
import Admin from '../views/Admin.vue';
import Dragons from '../views/Dragons.vue';
import Create from '../views/Create.vue';
import Edit from '../views/Edit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/Parts',
    name: 'Parts',
    component: Parts,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/Dragons',
    name: 'Dragons',
    component: Dragons,
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/Edit/:dragonId',
    name: 'Edit',
    component: Edit,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
