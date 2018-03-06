import Vue from 'vue';
import Component from 'vue-class-component';

import {
  colorVariables,
  FooterComponent,
  NavComponent,
} from './components/core';
import router from './components/routes';

@Component({
  template: `
    <div class="app-main" :style="{'background-color': backgroundColor}">
      <nav-component v-bind:backgroundColor="backgroundColor" v-if="visibleNav"></nav-component>
      <router-view
        v-on:randomBackground="backgroundColorMatch"
        v-on:setVisibility="setVisibility"
        class="app-content"></router-view>
      <footer-component v-if="visibleFooter"></footer-component>
    </div>
  `,
})

export class App extends Vue {
  public backgroundColor: string = colorVariables.black;
  public visibleNav: boolean = true;
  public visibleFooter: boolean = true;

  public backgroundColorMatch(val: string) {
    this.backgroundColor = val;
  }

  public setVisibility(val: any) {
    this.visibleNav = val.visibleNav;
    this.visibleFooter = val.visibleFooter;
  }
}

const app = new App({
  el: '#main-app',
  router,
  components: {
    FooterComponent,
    NavComponent,
  },
});
