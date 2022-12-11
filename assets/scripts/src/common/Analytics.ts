// import * as amplitude from 'amplitude-js';
// import { isDev, isStaging } from './utils';
// import { version } from '../../package.json';

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
const logEvent = (ev: string, props?: any, revenue?: any) => {
  // if (!evTimelines[ev] || evTimelines[ev] < Date.now()) {
  //   if (analyticsEvents[ev]) {
  //     analytics.logEvent(ev, props, revenue);
  //   }
  if ((window as any).gtag) {
    (window as any).gtag('event', ev, {
      ...props,
      non_interaction: true
    });
  }
  // }
  // evTimelines[ev] = Date.now() + 100;
};
const eloEvent = logEvent;

export const setUserProperties = (props: any) => {
  // analytics.setUserProperties(props);
};

export const setUserId = (userId: string) => {
  // analytics.setUserId(`userId:${userId}`);
};
const analytics = {};

export { analytics, logEvent, eloEvent };
