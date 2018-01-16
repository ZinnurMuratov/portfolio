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
    path: '/about', component: AboutComponent,
  }, {
    path: '/works',
    component: WorksMainComponent,
    children: [
      { path: 'dashboard', component: WorksDashboardComponent },
      { path: 'weather', component: WorksWeatherComponent },
      { path: 'quotes', component: WorksQuotesComponent },
    ],
    redirect: '/works/dashboard',
  }, {
    // path: '/', component: HomeComponent,
    path: '/', component: MaintenanceComponent,
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
