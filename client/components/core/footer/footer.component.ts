import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <footer class="footer">
      <section>
        <ul class="flat-list center">
          <li v-for="link in socialLinks">
            <a v-bind:href="link.url">
              {{link.icon}}
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
      icon: 'github',
    },
    {
      url: 'https://twitter.com/Dannys_io',
      icon: 'twitter',
    },
    {
      url: 'https://www.linkedin.com/in/dannyk08',
      icon: 'linkedIn',
    },
  ];
}

export interface SocialLinks {
  url: string;
  icon: string;
}
