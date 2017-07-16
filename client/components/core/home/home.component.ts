import Vue from 'vue';

export default Vue.extend({
  template: `
    <section>
      <header>
        <h1>{{enthusiasm}}</h1>
      </header>
    </section>
  `,
  data() {
    return {
      enthusiasm: 'shit works!',
    };
  },
});
