import * as moment from 'moment';
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
              <div class="weather-data-today">
                <h3 class="weather-data-font weather-data-current-temp">
                {{ weatherData.data.currently.fahrenheitUnits(weatherData.data.currently.temperature) }}
                </h3>
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
                  <div class="left-side">
                    {{ timeFetched(dailyWeather.time).dayOfWeek }}
                  </div>
                  <div class="right-side">
                    <p>
                      <span>
                        {{ weatherData.data.currently.fahrenheitUnits(dailyWeather.temperatureHigh) }}
                      </span>
                      /
                      <span>
                        {{ weatherData.data.currently.fahrenheitUnits(dailyWeather.temperatureLow) }}
                      </span>
                    </p>
                    <p>{{ dailyWeather.summary }}</p>
                  </div>
                </li>
              </ul>
            </footer>
          </main>
          // <aside class="weather-canvas-image"></aside>
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
        const coordinates: GeoLocation = {
          lat: location.coords.latitude,
          long: location.coords.longitude,
        };


        this.weatherService.getWeather(coordinates).then((weatherData: WeatherData) => {
          if (!weatherData.success) {
            this.loadWeather.display = true;
            this.loadWeather.message = 'There was an error getting the weather';
          } else {
            this.weatherData = new WeatherData(weatherData);
            if (this.weatherData.success) {
              this.loadingWeather = false;
            }
          }
        });
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

