import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { colorVariables } from './../constants';

@Component({
  template: `
    <nav
      :style="{'background-color': backgroundColor}"
      :class="{'mobile-nav-list-container': displayMobileNav }"
      class="navigation-component">
      <div class="container">
        <section
          :class="{'show-nav': displayMobileNav }"
          class="nav-mobile-display"
          v-if="displayMobileNavButton">
            <div class="mobile-nav-icon-toggle">
              <p class="toggle-icon" @click="toggleMobileNav()">
                <span>
                  <i
                    :class="[displayMobileNav ? 'fa-times' : 'fa-bars']"
                    class="fa" aria-hidden="true"></i>
                </span>
              </p>
            </div>
        </section>
        <section
          :class="{'mobile-nav-list': displayMobileNav }"
          class="nav-section">
          <ul class="flat-list right navigation-links">
            <li class="nav-link">
              <h4 @click="toggleMobileNav()">
                <router-link :to="{ path: '/' }">HOME</router-link>
              </h4>
            </li>
            <li class="nav-link">
              <h4 @click="toggleMobileNav()">
                <router-link :to="{ path: '/works' }">WORKS</router-link>
              </h4>
            </li>
            <li class="nav-link">
              <h4 @click="toggleMobileNav()">
                <router-link :to="{ path: '/about' }">ABOUT</router-link>
              </h4>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  `,
})

export class NavComponent extends Vue {
  @Prop() public backgroundColor: string;
  public windowWidth: number = window.innerWidth;
  public displayMobileNavButton: boolean = window.innerWidth <= 700;
  public displayMobileNav: boolean = false;

  public toggleMobileNav() {
    if (this.displayMobileNavButton) {
      this.displayMobileNav = !this.displayMobileNav;
    }
  }

  private getWindowWidth(e: Event) {
    this.windowWidth = window.innerWidth;
    this.displayMobileNavButton = window.innerWidth <= 700;
  }

  private mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth);
    });
  }
}
