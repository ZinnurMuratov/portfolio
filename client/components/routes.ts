import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import { HomeComponent } from './core';
import {
  WorksMainComponent,
} from './works';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: HomeComponent },
  {
    path: '/works', component: WorksMainComponent, children: [
      // {path: '/portfolio', component: }
    ],
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  fallback: true,
});

export default router;
