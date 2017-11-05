import Vue from 'vue';
import Component from 'vue-class-component';

import { RGBA } from './../interfaces';

@Component({
  template: `
    <main class="dashboard-component main-layout-hero">
      <ul class="works-list">
        <li class="works-list-item" v-for="work in works">
          <a
            v-bind:href="work.url"
            :style="{'background-color': randomColor() }"
            class="works-list-item-anchor">
            <p class="works-list-title">{{ work.title }}</p>
          </a>
        </li>
      </ul>
    </main>
  `,
})

export class WorksDashboardComponent extends Vue {
  public works: IWorks[] = [
    {
      url: '/works/weather',
      title: 'Weather App',
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
}
