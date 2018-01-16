import Vue from 'vue';
import Component from 'vue-class-component';

import { colorVariables } from './../../core';
import { RGBA } from './../../works/interfaces';
import { seo } from './../services';

@Component({
  template: `
    <section
      v-on:click="toggleRandomBackground()"
      class="home-component section-full vertical-align">

      <main class="container main-container">
        <header class="main-container-header">
          <h1 class="color-transition" :style="{ 'color': headerColor }">Danny Romero</h1>
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

  private backgroundTimeout: number;
  private timeoutTimer: number = 6000;
  private toggledTimer: boolean = false;

  public toggleRandomBackground() {
    this.toggledTimer ? this.initRandomizerInterval() : window.clearInterval(this.backgroundTimeout);
    this.toggledTimer = !this.toggledTimer;
  }

  private mounted() {
    window.setTimeout(() => {
      this.headerColor = 'white';
      this.initRandomizerInterval();
    }, 0);

  }

  private beforeDestroy() {
    this.$emit('randomBackground', colorVariables.black);
    window.clearInterval(this.backgroundTimeout);
  }

  private initRandomizerInterval() {
    this.initRandomBackground();
    this.backgroundTimeout = window.setInterval(() => {
      this.initRandomBackground();
    }, this.timeoutTimer);
  }

  private initRandomBackground() {
    const rgba: RGBA = {
      r: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      a: (Math.random() * 1).toFixed(2),
    };

    this.backgroundColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
    this.$emit('randomBackground', this.backgroundColor);
  }
}
