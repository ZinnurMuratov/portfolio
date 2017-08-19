import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <section class="main-component vertical-align">
      <div class="container">
      <router-view></router-view>
      </div>
    </section>
    `,
})

export class WorksMainComponent extends Vue { }
