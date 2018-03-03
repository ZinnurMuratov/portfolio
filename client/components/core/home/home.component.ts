import Vue from 'vue';
import Component from 'vue-class-component';

import { colorVariables } from './../../core';
import { RGBA } from './../../works/interfaces';
import { seo } from './../services';

@Component({
  template: `
    <section class="home-component section-full vertical-align">
      <main class="container main-container">
        <header class="main-container-header">
          <img
            :style="{'filter': logoAlphaOpacity, 'opacity': logoOpacity}"
            class="brand-logo"
            src="/images/brand/logo.png"
            srcset="/images/brand/logo@2x.png 1.25x" alt="Danny's IO Brand Logo">
          <h1 class="main-container-header color-transition" :style="{ 'color': headerColor }">DANNY ROMERO</h1>
          <h4 class="color-transition" :style="{ 'color': headerColor }">&lt;Web Developer&gt;</h4>
        </header>
      </main>
    </section>
  `,
  name: seo.home.name,
  metaInfo: seo.home.metaInfo(),
})

export class HomeComponent extends Vue {
  public backgroundColor: string = colorVariables.black;
  public headerColor: string = colorVariables.black;
  public logoAlphaOpacity: string = 'alpha(opacity=0)';
  public logoOpacity: string = '0';

  private backgroundTimeout: number;

  private mounted() {
    window.setTimeout(() => {
      this.headerColor = colorVariables.white;
      this.logoAlphaOpacity = 'alpha(opacity=100)';
      this.logoOpacity = '1';
      this.$emit('randomBackground', colorVariables.darkGray);
    }, 750);
  }
}
