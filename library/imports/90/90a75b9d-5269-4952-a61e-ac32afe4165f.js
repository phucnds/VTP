"use strict";
cc._RF.push(module, '90a75udUmlJUqYerDKv5BZf', 'Helper');
// scripts/utils/Helper.ts

"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundMgr_1 = require("../common/SoundMgr");
var global_id = Date.now();
exports.default = new (/** @class */ (function () {
    function Helper() {
        this.isExcute = false;
        this.noSleep = null;
    }
    Helper.prototype.GetUnitId = function () {
        return "uid-" + global_id++;
    };
    Helper.prototype.Rand = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Helper.prototype.RandInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Helper.prototype.RandomProperty = function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };
    ;
    Helper.prototype.RandArgument = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args[this.RandInt(0, args.length - 1)];
    };
    Helper.prototype.RandArray = function (arr) {
        return arr[this.RandInt(0, arr.length - 1)];
    };
    Helper.prototype.RandTypeEnum = function (obj) {
        var keys = Object.keys(obj);
        return this.RandInt(0, keys.length / 2 - 1);
    };
    Helper.prototype.GetKey = function (obj, index) {
        return Object.keys(obj)[index];
    };
    Helper.prototype.GetKeyEnum = function (obj, index) {
        var keys = Object.keys(obj);
        return keys[index + keys.length / 2];
    };
    Helper.prototype.GetIndexEnum = function (obj, name) {
        var keys = Object.keys(obj);
        for (var i = keys.length / 2; i < keys.length; i++) {
            if (keys[i] == name) {
                return i - keys.length / 2;
            }
        }
        return -1;
    };
    Helper.prototype.FallBackCopyToClipboard = function (str) {
        var el = document.createElement('textarea');
        var isIOS = navigator.userAgent.search(/(iPad|iPhone|iphone|iPod)/) != -1;
        el.value = str;
        document.body.appendChild(el);
        if (isIOS) {
            el.contentEditable = true;
            el.readOnly = false;
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            el.setSelectionRange(0, 999999);
        }
        else {
            el.setAttribute('readonly', '');
            el.select();
        }
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    Helper.prototype.CopyToClipboard = function (str) {
        if (!navigator.clipboard) {
            this.FallBackCopyToClipboard(str);
            return;
        }
        navigator.clipboard.writeText(str).then(function () {
        }, function (err) {
        });
    };
    Helper.prototype.Normalized = function (x1, y1, x2, y2) {
        var dX = x1 - x2;
        var dY = y1 - y2;
        var length = Math.sqrt(dX * dX + dY * dY);
        return new cc.Vec2(dX / length, dY / length);
    };
    Helper.prototype.MoveToTarget = function (current, target, speed) {
        speed = Math.abs(speed);
        if (current < target) {
            return Math.min(target, current + speed);
        }
        else {
            return Math.max(target, current - speed);
        }
    };
    Helper.prototype.Collision2Rect = function (rect1, rect2) {
        if (rect1.x + rect1.width < rect2.x ||
            rect1.y + rect1.height < rect2.y ||
            rect2.x + rect2.width < rect1.x ||
            rect2.y + rect2.height < rect1.y) {
            return false;
        }
        return true;
    };
    Helper.prototype.CollisionPointRect = function (x, y, rect) {
        if (x < rect.x ||
            y < rect.y ||
            x > rect.x + rect.width ||
            y > rect.y + rect.height) {
            return false;
        }
        return true;
    };
    Helper.prototype.Distance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    Helper.prototype.Constrain = function (value, min, max) {
        value = Math.max(min, value);
        value = Math.min(max, value);
        return value;
    };
    Helper.prototype.ToRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    Helper.prototype.ToAngle = function (radian) {
        return (radian / Math.PI) * 180;
    };
    Helper.prototype.TimeoutPromise = function (time, promise) {
        var timeout = new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject("Timed out.");
            }, time);
        });
        return Promise.race([promise, timeout]);
    };
    Helper.prototype.HttpRequest = function (method, url, body, responseType, headers, requestParams) {
        if (headers === void 0) { headers = null; }
        if (requestParams === void 0) { requestParams = {}; }
        var logEvent = window.logEvent || console.log;
        var start = Date.now();
        var apiName = url.split('/').pop().split('?').shift();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (method == "POST") {
                xhr.setRequestHeader("Content-Type", "application/json");
            }
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var item = headers_1[_i];
                xhr.setRequestHeader(item.key, item.value);
            }
            if (responseType) {
                xhr.responseType = responseType;
            }
            xhr.timeout = 10000;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                    logEvent(apiName, {
                        method: method,
                        url: url,
                        body: body,
                        requestParams: requestParams,
                        reponseStatus: xhr.status,
                        response: xhr.response,
                        duration: Date.now() - start
                    });
                }
            };
            xhr.onerror = function (e) {
                logEvent('apiRequestError', {
                    apiName: apiName,
                    method: method,
                    url: url,
                    body: body,
                    requestParams: requestParams,
                    duration: Date.now() - start
                });
                reject('error');
            };
            xhr.ontimeout = function (e) {
                reject('timed out');
            };
            xhr.send(body);
        });
    };
    Helper.prototype.DrawLine = function (graphic, x1, y1, x2, y2, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.moveTo(x1, y1);
        graphic.lineTo(x2, y2);
        graphic.stroke();
    };
    Helper.prototype.DrawSquare = function (graphic, x, y, width, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawRect(graphic, x, y, width, width, color, lineWidth);
    };
    Helper.prototype.DrawRect = function (graphic, x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        typeof x === "number"
            ? graphic.rect(x, y, width, height)
            : graphic.rect(x.x, x.y, x.width, x.height);
        graphic.stroke();
    };
    Helper.prototype.DrawArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color, lineWidth, withLine) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        if (withLine === void 0) { withLine = false; }
        var TWO_PI = Math.PI * 2;
        var drawOffset = Math.PI * 1.5; // start angle at 0 o'clock
        startAngle += drawOffset + offsetAngle;
        endAngle += drawOffset + offsetAngle;
        startAngle = TWO_PI - startAngle;
        endAngle = TWO_PI - endAngle;
        startAngle = startAngle > TWO_PI ? startAngle % TWO_PI : startAngle;
        endAngle = endAngle > TWO_PI ? endAngle % TWO_PI : endAngle;
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.arc(x, y, r, startAngle, endAngle, anticlockwise);
        if (withLine) {
            graphic.lineTo(x, y);
            graphic.close();
        }
        graphic.stroke();
    };
    Helper.prototype.DrawCircle = function (graphic, x, y, r, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        this.DrawEllipse(graphic, x, y, r, r, color, lineWidth);
    };
    Helper.prototype.DrawEllipse = function (graphic, x, y, rX, rY, color, lineWidth) {
        if (color === void 0) { color = cc.Color.RED; }
        if (lineWidth === void 0) { lineWidth = 2; }
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.ellipse(x, y, rX, rY);
        graphic.stroke();
    };
    Helper.prototype.FillSquare = function (graphic, x, y, width, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillRect(graphic, x, y, width, width, color);
    };
    Helper.prototype.FillRect = function (graphic, x, y, width, height, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawRect(graphic, x, y, width, height, color, 0);
        graphic.fill();
    };
    Helper.prototype.FillArc = function (graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, color) {
        if (startAngle === void 0) { startAngle = 0; }
        if (endAngle === void 0) { endAngle = Math.PI * 2; }
        if (offsetAngle === void 0) { offsetAngle = 0; }
        if (anticlockwise === void 0) { anticlockwise = true; }
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawArc(graphic, x, y, r, startAngle, endAngle, offsetAngle, anticlockwise, undefined, 0, true);
        graphic.fill();
    };
    Helper.prototype.FillCircle = function (graphic, x, y, r, color) {
        if (color === void 0) { color = cc.Color.RED; }
        this.FillEllipse(graphic, x, y, r, r, color);
    };
    Helper.prototype.FillEllipse = function (graphic, x, y, rX, rY, color) {
        if (color === void 0) { color = cc.Color.RED; }
        graphic.fillColor = color;
        this.DrawEllipse(graphic, x, y, rX, rY, color, 0);
        graphic.fill();
    };
    Helper.prototype.registerButtonEvent = function (target, handle) {
        var _this = this;
        target.on(cc.Node.EventType.TOUCH_END, function (event, captureListeners) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isExcute)
                            return [2 /*return*/];
                        SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                        this.isExcute = true;
                        setTimeout(function () {
                            _this.isExcute = false;
                        }, 300);
                        _a = handle;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, handle()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _a;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Helper.prototype.shuffleArray = function (arr) {
        var _a;
        var array = __spreadArrays(arr);
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    Helper.prototype.convertTextName = function (str) {
        var pname = "" + str;
        if (pname.length > 6) {
            pname = pname.substr(0, 12) + '...';
        }
        return pname;
    };
    return Helper;
}()))();

cc._RF.pop();