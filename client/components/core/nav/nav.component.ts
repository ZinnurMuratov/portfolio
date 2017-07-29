import Vue from 'vue';

export default Vue.extend({
  template: `
    <nav>
      <header>
        <h4>{{navText}}</h4>
      </header>
    </nav>
  `,
  data() {
    return {
      navText: 'issa nav now',
    };
  },
});
