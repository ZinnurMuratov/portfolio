import Vue from 'vue';

import { FooterComponent, NavComponent } from './components/core';
import router from './components/routes';

const app = new Vue({
  el: '#main-app',
  template: `
    <div class="app-main">
      <!-- <nav-component></nav-component> -->
      <router-view class="app-content"></router-view>
      <footer-component></footer-component>
    </div>
  `,
  router,
  components: {
    FooterComponent,
    NavComponent,
  },
});
