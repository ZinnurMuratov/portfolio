import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { colorVariables } from './../constants';

@Component({
  template: `
    <nav
      :style="{'background-color': backgroundColor}"
      class="navigation-component">
      <div class="container">
        <section class="nav-section">
          <ul class="flat-list right navigation-links">
            <li class="nav-link">
              <h5>
                <router-link :to="{ path: '/' }">HOME</router-link>
              </h5>
            </li>
            <li class="nav-link">
              <h5>
                <router-link :to="{ path: '/works' }">WORKS</router-link>
              </h5>
            </li>
            <li class="nav-link">
              <h5>
                <router-link :to="{ path: '/about' }">ABOUT</router-link>
              </h5>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  `,
})

export class NavComponent extends Vue {
  @Prop() public backgroundColor: string;
}
