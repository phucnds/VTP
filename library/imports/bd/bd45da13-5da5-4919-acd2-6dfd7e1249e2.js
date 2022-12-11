"use strict";
cc._RF.push(module, 'bd45doTXaVJGazSbf1+Ekni', 'Localization');
// scripts/common/Localization.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTransforms = exports.LOCALIZATION_ENUM = exports.LOCALIZATION_KEYS = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STRINGS = require("../../strings");
var Events_1 = require("./Events");
var enumObj = {};
exports.LOCALIZATION_KEYS = Object.keys(STRINGS);
for (var i = 0; i < exports.LOCALIZATION_KEYS.length; i++) {
    enumObj[exports.LOCALIZATION_KEYS[i]] = i;
}
exports.LOCALIZATION_ENUM = cc.Enum(enumObj);
exports.TextTransforms = cc.Enum({
    None: 0,
    Upper: 1,
    Lower: 2,
});
var Localization = /** @class */ (function (_super) {
    __extends(Localization, _super);
    function Localization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Localization.GetLocalizedString = function (key) {
        // (window as any).language = "en";
        if (window.language == "en")
            window.language = "vi";
        if (STRINGS[key]) {
            return STRINGS[key][(window.language || "vi").toUpperCase()] || '';
        }
        return '';
    };
    Localization.ChangeLanguage = function (language) {
        // localStorage.setItem("lang", language == "vi" ? "en" : language);
        localStorage.setItem("lang", "vi");
        window.language = language;
        Events_1.default.emit(Events_1.default.EventLanguageChanged);
    };
    Localization = __decorate([
        ccclass
    ], Localization);
    return Localization;
}(cc.Component));
exports.default = Localization;

cc._RF.pop();