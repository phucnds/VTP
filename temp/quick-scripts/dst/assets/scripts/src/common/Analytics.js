
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/common/Analytics.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9jb21tb24vQW5hbHl0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLGdEQUFnRDs7Ozs7Ozs7Ozs7Ozs7QUFFaEQscUJBQXFCO0FBQ3JCLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQsOENBQThDO0FBQzlDLEtBQUs7QUFFTCx1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsdUJBQXVCO0FBRXZCLDZDQUE2QztBQUM3QyxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCLHNDQUFzQztBQUN0QyxNQUFNO0FBRU4sZUFBZTtBQUNmLDJDQUEyQztBQUMzQyxJQUFJO0FBRUoscUNBQXFDO0FBRXJDLHVEQUF1RDtBQUN2RCxpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHNCQUFzQjtBQUN0Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixLQUFLO0FBRUwsd0RBQXdEO0FBQ3hELElBQU0sUUFBUSxHQUFHLFVBQUMsRUFBVSxFQUFFLEtBQVcsRUFBRSxPQUFhO0lBQ3RELDBEQUEwRDtJQUMxRCwrQkFBK0I7SUFDL0IsOENBQThDO0lBQzlDLE1BQU07SUFDTixJQUFLLE1BQWMsQ0FBQyxJQUFJLEVBQUU7UUFDdkIsTUFBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSx3QkFDM0IsS0FBSyxLQUNSLGVBQWUsRUFBRSxJQUFJLElBQ3JCLENBQUM7S0FDSjtJQUNELElBQUk7SUFDSixzQ0FBc0M7QUFDeEMsQ0FBQyxDQUFDO0FBWWtCLDRCQUFRO0FBWDVCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQztBQVdJLDRCQUFRO0FBVC9CLElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFVO0lBQzFDLHNDQUFzQztBQUN4QyxDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUI7QUFFSyxJQUFNLFNBQVMsR0FBRyxVQUFDLE1BQWM7SUFDdEMsMkNBQTJDO0FBQzdDLENBQUMsQ0FBQztBQUZXLFFBQUEsU0FBUyxhQUVwQjtBQUNGLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVaLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgYW1wbGl0dWRlIGZyb20gJ2FtcGxpdHVkZS1qcyc7XG4vLyBpbXBvcnQgeyBpc0RldiwgaXNTdGFnaW5nIH0gZnJvbSAnLi91dGlscyc7XG4vLyBpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuLy8gY29uc3QgQVBJX0tFWVMgPSB7XG4vLyAgIGRldjogJ2Q4ZDIzYTVlMGM5MjYwY2ZhODFiMDNiNGMzNjMyMmVhJyxcbi8vICAgc3RhZ2luZzogJzQxOTEzZWM3OWE3ZDljMDY3OTcxNWNlMTNlNzkwOTQ3Jyxcbi8vICAgcHJvZDogJzRlNzU0M2RhNDVlYTIxYjQ3OTg1ZTQ3NGUzOTU3MDI1Jyxcbi8vIH07XG5cbi8vIGNvbnN0IGFwaUtleSA9IGlzRGV2XG4vLyAgID8gQVBJX0tFWVMuZGV2XG4vLyAgIDogaXNTdGFnaW5nXG4vLyAgICAgPyBBUElfS0VZUy5zdGFnaW5nXG4vLyAgICAgOiBBUElfS0VZUy5wcm9kO1xuXG4vLyBjb25zdCBhbmFseXRpY3MgPSBhbXBsaXR1ZGUuZ2V0SW5zdGFuY2UoKTtcbi8vIGFuYWx5dGljcy5pbml0KGFwaUtleSwgbnVsbCwge1xuLy8gICBpbmNsdWRlUmVmZXJyZXI6IHRydWUsXG4vLyAgIGRvbWFpbjogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFxuLy8gfSk7XG5cbi8vIGlmIChpc0Rldikge1xuLy8gICAod2luZG93IGFzIGFueSkuYW5hbHl0aWNzID0gYW5hbHl0aWNzO1xuLy8gfVxuXG4vLyBhbmFseXRpY3Muc2V0VmVyc2lvbk5hbWUodmVyc2lvbik7XG5cbi8vIGNvbnN0IGFuYWx5dGljc0V2ZW50czogeyBbZXY6IHN0cmluZ106IGJvb2xlYW4gfSA9IHtcbi8vICAgcHVyY2hhc2VfY29pbl9zdWNjZXNzOiB0cnVlLFxuLy8gICByZWRlZW1fc3VjY2VzczogdHJ1ZSxcbi8vICAgc3RhcnRfZ2FtZTogdHJ1ZSxcbi8vICAgc2VsZWN0X2dhbWU6IHRydWUsXG4vLyAgIGNsaWNrX3BsYXlhZ2FpbjogdHJ1ZSxcbi8vICAgY2xpY2tfZ2FtZTogdHJ1ZSxcbi8vICAgcHVyY2hhc2VfY29pbjogdHJ1ZSxcbi8vICAgY2xpY2tfcmVtYXRjaDogdHJ1ZSxcbi8vICAgc2VsZWN0X2JldDogdHJ1ZSxcbi8vICAgd2luX2dhbWU6IHRydWUsXG4vLyAgIGxvc2VfZ2FtZTogdHJ1ZSxcbi8vICAgbG9naW46IHRydWVcbi8vIH07XG5cbi8vIGNvbnN0IGV2VGltZWxpbmVzOiB7IFtldm5hbWU6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5jb25zdCBsb2dFdmVudCA9IChldjogc3RyaW5nLCBwcm9wcz86IGFueSwgcmV2ZW51ZT86IGFueSkgPT4ge1xuICAvLyBpZiAoIWV2VGltZWxpbmVzW2V2XSB8fCBldlRpbWVsaW5lc1tldl0gPCBEYXRlLm5vdygpKSB7XG4gIC8vICAgaWYgKGFuYWx5dGljc0V2ZW50c1tldl0pIHtcbiAgLy8gICAgIGFuYWx5dGljcy5sb2dFdmVudChldiwgcHJvcHMsIHJldmVudWUpO1xuICAvLyAgIH1cbiAgaWYgKCh3aW5kb3cgYXMgYW55KS5ndGFnKSB7XG4gICAgKHdpbmRvdyBhcyBhbnkpLmd0YWcoJ2V2ZW50JywgZXYsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgbm9uX2ludGVyYWN0aW9uOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgLy8gfVxuICAvLyBldlRpbWVsaW5lc1tldl0gPSBEYXRlLm5vdygpICsgMTAwO1xufTtcbmNvbnN0IGVsb0V2ZW50ID0gbG9nRXZlbnQ7XG5cbmV4cG9ydCBjb25zdCBzZXRVc2VyUHJvcGVydGllcyA9IChwcm9wczogYW55KSA9PiB7XG4gIC8vIGFuYWx5dGljcy5zZXRVc2VyUHJvcGVydGllcyhwcm9wcyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VXNlcklkID0gKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIC8vIGFuYWx5dGljcy5zZXRVc2VySWQoYHVzZXJJZDoke3VzZXJJZH1gKTtcbn07XG5jb25zdCBhbmFseXRpY3MgPSB7fTtcblxuZXhwb3J0IHsgYW5hbHl0aWNzLCBsb2dFdmVudCwgZWxvRXZlbnQgfTtcbiJdfQ==