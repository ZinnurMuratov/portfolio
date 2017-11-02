import * as moment from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';

import { UserPosition } from './../../core/models';
import { GeoLocatorService } from './../../core/services';
import { FlickrOptions } from './../interfaces';
import { FlickrData, WeatherData } from './../models';
import { FlickrService, GeoLocation, WeatherService } from './../services';

@Component({
  template: `
    <main class="weather-component main-layout-hero">
      <section class="weather-data-container" v-bind:class="{ 'loading-weather': loadingWeather }">

        <main class="weather-data" v-if="weatherData">
          <header
            class="weather-data-header"
            :style="{'background-image': backgroundWeatherImage }">
            <div class="weather-data-today">
              <h4 class="weather-data-font weather-data-current-temp">
              {{ weatherData.data.currently.fahrenheitUnits(weatherData.data.currently.temperature) }}
              </h4>
              <h4 class="weather-data-font">
                <span class="current-date-day date-font">
                  {{ timeFetched(weatherData.data.currently.time).date }}
                </span>
              </h4>
              <h5 class="weather-data-font">{{ weatherData.data.timezone }}</h5>
            </div>
          </header>
          <footer class="weather-data-footer">
            <ul class="weather-data-weekly-cast">
              <li v-for="dailyWeather in weatherData.data.daily.data.slice(1, 8)">
                <div class="day-of-the-week">
                  {{ timeFetched(dailyWeather.time).dayOfWeek }}
                </div>
                <div class="weather-info">
                  <p class="weather-info-temp">
                    <span class="weather-info-temp-high">
                      {{ weatherData.data.currently.fahrenheitUnits(dailyWeather.temperatureHigh) }}
                    </span>
                    <span class="hide-desktop-only">/</span>
                    <span class="weather-info-temp-low">
                      {{ weatherData.data.currently.fahrenheitUnits(dailyWeather.temperatureLow) }}
                    </span>
                  </p>
                  <p class="hide-desktop-only weather-info-summary">{{ dailyWeather.summary }}</p>
                </div>
              </li>
            </ul>
          </footer>
        </main>

        <div class="text-center load-weather" v-if="loadWeather.display">
          <p v-on:click="clientGetWeather()" class="weather-loader">{{ loadWeather.message }}</p>
        </div>
      </section>
    </main>
  `,
})

export class WorksWeatherComponent extends Vue {
  public backgroundWeatherImage: string | null = null;
  public loadingWeather: boolean = false;
  public loadWeather: { display: boolean, message: string } = {
    display: false,
    message: 'Click here to load weather',
  };
  public weatherData: WeatherData | null = null;

  private weatherService = new WeatherService();
  private geolocationService = new GeoLocatorService();
  private flickrService = new FlickrService();

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
        const coordinates: GeoLocation = {
          lat: location.coords.latitude,
          long: location.coords.longitude,
        };
        this.getWeather(coordinates);
      }
    });
  }

  public timeFetched(unixStamp: number): MomentDate {
    const dateNow = moment(moment.unix(unixStamp));
    return {
      month: dateNow.format('MMMM'),
      day: dateNow.format('DD'),
      dayOfWeek: dateNow.format('dddd'),
      year: dateNow.format('Y'),
      date: dateNow.format('LL'),
    };
  }

  private mounted() {
    this.autoLoadWeather();
  }

  private getWeather(coordinates: GeoLocation) {
    this.weatherService.getWeather(coordinates).then((weatherData: WeatherData) => {
      if (!weatherData.success) {
        this.loadWeather.display = true;
        this.loadWeather.message = 'There was an error getting the weather';
      } else {
        if (weatherData.success) {
          this.weatherData = new WeatherData(weatherData);
          this.loadingWeather = false;
          this.setBackgroundImage(this.weatherData.data.currently.icon);
        }
      }
    });
  }

  private setBackgroundImage(weatherTags: string) {
    const flickerOptions: FlickrOptions = {
      tags: weatherTags.replace(/-/g, '+'),
      safe_search: '1',
      content_type: '1',
      media: 'photos',
    };

    this.flickrService.getImages(flickerOptions).then((load) => {
      if (load.success) {
        const data = new FlickrData(load.data);
        const randomNumber = Math.floor(Math.random() * data.photos.photo.length);
        const randomImage = data.photos.photo.find((photo, index, array) => index === randomNumber);

        this.backgroundWeatherImage = randomImage ?
          'linear-gradient(to right,rgba(0,0,0, 0.35),rgba(0,0,0, 0.15)), ' +
          `url("https://c1.staticflickr.com/${randomImage.farm}/` +
          `${randomImage.server}/${randomImage.id}_${randomImage.secret}.jpg")` :
          'linear-gradient(to right,rgba(0,0,0, 0.25),rgba(0,0,0, 0.05))';
      }
    });
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

export interface MomentDate {
  month: string;
  day: string;
  dayOfWeek: string;
  year: string;
  date: string;
}
