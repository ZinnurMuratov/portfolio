import Vue from 'vue';

const app = new Vue({
  el: '#main-app',
  template: `
    <section>
      <header>
        <h1>
          appName {{ appName }}
        </h1>
      </header>
    </section>
  `,
  data: {
    appName: 'Danny\'s portfolio',
  },
});
