import Vue from 'vue';
import Component from 'vue-class-component';

import {
  colorVariables,
  FooterComponent,
} from './../../core';

@Component({
  template: `
    <div class="app-main">
      <div class="maintenance-component">
        <main class="maintenance-content">
          <h1 class="message">UNDER CONSTRUCTION</h1>
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ 'width': progressPercentage + '%' }" ></div>
            </div>
            <p class="progress-bar-meter">site completion: {{progressPercentage}}%</p>
        </main>
        <footer-component></footer-component>
      </div>
    </div>
  `,
  components: { FooterComponent },
})

export class MaintenanceComponent extends Vue {
  public progressPercentage: number = 0;

  public initBarProgress() {
    const timeout = setInterval(() => {
      if (this.progressPercentage === 45) {
        clearInterval(timeout);
      }
      this.progressPercentage = this.progressPercentage + 1;
    }, 25);
  }

  private beforeDestroy() {
    this.$emit('randomBackground', colorVariables.black);
    this.$emit('setVisibility', {
      visibleNav: true,
      visibleFooter: true,
    });
  }

  private mounted() {
    this.$emit('randomBackground', colorVariables.grayOlive);
    this.$emit('setVisibility', {
      visibleNav: false,
      visibleFooter: false,
    });
    this.initBarProgress();
  }
}
