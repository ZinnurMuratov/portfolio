import Vue from 'vue';
import Component from 'vue-class-component';

import { WeatherService } from './../services';

@Component({
  template: `
    <main class="weather-component main-layout-hero">
      <h3 class="">
        {{currentWeather}}
      </h3>
    </main>
  `,
})

export class WorksWeatherComponent extends Vue {
  public currentWeather: any = {};
  public geolocation: string = 'data';
  public locationError: string = '';

  private weatherService = new WeatherService();

  private mounted() {
    this.getWeather();
  }

  private getWeather() {
    this.weatherService.getWeather().then((res) => {
      console.info(res);
      this.currentWeather = res;
    });
  }

}
