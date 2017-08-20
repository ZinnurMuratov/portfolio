import Rx from 'rxjs/Rx';
import Vue from 'vue';
import * as VueRx from 'vue-rx';

import { VueResourceModel } from './';

Vue.use(VueRx, Rx);

export class VueRxJSModel extends VueResourceModel { }
