import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <main class="dashboard-component main-layout-hero">
      <ul class="works-list">
        <li class="works-list-item" v-for="work in works">
          <a v-bind:href="work.url" class="works-list-item-anchor">
            <img :src="work.thumbnail" class="works-list-image">
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
      thumbnail: '/images/misc/loading.gif',
    },
  ];
}

export interface IWorks {
  url: string;
  thumbnail: string;
}
