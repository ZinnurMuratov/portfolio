import Vue from 'vue';

export default Vue.extend({
  template: `
    <footer class="footer">
      <header>
        <h4>Connect</h4>
      </header>
      <ul>
        <li v-for="link in socialLinks">
          <a v-bind:href="link.url">
            {{link.icon}}
          </a>
        </li>
      </ul>
    </footer>
  `,
  data() {
    return {
      socialLinks: [
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
      ],
    };
  },
});
