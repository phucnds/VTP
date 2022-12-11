
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompInventoryItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb627QDiAlGZIiMgE/w1kT/', 'CompInventoryItem');
// scripts/components/CompInventoryItem.ts

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
var moment = require("moment");
var FrameMgr_1 = require("../common/FrameMgr");
var SoundMgr_1 = require("../common/SoundMgr");
var PopupReward_1 = require("../Popups/PopupReward");
var store_1 = require("../src/app/store");
var utils_1 = require("../src/common/utils");
var SliceApp_1 = require("../src/features/SliceApp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var CompInventoryItem = /** @class */ (function (_super) {
    __extends(CompInventoryItem, _super);
    function CompInventoryItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.indexTxt = null;
        _this.nameTxt = null;
        _this.descriptionTxt = null;
        _this.dateTxt = null;
        return _this;
    }
    CompInventoryItem.prototype.init = function (type, index, value, timestampz) {
        var sign = value > 0 ? '+' : '';
        var name = type === 'VOUCHER' ? 'Voucher' : value ? sign + utils_1.convertToCurrency(value) + PopupReward_1.typeToUnit[type] : '';
        this.indexTxt.string = index.toString();
        this.nameTxt.string = name;
        this.descriptionTxt.string = "n\u1EA1p \u0111i\u1EC7n tho\u1EA1i\n" + utils_1.convertToCurrency(value) + "\u0111";
        this.descriptionTxt.node.active = type === 'VOUCHER';
        this.dateTxt.string = moment(timestampz).format('HH:mm:ss-DD/MM/YYYY').replace('-', '\n');
        this.image.spriteFrame = FrameMgr_1.default.Instance["REWARD_" + type];
        if (type === 'VOUCHER') {
            this.node.on(cc.Node.EventType.TOUCH_END, function () {
                SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_BUTTON);
                store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupGoToVoucher));
            });
        }
    };
    __decorate([
        property(cc.Sprite)
    ], CompInventoryItem.prototype, "image", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "indexTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "nameTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "descriptionTxt", void 0);
    __decorate([
        property(cc.Label)
    ], CompInventoryItem.prototype, "dateTxt", void 0);
    CompInventoryItem = __decorate([
        ccclass
    ], CompInventoryItem);
    return CompInventoryItem;
}(cc.Component));
exports.default = CompInventoryItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcEludmVudG9yeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWdDO0FBQ2hDLCtDQUEwQztBQUMxQywrQ0FBMEM7QUFDMUMscURBQW1EO0FBQ25ELDBDQUFxQztBQUNyQyw2Q0FBd0Q7QUFDeEQscURBQWlFO0FBRTNELElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBRy9EO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBNkJDO1FBM0JVLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBbUJwQyxDQUFDO0lBakJHLGdDQUFJLEdBQUosVUFBSyxJQUFZLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxVQUFrQjtRQUMvRCxJQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLHlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLHdCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLHlDQUFtQix5QkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBRyxDQUFBO1FBQzNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFlBQVUsSUFBTSxDQUFDLENBQUM7UUFFN0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtnQkFDdEMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLGVBQUssQ0FBQyxRQUFRLENBQUMsb0JBQVMsQ0FBQyxxQkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNXO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZEQUNvQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNhO0lBVmYsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0E2QnJDO0lBQUQsd0JBQUM7Q0E3QkQsQUE2QkMsQ0E3QjhDLEVBQUUsQ0FBQyxTQUFTLEdBNkIxRDtrQkE3Qm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgRnJhbWVNZ3IgZnJvbSAnLi4vY29tbW9uL0ZyYW1lTWdyJztcbmltcG9ydCBTb3VuZE1nciBmcm9tICcuLi9jb21tb24vU291bmRNZ3InO1xuaW1wb3J0IHsgdHlwZVRvVW5pdCB9IGZyb20gJy4uL1BvcHVwcy9Qb3B1cFJld2FyZCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3JjL2FwcC9zdG9yZSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9DdXJyZW5jeSB9IGZyb20gXCIuLi9zcmMvY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBwdXNoUG9wdXAsIEVBcHBQb3B1cHMgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvU2xpY2VBcHAnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBleGVjdXRlSW5FZGl0TW9kZSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBJbnZlbnRvcnlJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHB1YmxpYyBpbWFnZTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGluZGV4VHh0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBuYW1lVHh0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBkZXNjcmlwdGlvblR4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgZGF0ZVR4dDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgaW5pdCh0eXBlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIHRpbWVzdGFtcHo6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzaWduID0gdmFsdWUgPiAwID8gJysnIDogJyc7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlID09PSAnVk9VQ0hFUicgPyAnVm91Y2hlcicgOiB2YWx1ZSA/IHNpZ24gKyBjb252ZXJ0VG9DdXJyZW5jeSh2YWx1ZSkgKyB0eXBlVG9Vbml0W3R5cGVdIDogJyc7XG4gICAgICAgIHRoaXMuaW5kZXhUeHQuc3RyaW5nID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5uYW1lVHh0LnN0cmluZyA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UeHQuc3RyaW5nID0gYG7huqFwIMSRaeG7h24gdGhv4bqhaVxcbiR7Y29udmVydFRvQ3VycmVuY3kodmFsdWUpfcSRYFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVHh0Lm5vZGUuYWN0aXZlID0gdHlwZSA9PT0gJ1ZPVUNIRVInO1xuICAgICAgICB0aGlzLmRhdGVUeHQuc3RyaW5nID0gbW9tZW50KHRpbWVzdGFtcHopLmZvcm1hdCgnSEg6bW06c3MtREQvTU0vWVlZWScpLnJlcGxhY2UoJy0nLCAnXFxuJyk7XG4gICAgICAgIHRoaXMuaW1hZ2Uuc3ByaXRlRnJhbWUgPSBGcmFtZU1nci5JbnN0YW5jZVtgUkVXQVJEXyR7dHlwZX1gXTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ1ZPVUNIRVInKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU291bmRNZ3IucGxheVNmeChTb3VuZE1nci5JbnN0YW5jZS5TRlhfQlVUVE9OKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cEdvVG9Wb3VjaGVyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==