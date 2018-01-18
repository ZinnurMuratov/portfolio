import moment from 'moment';
import Vue from 'vue';
import Component from 'vue-class-component';

import { UserPosition } from './../../core/models';
import { GeoCodingService, GeoLocatorService, seo } from './../../core/services';
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
              <h5 class="weather-data-font">{{ cityLocation }}</h5>

              <div class="input-icon">
                <input
                  :disabled="disableGeocoding"
                  v-on:keyup.enter="geocodeLookup()"
                  v-model="inputAddress"
                  class="input-field geo-code-weather"
                  placeholder="Location, State Zipcode" />
                <button
                  :disabled="disableGeocoding"
                  v-on:click="geocodeLookup()"
                  class="input-field-icon">
                  <i class="fa fa-search">
                  </i>
                </button>
                <p v-if="geoCodeError.length">
                  {{geoCodeError}}
                </p>
              </div>
            </div>
          </header>
          <footer class="weather-data-footer">
            <ul class="weather-data-weekly-cast">
              <li v-for="dailyWeather in weatherData.data.daily.data.slice(1, 8)">
                <div class="day-of-the-week">
                  {{ timeFetched(dailyWeather.time).dayOfWeek }}, {{timeFetched(dailyWeather.time).day}}

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
  name: seo.weather.name,
  metaInfo: seo.weather.metaInfo(),
})

export class WorksWeatherComponent extends Vue {
  public backgroundWeatherImage: string | null = null;
  public loadingWeather: boolean = false;
  public loadWeather: { display: boolean, message: string } = {
    display: false,
    message: 'Click here to load weather',
  };
  public weatherData: WeatherData | null = null;
  public cityLocation: string | null = null;
  public inputAddress: string = '';
  public geoCodeError: string = '';
  public disableGeocoding: boolean = false;

  private weatherService = new WeatherService();
  private geolocationService = new GeoLocatorService();
  private geoCodingService = new GeoCodingService();
  private flickrService = new FlickrService();

  public geocodeLookup(event?: any) {
    if (this.inputAddress.length && !this.disableGeocoding) {
      this.disableGeocoding = true;
      this.geoCodingService.getGeocode(this.inputAddress).then((result) => {
        const { success, data } = result;

        if (!success) {
          this.geoCodeError = 'Failed to find this location. Please try another location.';
        }

        if (data.results.length) {
          const { formatted_address } = data.results[0];
          const { lat, lng } = data.results[0].geometry.location;
          const geolocation: GeoLocation = { lat, long: lng };

          this.getWeather(geolocation, formatted_address);
        }
        this.disableGeocoding = false;
      });
    }

  }

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

  private autoLoadWeather() {
    this.loadingWeather = true;
    this.getWeather();
  }

  private getWeather(coordinates?: GeoLocation, formattedAddress?: any) {
    this.weatherService.getWeather(coordinates ? coordinates : null).then((weatherData) => {
      if (weatherData.geolookup) {
        this.cityLocation = `${weatherData.geolookup.city}, ${weatherData.geolookup.region}`;
      } else {
        this.cityLocation = formattedAddress ? formattedAddress : `Timezone: ${weatherData.data.timezone}`;
      }

      if (!weatherData.success) {
        this.loadWeather.display = true;
        this.loadWeather.message = 'There was an error getting the weather. Please try again';
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

}

export interface MomentDate {
  month: string;
  day: string;
  dayOfWeek: string;
  year: string;
  date: string;
}
