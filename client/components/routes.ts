import Vue from 'vue';
import Meta from 'vue-meta';
import VueRouter, { RouteConfig } from 'vue-router';

import {
  HomeComponent,
  MaintenanceComponent,
} from './core';
import {
  AboutComponent,
  WorksDashboardComponent,
  WorksMainComponent,
  WorksQuotesComponent,
  WorksWeatherComponent,
} from './works';

Vue.use(VueRouter);
Vue.use(Meta);

const routes: RouteConfig[] = [
  {
    path: '/about', name: 'About', component: AboutComponent,
  }, {
    path: '/works',
    component: WorksMainComponent,
    children: [
      { path: 'dashboard', name: 'WorksDashboard', component: WorksDashboardComponent },
      { path: 'weather', name: 'WorksWeather', component: WorksWeatherComponent },
      { path: 'quotes', name: 'WorksQuotes', component: WorksQuotesComponent },
    ],
    redirect: '/works/dashboard',
  }, {
    path: '/', name: 'Home', component: HomeComponent,
  }, {
    path: '*', redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  fallback: true,
});

export default router;
