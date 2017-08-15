import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <nav class="navigation-component">
      <section class="nav-section">
        <ul class="flat-list right navigation-links">
          <li class="nav-link">
            <router-link :to="{ path: '/' }">Home</router-link>
          </li>
          <li class="nav-link">
            <router-link :to="{ path: '/works' }">Works</router-link>
          </li>
        </ul>
      </section>
    </nav>
  `,
})
export class NavComponent extends Vue {
  //
}
