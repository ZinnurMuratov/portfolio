import Vue from 'vue';
import Component from 'vue-class-component';

import { GeoLocatorService } from './../../core/services';
import { WeatherService } from './../services';

@Component({
  template: `
    <main class="weather-component main-layout-hero">
      <section class="weather-data-container" v-bind:class="{ loading: !currentWeather }">
        <div v-if="currentWeather">
          <main class="weather-data" v-if="currentWeather">
            <header class="weather-data-header">
              <div>
                <h4 class="current-date">
                  <span class="current-date-day date-font">{{currentWeather.body.timezone}}</span>
                  <br>
                  <span class="current-date-month date-font"></span>
                </h4>
                <h3 class="weather-data-current-temp weather-data-font">85</h3>
                <h5 class="weather-data-current-location date-font">...location</h5>
              </div>
            </header>
            <footer class="weather-data-footer">
              <ul class="weather-data-weekly-cast">
              </ul>
            </footer>
          </main>
          <aside class="weather-canvas-image"></aside>
        </div>

        <div class="text-center failed-ip" v-if="showClickMessage">
          <p v-on:click="manualGetWeather()" class="weather-loader">{{errorMessage}}</p>
        </div>
      </section>
    </main>
  `,
})

export class WorksWeatherComponent extends Vue {
  public currentWeather: any = null;
  public geolocation: string = 'data';
  public showClickMessage: boolean = false;
  public errorMessage: string = 'Click here to load weather';

  private weatherService = new WeatherService();
  private geolocationService = new GeoLocatorService();

  public manualGetWeather() {
    this.errorMessage = 'Acquiring your location...';
    this.currentWeather = null;
    this.showClickMessage = false;
    return this.geolocationService.permissionBasedGeoLocation().then((geoLocation) => {
      console.log('click client', geoLocation);
      this.weatherService.$http({
        params: {
          lat: geoLocation.coords.latitude,
          long: geoLocation.coords.longitude,
        },
        method: 'GET',
        url: '/api/getWeather',
      }).then((weather) => {
        this.currentWeather = weather;
        console.log('api weather', this.currentWeather);
      });
    }).catch((err) => {
      this.errorMessage = 'Weather failed to load. Please try again later';
      return err;
    });
  }

  private mounted() {
    this.getWeather();
  }

  private getWeather() {
    this.weatherService.getWeather().then((res) => {
      console.log('getWeather:', res);
      if (!res) {
        this.showClickMessage = true;
        this.currentWeather = {};
      }
      this.currentWeather = res;
    }, (err) => {
      console.error(err);
      this.currentWeather = {};
      this.showClickMessage = true;
    });
  }

}
