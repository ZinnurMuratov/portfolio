import Vue from 'vue';
import VueRouter from 'vue-router';

import { HomeComponent } from './core';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeComponent },
];

const router = new VueRouter({
  routes,
});

export default router;
