import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from './components/core/home/home.component';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeComponent },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#main-app',
  template: `
      <router-view></router-view>
  `,
      // <nav></nav>
      // <footer></footer>
  data: {
    appName: 'Danny\'s portfolio',
  },
  router,
});
