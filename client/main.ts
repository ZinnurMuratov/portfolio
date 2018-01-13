import Vue from 'vue';
import Component from 'vue-class-component';

import {
  FooterComponent,
  MaintenanceComponent,
  NavComponent,
} from './components/core';
import router from './components/routes';

@Component({
  template: `
  <div class="app-main">
    <nav-component :backgroundColor="backgroundColor"></nav-component>
    <router-view
      v-on:randomBackground="backgroundColorMatch"
      class="app-content"></router-view>
    <footer-component :backgroundColor="backgroundColor"></footer-component>
  </div>
`,
})

export class App extends Vue {
  public backgroundColor: string = 'rgba(0,0,0,0)';

  public backgroundColorMatch(val: string) {
    this.backgroundColor = val;
  }
}

// const app = new App({
//   el: '#main-app',
//   router,
//   components: {
//     FooterComponent,
//     NavComponent,
//   },
// });

const app = new MaintenanceComponent({
  el: '#main-app',
  components: {
    FooterComponent,
  },
});
