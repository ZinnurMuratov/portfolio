import Vue from 'vue';

export default Vue.extend({
  template: `
    <nav class="navigation">
      <ul class="flat-list right navigation-links">
        <li class="nav-link">
          <a>Home</a>
        </li>
        <li class="nav-link">
          <a>Portfolio</a>
        </li>
      </ul>
    </nav>
  `,
  data() {
    return {};
  },
});
