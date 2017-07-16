import Vue from 'vue';

export default Vue.extend({
  template: `
    <footer>
      <section>
        <h4>{{footerText}}</h4>
      </section>
    </footer>
  `,
  data() {
    return {
      footerText: 'issa footer',
    };
  },
});
