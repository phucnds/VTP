
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/common/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96a0byzBbREVaPKiSmbpxQP', 'utils');
// scripts/src/common/utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorldPosition = exports.trackUserInteract = exports.formatMsisdn = exports.convertToCurrency = exports.randomString = exports.randomInt = exports.getLocalizedText = exports.getCampaignId = exports.truncatePhone = exports.getRemanningTime = exports.formatCurrencyVND = exports.getQueryString = exports.getCDN = exports.safeParseJson = exports.setLocalStorageKey = exports.getLocalStorageKey = exports.MyanmarDateTimeFormat = exports.getRemainTime = exports.isMyViettelDev = exports.isMyID = exports.isReviewBuild = exports.disableLogin = exports.isVNBuild = exports.formatCurrency = exports.getUnitId = void 0;
var Localization_1 = require("../../common/Localization");
var APIDefine_1 = require("../app/APIDefine");
var wsgw_1 = require("../app/wsgw");
// import { Howl } from 'howler';
var global_id = Date.now();
var getUnitId = function () {
    return "uid-" + global_id++;
};
exports.getUnitId = getUnitId;
// const soundDock = new Howl({
//   src: ['sound/dock.webm', 'sound/dock.mp3']
// });
// const soundRoll = new Howl({
//   src: ['sound/roll.webm', 'sound/roll.mp3']
// });
// const soundWinSpin = new Howl({
//   src: ['sound/win-spin.mp3']
// });
// const soundClick = new Howl({
//   src: ['sound/tap.webm', 'sound/tap.mp3']
// });
// export const playSoundDock = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   await soundDock.play();
// };
// export const playSoundRoll = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundRoll) {
//     return;
//   }
//   await soundRoll.play();
// };
// export const playSoundWinSpin = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundWinSpin) {
//     return;
//   }
//   await soundWinSpin.play();
// };
// export const playSoundClick = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundClick) {
//     return;
//   }
//   await soundClick.play();
// };
var formatCurrency = function (val, digits) {
    if (parseInt("" + val) === parseFloat("" + val)) {
        return val;
    }
    return val.toFixed(digits || 1);
};
exports.formatCurrency = formatCurrency;
var isVNBuild = function () {
    return window.location.origin === 'https://elofun-vn.web.app';
};
exports.isVNBuild = isVNBuild;
var disableLogin = function () {
    return window.location.origin === 'https://myid-games-staging.elofun.com';
};
exports.disableLogin = disableLogin;
var isReviewBuild = function () {
    return (window.location.origin === 'https://elofun.com' ||
        window.location.origin === 'https://elofungames.com');
};
exports.isReviewBuild = isReviewBuild;
var isMyID = function () {
    return (window.location.origin === 'https://myid-games.elofun.com' ||
        window.location.origin === 'https://elofun-myid-game-staging.web.app');
};
exports.isMyID = isMyID;
var isMyViettelDev = function () {
    return (window.location.origin === 'https://mvt-dev.elofun.com' ||
        window.location.origin === 'http://localhost:7456');
};
exports.isMyViettelDev = isMyViettelDev;
var getRemainTime = function (startDate, endDate) {
    if (Date.now() > endDate * 1000) {
        return {
            active: false,
            days: 0,
            duration: '00:00:00',
            percent: 100
        };
    }
    var duration = Math.max(endDate * 1000 - Date.now(), 0);
    var days = Math.floor(duration / (24 * 3600 * 1000));
    duration -= days * 24 * 3600 * 1000;
    var hours = Math.floor(duration / (3600 * 1000));
    duration -= hours * 3600 * 1000;
    var minutes = Math.floor(duration / (60 * 1000));
    duration -= minutes * 60 * 1000;
    var seconds = Math.floor(duration / 1000);
    var percent = Math.round(((Date.now() - startDate * 1000) * 100) / ((endDate - startDate) * 1000));
    return {
        active: true,
        days: days,
        duration: hours + ":" + minutes + ":" + seconds,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        percent: percent
    };
};
exports.getRemainTime = getRemainTime;
// export const myanmarMoment = (...args: any) =>
//   moment(...args).tz('Asia/Yangon');
exports.MyanmarDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
var getLocalStorageKey = function (key) {
    return localStorage && localStorage.getItem(key);
};
exports.getLocalStorageKey = getLocalStorageKey;
var setLocalStorageKey = function (key, value) {
    return localStorage && localStorage.setItem(key, value);
};
exports.setLocalStorageKey = setLocalStorageKey;
var safeParseJson = function (rawVal, defaultVal) {
    try {
        if (!rawVal)
            return defaultVal;
        return JSON.parse(rawVal);
    }
    catch (error) {
        return defaultVal;
    }
};
exports.safeParseJson = safeParseJson;
var getCDN = function (url) {
    if (url.match(/elo-games.s3-ap-southeast-1.amazonaws.com/i)) {
        url = url.replace('elo-games.s3-ap-southeast-1.amazonaws.com', 'elo-games.elofun.com');
    }
    else if (url.match(/elo-assets.s3-ap-southeast-1.amazonaws.com/i)) {
        url = url.replace('elo-assets.s3-ap-southeast-1.amazonaws.com', 'elo-games.elofun.com');
    }
    else if (url.match(/e8d31c1b-5385-4052-abaf-3dc0fabb24c3.s3-ap-southeast-1.amazonaws.com/i)) {
        url = url.replace('e8d31c1b-5385-4052-abaf-3dc0fabb24c3.s3-ap-southeast-1.amazonaws.com', 'elo-games.elofun.com');
    }
    return url;
};
exports.getCDN = getCDN;
var getQueryString = function (key) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    var params = {};
    vars.forEach(function (q) {
        var pair = q.split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return params[key] || '';
};
exports.getQueryString = getQueryString;
var formatCurrencyVND = function (val) {
    var parts = val.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};
exports.formatCurrencyVND = formatCurrencyVND;
var getRemanningTime = function (endDate) {
    var date = new Date();
    var seconds = (endDate.getTime() - date.getTime()) / 1000;
    return {
        day: Math.floor(seconds / (86400)),
        hour: Math.floor(seconds % (86400) / 3600),
        minute: Math.floor(seconds % 3600 / 60),
        second: Math.floor(seconds % 60),
    };
};
exports.getRemanningTime = getRemanningTime;
var truncatePhone = function (phone) {
    return phone ? phone.substring(0, 2) + 'xxxxxxx' + phone.substring(phone.length - 3, phone.length) : '-';
};
exports.truncatePhone = truncatePhone;
var getCampaignId = function () {
    return exports.getQueryString('campaignId') || "64";
};
exports.getCampaignId = getCampaignId;
var getLocalizedText = function (key, content) {
    if (content === void 0) { content = null; }
    var index = Localization_1.LOCALIZATION_KEYS.indexOf(key);
    var str = Localization_1.default.GetLocalizedString(Localization_1.LOCALIZATION_KEYS[index]);
    if (!content) {
        return str;
    }
    content.forEach(function (txt) {
        str = str.replace('%s', txt);
    });
    return str;
};
exports.getLocalizedText = getLocalizedText;
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
exports.randomInt = randomInt;
var randomString = function (length) {
    return Math.random().toString(36).substr(0, length).replace('.', '');
};
exports.randomString = randomString;
var convertToCurrency = function (value) {
    var formatter = new Intl.NumberFormat('vi-VN');
    return formatter.format(value);
};
exports.convertToCurrency = convertToCurrency;
var formatMsisdn = function (msisdn) {
    msisdn = ("" + msisdn).replace(/^84/, '0');
    if (!msisdn.match(/^0/)) {
        msisdn = "0" + msisdn;
    }
    return msisdn;
};
exports.formatMsisdn = formatMsisdn;
var trackUserInteract = function () {
    var isInteracted = localStorage.getItem('interacted') === 'true';
    if (isInteracted)
        return;
    wsgw_1.default.userRequest(APIDefine_1.default.userInteract, {}, function (e) {
        localStorage.setItem('interacted', 'true');
    }, console.error);
};
exports.trackUserInteract = trackUserInteract;
var getWorldPosition = function (node) {
    return node.parent.convertToWorldSpaceAR(node.getPosition());
};
exports.getWorldPosition = getWorldPosition;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9jb21tb24vdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQTRFO0FBQzVFLDhDQUF5QztBQUN6QyxvQ0FBK0I7QUFFL0IsaUNBQWlDO0FBQ2pDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFNLFNBQVMsR0FBRztJQUNyQixPQUFPLFNBQU8sU0FBUyxFQUFJLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRlcsUUFBQSxTQUFTLGFBRXBCO0FBRUYsK0JBQStCO0FBQy9CLCtDQUErQztBQUMvQyxNQUFNO0FBQ04sK0JBQStCO0FBQy9CLCtDQUErQztBQUMvQyxNQUFNO0FBQ04sa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyxNQUFNO0FBQ04sZ0NBQWdDO0FBQ2hDLDZDQUE2QztBQUM3QyxNQUFNO0FBQ04sNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QixLQUFLO0FBRUwsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsTUFBTTtBQUNOLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2QsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QixLQUFLO0FBRUwsZ0RBQWdEO0FBQ2hELDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsTUFBTTtBQUNOLHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsTUFBTTtBQUNOLCtCQUErQjtBQUMvQixLQUFLO0FBRUwsOENBQThDO0FBQzlDLDJDQUEyQztBQUMzQyxjQUFjO0FBQ2QsTUFBTTtBQUNOLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2QsTUFBTTtBQUNOLDZCQUE2QjtBQUM3QixLQUFLO0FBRUUsSUFBTSxjQUFjLEdBQUcsVUFBQyxHQUFXLEVBQUUsTUFBZTtJQUN2RCxJQUFJLFFBQVEsQ0FBQyxLQUFHLEdBQUssQ0FBQyxLQUFLLFVBQVUsQ0FBQyxL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QUFnQixvQkFFNUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYWxpemF0aW9uLCB7IExPQ0FMSVpBVElPTl9LRVlTIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Mb2NhbGl6YXRpb25cIjtcbmltcG9ydCBBUElEZWZpbmUgZnJvbSBcIi4uL2FwcC9BUElEZWZpbmVcIjtcbmltcG9ydCB3c2d3IGZyb20gXCIuLi9hcHAvd3Nnd1wiO1xuXG4vLyBpbXBvcnQgeyBIb3dsIH0gZnJvbSAnaG93bGVyJztcbmxldCBnbG9iYWxfaWQgPSBEYXRlLm5vdygpO1xuZXhwb3J0IGNvbnN0IGdldFVuaXRJZCA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgdWlkLSR7Z2xvYmFsX2lkKyt9YDtcbn07XG5cbi8vIGNvbnN0IHNvdW5kRG9jayA9IG5ldyBIb3dsKHtcbi8vICAgc3JjOiBbJ3NvdW5kL2RvY2sud2VibScsICdzb3VuZC9kb2NrLm1wMyddXG4vLyB9KTtcbi8vIGNvbnN0IHNvdW5kUm9sbCA9IG5ldyBIb3dsKHtcbi8vICAgc3JjOiBbJ3NvdW5kL3JvbGwud2VibScsICdzb3VuZC9yb2xsLm1wMyddXG4vLyB9KTtcbi8vIGNvbnN0IHNvdW5kV2luU3BpbiA9IG5ldyBIb3dsKHtcbi8vICAgc3JjOiBbJ3NvdW5kL3dpbi1zcGluLm1wMyddXG4vLyB9KTtcbi8vIGNvbnN0IHNvdW5kQ2xpY2sgPSBuZXcgSG93bCh7XG4vLyAgIHNyYzogWydzb3VuZC90YXAud2VibScsICdzb3VuZC90YXAubXAzJ11cbi8vIH0pO1xuLy8gZXhwb3J0IGNvbnN0IHBsYXlTb3VuZERvY2sgPSBhc3luYyAoKSA9PiB7XG4vLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXV0ZVNmeCcpKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyAgIGF3YWl0IHNvdW5kRG9jay5wbGF5KCk7XG4vLyB9O1xuXG4vLyBleHBvcnQgY29uc3QgcGxheVNvdW5kUm9sbCA9IGFzeW5jICgpID0+IHtcbi8vICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXRlU2Z4JykpIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgaWYgKCFzb3VuZFJvbGwpIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgYXdhaXQgc291bmRSb2xsLnBsYXkoKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCBwbGF5U291bmRXaW5TcGluID0gYXN5bmMgKCkgPT4ge1xuLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211dGVTZngnKSkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy8gICBpZiAoIXNvdW5kV2luU3Bpbikge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy8gICBhd2FpdCBzb3VuZFdpblNwaW4ucGxheSgpO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IHBsYXlTb3VuZENsaWNrID0gYXN5bmMgKCkgPT4ge1xuLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ211dGVTZngnKSkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy8gICBpZiAoIXNvdW5kQ2xpY2spIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vICAgYXdhaXQgc291bmRDbGljay5wbGF5KCk7XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAodmFsOiBudW1iZXIsIGRpZ2l0cz86IG51bWJlcikgPT4ge1xuICAgIGlmIChwYXJzZUludChgJHt2YWx9YCkgPT09IHBhcnNlRmxvYXQoYCR7dmFsfWApKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiB2YWwudG9GaXhlZChkaWdpdHMgfHwgMSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNWTkJ1aWxkID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9lbG9mdW4tdm4ud2ViLmFwcCc7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9teWlkLWdhbWVzLXN0YWdpbmcuZWxvZnVuLmNvbSc7XG59O1xuXG5leHBvcnQgY29uc3QgaXNSZXZpZXdCdWlsZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9lbG9mdW4uY29tJyB8fFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9lbG9mdW5nYW1lcy5jb20nXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc015SUQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHBzOi8vbXlpZC1nYW1lcy5lbG9mdW4uY29tJyB8fFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9lbG9mdW4tbXlpZC1nYW1lLXN0YWdpbmcud2ViLmFwcCdcbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTXlWaWV0dGVsRGV2ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPT09ICdodHRwczovL212dC1kZXYuZWxvZnVuLmNvbScgfHxcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NzQ1NidcbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVtYWluVGltZSA9IChzdGFydERhdGU6IG51bWJlciwgZW5kRGF0ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKERhdGUubm93KCkgPiBlbmREYXRlICogMTAwMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGRheXM6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogJzAwOjAwOjAwJyxcbiAgICAgICAgICAgIHBlcmNlbnQ6IDEwMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsZXQgZHVyYXRpb24gPSBNYXRoLm1heChlbmREYXRlICogMTAwMCAtIERhdGUubm93KCksIDApO1xuICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gKDI0ICogMzYwMCAqIDEwMDApKTtcbiAgICBkdXJhdGlvbiAtPSBkYXlzICogMjQgKiAzNjAwICogMTAwMDtcblxuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvICgzNjAwICogMTAwMCkpO1xuICAgIGR1cmF0aW9uIC09IGhvdXJzICogMzYwMCAqIDEwMDA7XG5cbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvICg2MCAqIDEwMDApKTtcbiAgICBkdXJhdGlvbiAtPSBtaW51dGVzICogNjAgKiAxMDAwO1xuXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyAxMDAwKTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKFxuICAgICAgICAoKERhdGUubm93KCkgLSBzdGFydERhdGUgKiAxMDAwKSAqIDEwMCkgLyAoKGVuZERhdGUgLSBzdGFydERhdGUpICogMTAwMClcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgZGF5cyxcbiAgICAgICAgZHVyYXRpb246IGAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gLFxuICAgICAgICBob3VycyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgcGVyY2VudFxuICAgIH07XG59O1xuXG4vLyBleHBvcnQgY29uc3QgbXlhbm1hck1vbWVudCA9ICguLi5hcmdzOiBhbnkpID0+XG4vLyAgIG1vbWVudCguLi5hcmdzKS50eignQXNpYS9ZYW5nb24nKTtcbmV4cG9ydCBjb25zdCBNeWFubWFyRGF0ZVRpbWVGb3JtYXQgPSAnREQvTU0vWVlZWSBISDptbTpzcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2VLZXkgPSAoa2V5OiBzdHJpbmcpID0+XG4gICAgbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2VLZXkgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+XG4gICAgbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuXG5leHBvcnQgY29uc3Qgc2FmZVBhcnNlSnNvbiA9IDxUPihyYXdWYWw6IHN0cmluZywgZGVmYXVsdFZhbDogVCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICghcmF3VmFsKSByZXR1cm4gZGVmYXVsdFZhbDtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmF3VmFsKSBhcyBUO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDRE4gPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh1cmwubWF0Y2goL2Vsby1nYW1lcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2kpKSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFxuICAgICAgICAgICAgJ2Vsby1nYW1lcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJyxcbiAgICAgICAgICAgICdlbG8tZ2FtZXMuZWxvZnVuLmNvbSdcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHVybC5tYXRjaCgvZWxvLWFzc2V0cy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2kpKSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFxuICAgICAgICAgICAgJ2Vsby1hc3NldHMuczMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbScsXG4gICAgICAgICAgICAnZWxvLWdhbWVzLmVsb2Z1bi5jb20nXG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdXJsLm1hdGNoKFxuICAgICAgICAgICAgL2U4ZDMxYzFiLTUzODUtNDA1Mi1hYmFmLTNkYzBmYWJiMjRjMy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL2lcbiAgICAgICAgKVxuICAgICkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcbiAgICAgICAgICAgICdlOGQzMWMxYi01Mzg1LTQwNTItYWJhZi0zZGMwZmFiYjI0YzMuczMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbScsXG4gICAgICAgICAgICAnZWxvLWdhbWVzLmVsb2Z1bi5jb20nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UXVlcnlTdHJpbmcgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgIGNvbnN0IHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIHZhcnMuZm9yRWFjaChxID0+IHtcbiAgICAgICAgY29uc3QgcGFpciA9IHEuc3BsaXQoJz0nKTtcbiAgICAgICAgcGFyYW1zW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXNba2V5XSB8fCAnJztcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRDdXJyZW5jeVZORCA9ICh2YWw6IG51bWJlcikgPT4ge1xuICAgIGxldCBwYXJ0cyA9IHZhbC50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKCcuJyk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZW1hbm5pbmdUaW1lID0gKGVuZERhdGU6IERhdGUpID0+IHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIHNlY29uZHM6IG51bWJlciA9IChlbmREYXRlLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIDEwMDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXk6IE1hdGguZmxvb3Ioc2Vjb25kcyAvICg4NjQwMCkpLFxuICAgICAgICBob3VyOiBNYXRoLmZsb29yKHNlY29uZHMgJSAoODY0MDApIC8gMzYwMCksXG4gICAgICAgIG1pbnV0ZTogTWF0aC5mbG9vcihzZWNvbmRzICUgMzYwMCAvIDYwKSxcbiAgICAgICAgc2Vjb25kOiBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCksXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVQaG9uZSA9IChwaG9uZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHBob25lID8gcGhvbmUuc3Vic3RyaW5nKDAsIDIpICsgJ3h4eHh4eHgnICsgcGhvbmUuc3Vic3RyaW5nKHBob25lLmxlbmd0aCAtIDMsIHBob25lLmxlbmd0aCkgOiAnLSdcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhbXBhaWduSWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFF1ZXJ5U3RyaW5nKCdjYW1wYWlnbklkJykgfHwgXCI2NFwiO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxpemVkVGV4dCA9IChrZXk6IHN0cmluZywgY29udGVudDogQXJyYXk8c3RyaW5nPiA9IG51bGwpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IExPQ0FMSVpBVElPTl9LRVlTLmluZGV4T2Yoa2V5KTtcbiAgICBsZXQgc3RyID0gTG9jYWxpemF0aW9uLkdldExvY2FsaXplZFN0cmluZyhMT0NBTElaQVRJT05fS0VZU1tpbmRleF0pO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgY29udGVudC5mb3JFYWNoKCh0eHQpID0+IHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoJyVzJywgdHh0KVxuICAgIH0pXG5cbiAgICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSAobGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDAsIGxlbmd0aCkucmVwbGFjZSgnLicsICcnKVxufVxuXG5leHBvcnQgY29uc3QgY29udmVydFRvQ3VycmVuY3kgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3ZpLVZOJyk7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TXNpc2RuID0gKG1zaXNkbjogc3RyaW5nKSA9PiB7XG4gICAgbXNpc2RuID0gYCR7bXNpc2RufWAucmVwbGFjZSgvXjg0LywgJzAnKTtcbiAgICBpZiAoIW1zaXNkbi5tYXRjaCgvXjAvKSkge1xuICAgICAgICBtc2lzZG4gPSBgMCR7bXNpc2RufWA7XG4gICAgfVxuICAgIHJldHVybiBtc2lzZG47XG59O1xuXG5leHBvcnQgY29uc3QgdHJhY2tVc2VySW50ZXJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNJbnRlcmFjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ludGVyYWN0ZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgaWYgKGlzSW50ZXJhY3RlZCkgcmV0dXJuO1xuXG4gICAgd3Nndy51c2VyUmVxdWVzdChcbiAgICAgICAgQVBJRGVmaW5lLnVzZXJJbnRlcmFjdCxcbiAgICAgICAge30sXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW50ZXJhY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnNvbGUuZXJyb3JcbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0V29ybGRQb3NpdGlvbiA9IChub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiA9PiB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLmdldFBvc2l0aW9uKCkpO1xufSJdfQ==