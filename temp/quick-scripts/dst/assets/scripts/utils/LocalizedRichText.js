
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/LocalizedRichText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e0a0p89M1MV72HMb1ro20l', 'LocalizedRichText');
// scripts/utils/LocalizedRichText.ts

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
var LocalizedRichText = /** @class */ (function (_super) {
    __extends(LocalizedRichText, _super);
    function LocalizedRichText() {
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
    LocalizedRichText.prototype.onLoad = function () {
        //runtime only
        try {
            Events_1.default.registerEvent(Events_1.default.EventLanguageChanged, this.localize.bind(this));
        }
        catch (e) { }
        this.mDefaultString = this.node.getComponent(cc.RichText).string;
    };
    LocalizedRichText.prototype.replaceKeyParam = function (arg) {
        this.keyParams = arg;
        this.localize();
    };
    LocalizedRichText.prototype.setKey = function (key) {
        this.Key = key;
        this.onEnable();
    };
    LocalizedRichText.prototype.onEnable = function () {
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
    LocalizedRichText.prototype.replaceText = function (str) {
        if (!this.keyParams)
            return str;
        var string = str;
        var key = Object.keys(this.keyParams)[0];
        string = string.split(key).join(this.keyParams[key]);
        // this.keyParams.map(e => {
        // })
        return string;
    };
    LocalizedRichText.prototype.localize = function () {
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
        var txt = this.node.getComponent(cc.RichText);
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
    ], LocalizedRichText.prototype, "TextTransform", void 0);
    __decorate([
        property(cc.String)
    ], LocalizedRichText.prototype, "Key", void 0);
    __decorate([
        property(cc.Vec2)
    ], LocalizedRichText.prototype, "fontSizeEn", void 0);
    __decorate([
        property(cc.Vec2)
    ], LocalizedRichText.prototype, "fontSizeVi", void 0);
    LocalizedRichText = __decorate([
        ccclass,
        executeInEditMode
    ], LocalizedRichText);
    return LocalizedRichText;
}(cc.Component));
exports.default = LocalizedRichText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0xvY2FsaXplZFJpY2hUZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBQy9ELDJDQUFzQztBQUN0Qyx1REFBNEc7QUFPNUc7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUF1RkM7UUF0RkcsdUNBQXVDO1FBQy9CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDZSxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUU5RCxTQUFHLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QyxnQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHaEMsZUFBUyxHQUFnQixJQUFJLENBQUE7O0lBMEV6QyxDQUFDO0lBeEVHLGtDQUFNLEdBQU47UUFDSSxjQUFjO1FBQ2QsSUFBSTtZQUNBLGdCQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7UUFFZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckUsQ0FBQztJQUNELDJDQUFlLEdBQWYsVUFBZ0IsR0FBZ0I7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxD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Q0FBQyxDQUFDLElBQUksQ0FBQztnQkFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQ0ksSUFBSyxNQUFjLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSTtJQUNSLENBQUM7SUFuRm1DO1FBQW5DLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSw2QkFBYyxFQUFFLENBQUM7NERBQW1DO0lBRXRFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0s7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDc0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDc0I7SUFWdkIsaUJBQWlCO1FBRnJDLE9BQU87UUFDUCxpQkFBaUI7T0FDRyxpQkFBaUIsQ0F1RnJDO0lBQUQsd0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjhDLEVBQUUsQ0FBQyxTQUFTLEdBdUYxRDtrQkF2Rm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlIH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi4vY29tbW9uL0V2ZW50c1wiO1xuaW1wb3J0IExvY2FsaXphdGlvbiwgeyBMT0NBTElaQVRJT05fRU5VTSwgTE9DQUxJWkFUSU9OX0tFWVMsIFRleHRUcmFuc2Zvcm1zIH0gZnJvbSBcIi4uL2NvbW1vbi9Mb2NhbGl6YXRpb25cIjtcblxuaW50ZXJmYWNlIElLZXlQYXJhbXMge1xuICAgIFtrZXkgOiBzdHJpbmddIDogc3RyaW5nXG59XG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGl6ZWRSaWNoVGV4dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8gQHByb3BlcnR5KHt0eXBlOiBMT0NBTElaQVRJT05fRU5VTX0pXG4gICAgcHJpdmF0ZSBLZXlJbmRleDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBUZXh0VHJhbnNmb3JtcyB9KSBwcml2YXRlIFRleHRUcmFuc2Zvcm06IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcbiAgICBwcml2YXRlIEtleTogc3RyaW5nID0gJyc7XG5cbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBmb250U2l6ZUVuOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoMCwgMCk7XG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXG4gICAgZm9udFNpemVWaTogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xuXG4gICAgcHJpdmF0ZSBtRGVmYXVsdFN0cmluZzogc3RyaW5nO1xuICAgIHByaXZhdGUga2V5UGFyYW1zIDogSUtleVBhcmFtcyA9IG51bGxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy9ydW50aW1lIG9ubHlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEV2ZW50cy5yZWdpc3RlckV2ZW50KEV2ZW50cy5FdmVudExhbmd1YWdlQ2hhbmdlZCwgdGhpcy5sb2NhbGl6ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICAgICAgdGhpcy5tRGVmYXVsdFN0cmluZyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZztcbiAgICB9XG4gICAgcmVwbGFjZUtleVBhcmFtKGFyZyA6IElLZXlQYXJhbXMpXG4gICAge1xuICAgICAgICB0aGlzLmtleVBhcmFtcyA9IGFyZ1xuICAgICAgICB0aGlzLmxvY2FsaXplKCk7XG4gICAgfVxuICAgIHNldEtleShrZXkgOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLktleSA9IGtleTtcbiAgICAgICAgdGhpcy5vbkVuYWJsZSgpO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgLy9pbmNsdWRlIGVkaXQgbW9kZVxuICAgICAgICB0aGlzLktleSA9IHRoaXMuS2V5LnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoIXRoaXMuS2V5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5LZXlJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5LZXkgPSBMT0NBTElaQVRJT05fS0VZU1t0aGlzLktleUluZGV4XSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLktleSAhPSBMT0NBTElaQVRJT05fS0VZU1t0aGlzLktleUluZGV4XSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBMT0NBTElaQVRJT05fS0VZUy5pbmRleE9mKHRoaXMuS2V5KTtcbiAgICAgICAgICAgIHRoaXMuS2V5SW5kZXggPSBpbmRleCAhPSAtMSA/IGluZGV4IDogMDtcbiAgICAgICAgICAgIHRoaXMuS2V5ID0gTE9DQUxJWkFUSU9OX0tFWVNbdGhpcy5LZXlJbmRleF0gfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvY2FsaXplKCk7XG4gICAgfVxuICAgIHByaXZhdGUgcmVwbGFjZVRleHQoc3RyIDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMua2V5UGFyYW1zKSByZXR1cm4gc3RyXG4gICAgICAgIGxldCBzdHJpbmcgPSBzdHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKHRoaXMua2V5UGFyYW1zKVswXVxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoa2V5KS5qb2luKHRoaXMua2V5UGFyYW1zW2tleV0pXG4gICAgICAgIC8vIHRoaXMua2V5UGFyYW1zLm1hcChlID0+IHtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgcmV0dXJuIHN0cmluZ1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9jYWxpemUoKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBMb2NhbGl6YXRpb24uR2V0TG9jYWxpemVkU3RyaW5nKExPQ0FMSVpBVElPTl9LRVlTW3RoaXMuS2V5SW5kZXhdKSB8fCB0aGlzLm1EZWZhdWx0U3RyaW5nO1xuICAgICAgICBzdHJpbmcgPSB0aGlzLnJlcGxhY2VUZXh0KHN0cmluZyk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5UZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjYXNlIFRleHRUcmFuc2Zvcm1zLk5vbmU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleHRUcmFuc2Zvcm1zLlVwcGVyOlxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZXh0VHJhbnNmb3Jtcy5Mb3dlcjpcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHh0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWNoVGV4dClcbiAgICAgICAgdHh0LnN0cmluZyA9IHN0cmluZztcbiAgICAgICAgLy8gaWYoTWFuYWdlci5JbnN0YW5jZSlcbiAgICAgICAgLy8ge1xuICAgICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLmxhbmd1YWdlID09IFwiZW5cIiAmJiB0aGlzLmZvbnRTaXplRW4gJiYgdGhpcy5mb250U2l6ZUVuLnggIT0gMCkge1xuICAgICAgICAgICAgdHh0LmZvbnRTaXplID0gdGhpcy5mb250U2l6ZUVuLng7XG4gICAgICAgICAgICBpZiAodGhpcy5mb250U2l6ZUVuLnkgIT0gMCkgdHh0LmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplRW4ueTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgod2luZG93IGFzIGFueSkubGFuZ3VhZ2UgPT0gXCJ2aVwiICYmIHRoaXMuZm9udFNpemVWaSAmJiB0aGlzLmZvbnRTaXplVmkueCAhPSAwKSB7XG4gICAgICAgICAgICB0eHQuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplVmkueDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbnRTaXplVmkueSAhPSAwKSB0eHQubGluZUhlaWdodCA9IHRoaXMuZm9udFNpemVWaS55O1xuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=