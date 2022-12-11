
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/game/RewardPopupsMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63b66HLFvRD2pPEWCMwEzyE', 'RewardPopupsMgr');
// scripts/src/game/RewardPopupsMgr.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardPopupsMgr = exports.ETopupType = void 0;
var R = require("ramda");
var UserProfile_1 = require("../../common/UserProfile");
var CompQuestsContainer_1 = require("../../components/CompQuestsContainer");
var PopupBuyTurnSuccess_1 = require("../../Popups/PopupBuyTurnSuccess");
var PopupCompleteQuest_1 = require("../../Popups/PopupCompleteQuest");
var SingletonNode_1 = require("../../utils/SingletonNode");
var APIDefine_1 = require("../app/APIDefine");
var connect_1 = require("../app/connect");
var store_1 = require("../app/store");
var wsgw_1 = require("../app/wsgw");
var common_1 = require("../common/common");
var SliceApp_1 = require("../features/SliceApp");
var SliceQuests_1 = require("../features/SliceQuests");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ETopupType;
(function (ETopupType) {
    ETopupType["MO_GAME"] = "MO_GAME";
    ETopupType["MO_GAME_LAN_DAU"] = "MO_GAME_LAN_DAU";
    ETopupType["DOI_DIEM_VT_PLUS"] = "DOI_DIEM_VT_PLUS";
    ETopupType["MUA_LUOT"] = "MUA_LUOT";
    ETopupType["PHAN_THUONG_TRONG_GAME"] = "PHAN_THUONG_TRONG_GAME";
    ETopupType["KHAC"] = "KHAC";
    ETopupType["WEEKLY_REWARD"] = "WEEKLY_REWARD";
})(ETopupType = exports.ETopupType || (exports.ETopupType = {}));
var RewardPopupsMgr = /** @class */ (function (_super) {
    __extends(RewardPopupsMgr, _super);
    function RewardPopupsMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RewardPopupsMgr.prototype.setData = function (data) {
        this.rewardPopups = data;
    };
    RewardPopupsMgr.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        wsgw_1.default.subscribeCompleteMission(function (data) {
            var type = data.type, msisdn = data.msisdn;
            if (type === CompQuestsContainer_1.Missions.CHIA_SE_GAME.toString())
                return;
            if (msisdn !== _this.props.user.msisdn)
                return;
            setTimeout(function () {
                UserProfile_1.userProfile.UpdateProfile(true, function () {
                    wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                        store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                    }, console.error);
                    common_1.checkRewardPopup();
                    UserProfile_1.userProfile.UpdateBalance();
                });
            }, 1000);
        });
        wsgw_1.default.subscribeBuyTurn(function (data) {
            var msisdn = data.msisdn;
            if (msisdn !== _this.props.user.msisdn)
                return;
            setTimeout(function () {
                wsgw_1.default.userRequest(APIDefine_1.default.getMissionList, {}, function (e) {
                    store_1.default.dispatch(SliceQuests_1.syncQuests(e));
                }, console.error);
                common_1.checkRewardPopup();
                UserProfile_1.userProfile.UpdateBalance();
            }, 1000);
        });
    };
    RewardPopupsMgr.prototype.showPopup = function () {
        var item = R.last(this.rewardPopups);
        if (!item)
            return;
        this.rewardPopups = R.dropLast(1, this.rewardPopups);
        var _a = item.data, turn = _a.turn, coin = _a.coin, type = item.type;
        if (type === ETopupType.DOI_DIEM_VT_PLUS || type === ETopupType.MUA_LUOT) {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupBuyTurnSuccess));
            var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupBuyTurnSuccess');
            popup && popup.getComponent(PopupBuyTurnSuccess_1.default).init(turn);
        }
        else if (type === ETopupType.WEEKLY_REWARD) {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupWeeklyWinner));
        }
        else {
            store_1.default.dispatch(SliceApp_1.pushPopup(SliceApp_1.EAppPopups.PopupCompleteQuest));
            var popup = cc.find('Canvas/PopupManager/Shown Popups/PopupCompleteQuest');
            popup && popup.getComponent(PopupCompleteQuest_1.default).init(turn, coin);
        }
    };
    return RewardPopupsMgr;
}(SingletonNode_1.default()));
exports.RewardPopupsMgr = RewardPopupsMgr;
var mapStateToProps = function (state) { return ({
    user: state.user
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
    pushPopup: function (payload) { return dispatch(SliceApp_1.pushPopup(payload)); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(RewardPopupsMgr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9nYW1lL1Jld2FyZFBvcHVwc01nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUJBQTBCO0FBQzFCLHdEQUF1RDtBQUN2RCw0RUFBZ0U7QUFDaEUsd0VBQW1FO0FBQ25FLHNFQUFpRTtBQUVqRSwyREFBc0Q7QUFDdEQsOENBQXlDO0FBQ3pDLDBDQUFxQztBQUNyQyxzQ0FBNkQ7QUFDN0Qsb0NBQStCO0FBQy9CLDJDQUFvRDtBQUNwRCxpREFBNEc7QUFDNUcsdURBQXFEO0FBRS9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQixpQ0FBbUIsQ0FBQTtJQUNuQixpREFBbUMsQ0FBQTtJQUNuQyxtREFBcUMsQ0FBQTtJQUNyQyxtQ0FBcUIsQ0FBQTtJQUNyQiwrREFBaUQsQ0FBQTtJQUNqRCwyQkFBYSxDQUFBO0lBQ2IsNkNBQStCLENBQUE7QUFDbkMsQ0FBQyxFQVJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBUXJCO0FBRUQ7SUFBcUMsbUNBQWdDO0lBQXJFOztJQW1FQSxDQUFDO0lBN0RHLGlDQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFNLEdBQU47UUFBQSxpQkErQkM7UUE5QkcsaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFFZixjQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBQyxJQUFJO1lBQ3ZCLElBQUEsSUFBSSxHQUFhLElBQUksS0FBakIsRUFBRSxNQUFNLEdBQUssSUFBSSxPQUFU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SUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ25FO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsQ0FuRW9DLHVCQUFhLEVBQW1CLEdBbUVwRTtBQW5FWSwwQ0FBZTtBQXFFNUIsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7Q0FDbkIsQ0FBQyxFQUY0QyxDQUU1QyxDQUFBO0FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLFFBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3BELFFBQVEsRUFBRSxVQUFDLE9BQW9DO1FBQzNDLE9BQUEsUUFBUSxDQUFDLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFBM0IsQ0FBMkI7SUFDL0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsa0JBQU8sRUFBRSxDQUFDLEVBQW5CLENBQW1CO0lBQ2xDLFNBQVMsRUFBRSxVQUFDLE9BQW1CLElBQUssT0FBQSxRQUFRLENBQUMsb0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1QixDQUE0QjtDQUNuRSxDQUFDLEVBTHFELENBS3JELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyB1c2VyUHJvZmlsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9Vc2VyUHJvZmlsZSc7XG5pbXBvcnQgeyBNaXNzaW9ucyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcFF1ZXN0c0NvbnRhaW5lcic7XG5pbXBvcnQgUG9wdXBCdXlUdXJuU3VjY2VzcyBmcm9tICcuLi8uLi9Qb3B1cHMvUG9wdXBCdXlUdXJuU3VjY2Vzcyc7XG5pbXBvcnQgUG9wdXBDb21wbGV0ZVF1ZXN0IGZyb20gJy4uLy4uL1BvcHVwcy9Qb3B1cENvbXBsZXRlUXVlc3QnO1xuaW1wb3J0IFBvcHVwV2Vla2x5V2lubmVyIGZyb20gJy4uLy4uL1BvcHVwcy9Qb3B1cFdlZWtseVdpbm5lcic7XG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuaW1wb3J0IEFQSURlZmluZSBmcm9tICcuLi9hcHAvQVBJRGVmaW5lJztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4uL2FwcC9jb25uZWN0JztcbmltcG9ydCBzdG9yZSwgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSAnLi4vYXBwL3N0b3JlJztcbmltcG9ydCB3c2d3IGZyb20gJy4uL2FwcC93c2d3JztcbmltcG9ydCB7IGNoZWNrUmV3YXJkUG9wdXAgfSBmcm9tICcuLi9jb21tb24vY29tbW9uJztcbmltcG9ydCB7IEVBcHBQYWdlcywgRUFwcFBvcHVwcywgSVBhZ2VXaXRoRWZmZWN0LCBwb3BQYWdlLCBwdXNoUGFnZSwgcHVzaFBvcHVwIH0gZnJvbSAnLi4vZmVhdHVyZXMvU2xpY2VBcHAnO1xuaW1wb3J0IHsgc3luY1F1ZXN0cyB9IGZyb20gJy4uL2ZlYXR1cmVzL1NsaWNlUXVlc3RzJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gRVRvcHVwVHlwZSB7XG4gICAgTU9fR0FNRSA9ICdNT19HQU1FJyxcbiAgICBNT19HQU1FX0xBTl9EQVUgPSAnTU9fR0FNRV9MQU5fREFVJyxcbiAgICBET0lfRElFTV9WVF9QTFVTID0gJ0RPSV9ESUVNX1ZUX1BMVVMnLFxuICAgIE1VQV9MVU9UID0gJ01VQV9MVU9UJyxcbiAgICBQSEFOX1RIVU9OR19UUk9OR19HQU1FID0gJ1BIQU5fVEhVT05HX1RST05HX0dBTUUnLFxuICAgIEtIQUMgPSAnS0hBQycsXG4gICAgV0VFS0xZX1JFV0FSRCA9ICdXRUVLTFlfUkVXQVJEJyxcbn1cblxuZXhwb3J0IGNsYXNzIFJld2FyZFBvcHVwc01nciBleHRlbmRzIFNpbmdsZXRvbk5vZGU8UmV3YXJkUG9wdXBzTWdyPigpIHtcbiAgICBhY3Rpb25zOiBhbnk7XG4gICAgcHJvcHM6IGFueVxuXG4gICAgcHJpdmF0ZSByZXdhcmRQb3B1cHM6IEFycmF5PGFueT47XG5cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5yZXdhcmRQb3B1cHMgPSBkYXRhO1xuICAgIH1cblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XG5cbiAgICAgICAgd3Nndy5zdWJzY3JpYmVDb21wbGV0ZU1pc3Npb24oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgbXNpc2RuIH0gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09IE1pc3Npb25zLkNISUFfU0VfR0FNRS50b1N0cmluZygpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAobXNpc2RuICE9PSB0aGlzLnByb3BzLnVzZXIubXNpc2RuKSByZXR1cm47XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlLlVwZGF0ZVByb2ZpbGUodHJ1ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRNaXNzaW9uTGlzdCwge30sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzeW5jUXVlc3RzKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrUmV3YXJkUG9wdXAoKVxuICAgICAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZS5VcGRhdGVCYWxhbmNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB9KVxuICAgICAgICB3c2d3LnN1YnNjcmliZUJ1eVR1cm4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbXNpc2RuIH0gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKG1zaXNkbiAhPT0gdGhpcy5wcm9wcy51c2VyLm1zaXNkbikgcmV0dXJuO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3c2d3LnVzZXJSZXF1ZXN0KEFQSURlZmluZS5nZXRNaXNzaW9uTGlzdCwge30sIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHN5bmNRdWVzdHMoZSkpO1xuICAgICAgICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNoZWNrUmV3YXJkUG9wdXAoKVxuICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlLlVwZGF0ZUJhbGFuY2UoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNob3dQb3B1cCgpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IFIubGFzdCh0aGlzLnJld2FyZFBvcHVwcyk7XG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucmV3YXJkUG9wdXBzID0gUi5kcm9wTGFzdCgxLCB0aGlzLnJld2FyZFBvcHVwcyk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0dXJuLCBjb2luXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgfSA9IGl0ZW07XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IEVUb3B1cFR5cGUuRE9JX0RJRU1fVlRfUExVUyB8fCB0eXBlID09PSBFVG9wdXBUeXBlLk1VQV9MVU9UKSB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cEJ1eVR1cm5TdWNjZXNzKSk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNjLmZpbmQoJ0NhbnZhcy9Qb3B1cE1hbmFnZXIvU2hvd24gUG9wdXBzL1BvcHVwQnV5VHVyblN1Y2Nlc3MnKTtcbiAgICAgICAgICAgIHBvcHVwICYmIHBvcHVwLmdldENvbXBvbmVudChQb3B1cEJ1eVR1cm5TdWNjZXNzKS5pbml0KHR1cm4pXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRVRvcHVwVHlwZS5XRUVLTFlfUkVXQVJEKSB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUG9wdXAoRUFwcFBvcHVwcy5Qb3B1cFdlZWtseVdpbm5lcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBvcHVwKEVBcHBQb3B1cHMuUG9wdXBDb21wbGV0ZVF1ZXN0KSk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGNjLmZpbmQoJ0NhbnZhcy9Qb3B1cE1hbmFnZXIvU2hvd24gUG9wdXBzL1BvcHVwQ29tcGxldGVRdWVzdCcpO1xuICAgICAgICAgICAgcG9wdXAgJiYgcG9wdXAuZ2V0Q29tcG9uZW50KFBvcHVwQ29tcGxldGVRdWVzdCkuaW5pdCh0dXJuLCBjb2luKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KVxuY29uc3QgbWFwRGlzcGF0Y2hUb0FjdGlvbiA9IChkaXNwYXRjaDogQXBwRGlzcGF0Y2gpID0+ICh7XG4gICAgcHVzaFBhZ2U6IChwYXlsb2FkOiBFQXBwUGFnZXMgfCBJUGFnZVdpdGhFZmZlY3QpID0+XG4gICAgICAgIGRpc3BhdGNoKHB1c2hQYWdlKHBheWxvYWQpKSxcbiAgICBwb3BQYWdlOiAoKSA9PiBkaXNwYXRjaChwb3BQYWdlKCkpLFxuICAgIHB1c2hQb3B1cDogKHBheWxvYWQ6IEVBcHBQb3B1cHMpID0+IGRpc3BhdGNoKHB1c2hQb3B1cChwYXlsb2FkKSksXG59KVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9BY3Rpb24pKFJld2FyZFBvcHVwc01ncilcbiJdfQ==