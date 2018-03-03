import Vue from 'vue';
import Component from 'vue-class-component';

import { seo } from './../../core/services';
import { RGBA } from './../interfaces';

@Component({
  template: `
    <main class="dashboard-component main-layout-hero">
        <ul class="works-list">
        <li class="works-list-item" v-for="work in works">
          <a
            v-if="!work.name"
            v-bind:href="work.url"
            :style="{'--color': randomColor()}"
            class="works-list-item-anchor">
            <p class="works-list-title">{{ work.title }}</p>
          </a>
          <router-link
            v-if="work.name"
            v-bind:href="work.url"
            :style="{'--color': randomColor()}"
            :to="{name: work.name}"
            class="works-list-item-anchor">
            <p class="works-list-title">{{ work.title }}</p>
          </router-link>
        </li>
      </ul>
    </main>
  `,
  name: seo.works.name,
  metaInfo: seo.works.metaInfo(),
})

export class WorksDashboardComponent extends Vue {
  public works: IWorks[] = [
    {
      url: '/works/weather',
      title: 'Weather App',
      name: 'WorksWeather',
    },
    {
      url: '/works/quotes',
      title: 'Random Quotes',
      name: 'WorksQuotes',
    },
    {
      url: 'https://sellbrite-vue.firebaseapp.com/shop',
      title: 'Cart.ly',
    },
    {
      url: 'https://guitar-center-vanilla.firebaseapp.com/shop',
      title: 'Guitar Center Mock',
    },
  ];

  public randomColor(): string {
    const rgba: RGBA = {
      r: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      a: (Math.random() * 1).toFixed(2),
    };

    return `rgba(${rgba.r},${rgba.b},${rgba.g},${rgba.a})`;
  }
}

export interface IWorks {
  url: string;
  title: string;
  name?: string;
}