// const weather = {
//   latitude: 40.7128,
//   longitude: -74.006,
//   timezone: 'America/New_York',
//   currently: {
//     time: 1509234038,
//     summary: 'Clear',
//     icon: 'clear-night',
//     nearestStormDistance: 14,
//     nearestStormBearing: 34,
//     precipIntensity: 0,
//     precipProbability: 0,
//     temperature: 17.3,
//     apparentTemperature: 17.3,
//     dewPoint: 14.66,
//     humidity: 0.85,
//     pressure: 1013.03,
//     windSpeed: 1.99,
//     windGust: 4.38,
//     windBearing: 176,
//     cloudCover: 0.21,
//     uvIndex: 0,
//     visibility: 16.09,
//     ozone: 258.01,
//   },
//   daily: {
//     summary: 'Rain tomorrow through Thursday, with temperatures falling to 12°C next Saturday.',
//     icon: 'rain',
//     data: [
//       {
//         time: 1509163200,
//         summary: 'Light rain overnight.',
//         icon: 'rain',
//         sunriseTime: 1509189787,
//         sunsetTime: 1509227931,
//         moonPhase: 0.28,
//         precipIntensity: 0.0152,
//         precipIntensityMax: 0.066,
//         precipIntensityMaxTime: 1509210000,
//         precipProbability: 0.12,
//         precipType: 'rain',
//         temperatureHigh: 20.04,
//         temperatureHighTime: 1509213600,
//         temperatureLow: 17.04,
//         temperatureLowTime: 1509238800,
//         apparentTemperatureHigh: 20.04,
//         apparentTemperatureHighTime: 1509213600,
//         apparentTemperatureLow: 17.09,
//         apparentTemperatureLowTime: 1509238800,
//         dewPoint: 9.89,
//         humidity: 0.74,
//         pressure: 1015.82,
//         windSpeed: 1.61,
//         windGust: 10.88,
//         windGustTime: 1509246000,
//         windBearing: 182,
//         cloudCover: 0.09,
//         uvIndex: 3,
//         uvIndexTime: 1509206400,
//         visibility: 16.09,
//         ozone: 260.67,
//         temperatureMin: 8.89,
//         temperatureMinTime: 1509184800,
//         temperatureMax: 20.04,
//         temperatureMaxTime: 1509213600,
//         apparentTemperatureMin: 8.89,
//         apparentTemperatureMinTime: 1509184800,
//         apparentTemperatureMax: 20.04,
//         apparentTemperatureMaxTime: 1509213600,
//       },
//       {
//         time: 1509249600,
//         summary: 'Heavy rain throughout the day and windy in the afternoon.',
//         icon: 'rain',
//         sunriseTime: 1509276257,
//         sunsetTime: 1509314254,
//         moonPhase: 0.31,
//         precipIntensity: 5.2603,
//         precipIntensityMax: 13.2791,
//         precipIntensityMaxTime: 1509332400,
//         precipProbability: 1,
//         precipType: 'rain',
//         temperatureHigh: 20.67,
//         temperatureHighTime: 1509292800,
//         temperatureLow: 11.81,
//         temperatureLowTime: 1509364800,
//         apparentTemperatureHigh: 20.86,
//         apparentTemperatureHighTime: 1509292800,
//         apparentTemperatureLow: 11.81,
//         apparentTemperatureLowTime: 1509364800,
//         dewPoint: 16.67,
//         humidity: 0.84,
//         pressure: 1001.71,
//         windSpeed: 6.46,
//         windGust: 18.87,
//         windGustTime: 1509328800,
//         windBearing: 139,
//         cloudCover: 0.87,
//         uvIndex: 2,
//         uvIndexTime: 1509292800,
//         visibility: 8.59,
//         ozone: 260.3,
//         temperatureMin: 17.49,
//         temperatureMinTime: 1509249600,
//         temperatureMax: 20.67,
//         temperatureMaxTime: 1509292800,
//         apparentTemperatureMin: 17.53,
//         apparentTemperatureMinTime: 1509249600,
//         apparentTemperatureMax: 20.86,
//         apparentTemperatureMaxTime: 1509292800,
//       },
//       {
//         time: 1509336000,
//         summary: 'Breezy and mostly cloudy until afternoon.',
//         icon: 'wind',
//         sunriseTime: 1509362727,
//         sunsetTime: 1509400579,
//         moonPhase: 0.34,
//         precipIntensity: 0.4521,
//         precipIntensityMax: 7.3609,
//         precipIntensityMaxTime: 1509336000,
//         precipProbability: 0.97,
//         precipType: 'rain',
//         temperatureHigh: 14.32,
//         temperatureHighTime: 1509393600,
//         temperatureLow: 7.97,
//         temperatureLowTime: 1509447600,
//         apparentTemperatureHigh: 14.32,
//         apparentTemperatureHighTime: 1509393600,
//         apparentTemperatureLow: 5.22,
//         apparentTemperatureLowTime: 1509447600,
//         dewPoint: 7.06,
//         humidity: 0.64,
//         pressure: 994.87,
//         windSpeed: 5.5,
//         windGust: 18.79,
//         windGustTime: 1509364800,
//         windBearing: 241,
//         cloudCover: 0.54,
//         uvIndex: 2,
//         uvIndexTime: 1509379200,
//         visibility: 16.09,
//         ozone: 281.01,
//         temperatureMin: 10.45,
//         temperatureMinTime: 1509372000,
//         temperatureMax: 19.79,
//         temperatureMaxTime: 1509336000,
//         apparentTemperatureMin: 10.45,
//         apparentTemperatureMinTime: 1509372000,
//         apparentTemperatureMax: 20.08,
//         apparentTemperatureMaxTime: 1509336000,
//       },
//       {
//         time: 1509422400,
//         summary: 'Partly cloudy starting in the evening.',
//         icon: 'partly-cloudy-night',
//         sunriseTime: 1509449198,
//         sunsetTime: 1509486905,
//         moonPhase: 0.37,
//         precipIntensity: 0.0025,
//         precipIntensityMax: 0.0076,
//         precipIntensityMaxTime: 1509451200,
//         precipProbability: 0.14,
//         precipType: 'rain',
//         temperatureHigh: 13.87,
//         temperatureHighTime: 1509480000,
//         temperatureLow: 2.83,
//         temperatureLowTime: 1509534000,
//         apparentTemperatureHigh: 13.87,
//         apparentTemperatureHighTime: 1509480000,
//         apparentTemperatureLow: 1.56,
//         apparentTemperatureLowTime: 1509534000,
//         dewPoint: 1.69,
//         humidity: 0.54,
//         pressure: 1018.24,
//         windSpeed: 4.88,
//         windGust: 13.55,
//         windGustTime: 1509422400,
//         windBearing: 253,
//         cloudCover: 0.06,
//         uvIndex: 3,
//         uvIndexTime: 1509465600,
//         visibility: 16.09,
//         ozone: 268.47,
//         temperatureMin: 7.97,
//         temperatureMinTime: 1509447600,
//         temperatureMax: 13.87,
//         temperatureMaxTime: 1509480000,
//         apparentTemperatureMin: 5.22,
//         apparentTemperatureMinTime: 1509447600,
//         apparentTemperatureMax: 13.87,
//         apparentTemperatureMaxTime: 1509480000,
//       },
//       {
//         time: 1509508800,
//         summary: 'Mostly cloudy throughout the day.',
//         icon: 'partly-cloudy-day',
//         sunriseTime: 1509535669,
//         sunsetTime: 1509573232,
//         moonPhase: 0.41,
//         precipIntensity: 0.0711,
//         precipIntensityMax: 0.3404,
//         precipIntensityMaxTime: 1509591600,
//         precipProbability: 0.38,
//         precipType: 'rain',
//         temperatureHigh: 13.03,
//         temperatureHighTime: 1509562800,
//         temperatureLow: 8.68,
//         temperatureLowTime: 1509580800,
//         apparentTemperatureHigh: 13.03,
//         apparentTemperatureHighTime: 1509562800,
//         apparentTemperatureLow: 6.99,
//         apparentTemperatureLowTime: 1509580800,
//         dewPoint: -0.51,
//         humidity: 0.54,
//         pressure: 1027.17,
//         windSpeed: 0.85,
//         windGust: 7.89,
//         windGustTime: 1509591600,
//         windBearing: 184,
//         cloudCover: 0.64,
//         uvIndex: 2,
//         uvIndexTime: 1509552000,
//         ozone: 272.05,
//         temperatureMin: 2.83,
//         temperatureMinTime: 1509534000,
//         temperatureMax: 13.03,
//         temperatureMaxTime: 1509562800,
//         apparentTemperatureMin: 1.56,
//         apparentTemperatureMinTime: 1509534000,
//         apparentTemperatureMax: 13.03,
//         apparentTemperatureMaxTime: 1509562800,
//       },
//       {
//         time: 1509595200,
//         summary: 'Mostly cloudy throughout the day.',
//         icon: 'partly-cloudy-day',
//         sunriseTime: 1509622139,
//         sunsetTime: 1509659561,
//         moonPhase: 0.44,
//         precipIntensity: 0.2692,
//         precipIntensityMax: 1.0262,
//         precipIntensityMaxTime: 1509667200,
//         precipProbability: 0.75,
//         precipType: 'rain',
//         temperatureHigh: 19.51,
//         temperatureHighTime: 1509652800,
//         temperatureLow: 12.74,
//         temperatureLowTime: 1509706800,
//         apparentTemperatureHigh: 19.51,
//         apparentTemperatureHighTime: 1509652800,
//         apparentTemperatureLow: 12.74,
//         apparentTemperatureLowTime: 1509706800,
//         dewPoint: 11.43,
//         humidity: 0.75,
//         pressure: 1021.85,
//         windSpeed: 3.96,
//         windGust: 11.61,
//         windGustTime: 1509624000,
//         windBearing: 205,
//         cloudCover: 0.97,
//         uvIndex: 2,
//         uvIndexTime: 1509642000,
//         ozone: 287.03,
//         temperatureMin: 12.29,
//         temperatureMinTime: 1509595200,
//         temperatureMax: 19.51,
//         temperatureMaxTime: 1509652800,
//         apparentTemperatureMin: 12.29,
//         apparentTemperatureMinTime: 1509595200,
//         apparentTemperatureMax: 19.51,
//         apparentTemperatureMaxTime: 1509652800,
//       },
//       {
//         time: 1509681600,
//         summary: 'Mostly cloudy starting in the afternoon, continuing until evening.',
//         icon: 'partly-cloudy-day',
//         sunriseTime: 1509708611,
//         sunsetTime: 1509745891,
//         moonPhase: 0.47,
//         precipIntensity: 0,
//         precipIntensityMax: 0.0051,
//         precipIntensityMaxTime: 1509710400,
//         precipProbability: 0,
//         temperatureHigh: 17.81,
//         temperatureHighTime: 1509732000,
//         temperatureLow: 5.35,
//         temperatureLowTime: 1509796800,
//         apparentTemperatureHigh: 17.81,
//         apparentTemperatureHighTime: 1509732000,
//         apparentTemperatureLow: 3.02,
//         apparentTemperatureLowTime: 1509796800,
//         dewPoint: 7.58,
//         humidity: 0.64,
//         pressure: 1019.76,
//         windSpeed: 3.07,
//         windGust: 9.75,
//         windGustTime: 1509681600,
//         windBearing: 301,
//         cloudCover: 0.34,
//         uvIndex: 3,
//         uvIndexTime: 1509724800,
//         ozone: 275.74,
//         temperatureMin: 9.79,
//         temperatureMinTime: 1509764400,
//         temperatureMax: 17.81,
//         temperatureMaxTime: 1509732000,
//         apparentTemperatureMin: 7.78,
//         apparentTemperatureMinTime: 1509764400,
//         apparentTemperatureMax: 17.81,
//         apparentTemperatureMaxTime: 1509732000,
//       },
//       {
//         time: 1509768000,
//         summary: 'Mostly cloudy throughout the day.',
//         icon: 'partly-cloudy-day',
//         sunriseTime: 1509795082,
//         sunsetTime: 1509832223,
//         moonPhase: 0.52,
//         precipIntensity: 0,
//         precipIntensityMax: 0.0051,
//         precipIntensityMaxTime: 1509796800,
//         precipProbability: 0,
//         temperatureHigh: 11.66,
//         temperatureHighTime: 1509818400,
//         temperatureLow: 8.39,
//         temperatureLowTime: 1509843600,
//         apparentTemperatureHigh: 11.66,
//         apparentTemperatureHighTime: 1509818400,
//         apparentTemperatureLow: 6.64,
//         apparentTemperatureLowTime: 1509843600,
//         dewPoint: 0.52,
//         humidity: 0.57,
//         pressure: 1026.93,
//         windSpeed: 1.06,
//         windGust: 6.92,
//         windGustTime: 1509768000,
//         windBearing: 1,
//         cloudCover: 0.48,
//         uvIndex: 2,
//         uvIndexTime: 1509811200,
//         ozone: 277.53,
//         temperatureMin: 5.35,
//         temperatureMinTime: 1509796800,
//         temperatureMax: 11.66,
//         temperatureMaxTime: 1509818400,
//         apparentTemperatureMin: 3.02,
//         apparentTemperatureMinTime: 1509796800,
//         apparentTemperatureMax: 11.66,
//         apparentTemperatureMaxTime: 1509818400,
//       },
//     ],
//   },
//   alerts: [
//     {
//       title: 'Flash Flood Watch',
//       regions: [
//         'Bronx',
//         'Kings (Brooklyn)',
//         'New York (Manhattan)',
//         'Northeast Suffolk',
//         'Northern Nassau',
//         'Northern Queens',
//         'Northern Westchester',
//         'Northwest Suffolk',
//         'Orange',
//         'Putnam',
//         'Richmond (Staten Is.)',
//         'Rockland',
//         'Southeast Suffolk',
//         'Southern Nassau',
//         'Southern Queens',
//         'Southern Westchester',
//         'Southwest Suffolk',
//       ],
//       severity: 'warning',
//       time: 1509292800,
//       expires: 1509357600,
//       description: '...Heavy Rain Sunday Afternoon and Evening... ...FLASH FLOOD WATCH REMAINS IN EFFECT FROM SUNDAY AFTERNOON THROUGH LATE SUNDAY NIGHT... The Flash Flood Watch continues for * Southern Connecticut, Northeast New Jersey, the Lower Hudson Valley, New York City and Long Island. * From Sunday afternoon through late Sunday night. * An intensifying low pressure system along the Mid Atlantic Coast Sunday into Sunday night will interact with tropical moisture, producing heavy rain with embedded thunderstorms. Widespread rainfall amounts of 1 to 3 inches are expected, with localized higher amounts up to 5 inches. Urban and small stream flooding is possible.\n',
//       uri: 'https://alerts.weather.gov/cap/wwacapget.php?x=NY12586EF85EE8.FlashFloodWatch.12586F157820NY.OKXFFAOKX.b41844112cd29fd857361e46d036c81a',
//     },
//     {
//       title: 'High Wind Watch',
//       regions: [
//         'Bronx',
//         'Kings (Brooklyn)',
//         'New York (Manhattan)',
//         'Northern Nassau',
//         'Northern Queens',
//         'Richmond (Staten Is.)',
//         'Southern Nassau',
//         'Southern Queens',
//         'Southern Westchester',
//       ],
//       severity: 'warning',
//       time: 1509314400,
//       expires: 1509357600,
//       description: '...High Winds from the NYC Metro area East across Long Island and Southern CT Sunday Evening... .As a cold front moves east toward the area, low pressure is forecast to develop along the front and rapidly intensify as it moves north across the area Sunday night. ...HIGH WIND WATCH IN EFFECT FROM SUNDAY EVENING THROUGH LATE SUNDAY NIGHT... The National Weather Service in Upton has issued a High Wind Watch, which is in effect from Sunday evening through late Sunday night. * Winds...Southeast 25 to 35 mph with gusts up to 55 mph. * Timing...Sunday night. Conditions may continue into Monday. * Impacts...Strong winds may blow down limbs, trees, and power lines. Scattered power outages are expected. Limited visibilities will make travel difficult.\n',
//       uri: 'https://alerts.weather.gov/cap/wwacapget.php?x=NY12586EF85A38.HighWindWatch.12586F157820NY.OKXNPWOKX.e7be151537fdf95b132f85daa7da283d',
//     },
//   ],
//   flags: {
//     'sources': [
//       'isd',
//       'nearest-precip',
//       'nwspa',
//       'cmc',
//       'gfs',
//       'hrrr',
//       'madis',
//       'nam',
//       'sref',
//       'darksky',
//     ],
//     'isd-stations': [
//       '725020-14734',
//       '725025-94741',
//       '725030-14732',
//       '725033-94728',
//       '725060-99999',
//       '744860-94789',
//       '744976-99999',
//       '997271-99999',
//       '997272-99999',
//       '997743-99999',
//       '999999-14732',
//       '999999-14734',
//       '999999-14786',
//       '999999-94706',
//       '999999-94728',
//       '999999-94741',
//     ],
//     'units': 'si',
//   },
//   offset: -4,
// };
