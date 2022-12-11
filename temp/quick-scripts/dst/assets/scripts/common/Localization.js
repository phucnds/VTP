
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/Localization.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9Mb2NhbGl6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVDQUF5QztBQUN6QyxtQ0FBOEI7QUFFOUIsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ04sUUFBQSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDL0MsT0FBTyxDQUFDLHlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsQ0FBQztJQUNSLEtBQUssRUFBRSxDQUFDO0NBQ1gsQ0FBQyxDQUFDO0FBR0g7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBZ0JBLENBQUM7SUFmVSwrQkFBa0IsR0FBekIsVUFBMEIsR0FBVztRQUNqQyxtQ0FBbUM7UUFDbkMsSUFBSSxNQUFjLENBQUMsUUFBUSxJQUFJLElBQUk7WUFBRyxNQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtRQUNwRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUUsTUFBYyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvRTtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDJCQUFjLEdBQXJCLFVBQXNCLFFBQWdCO1FBQ2xDLG9FQUFvRTtRQUNwRSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWZnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ0JoQztJQUFELG1CQUFDO0NBaEJELEFBZ0JDLENBaEJ5QyxFQUFFLENBQUMsU0FBUyxHQWdCckQ7a0JBaEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCAqIGFzIFNUUklOR1MgZnJvbSAnLi4vLi4vc3RyaW5ncyc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vRXZlbnRzJztcblxuY29uc3QgZW51bU9iaiA9IHt9O1xuZXhwb3J0IGNvbnN0IExPQ0FMSVpBVElPTl9LRVlTID0gT2JqZWN0LmtleXMoU1RSSU5HUyk7XG5mb3IgKGxldCBpID0gMDsgaSA8IExPQ0FMSVpBVElPTl9LRVlTLmxlbmd0aDsgaSsrKSB7XG4gICAgZW51bU9ialtMT0NBTElaQVRJT05fS0VZU1tpXV0gPSBpO1xufVxuXG5leHBvcnQgY29uc3QgTE9DQUxJWkFUSU9OX0VOVU0gPSBjYy5FbnVtKGVudW1PYmopO1xuZXhwb3J0IGNvbnN0IFRleHRUcmFuc2Zvcm1zID0gY2MuRW51bSh7XG4gICAgTm9uZTogMCxcbiAgICBVcHBlcjogMSxcbiAgICBMb3dlcjogMixcbn0pO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxpemF0aW9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgR2V0TG9jYWxpemVkU3RyaW5nKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgLy8gKHdpbmRvdyBhcyBhbnkpLmxhbmd1YWdlID0gXCJlblwiO1xuICAgICAgICBpZigod2luZG93IGFzIGFueSkubGFuZ3VhZ2UgPT0gXCJlblwiKSAod2luZG93IGFzIGFueSkubGFuZ3VhZ2UgPSBcInZpXCJcbiAgICAgICAgaWYgKFNUUklOR1Nba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFNUUklOR1Nba2V5XVsoKHdpbmRvdyBhcyBhbnkpLmxhbmd1YWdlIHx8IFwidmlcIikudG9VcHBlckNhc2UoKV0gfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBDaGFuZ2VMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ1wiLCBsYW5ndWFnZSA9PSBcInZpXCIgPyBcImVuXCIgOiBsYW5ndWFnZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ1wiLCBcInZpXCIpO1xuICAgICAgICAod2luZG93IGFzIGFueSkubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICAgICAgRXZlbnRzLmVtaXQoRXZlbnRzLkV2ZW50TGFuZ3VhZ2VDaGFuZ2VkKTtcbiAgICB9XG59Il19