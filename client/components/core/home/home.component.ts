import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <section
    :style="{ 'background-color': backgroundColor }"
    v-on:click="toggleRandomBackground()"
    class="home-component section-full vertical-align">
      <header class="main-container-header">
        <h1 class="header-transition" :style="{ 'color': headerColor }">Danny Romero</h1>
        <h4 class="header-transition" :style="{ 'color': headerColor }">&lt;Web Developer&gt;</h4>
      </header>
    </section>
  `,
})

export class HomeComponent extends Vue {
  public backgroundColor: string = 'rgba(0,0,0,0)';
  public headerColor: string = 'rgba(0,0,0,0)';

  private backgroundTimeout: number;
  private timeoutTimer: number = 2750;
  private toggledTimer: boolean = false;

  public toggleRandomBackground() {
    this.toggledTimer ? this.initRandomBackground() : window.clearInterval(this.backgroundTimeout);
    this.toggledTimer = !this.toggledTimer;
  }

  private mounted() {
    this.initRandomBackground();
    window.setTimeout(() => { this.headerColor = 'white'; }, 0);
  }

  private beforeDestroy() {
    window.clearInterval(this.backgroundTimeout);
  }

  private initRandomBackground() {
    this.backgroundTimeout = window.setInterval(() => {
      const rgba: RGBA = {
        r: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        a: (Math.random() * 1).toFixed(2),
      };

      this.backgroundColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
    }, this.timeoutTimer);
  }
}

export interface RGBA {
  r: number;
  g: number;
  b: number;
  a?: number | string;
}
