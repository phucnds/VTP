
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/app/wsgw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9hcHAvd3Nndy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQXNFO0FBQ3RFLDBEQUFxRDtBQUNyRCx5Q0FBNkQ7QUFFaEQsUUFBQSxZQUFZLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0gsQ0FBQyxDQUFDLG9DQUFvQztJQUN0QyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDdkYsR0FBRyxPQUFPLENBQUM7QUFFaEIsZ0ZBQWdGO0FBQ2hGLDZFQUE2RTtBQUVoRSxRQUFBLGNBQWMsR0FBRztJQUMxQixJQUFJO0lBQ0osY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQixDQUFBO0FBRUQsSUFBTSxPQUFPLEdBQUc7SUFDWixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLGdCQUFnQixFQUFFLEtBQUs7Q0FDMUIsQ0FBQztBQUNGLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQTtBQUNsQixJQUFZLFNBT1g7QUFQRCxXQUFZLFNBQVM7SUFDakIscUNBQXdCLENBQUE7SUFDeEIsb0NBQXVCLENBQUE7SUFDdkIsb0NBQXVCLENBQUE7SUFDdkIscUNBQXdCLENBQUE7SUFDeEIsK0JBQWtCLENBQUE7SUFDbEIsK0JBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQVBXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBT3BCO0FBV0Qsa0JBQWUsSUFBSTtJQUFvQix3QkFBYztJQUtqRDtRQUFBLFlBQ0ksaUJBQU8sU0FDVjtRQUxNLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQy9CLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUlaLHVCQUFpQixHQUEyQyxFQUFFLENBQUM7O0lBRHZFLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFXLENBQUMsb0JBQVksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTSx3QkFBUyxHQUFoQjtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELDJCQUFZLEdBQVosVUFBYSxLQUFhO1FBQTFCLGlCQU9DO1FBTkcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU87UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUEzQixDQUEyQixDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO1lBQ3pHLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSxHQUFXLEVBQUUsSUFBUyxFQUFFLE9BQWdCO1FBQzdELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDNUIsT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUF6QyxDQUF5QyxDQUM1QyxDQUFDO0lBQ04sQ0FBQztJQUNELG1GQUFtRjtJQUNuRiwrQkFBZ0IsR0FBaEIsVUFBaUIsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFXLEVBQUUsVUFBYztRQUFwRixpQkF1QkM7UUF2QndELHFCQUFBLEVBQUEsV0FBVztRQUFFLDJCQUFBLEVBQUEsY0FBYztRQUN4RSxJQUFBLE1BQU0sR0FBVyxHQUFHLE9BQWQsRUFBRSxJQUFJLEdBQUssR0FBRyxLQUFSLENBQVE7UUFDNUIsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUksT0FBTyxTQUFJLEdBQUcsY0FBVyxDQUFDLENBQUE7WUFDekMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBSSxPQUFPLFNBQUksR0FBRyxjQUFXLENBQUMsQ0FBQTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN2QixVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFDWDtpQkFBTTtnQkFDSCxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVM7d0JBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOzt3QkFDM0QsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2lCQUM1QztxQkFDSTtvQkFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQTtpQkFDdkM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNELDZCQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksc0JBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDbEIsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBQ0Qsb0NBQXFCLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsSUFBSSxzQkFBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUNuQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUNLLDBCQUFXLEdBQWpCLFVBQWtCLElBQW1CLEVBQUUsSUFBUyxFQUFFLFNBQVMsRUFBRSxRQUF3QixFQUFFLFVBQXVCO1FBQWpELHlCQUFBLEVBQUEsV0FBVyxPQUFPLENBQUMsS0FBSztRQUFFLDJCQUFBLEVBQUEsZUFBdUI7Ozs7O2dCQUN0RyxPQUFPLEdBQU0sSUFBSSxDQUFDLE9BQU8sU0FBSSxJQUFJLENBQUMsR0FBSyxDQUFBO2dCQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsV0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUE7Z0JBQ2xFLE9BQU8sR0FBZ0IsSUFBSSxRQUFwQixFQUFFLElBQUksR0FBVSxJQUFJLEtBQWQsRUFBRSxHQUFHLEdBQUssSUFBSSxJQUFULENBQVM7Z0JBQ25DLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsT0FBTyxTQUFJLEdBQUssQ0FBQyxDQUFBO2dCQUM3QyxNQUFNLEdBQUcsVUFBQyxNQUFpQixFQUFFLEdBQVU7b0JBQVYsb0JBQUEsRUFBQSxVQUFVO29CQUN6QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JFLENBQUMsQ0FBQTtnQkFDRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7b0JBQ2hCLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7b0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtvQkFDbkMsc0JBQU07aUJBQ1Q7Z0JBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRTdCLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQzt5QkFDekQsSUFBSSxDQUFDLFVBQUMsSUFBSTt3QkFDUCxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUVwQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7b0JBQ2xGLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNoQixLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNwQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs0QkFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDOUIsT0FBTzt5QkFDVjt3QkFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUE7d0JBQ2xDLDJCQUEyQjtvQkFDL0IsQ0FBQyxDQUFDLEVBQUM7OztLQUNWO0lBQ0QsdUJBQVEsR0FBUixVQUFTLElBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU07UUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksSUFBSSxDQUFDLEdBQUssQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUNiLElBQUEsR0FBRyxHQUFnQyxPQUFPLElBQXZDLEVBQUUsSUFBSSxHQUEwQixPQUFPLEtBQWpDLEVBQUUsUUFBUSxHQUFnQixPQUFPLFNBQXZCLEVBQUUsU0FBUyxHQUFLLE9BQU8sVUFBWixDQUFZO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUUsVUFBQyxDQUFDO1lBQ0QsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsNEJBQWEsR0FBYixVQUFjLElBQW1CLEVBQUUsTUFBaUIsRUFBRSxJQUFTLEVBQUUsU0FBUyxFQUFFLFFBQXNCLEVBQUUsR0FBVTtRQUFsQyx5QkFBQSxFQUFBLFdBQVcsT0FBTyxDQUFDLEdBQUc7UUFBRSxvQkFBQSxFQUFBLFVBQVU7UUFDMUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFBLE9BQU8sR0FBaUMsSUFBSSxRQUFyQyxFQUFFLElBQUksR0FBMkIsSUFBSSxLQUEvQixFQUFFLEdBQUcsR0FBc0IsSUFBSSxJQUExQixFQUFFLGVBQWUsR0FBSyxJQUFJLGdCQUFULENBQVM7UUFDcEQsSUFBSSxlQUFlLElBQUksMkJBQWUsQ0FBQyxPQUFPO1lBQUUsT0FBTTtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFJLE1BQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ00saUJBQUUsR0FBVCxVQUE4QixJQUFZLEVBQUUsUUFBVyxFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUN2RixPQUFPLGlCQUFNLEVBQUUsWUFBQyxLQUFHLElBQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSxrQkFBRyxHQUFWLFVBQVcsS0FBc0IsRUFBRSxRQUFrQztRQUNqRSxpQkFBTSxHQUFHLFlBQUMsS0FBRyxNQUFNLENBQUMsS0FBSyxDQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG1CQUFJLEdBQVgsVUFBWSxLQUFzQixFQUFFLFFBQWtDO1FBQ2xFLGlCQUFNLElBQUksWUFBQyxLQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsd0JBQXdCO0lBQ3hCLHVDQUF3QixHQUF4QixVQUF5QixFQUFTO1FBQVQsbUJBQUEsRUFBQSxTQUFTO1FBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQUMsSUFBSTtnQkFDM0MsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELCtCQUFnQixHQUFoQixVQUFpQixFQUFTO1FBQVQsbUJBQUEsRUFBQSxTQUFTO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFDLElBQUk7Z0JBQ25DLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxrQ0FBbUIsR0FBbkIsVUFBb0IsSUFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUMvQyxPQUFPLEVBQUUsSUFBSSxNQUFBLEVBQUUsRUFBRSxJQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsV0FBQztBQUFELENBNUpvQixBQTRKbkIsQ0E1SnNDLEVBQUUsQ0FBQyxXQUFXLEdBNEpuRCxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0V3NndywgSVdTR1dDbGllbnQgfSBmcm9tIFwiQGVsb2Z1bi92ZHMtZ2FtaS0yMDIyLXdzZ3dcIjtcbmltcG9ydCBMb2FkaW5nQ292ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9Mb2FkaW5nQ292ZXJcIjtcbmltcG9ydCB7IEVycm9ySGFuZGxlVHlwZSwgSUFQSUludGVyZmFjZSB9IGZyb20gXCIuL0FQSURlZmluZVwiO1xuXG5leHBvcnQgY29uc3QgU0VSVklDRV9IT1NUID0gKC9sb2NhbGhvc3QvaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkgfHwgL2Vsb2Z1bi5naXRodWIuaW8vaS50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSkpXG4gICAgPyBgd3NzOi8vdnRwb3N0LmJldGEuZWxvZnVuLm5ldC93c2d3L2BcbiAgICA6ICgvLitjZG5cXC4uKy8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpXG4gICAgICAgID8gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvXmh0dHAvLCAnd3MnKS5yZXBsYWNlKC8oLispY2RuXFwuKC4rKS8sICckMS4kMicpXG4gICAgICAgIDogKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF0ucmVwbGFjZSgnaHR0cCcsICd3cycpLnJlcGxhY2UoJ2h0dHBzJywgJ3dzcycpKVxuICAgICkgKyAnd3Nndy8nO1xuXG4vLyBjb25zdCBTRVJWSUNFX0hPU1QgPSBgd3NzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vd3Nndy9gOyAvLyBGb3IgcHJvZHVjdGlvblxuLy8gY29uc3QgU0VSVklDRV9IT1NUID0gYHdzczovL2dhbWktbXZ0LmVsb2Z1bi5uZXQvd3Nndy9gOyAvLyBGb3IgZGV2ZWxvcG1lbnRcblxuZXhwb3J0IGNvbnN0IGFwaU5lZWRMb2FkaW5nID0gW1xuICAgICdtZScsXG4gICAgJ2V4Y2hhbmdlQ29pbicsXG4gICAgJ2dldEFsbFJld2FyZHNIaXN0b3J5JyxcbiAgICAnZ2V0VGlja2V0c0hpc3RvcnknLFxuICAgICdnZXRDb2luV2lubmVyTGlzdCcsXG4gICAgJ2hpdFNhdmVOb3dCdXR0b24nLFxuXVxuXG5jb25zdCBUSU1FT1VUID0ge1xuICAgIGJvb2tBbmRDbGFpbVJld2FyZDogNjAwMDAsXG4gICAgY2xhaW1Mb2dpblJld2FyZDogNjAwMDAsXG59O1xuY29uc3QgREVCVUcgPSB0cnVlXG5leHBvcnQgZW51bSBFcnJvckNvZGUge1xuICAgIENPTkVDVElPTl9USU1FT1VUID0gXCIwMVwiLFxuICAgIFNFUlZFUl9FWENFUFRJT04gPSBcIjAyXCIsXG4gICAgQ0xJRU5UX0VYQ0VQVElPTiA9IFwiMDNcIixcbiAgICBOT1RfQVVUSEVOVElDQVRFRCA9IFwiMDRcIixcbiAgICBPVEhFUl9DQVNFUyA9IFwiMDVcIixcbiAgICBUSU1FT1VUX1RYVCA9IFwiMDZcIixcbn1cbmludGVyZmFjZSBJQVBJUmVzcG9uc2Uge1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcbn1cbmludGVyZmFjZSBJVXNlclJlcXVlc3RBUElJbmZvIHtcbiAgICBhcGk6IElBUElJbnRlcmZhY2U7XG4gICAgZGF0YTogYW55O1xuICAgIG9uU3VjY2VzczogYW55O1xuICAgIG9uRmFpbGVkOiBhbnk7XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgKGNsYXNzIFdTR1cgZXh0ZW5kcyBjYy5TeXN0ZW1FdmVudCB7XG4gICAgcHJpdmF0ZSB3c2d3OiBQcm9taXNlPElXU0dXQ2xpZW50PjtcbiAgICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgbG9hZGluZyA9IDA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgdXNlclJlcXVlc3RlZEluZm86IHsgW2tleTogc3RyaW5nXTogSVVzZXJSZXF1ZXN0QVBJSW5mbyB9ID0ge307XG4gICAgZ2V0V3NndygpIHtcbiAgICAgICAgaWYgKCF0aGlzLndzZ3cpIHtcbiAgICAgICAgICAgIHRoaXMud3NndyA9IGNvbm5lY3RXc2d3KFNFUlZJQ0VfSE9TVCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMud3NndztcbiAgICB9XG4gICAgcHVibGljIGNsZWFyV3NndygpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDbGVhciB3c2d3Jyk7XG4gICAgICAgIHRoaXMud3NndyA9IG51bGw7XG4gICAgfVxuICAgIHNldEF1dGhUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2VuID09IHRva2VuICYmIHRoaXMuaXNBdXRoZW50aWNhdGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V3NndygpLnRoZW4od3NndyA9PiB3c2d3LnNldEF1dGhUb2tlbih0b2tlbikudGhlbigoKSA9PiB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWUpKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0aFRva2VuKHRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlcXVlc3Qoc2VydmljZTogc3RyaW5nLCBhcGk6IHN0cmluZywgZGF0YTogYW55LCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxJQVBJUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V3NndygpLnRoZW4oKHdzZ3cpID0+XG4gICAgICAgICAgICB3c2d3LnJlcXVlc3Qoc2VydmljZSwgYXBpLCBkYXRhLCB0aW1lb3V0KVxuICAgICAgICApO1xuICAgIH1cbiAgICAvLyBzdWJzY3JpYmU6IChzZXJ2aWNlOiBzdHJpbmcsIGNoYW5uZWw6IHN0cmluZywgY2I/OiAoZGF0YTogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xuICAgIG9uUHJvbWlzZVJlc29sdmUocmVzLCBvblN1Y2Nlc3MsIG9uRmFpbGVkLCBzZXJ2aWNlLCBhcGksIHR5cGUgPSBudWxsLCByZXRyeVRpbWVzID0gMCkge1xuICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gcmVzXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7c2VydmljZX0tJHthcGl9IDogc3VjZXNzYClcbiAgICAgICAgICAgIERFQlVHICYmIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBvblN1Y2Nlc3MgJiYgb25TdWNjZXNzKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7c2VydmljZX0tJHthcGl9IDogZmFpbGVkYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUmVxdWVzdCh0eXBlLCBkYXRhLCBvblN1Y2Nlc3MsIG9uRmFpbGVkLCByZXRyeVRpbWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhID09IFwiVElNRU9VVFwiKSBvbkZhaWxlZChFcnJvckNvZGUuQ09ORUNUSU9OX1RJTUVPVVQpXG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugb25GYWlsZWQoRXJyb3JDb2RlLlNFUlZFUl9FWENFUFRJT04pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbkZhaWxlZChFcnJvckNvZGUuT1RIRVJfQ0FTRVMsIHJlcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZGluZ0NvdW50VXAoYXBpOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGFwaU5lZWRMb2FkaW5nLmluY2x1ZGVzKGFwaSkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyArPSAxO1xuICAgICAgICAgICAgTG9hZGluZ0NvdmVyLkluc3RhbmNlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkaW5nQ291bnRDb3VudGRvd24oYXBpOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGFwaU5lZWRMb2FkaW5nLmluY2x1ZGVzKGFwaSkpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyAtPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgTG9hZGluZ0NvdmVyLkluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyB1c2VyUmVxdWVzdCh0eXBlOiBJQVBJSW50ZXJmYWNlLCBkYXRhOiBhbnksIG9uU3VjY2Vzcywgb25GYWlsZWQgPSBjb25zb2xlLmVycm9yLCByZXRyeVRpbWVzOiBudW1iZXIgPSA0NSkge1xuICAgICAgICBsZXQgYXBpVHlwZSA9IGAke3R5cGUuc2VydmljZX0tJHt0eXBlLmFwaX1gXG4gICAgICAgIHRoaXMudXNlclJlcXVlc3RlZEluZm9bYXBpVHlwZV0gPSB7IGFwaTogdHlwZSwgb25TdWNjZXNzLCBvbkZhaWxlZCwgZGF0YSB9XG4gICAgICAgIGNvbnN0IHsgc2VydmljZSwgY29kZSwgYXBpIH0gPSB0eXBlXG4gICAgICAgIERFQlVHICYmIGNvbnNvbGUubG9nKGByZXF1ZXN0IDogJHtzZXJ2aWNlfS0ke2FwaX1gKVxuICAgICAgICBjb25zdCBvbkZhaWwgPSAocmVhc29uOiBFcnJvckNvZGUsIHJlcyA9IG51bGwpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGluZyh0eXBlLCByZWFzb24sIGRhdGEsIG9uU3VjY2Vzcywgb25GYWlsZWQsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldHJ5VGltZXMgPCAwKSB7XG4gICAgICAgICAgICBERUJVRyAmJiBjb25zb2xlLmxvZyhcInJldHJ5IHRpbWUgb3V0XCIpXG4gICAgICAgICAgICBvbkZhaWwoRXJyb3JDb2RlLk5PVF9BVVRIRU5USUNBVEVEKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdDb3VudFVwKHR5cGUuYXBpKVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoc2VydmljZSwgYXBpLCBkYXRhLCBUSU1FT1VUW2FwaV0gfHwgMTUwMDApXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0NvdW50Q291bnRkb3duKHR5cGUuYXBpKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vblByb21pc2VSZXNvbHZlKGRhdGEsIG9uU3VjY2Vzcywgb25GYWlsLCBzZXJ2aWNlLCBhcGksIHR5cGUsIHJldHJ5VGltZXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycnJcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHNlcnZpY2UsIGFwaSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQ291bnRDb3VudGRvd24odHlwZS5hcGkpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZSkgPT0gXCJzdHJpbmdcIiAmJiBlLmluZGV4T2YoXCJ0aW1lb3V0XCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbChFcnJvckNvZGUuVElNRU9VVF9UWFQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uRmFpbChFcnJvckNvZGUuQ0xJRU5UX0VYQ0VQVElPTilcbiAgICAgICAgICAgICAgICAvLyBvbkZhaWxlZCAmJiBvbkZhaWxlZChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICByZXRyeUFwaSh0eXBlOiBJQVBJSW50ZXJmYWNlLCBzdWNjZXNzLCBmYWlsZWQpIHtcbiAgICAgICAgbGV0IGFwaUluZm8gPSB0aGlzLnVzZXJSZXF1ZXN0ZWRJbmZvW2Ake3R5cGUuc2VydmljZX0tJHt0eXBlLmFwaX1gXVxuICAgICAgICBpZiAoIWFwaUluZm8pIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBhcGksIGRhdGEsIG9uRmFpbGVkLCBvblN1Y2Nlc3MgfSA9IGFwaUluZm9cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclJlcXVlc3QoYXBpLCBkYXRhLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKGUpXG4gICAgICAgICAgICBvblN1Y2Nlc3MoZSk7XG4gICAgICAgIH0sIChlKSA9PiB7XG4gICAgICAgICAgICBmYWlsZWQgJiYgZmFpbGVkKGUpXG4gICAgICAgICAgICBvbkZhaWxlZChlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZXJyb3JIYW5kbGluZyh0eXBlOiBJQVBJSW50ZXJmYWNlLCByZWFzb246IEVycm9yQ29kZSwgZGF0YTogYW55LCBvblN1Y2Nlc3MsIG9uRmFpbGVkID0gY29uc29sZS5sb2csIHJlcyA9IG51bGwpIHtcbiAgICAgICAgb25GYWlsZWQgJiYgb25GYWlsZWQocmVzKTtcbiAgICAgICAgY29uc3QgeyBzZXJ2aWNlLCBjb2RlLCBhcGksIGVycm9ySGFuZGxlVHlwZSB9ID0gdHlwZVxuICAgICAgICBpZiAoZXJyb3JIYW5kbGVUeXBlID09IEVycm9ySGFuZGxlVHlwZS5OT1RISU5HKSByZXR1cm5cbiAgICAgICAgdGhpcy5lbWl0KFwiRUxPX0VSUk9SXCIsIHsgdHlwZTogZXJyb3JIYW5kbGVUeXBlLCBlcnJvckNvZGU6IGAkeygnMCcgKyBjb2RlKS5zbGljZSgtMil9LSR7cmVhc29ufWAsIGFwaTogdHlwZSwgcmVzIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgb248VCBleHRlbmRzIEZ1bmN0aW9uPih0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBULCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKTogVCB7XG4gICAgICAgIHJldHVybiBzdXBlci5vbihgJHt0eXBlfWAsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvZmYoZXZlbnQ6IHN0cmluZyB8IFN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgICAgICBzdXBlci5vZmYoYCR7U3RyaW5nKGV2ZW50KX1gLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmNlKGV2ZW50OiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIub25jZShgJHtTdHJpbmcoZXZlbnQpfWAsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS1ub3RpIGJhci0tLS0tXG4gICAgc3Vic2NyaWJlQ29tcGxldGVNaXNzaW9uKGNiID0gbnVsbCkge1xuICAgICAgICB0aGlzLmdldFdzZ3coKS50aGVuKCh3c2d3KSA9PiB7XG4gICAgICAgICAgICB3c2d3LnN1YnNjcmliZSgnZ2FtZScsICdjb21wbGV0ZU1pc3Npb24nLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN1YnNjcmliZUJ1eVR1cm4oY2IgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZ2V0V3NndygpLnRoZW4oKHdzZ3cpID0+IHtcbiAgICAgICAgICAgIHdzZ3cuc3Vic2NyaWJlKCdnYW1lJywgJ2FkZFR1cm4nLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKGRhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZUVycm9yQ2FsbEJhY2soY29kZTogbnVtYmVyIHwgc3RyaW5nLCB0eXBlLCBjYikge1xuICAgICAgICByZXR1cm4geyBjb2RlLCBjYiwgdHlwZSB9XG4gICAgfVxufSkoKTtcbiJdfQ==