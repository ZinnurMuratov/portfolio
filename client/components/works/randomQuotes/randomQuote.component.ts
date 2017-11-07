import Vue from 'vue';
import Component from 'vue-class-component';

import { seo } from './../../core/services';
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

        <ul class="quote-actions">
          <li class="quote-actions-item">
            <a v-bind:href="quoteData.permalink" target="_blank" class="quote-text">quote source</a>
          </li>
          <li class="quote-actions-item">
            <a v-on:click="getRandomQuote()" class="quote-text">refresh</a>
          </li>
          <li class="quote-actions-item">
            <a v-bind:href="shareTwitter(quoteData)" target="_blank" class="quote-text">share twitter</a>
          </li>
        </ul>
      </main>
    </section>
  `,
  name: seo.randomQuotes.name,
  metaInfo: seo.randomQuotes.metaInfo(),
})

export class WorksQuotesComponent extends Vue {
  public quoteData: RandomQuoteContents | null = null;

  private randomQuoteService = new RandomQuoteService();

  public getRandomQuote() {
    this.randomQuoteService.getQuote().then((quote) => {
      if (quote.success) {
        this.quoteData = quote.data;
      }
    });
  }

  public shareTwitter(quote: RandomQuoteContents): string {
    return `https://twitter.com/intent/tweet?text="${quote.quote}" ${quote.author} #quotes`;
  }

  private mounted() {
    this.getRandomQuote();
  }

}
