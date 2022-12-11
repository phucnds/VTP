"use strict";
cc._RF.push(module, 'fa303AkWfdLQr17YvVT0Y1I', 'wsgw');
// scripts/src/app/wsgw.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.apiNeedLoading = exports.SERVICE_HOST = void 0;
var vds_gami_2022_wsgw_1 = require("@elofun/vds-gami-2022-wsgw");
var LoadingCover_1 = require("../../common/LoadingCover");
var APIDefine_1 = require("./APIDefine");
exports.SERVICE_HOST = (/localhost/i.test(window.location.hostname) || /elofun.github.io/i.test(window.location.hostname))
    ? "wss://vtpost.beta.elofun.net/wsgw/"
    : (/.+cdn\..+/.test(window.location.hostname)
        ? window.location.href.replace(/^http/, 'ws').replace(/(.+)cdn\.(.+)/, '$1.$2')
        : (window.location.href.split('?')[0].replace('http', 'ws').replace('https', 'wss'))) + 'wsgw/';
// const SERVICE_HOST = `wss://${window.location.host}/wsgw/`; // For production
// const SERVICE_HOST = `wss://gami-mvt.elofun.net/wsgw/`; // For development
exports.apiNeedLoading = [
    'me',
    'exchangeCoin',
    'getAllRewardsHistory',
    'getTicketsHistory',
    'getCoinWinnerList',
    'hitSaveNowButton',
];
var TIMEOUT = {
    bookAndClaimReward: 60000,
    claimLoginReward: 60000,
};
var DEBUG = true;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["CONECTION_TIMEOUT"] = "01";
    ErrorCode["SERVER_EXCEPTION"] = "02";
    ErrorCode["CLIENT_EXCEPTION"] = "03";
    ErrorCode["NOT_AUTHENTICATED"] = "04";
    ErrorCode["OTHER_CASES"] = "05";
    ErrorCode["TIMEOUT_TXT"] = "06";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.default = new (/** @class */ (function (_super) {
    __extends(WSGW, _super);
    function WSGW() {
        var _this = _super.call(this) || this;
        _this.isAuthenticated = true;
        _this.token = "";
        _this.loading = 0;
        _this.userRequestedInfo = {};
        return _this;
    }
    WSGW.prototype.getWsgw = function () {
        if (!this.wsgw) {
            this.wsgw = vds_gami_2022_wsgw_1.connectWsgw(exports.SERVICE_HOST);
        }
        return this.wsgw;
    };
    WSGW.prototype.clearWsgw = function () {
        console.warn('Clear wsgw');
        this.wsgw = null;
    };
    WSGW.prototype.setAuthToken = function (token) {
        var _this = this;
        if (this.token == token && this.isAuthenticated)
            return;
        this.token = token;
        return this.getWsgw().then(function (wsgw) { return wsgw.setAuthToken(token).then(function () { return _this.isAuthenticated = true; }); }).catch(function (e) {
            _this.isAuthenticated = false;
            _this.setAuthToken(token);
        });
    };
    WSGW.prototype.request = function (service, api, data, timeout) {
        return this.getWsgw().then(function (wsgw) {
            return wsgw.request(service, api, data, timeout);
        });
    };
    // subscribe: (service: string, channel: string, cb?: (data: any) => void) => void;
    WSGW.prototype.onPromiseResolve = function (res, onSuccess, onFailed, service, api, type, retryTimes) {
        var _this = this;
        if (type === void 0) { type = null; }
        if (retryTimes === void 0) { retryTimes = 0; }
        var status = res.status, data = res.data;
        if (status === 200) {
            console.log(service + "-" + api + " : sucess");
            DEBUG && console.log(data);
            onSuccess && onSuccess(data);
        }
        else {
            console.log(service + "-" + api + " : failed");
            console.log(res);
            if (!this.isAuthenticated) {
                setTimeout(function () {
                    _this.userRequest(type, data, onSuccess, onFailed, retryTimes - 1);
                }, 1000);
            }
            else {
                if (status == 500) {
                    if (res.data == "TIMEOUT")
                        onFailed(ErrorCode.CONECTION_TIMEOUT);
                    else
                        onFailed(ErrorCode.SERVER_EXCEPTION);
                }
                else {
                    onFailed(ErrorCode.OTHER_CASES, res);
                }
            }
        }
    };
    WSGW.prototype.loadingCountUp = function (api) {
        if (exports.apiNeedLoading.includes(api)) {
            this.loading += 1;
            LoadingCover_1.default.Instance.show();
        }
    };
    WSGW.prototype.loadingCountCountdown = function (api) {
        if (exports.apiNeedLoading.includes(api)) {
            this.loading -= 1;
            if (this.loading <= 0) {
                LoadingCover_1.default.Instance.hide();
            }
        }
    };
    WSGW.prototype.userRequest = function (type, data, onSuccess, onFailed, retryTimes) {
        if (onFailed === void 0) { onFailed = console.error; }
        if (retryTimes === void 0) { retryTimes = 45; }
        return __awaiter(this, void 0, void 0, function () {
            var apiType, service, code, api, onFail;
            var _this = this;
            return __generator(this, function (_a) {
                apiType = type.service + "-" + type.api;
                this.userRequestedInfo[apiType] = { api: type, onSuccess: onSuccess, onFailed: onFailed, data: data };
                service = type.service, code = type.code, api = type.api;
                DEBUG && console.log("request : " + service + "-" + api);
                onFail = function (reason, res) {
                    if (res === void 0) { res = null; }
                    _this.errorHandling(type, reason, data, onSuccess, onFailed, res);
                };
                if (retryTimes < 0) {
                    DEBUG && console.log("retry time out");
                    onFail(ErrorCode.NOT_AUTHENTICATED);
                    return [2 /*return*/];
                }
                this.loadingCountUp(type.api);
                return [2 /*return*/, this.request(service, api, data, TIMEOUT[api] || 15000)
                        .then(function (data) {
                        _this.loadingCountCountdown(type.api);
                        _this.onPromiseResolve(data, onSuccess, onFail, service, api, type, retryTimes);
                    })
                        .catch(function (e) {
                        console.error("errr");
                        console.error(service, api);
                        console.error(e);
                        _this.loadingCountCountdown(type.api);
                        if (typeof (e) == "string" && e.indexOf("timeout") != -1) {
                            onFail(ErrorCode.TIMEOUT_TXT);
                            return;
                        }
                        onFail(ErrorCode.CLIENT_EXCEPTION);
                        // onFailed && onFailed(e);
                    })];
            });
        });
    };
    WSGW.prototype.retryApi = function (type, success, failed) {
        var apiInfo = this.userRequestedInfo[type.service + "-" + type.api];
        if (!apiInfo)
            return;
        var api = apiInfo.api, data = apiInfo.data, onFailed = apiInfo.onFailed, onSuccess = apiInfo.onSuccess;
        return this.userRequest(api, data, function (e) {
            success && success(e);
            onSuccess(e);
        }, function (e) {
            failed && failed(e);
            onFailed(e);
        });
    };
    WSGW.prototype.errorHandling = function (type, reason, data, onSuccess, onFailed, res) {
        if (onFailed === void 0) { onFailed = console.log; }
        if (res === void 0) { res = null; }
        onFailed && onFailed(res);
        var service = type.service, code = type.code, api = type.api, errorHandleType = type.errorHandleType;
        if (errorHandleType == APIDefine_1.ErrorHandleType.NOTHING)
            return;
        this.emit("ELO_ERROR", { type: errorHandleType, errorCode: ('0' + code).slice(-2) + "-" + reason, api: type, res: res });
    };
    WSGW.prototype.on = function (type, callback, target, useCapture) {
        return _super.prototype.on.call(this, "" + type, callback, target, useCapture);
    };
    WSGW.prototype.off = function (event, listener) {
        _super.prototype.off.call(this, "" + String(event), listener);
        return this;
    };
    WSGW.prototype.once = function (event, listener) {
        _super.prototype.once.call(this, "" + String(event), listener);
        return this;
    };
    //---------noti bar-----
    WSGW.prototype.subscribeCompleteMission = function (cb) {
        if (cb === void 0) { cb = null; }
        this.getWsgw().then(function (wsgw) {
            wsgw.subscribe('game', 'completeMission', function (data) {
                cb && cb(data);
            });
        });
    };
    WSGW.prototype.subscribeBuyTurn = function (cb) {
        if (cb === void 0) { cb = null; }
        this.getWsgw().then(function (wsgw) {
            wsgw.subscribe('game', 'addTurn', function (data) {
                cb && cb(data);
            });
        });
    };
    WSGW.prototype.createErrorCallBack = function (code, type, cb) {
        return { code: code, cb: cb, type: type };
    };
    return WSGW;
}(cc.SystemEvent)))();

cc._RF.pop();