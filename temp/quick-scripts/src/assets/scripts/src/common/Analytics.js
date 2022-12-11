"use strict";
cc._RF.push(module, '006fcTfgMxL3pnotczQLU0z', 'Analytics');
// scripts/src/common/Analytics.ts

"use strict";
// import * as amplitude from 'amplitude-js';
// import { isDev, isStaging } from './utils';
// import { version } from '../../package.json';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eloEvent = exports.logEvent = exports.analytics = exports.setUserId = exports.setUserProperties = void 0;
// const API_KEYS = {
//   dev: 'd8d23a5e0c9260cfa81b03b4c36322ea',
//   staging: '41913ec79a7d9c0679715ce13e790947',
//   prod: '4e7543da45ea21b47985e474e3957025',
// };
// const apiKey = isDev
//   ? API_KEYS.dev
//   : isStaging
//     ? API_KEYS.staging
//     : API_KEYS.prod;
// const analytics = amplitude.getInstance();
// analytics.init(apiKey, null, {
//   includeReferrer: true,
//   domain: window.location.hostname,
// });
// if (isDev) {
//   (window as any).analytics = analytics;
// }
// analytics.setVersionName(version);
// const analyticsEvents: { [ev: string]: boolean } = {
//   purchase_coin_success: true,
//   redeem_success: true,
//   start_game: true,
//   select_game: true,
//   click_playagain: true,
//   click_game: true,
//   purchase_coin: true,
//   click_rematch: true,
//   select_bet: true,
//   win_game: true,
//   lose_game: true,
//   login: true
// };
// const evTimelines: { [evname: string]: number } = {};
var logEvent = function (ev, props, revenue) {
    // if (!evTimelines[ev] || evTimelines[ev] < Date.now()) {
    //   if (analyticsEvents[ev]) {
    //     analytics.logEvent(ev, props, revenue);
    //   }
    if (window.gtag) {
        window.gtag('event', ev, __assign(__assign({}, props), { non_interaction: true }));
    }
    // }
    // evTimelines[ev] = Date.now() + 100;
};
exports.logEvent = logEvent;
var eloEvent = logEvent;
exports.eloEvent = eloEvent;
var setUserProperties = function (props) {
    // analytics.setUserProperties(props);
};
exports.setUserProperties = setUserProperties;
var setUserId = function (userId) {
    // analytics.setUserId(`userId:${userId}`);
};
exports.setUserId = setUserId;
var analytics = {};
exports.analytics = analytics;

cc._RF.pop();