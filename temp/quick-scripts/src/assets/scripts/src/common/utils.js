"use strict";
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