import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Clients from '../views/Clients.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import store from '../store';

router.beforeEach((to, from, next) => {
  console.log('TRANSITIONING...');
  store.commit('togglePane');
  setTimeout(() => {
    next();
  }, 600);
})

export default router