import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { colorVariables } from './../constants';

@Component({
  template: `
    <footer
      class="footer-component">
      <div class="container">
        <section class="location-section">
          <h3 class="location-icon">
            <i class="fa fa-map-marker color-transition" :style="{ 'color': iconColor }" aria-hidden="true"></i>
          </h3>
          <h5 class="location-city color-transition" :style="{ 'color': cityColor }">LOS ANGELES, CA</h5>
        </section>
        <section class="footer-section">
          <ul class="flat-list center">
            <li v-for="link in socialLinks">
              <a v-bind:href="link.url" class="social-icon">
                <i v-bind:class="[link.faIcon]"/>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  `,
})

export class FooterComponent extends Vue {
  public iconColor: string = colorVariables.black;
  public cityColor: string = colorVariables.black;

  public socialLinks: SocialLinks[] = [
    {
      url: 'https://github.com/dannyk08',
      icon: {
        src: {
          retina: '/images/social-media/github/icon@2x.png',
          nonRetina: '/images/social-media/github/icon.png',
        },
        alt: 'github icon',
      },
      faIcon: 'fa fa-github',
    },
    {
      url: 'https://www.linkedin.com/in/dannyk08',
      icon: {
        src: {
          retina: '/images/social-media/linkedin/icon@2x.png',
          nonRetina: '/images/social-media/linkedin/icon.png',
        },
        alt: 'linkedIn icon',
      },
      faIcon: 'fa fa-linkedin',
    },
  ];

  private mounted() {
    window.setTimeout(() => {
      this.iconColor = colorVariables.teal;
      this.cityColor = colorVariables.white;
    }, 750);
  }
}

export interface SocialLinks {
  url: string;
  icon: {
    src: {
      retina: string;
      nonRetina: string;
    };
    alt: string;
  };
  faIcon: string;
}
