import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  template: `
    <footer
      class="footer-component">
      <div class="container">
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
