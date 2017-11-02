import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <main class="dashboard-component main-layout-hero">
      <ul class="works-list">
        <li class="works-list-item" v-for="work in works">
          <a
            v-bind:href="work.url"
            :style="{'background-image': thumbnailOverlay + work.thumbnailUrl}"
            class="works-list-item-anchor">
            <p class="works-list-title">{{ work.title }}</p>
          </a>
        </li>
      </ul>
    </main>
  `,
})

export class WorksDashboardComponent extends Vue {
  public thumbnailOverlay: string = 'linear-gradient(to right,rgba(0,0,0, 0.25),rgba(0,0,0, 0.25)), ';
  public works: IWorks[] = [
    {
      url: '/works/weather',
      title: 'Weather App',
      thumbnailUrl: 'url("/images/works/weather-app/thumbnail.png")',
    },
  ];
}

export interface IWorks {
  url: string;
  thumbnailUrl: string;
  title: string;
}
