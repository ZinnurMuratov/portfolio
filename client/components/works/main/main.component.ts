import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <section class="main-component vertical-align">
      <main class="works-dashboard main-layout-hero">
        <ul class="works-list">
          <li class="works-list-item" v-for="work in works">
            <a v-bind:href="work.url" class="works-list-item-anchor">
              <img :src="work.thumbnail" class="works-list-image">
            </a>
          </li>
        </ul>
      </main>
    </section>
    `,
})

export class WorksMainComponent extends Vue {
  public works: IWorks[] = [
    {
      url: '/',
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4='
    },
    {
      url: '/',
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4='
    },
    {
      url: '/',
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4='
    },
    {
      url: '/',
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4='
    },
    {
      url: '/',
      thumbnail: 'https://media.gettyimages.com/photos/misty-summer-mountain-hills-landscape-picture-id509636590?b=1&k=6&m=509636590&s=170x170&h=NEvrEAqkCj6Be-HrNQwJYzZlb023H4Aq3mc76483-l4='
    },
  ];

}

export interface IWorks {
  url: string;
  thumbnail: string;
}
