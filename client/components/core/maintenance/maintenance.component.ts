import Vue from 'vue';
import Component from 'vue-class-component';
import { FooterComponent } from './../../core';

@Component({
  template: `
    <div class="app-main">
      <div class="maintenance-component">
        <main class="maintenance-content">
          <h1 class="message">UNDER CONSTRUCTION</h1>
          <div class="progress-bar">
            <div class="progress-bar-fill" :style="{ 'width': progressPercentage + '%' }" ></div>
            <p class="progress-bar-meter">site completion: {{progressPercentage}}%</p>
          </div>
        </main>
      </div>
    </div>
  `,
  // <footer-component :backgroundColor="backgroundColor"></footer-component>
})

export class MaintenanceComponent extends Vue {
  public backgroundColor: string = 'rgba(224, 231, 218, 0.88)';
  public progressPercentage: number = 0;

  public backgroundColorMatch(val: string) {
    this.backgroundColor = val;
  }

  public initBarProgress() {
    const timeout = setInterval(() => {
      if (this.progressPercentage === 45) {
        clearInterval(timeout);
      }
      this.progressPercentage = this.progressPercentage + 1;
    }, 25);

  }

  private mounted() {
    this.initBarProgress();
  }
}
