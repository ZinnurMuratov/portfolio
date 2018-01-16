import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  template: `
    <nav
      class="navigation-component">
      <div class="container">
        <section class="nav-section">
          <ul class="flat-list right navigation-links">
            <li class="nav-link">
              <router-link :to="{ path: '/' }">Home</router-link>
            </li>
            <li class="nav-link">
              <router-link :to="{ path: '/about' }">About</router-link>
            </li>
            <li class="nav-link">
              <router-link :to="{ path: '/works' }">Works</router-link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  `,
})
export class NavComponent extends Vue { }
