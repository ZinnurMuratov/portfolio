import Vue from 'vue';
import Component from 'vue-class-component';

import { RandomQuoteContents } from './../interfaces';
import { RandomQuoteService } from './../services';

@Component({
  template: `
    <section class="quote-component">
      <main
        v-if="quoteData"
        class="container random-quote">
        <p class="quote-text random-quote-quote">"{{ quoteData.quote }}"</p>
        <p class="quote-text random-quote-author">- {{ quoteData.author }}</p>

        <a v-bind:href="quoteData.permalink" class="quote-text">quote source</a>
        <a v-on:click="getRandomQuote()" class="quote-text">refresh</a>
      </main>
    </section>
  `,
})

export class WorksQuotesComponent extends Vue {
  public quoteData: RandomQuoteContents | null = null;

  private randomQuoteService = new RandomQuoteService();

  public getRandomQuote() {
    this.randomQuoteService.getQuote().then((quote) => {
      console.log('quote:', quote)
      if (quote.success) {
        this.quoteData = quote.data;
      }
    });
  }

  private mounted() {
    this.getRandomQuote();
  }

}
