import Vue from 'vue';

import FooterComponent from './components/core/footer/footer.component';
import NavComponent from './components/core/nav/nav.component';
import router from './components/routes';

const app = new Vue({
  el: '#main-app',
  template: `
    <div>
      <nav-component></nav-component>
      <router-view></router-view>
      <footer-component></footer-component>
    </div>
  `,
  router,
  components: {
    FooterComponent,
    NavComponent,
  },
});
