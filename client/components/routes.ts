import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import { HomeComponent } from './core';
import {
  WorksDashboardComponent,
  WorksMainComponent,
  WorksQuotesComponent,
  WorksWeatherComponent,
} from './works';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  { path: '/', component: HomeComponent }, {
    path: '/works',
    component: WorksMainComponent,
    children: [
      { path: 'dashboard', component: WorksDashboardComponent },
      { path: 'weather', component: WorksWeatherComponent },
      { path: 'quotes', component: WorksQuotesComponent },
    ],
    redirect: '/works/dashboard',
  }, { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  fallback: true,
});

export default router;
