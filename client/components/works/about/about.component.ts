import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <main class="about-component">
      <div class="container">
        <h1 class="">
          About
        </h1>
      </div>
    </main>
  `,
  // name: seo.works.name,
  // metaInfo: seo.works.metaInfo(),
})

export class AboutComponent extends Vue {
  constructor(obj: any) {
    super(obj);
  }

  private beforeDestroy() {
    this.$emit('randomBackground', '#2A292D');
    this.$emit('setVisibility', {
      visibleNav: true,
      visibleFooter: true,
    });
  }

  private mounted() {
    this.$emit('randomBackground', 'white');
    this.$emit('setVisibility', {
      visibleNav: true,
      visibleFooter: false,
    });
  }

}
