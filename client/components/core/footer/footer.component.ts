import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <footer class="footer-component">
      <div class="container">
        <section class="footer-section">
          <ul class="flat-list center">
            <li v-for="link in socialLinks">
              <a v-bind:href="link.url" class="social-icon">
                <img
                  :srcset="link.icon.src.retina + ' 1.25x'"
                  :src="link.icon.src.nonRetina"
                  :alt="link.icon.alt"/>
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
          retina: '/assets/images/social-media/github/icon@2x.png',
          nonRetina: '/assets/images/social-media/github/icon.png',
        },
        alt: 'github icon',
      },
    },
    {
      url: 'https://www.linkedin.com/in/dannyk08',
      icon: {
        src: {
          retina: '/assets/images/social-media/linkedin/icon@2x.png',
          nonRetina: '/assets/images/social-media/linkedin/icon.png',
        },
        alt: 'linkedIn icon',
      },
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
}
