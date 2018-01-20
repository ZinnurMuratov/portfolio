import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { MomentDate } from './../weather/weather.component';
@Component({
  template: `
    <section
      v-bind:class="{'expanded-view': expanded}"
      class="weather-detail-component">

      <div class="initial-info">
        <div class="day-of-the-week">
          <p>
            {{ timeFetched(dailyWeather.time).dayOfWeek }}, {{timeFetched(dailyWeather.time).day}}
          </p>
        </div>
        <div class="weather-info">
          <p class="weather-info-temp">
            <span class="weather-info-temp-high">
              {{ fahrenheitUnits(dailyWeather.temperatureHigh) }}
            </span>
            <span class="hide-desktop-only">/</span>
            <span class="weather-info-temp-low">
              {{ fahrenheitUnits(dailyWeather.temperatureLow) }}
            </span>
          </p>
          <p class="hide-desktop-only weather-info-summary">{{ dailyWeather.summary }}</p>
        </div>
      </div>

      <div v-if="expanded" class="weather-info expanded-info">
        <p>precipitation intensity: {{dailyWeather.precipIntensity}}mm/h</p>
        <p>pressure: {{dailyWeather.pressure}}mb</p>
        <p>visibility: {{dailyWeather.visibility / 1000}}km</p>
        <p>cloudcover: {{dailyWeather.cloudCover * 100}}%</p>
        <p>precipitation probability: {{dailyWeather.precipProbability * 100}}%</p>
        <p>humidity: {{dailyWeather.humidity * 100}}%</p>
      </div>
    </section>
  `,
})

export class WorksWeatherDetailComponent extends Vue {
  @Prop() public dailyWeather: any;
  @Prop() public fahrenheitUnits: any;
  @Prop() public timeFetched: any;
  @Prop() public expanded: boolean;

  private mounted() {
    // display these too
    // sunrise time
    // sunset time
  }

}
