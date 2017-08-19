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
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4=',
    },
  ];
}

export interface IWorks {
  url: string;
  thumbnail: string;
}
