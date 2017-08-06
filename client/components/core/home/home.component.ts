import Vue from 'vue';

export default Vue.extend({
  template: `
    <section class="section-full">
      <div class="vertical-align">
        <header class="main-container-header">
          <h1>Danny Romero</h1>
          <h4>[Web Developer]</h4>
        </header>
      </div>
    </section>
  `,
  data() {
    return {
      enthusiasm: 'shit works!',
    };
  },
});
