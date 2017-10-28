import Vue from 'vue';
import Component from 'vue-class-component';

import { UserPosition } from './../../core/models';
import { GeoLocatorService } from './../../core/services';
import { WeatherData } from './../models';
import { GeoLocation, WeatherService } from './../services';

@Component({
  template: `
    <main class="weather-component main-layout-hero">
      <section class="weather-data-container" v-bind:class="{ 'loading-weather': loadingWeather }">

        <div v-if="weatherData">
          <main class="weather-data">
            <header class="weather-data-header">
              <div>
                <h4 class="current-date">
                  <span class="current-date-day date-font">date day</span>
                  <br>
                  <span class="current-date-month date-font">date month</span>
                </h4>
                <h3 class="weather-data-current-temp weather-data-font">
                {{ weatherData.data.currently.fahrenheitUnits }}
                </h3>
                <h5 class="weather-data-current-location date-font">current location</h5>
              </div>
            </header>
            <footer class="weather-data-footer">
              <ul class="weather-data-weekly-cast">weekly cast</ul>
            </footer>
          </main>
          <aside class="weather-canvas-image"></aside>
        </div>

        <div class="text-center load-weather" v-if="loadWeather.display">
          <p v-on:click="clientGetWeather()" class="weather-loader">{{ loadWeather.message }}</p>
        </div>
      </section>
    </main>
  `,
})

export class WorksWeatherComponent extends Vue {
  public loadingWeather: boolean = false;
  public loadWeather: { display: boolean, message: string } = {
    display: false,
    message: 'Click here to load weather',
  };
  public weatherData: WeatherData = null;

  private weatherService = new WeatherService();
  private geolocationService = new GeoLocatorService();

  public clientGetWeather() {
    this.loadingWeather = true;
    this.loadWeather.display = false;

    this.geolocationService.permissionBasedGeoLocation().catch((err) => {
      console.error(err);
      this.loadWeather.display = true;
      this.loadWeather.message = 'There was an error getting the weather';
    }).then((location: UserPosition) => {
      if (!location || !location.success) {
        this.loadWeather.display = true;
        this.loadWeather.message = 'There was an error getting the weather';
      } else {
        console.log('location:', location);
        const coordinates: GeoLocation = {
          lat: location.coords.latitude,
          long: location.coords.longitude,
        };
        this.weatherData = new WeatherData({
          data: weather,
          success: true,
        });

        if (this.weatherData.success) {
          this.loadingWeather = false;
        }

        console.log(this.weatherData);

        // this.weatherService.getWeather(coordinates).then((weatherData: WeatherData) => {
        //   if (!weatherData.success) {
        //     this.loadWeather.display = true;
        //     this.loadWeather.message = 'There was an error getting the weather';
        //   } else {
        //     this.weatherData = new WeatherData(weatherData);
        //     console.log('weatherData:', weatherData);
        //     console.log('typed weatherData:', this.weatherData);
        //   }
        // });
      }
    });
  }

  private mounted() {
    this.autoLoadWeather();
  }

  private autoLoadWeather() {
    this.loadWeather.display = true;
    //   this.weatherService.getWeather().then((res) => {
    //     console.log('getWeather:', res);
    //     if (!res) {
    //       this.showClickMessage = true;
    //       this.currentWeather = {};
    //     }
    //     this.currentWeather = res;
    //   }, (err) => {
    //     console.error(err);
    //     this.currentWeather = {};
    //     this.showClickMessage = true;
    //   });
  }

}

const weather = {
  latitude: 42.3601,
  longitude: -71.0589,
  timezone: 'America/New_York',
  currently: {
    time: 255657600,
    summary: 'Heavy Snow and Dangerously Windy',
    icon: 'snow',
    precipIntensity: 0.1731,
    precipProbability: 1,
    precipType: 'snow',
    temperature: 30.02,
    apparentTemperature: 13.05,
    dewPoint: 29.81,
    humidity: 0.99,
    pressure: 1005.95,
    windSpeed: 40.01,
    windBearing: 52,
    cloudCover: 1,
    uvIndex: 0,
    visibility: 2.77,
  },
  daily: {
    data: [
      {
        time: 255589200,
        summary: 'Snow (9–14 in.) and windy starting in the afternoon.',
        icon: 'snow',
        sunriseTime: 255613996,
        sunsetTime: 255650764,
        moonPhase: 0.97,
        precipIntensity: 0.0354,
        precipIntensityMax: 0.1731,
        precipIntensityMaxTime: 255657600,
        precipProbability: 1,
        precipAccumulation: 7.337,
        precipType: 'snow',
        temperatureHigh: 31.84,
        temperatureHighTime: 255632400,
        temperatureLow: 28.63,
        temperatureLowTime: 255697200,
        apparentTemperatureHigh: 20.47,
        apparentTemperatureHighTime: 255625200,
        apparentTemperatureLow: 13.03,
        apparentTemperatureLowTime: 255697200,
        dewPoint: 24.72,
        humidity: 0.86,
        pressure: 1016.41,
        windSpeed: 22.93,
        windBearing: 56,
        cloudCover: 0.95,
        uvIndex: 1,
        uvIndexTime: 255621600,
        visibility: 4.83,
        temperatureMin: 22.72,
        temperatureMinTime: 255596400,
        temperatureMax: 32.04,
        temperatureMaxTime: 255672000,
        apparentTemperatureMin: 11.13,
        apparentTemperatureMinTime: 255650400,
        apparentTemperatureMax: 20.47,
        apparentTemperatureMaxTime: 255625200,
      },
    ],
  },
  flags: {
    'sources': [
      'isd',
    ],
    'isd-stations': [
      '725065-99999',
      '725070-14765',
      '725076-99999',
      '725088-99999',
      '725090-14739',
      '725095-94746',
      '725096-99999',
      '725097-14790',
      '725098-99999',
      '725099-99999',
      '726054-99999',
      '726067-99999',
      '726069-99999',
      '743945-14710',
      '744900-14702',
      '744905-04779',
    ],
    'units': 'us',
  },
  offset: -5,
};
