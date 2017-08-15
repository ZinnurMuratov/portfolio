import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <footer class="footer-component">
      <section class="footer-section">
        <ul class="flat-list center">
          <li v-for="link in socialLinks">
            <a v-bind:href="link.url" class="social-icon">
              <img :src="link.icon"/>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  `,
})

export class FooterComponent extends Vue {
  public socialLinks: SocialLinks[] = [
    {
      url: 'https://github.com/dannyk08',
      icon: '/assets/images/social-media/github/icon.png',
    },
    {
      url: 'https://twitter.com/Dannys_io',
      icon: '/assets/images/social-media/twitter/icon.png',
    },
    {
      url: 'https://www.linkedin.com/in/dannyk08',
      icon: '/assets/images/social-media/linkedin/icon.png',
    },
  ];
}

export interface SocialLinks {
  url: string;
  icon: string;
}
