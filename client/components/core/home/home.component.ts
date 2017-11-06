import Vue from 'vue';
import Component from 'vue-class-component';

import { RGBA } from './../../works/interfaces';

@Component({
  template: `
    <section
      :style="{ 'background-color': backgroundColor }"
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
})

export class HomeComponent extends Vue {
  public backgroundColor: string = 'rgba(0,0,0,0)';
  public headerColor: string = 'rgba(0,0,0,0)';

  private backgroundTimeout: number;
  private timeoutTimer: number = 7500;
  private toggledTimer: boolean = false;

  public toggleRandomBackground() {
    this.toggledTimer ? this.initRandomBackground() : window.clearInterval(this.backgroundTimeout);
    this.toggledTimer = !this.toggledTimer;
  }

  private mounted() {
    window.setTimeout(() => {
      this.initRandomBackground();
      this.headerColor = 'white';
    }, 0);

    this.backgroundTimeout = window.setInterval(() => {
      this.initRandomBackground();
    }, this.timeoutTimer);
  }

  private beforeDestroy() {
    this.$emit('randomBackground', 'rgba(0,0,0,0)');
    window.clearInterval(this.backgroundTimeout);
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
