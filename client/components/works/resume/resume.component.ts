import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <main class="resume-component">
      <div class="container">
        <h1 class="">
          Resume
        </h1>
      </div>
    </main>
  `,
  // name: seo.works.name,
  // metaInfo: seo.works.metaInfo(),
})

export class ResumeComponent extends Vue {
  constructor(obj: any) {
    super(obj);
  }

  private beforeDestroy() {
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
