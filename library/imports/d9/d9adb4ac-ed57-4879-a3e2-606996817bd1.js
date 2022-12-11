"use strict";
cc._RF.push(module, 'd9adbSs7VdIeaPiYGmWgXvR', 'LocalizedText');
// scripts/utils/LocalizedText.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var Events_1 = require("../common/Events");
var Localization_1 = require("../common/Localization");
var LocalizedText = /** @class */ (function (_super) {
    __extends(LocalizedText, _super);
    // @executeInEditMode
    function LocalizedText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property({type: LOCALIZATION_ENUM})
        _this.KeyIndex = 0;
        _this.TextTransform = 0;
        _this.Key = '';
        _this.fontSizeEn = new cc.Vec2(0, 0);
        _this.fontSizeVi = new cc.Vec2(0, 0);
        _this.keyParams = null;
        return _this;
    }
    LocalizedText.prototype.onLoad = function () {
        //runtime only
        try {
            Events_1.default.registerEvent(Events_1.default.EventLanguageChanged, this.localize.bind(this));
        }
        catch (e) { }
        this.mDefaultString = this.node.getComponent(cc.Label).string;
        // this.getComponent(cc.Label).cacheMode = cc.Label.CacheMode.BITMAP
    };
    LocalizedText.prototype.replaceKeyParam = function (arg) {
        this.keyParams = arg;
        this.localize();
    };
    LocalizedText.prototype.setKey = function (key) {
        this.Key = key;
        this.onEnable();
    };
    LocalizedText.prototype.onEnable = function () {
        //include edit mode
        this.Key = this.Key.trim().toUpperCase();
        if (!this.Key) {
            if (this.KeyIndex != 0) {
                this.Key = Localization_1.LOCALIZATION_KEYS[this.KeyIndex] || '';
            }
        }
        else if (this.Key != Localization_1.LOCALIZATION_KEYS[this.KeyIndex]) {
            var index = Localization_1.LOCALIZATION_KEYS.indexOf(this.Key);
            this.KeyIndex = index != -1 ? index : 0;
            this.Key = Localization_1.LOCALIZATION_KEYS[this.KeyIndex] || '';
        }
        this.localize();
    };
    LocalizedText.prototype.replaceText = function (str) {
        if (!this.keyParams)
            return str;
        var string = str;
        var key = Object.keys(this.keyParams)[0];
        string = string.split(key).join(this.keyParams[key]);
        // string = string.replace(key, this.keyParams[key])
        // this.keyParams.map(e => {
        // })
        return string;
    };
    LocalizedText.prototype.localize = function () {
        var string = Localization_1.default.GetLocalizedString(Localization_1.LOCALIZATION_KEYS[this.KeyIndex]) || this.mDefaultString;
        string = this.replaceText(string);
        switch (this.TextTransform) {
            case Localization_1.TextTransforms.None:
                break;
            case Localization_1.TextTransforms.Upper:
                string = string.toUpperCase();
                break;
            case Localization_1.TextTransforms.Lower:
                string = string.toLowerCase();
                break;
        }
        var txt = this.node.getComponent(cc.Label);
        txt.string = string;
        // if(Manager.Instance)
        // {
        if (window.language == "en" && this.fontSizeEn && this.fontSizeEn.x != 0) {
            txt.fontSize = this.fontSizeEn.x;
            if (this.fontSizeEn.y != 0)
                txt.lineHeight = this.fontSizeEn.y;
        }
        else if (window.language == "vi" && this.fontSizeVi && this.fontSizeVi.x != 0) {
            txt.fontSize = this.fontSizeVi.x;
            if (this.fontSizeVi.y != 0)
                txt.lineHeight = this.fontSizeVi.y;
        }
        // }
    };
    __decorate([
        property({ type: Localization_1.TextTransforms })
    ], LocalizedText.prototype, "TextTransform", void 0);
    __decorate([
        property(cc.String)
    ], LocalizedText.prototype, "Key", void 0);
    __decorate([
        property(cc.Vec2)
    ], LocalizedText.prototype, "fontSizeEn", void 0);
    __decorate([
        property(cc.Vec2)
    ], LocalizedText.prototype, "fontSizeVi", void 0);
    LocalizedText = __decorate([
        ccclass
        // @executeInEditMode
    ], LocalizedText);
    return LocalizedText;
}(cc.Component));
exports.default = LocalizedText;

cc._RF.pop();