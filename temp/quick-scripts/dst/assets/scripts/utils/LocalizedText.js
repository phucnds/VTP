
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/LocalizedText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3V0aWxzL0xvY2FsaXplZFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUEyQyxFQUFFLENBQUMsVUFBVSxFQUF0RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQWtCLENBQUM7QUFDL0QsMkNBQXNDO0FBQ3RDLHVEQUE0RztBQU81RztJQUEyQyxpQ0FBWTtJQUR2RCxxQkFBcUI7SUFDckI7UUFBQSxxRUEwRkM7UUF6RkcsdUNBQXVDO1FBQy9CLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDZSxtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUU5RCxTQUFHLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4QyxnQkFBVSxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHaEMsZUFBUyxHQUFnQixJQUFJLENBQUE7O0lBNkV6QyxDQUFDO0lBM0VHLDhCQUFNLEdBQU47UUFDSSxjQUFjO1FBQ2QsSUFBSTtZQUNBLGdCQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFNLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7UUFFZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUQsb0VBQW9FO0lBQ3hFLENBQUM7SUFDRCx1Q0FBZSxHQUFmLFVBQWdCLEdBQWdCO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFBO1FBQ3BC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QUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7YUFDSSxJQUFLLE1BQWMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BGLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJO0lBQ1IsQ0FBQztJQXRGbUM7UUFBbkMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLDZCQUFjLEVBQUUsQ0FBQzt3REFBbUM7SUFFdEU7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNzQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNzQjtJQVZ2QixhQUFhO1FBRmpDLE9BQU87UUFDUixxQkFBcUI7T0FDQSxhQUFhLENBMEZqQztJQUFELG9CQUFDO0NBMUZELEFBMEZDLENBMUYwQyxFQUFFLENBQUMsU0FBUyxHQTBGdEQ7a0JBMUZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuLi9jb21tb24vRXZlbnRzXCI7XG5pbXBvcnQgTG9jYWxpemF0aW9uLCB7IExPQ0FMSVpBVElPTl9FTlVNLCBMT0NBTElaQVRJT05fS0VZUywgVGV4dFRyYW5zZm9ybXMgfSBmcm9tIFwiLi4vY29tbW9uL0xvY2FsaXphdGlvblwiO1xuXG5pbnRlcmZhY2UgSUtleVBhcmFtcyB7XG4gICAgW2tleSA6IHN0cmluZ10gOiBzdHJpbmdcbn1cbkBjY2NsYXNzXG4vLyBAZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsaXplZFRleHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIEBwcm9wZXJ0eSh7dHlwZTogTE9DQUxJWkFUSU9OX0VOVU19KVxuICAgIHByaXZhdGUgS2V5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogVGV4dFRyYW5zZm9ybXMgfSkgcHJpdmF0ZSBUZXh0VHJhbnNmb3JtOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5TdHJpbmcpXG4gICAgcHJpdmF0ZSBLZXk6IHN0cmluZyA9ICcnO1xuXG4gICAgQHByb3BlcnR5KGNjLlZlYzIpXG4gICAgZm9udFNpemVFbjogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsIDApO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIGZvbnRTaXplVmk6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigwLCAwKTtcblxuICAgIHByaXZhdGUgbURlZmF1bHRTdHJpbmc6IHN0cmluZztcbiAgICBwcml2YXRlIGtleVBhcmFtcyA6IElLZXlQYXJhbXMgPSBudWxsXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vcnVudGltZSBvbmx5XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBFdmVudHMucmVnaXN0ZXJFdmVudChFdmVudHMuRXZlbnRMYW5ndWFnZUNoYW5nZWQsIHRoaXMubG9jYWxpemUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgICAgIHRoaXMubURlZmF1bHRTdHJpbmcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XG4gICAgICAgIC8vIHRoaXMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQklUTUFQXG4gICAgfVxuICAgIHJlcGxhY2VLZXlQYXJhbShhcmcgOiBJS2V5UGFyYW1zKVxuICAgIHtcbiAgICAgICAgdGhpcy5rZXlQYXJhbXMgPSBhcmdcbiAgICAgICAgdGhpcy5sb2NhbGl6ZSgpO1xuICAgIH1cbiAgICBzZXRLZXkoa2V5IDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XG4gICAgICAgIHRoaXMub25FbmFibGUoKTtcbiAgICB9XG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIC8vaW5jbHVkZSBlZGl0IG1vZGVcbiAgICAgICAgdGhpcy5LZXkgPSB0aGlzLktleS50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLktleSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuS2V5SW5kZXggIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuS2V5ID0gTE9DQUxJWkFUSU9OX0tFWVNbdGhpcy5LZXlJbmRleF0gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5LZXkgIT0gTE9DQUxJWkFUSU9OX0tFWVNbdGhpcy5LZXlJbmRleF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTE9DQUxJWkFUSU9OX0tFWVMuaW5kZXhPZih0aGlzLktleSk7XG4gICAgICAgICAgICB0aGlzLktleUluZGV4ID0gaW5kZXggIT0gLTEgPyBpbmRleCA6IDA7XG4gICAgICAgICAgICB0aGlzLktleSA9IExPQ0FMSVpBVElPTl9LRVlTW3RoaXMuS2V5SW5kZXhdIHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2NhbGl6ZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlcGxhY2VUZXh0KHN0ciA6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmtleVBhcmFtcykgcmV0dXJuIHN0clxuICAgICAgICBsZXQgc3RyaW5nID0gc3RyXG4gICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLmtleVBhcmFtcylbMF1cbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KGtleSkuam9pbih0aGlzLmtleVBhcmFtc1trZXldKVxuXG4gICAgICAgIC8vIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGtleSwgdGhpcy5rZXlQYXJhbXNba2V5XSlcbiAgICAgICAgLy8gdGhpcy5rZXlQYXJhbXMubWFwKGUgPT4ge1xuICAgICAgICAvLyB9KVxuICAgICAgICByZXR1cm4gc3RyaW5nXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2NhbGl6ZSgpIHtcbiAgICAgICAgbGV0IHN0cmluZyA9IExvY2FsaXphdGlvbi5HZXRMb2NhbGl6ZWRTdHJpbmcoTE9DQUxJWkFUSU9OX0tFWVNbdGhpcy5LZXlJbmRleF0pIHx8IHRoaXMubURlZmF1bHRTdHJpbmc7XG4gICAgICAgIHN0cmluZyA9IHRoaXMucmVwbGFjZVRleHQoc3RyaW5nKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLlRleHRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGNhc2UgVGV4dFRyYW5zZm9ybXMuTm9uZTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGV4dFRyYW5zZm9ybXMuVXBwZXI6XG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRleHRUcmFuc2Zvcm1zLkxvd2VyOlxuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICB0eHQuc3RyaW5nID0gc3RyaW5nO1xuICAgICAgICAvLyBpZihNYW5hZ2VyLkluc3RhbmNlKVxuICAgICAgICAvLyB7XG4gICAgICAgIGlmICgod2luZG93IGFzIGFueSkubGFuZ3VhZ2UgPT0gXCJlblwiICYmIHRoaXMuZm9udFNpemVFbiAmJiB0aGlzLmZvbnRTaXplRW4ueCAhPSAwKSB7XG4gICAgICAgICAgICB0eHQuZm9udFNpemUgPSB0aGlzLmZvbnRTaXplRW4ueDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbnRTaXplRW4ueSAhPSAwKSB0eHQubGluZUhlaWdodCA9IHRoaXMuZm9udFNpemVFbi55O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCh3aW5kb3cgYXMgYW55KS5sYW5ndWFnZSA9PSBcInZpXCIgJiYgdGhpcy5mb250U2l6ZVZpICYmIHRoaXMuZm9udFNpemVWaS54ICE9IDApIHtcbiAgICAgICAgICAgIHR4dC5mb250U2l6ZSA9IHRoaXMuZm9udFNpemVWaS54O1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9udFNpemVWaS55ICE9IDApIHR4dC5saW5lSGVpZ2h0ID0gdGhpcy5mb250U2l6ZVZpLnk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbiJdfQ==