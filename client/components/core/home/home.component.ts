import Vue from 'vue';
import Component from 'vue-class-component';

import { RandomQuote, RGBA } from './../../works/interfaces';
import { RandomQuoteService } from './../../works/services';

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

        <footer v-if="randomQuote" class="main-container-quote">
          <div class="random-quote">
            <p
              class="color-transition random-quote-quote"
              :style="{ 'color': headerColor }">"{{ randomQuote.quote }}"</p>
            <p
              class="color-transition random-quote-author"
              :style="{ 'color': headerColor }">- {{ randomQuote.author }}</p>
          </div>
        </footer>
      </main>
    </section>
  `,
})

export class HomeComponent extends Vue {
  public backgroundColor: string = 'rgba(0,0,0,0)';
  public headerColor: string = 'rgba(0,0,0,0)';
  public randomQuote: RandomQuote | null = null;

  private backgroundTimeout: number;
  private timeoutTimer: number = 2750;
  private toggledTimer: boolean = false;

  private randomQuoteService: RandomQuoteService = new RandomQuoteService();

  public toggleRandomBackground() {
    this.toggledTimer ? this.initRandomBackground() : window.clearInterval(this.backgroundTimeout);
    this.toggledTimer = !this.toggledTimer;
  }

  private mounted() {
    this.initRandomBackground();
    // this.getRandomQuote();
    window.setTimeout(() => { this.headerColor = 'white'; }, 0);
  }

  private beforeDestroy() {
    window.clearInterval(this.backgroundTimeout);
  }

  private getRandomQuote() {
    this.randomQuoteService.getQuote().then((quote) => {
      if (quote.success) {
        this.randomQuote = quote.data;
      }
    });
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
