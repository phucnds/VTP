
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/CompQuestsContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '809c5VbbcxP6rgp7axEYy/T', 'CompQuestsContainer');
// scripts/components/CompQuestsContainer.ts

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompQuestsContainer = exports.btnCallBacks = exports.MissionsButtonText = exports.Missions = exports.DailyQuestTabNames = void 0;
var R = require("ramda");
var connect_1 = require("../src/app/connect");
var store_1 = require("../src/app/store");
var SliceApp_1 = require("../src/features/SliceApp");
var SingletonNode_1 = require("../utils/SingletonNode");
var Helper_1 = require("../utils/Helper");
var CompQuest_1 = require("./CompQuest");
var utils_1 = require("../src/common/utils");
var _c = cc._decorator, ccclass = _c.ccclass, property = _c.property;
var QuestsContainerParams;
(function (QuestsContainerParams) {
    QuestsContainerParams[QuestsContainerParams["OPEN_Y"] = -568] = "OPEN_Y";
    QuestsContainerParams[QuestsContainerParams["CLOSE_Y"] = -1317] = "CLOSE_Y";
    QuestsContainerParams[QuestsContainerParams["DRAG_THRESHOLD"] = 150] = "DRAG_THRESHOLD";
    QuestsContainerParams[QuestsContainerParams["MASK_OPEN"] = 740] = "MASK_OPEN";
    QuestsContainerParams[QuestsContainerParams["MASK_CLOSE"] = 270] = "MASK_CLOSE";
    QuestsContainerParams[QuestsContainerParams["BG_TOUCH_ZONE_OPEN_HEIGHT"] = 100] = "BG_TOUCH_ZONE_OPEN_HEIGHT";
    QuestsContainerParams[QuestsContainerParams["BG_TOUCH_ZONE_CLOSE_HEIGHT"] = 1000] = "BG_TOUCH_ZONE_CLOSE_HEIGHT";
})(QuestsContainerParams || (QuestsContainerParams = {}));
var DailyQuestTabNames;
(function (DailyQuestTabNames) {
    DailyQuestTabNames[DailyQuestTabNames["SETTING_AND_UPDATE"] = 0] = "SETTING_AND_UPDATE";
    DailyQuestTabNames[DailyQuestTabNames["CHECK_IN"] = 1] = "CHECK_IN";
    DailyQuestTabNames[DailyQuestTabNames["SELFCARE"] = 2] = "SELFCARE";
    DailyQuestTabNames[DailyQuestTabNames["LIFEBOX"] = 3] = "LIFEBOX";
    DailyQuestTabNames[DailyQuestTabNames["VIETTEL_PLUS"] = 4] = "VIETTEL_PLUS";
    DailyQuestTabNames[DailyQuestTabNames["CONNECTION"] = 5] = "CONNECTION";
    DailyQuestTabNames[DailyQuestTabNames["CHECK_OUT"] = 6] = "CHECK_OUT";
    DailyQuestTabNames[DailyQuestTabNames["ENTERTAINMENT"] = 7] = "ENTERTAINMENT";
    DailyQuestTabNames[DailyQuestTabNames["SHOPPING"] = 8] = "SHOPPING";
    DailyQuestTabNames[DailyQuestTabNames["SHARING"] = 9] = "SHARING";
    DailyQuestTabNames[DailyQuestTabNames["TOUR"] = 10] = "TOUR";
})(DailyQuestTabNames = exports.DailyQuestTabNames || (exports.DailyQuestTabNames = {}));
var Missions;
(function (Missions) {
    Missions["MO_GAME"] = "MO_GAME";
    Missions["MO_GAME_LAN_DAU"] = "MO_GAME_LAN_DAU";
    Missions["XAC_THUC_THONG_TIN"] = "XAC_THUC_THONG_TIN";
    Missions["CHIA_SE_GAME"] = "CHIA_SE_GAME";
    Missions["THAM_QUAN_GUI_TIET_KIEM"] = "THAM_QUAN_GUI_TIET_KIEM";
    Missions["THAM_QUAN_VI_PAY_NOW"] = "THAM_QUAN_VI_PAY_NOW";
    Missions["THAM_QUAN_DAU_TU_SAVE_NOW"] = "THAM_QUAN_DAU_TU_SAVE_NOW";
    Missions["THAM_QUAN_EASYVAY"] = "THAM_QUAN_EASYVAY";
    Missions["THAM_QUAN_TIEN_MAT_XOAY_VONG"] = "THAM_QUAN_TIEN_MAT_XOAY_VONG";
    Missions["THAM_QUAN_MUA_TRUOC_TRA_SAU"] = "THAM_QUAN_MUA_TRUOC_TRA_SAU";
    Missions["LIEN_KET_THE"] = "LIEN_KET_THE";
    Missions["CONG_DONG_SUC_KHOE"] = "CONG_DONG_SUC_KHOE";
})(Missions = exports.Missions || (exports.Missions = {}));
exports.MissionsButtonText = (_a = {},
    _a[Missions.XAC_THUC_THONG_TIN] = 'Xác thực',
    _a[Missions.LIEN_KET_THE] = 'Liên kết',
    _a[Missions.THAM_QUAN_GUI_TIET_KIEM] = 'Tham quan',
    _a[Missions.THAM_QUAN_VI_PAY_NOW] = 'Tham quan',
    _a[Missions.THAM_QUAN_DAU_TU_SAVE_NOW] = 'Tham quan',
    _a[Missions.THAM_QUAN_EASYVAY] = 'Tham quan',
    _a[Missions.THAM_QUAN_TIEN_MAT_XOAY_VONG] = 'Tham quan',
    _a[Missions.THAM_QUAN_MUA_TRUOC_TRA_SAU] = 'Tham quan',
    _a[Missions.CONG_DONG_SUC_KHOE] = 'Tham gia',
    _a[Missions.CHIA_SE_GAME] = 'Chia sẻ',
    _a);
exports.btnCallBacks = (_b = {},
    _b[Missions.THAM_QUAN_DAU_TU_SAVE_NOW] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageSavenow, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b[Missions.THAM_QUAN_VI_PAY_NOW] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PagePaynow, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b[Missions.THAM_QUAN_GUI_TIET_KIEM] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageGuiTietKiem, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b[Missions.THAM_QUAN_EASYVAY] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageEasyvay, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b[Missions.THAM_QUAN_TIEN_MAT_XOAY_VONG] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageTienMat, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b[Missions.THAM_QUAN_MUA_TRUOC_TRA_SAU] = function () {
        store_1.default.dispatch(SliceApp_1.pushPage({ page: SliceApp_1.EAppPages.PageMuaTruoc, effect: SliceApp_1.PAGE_SHOW_EFFECT.LEFT }));
    },
    _b);
var CompQuestsContainer = /** @class */ (function (_super) {
    __extends(CompQuestsContainer, _super);
    function CompQuestsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.questPrefab = null;
        _this.content = null;
        _this.bgTouchZone = null;
        _this.title = null;
        _this.titleBigTouchZone = null;
        _this.body = null;
        _this.scrollView = null;
        _this.mask = null;
        _this.scrollBar = null;
        _this.interactive = false;
        _this.isOpen = false;
        _this.isDragged = false;
        _this.currentTabIndex = DailyQuestTabNames.SETTING_AND_UPDATE;
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(CompQuestsContainer.prototype, "IsOpen", {
        get: function () { return this.isOpen; },
        enumerable: false,
        configurable: true
    });
    CompQuestsContainer.prototype.onLoad = function () {
        var _this = this;
        _super.prototype.onLoad.call(this);
        Helper_1.default.registerButtonEvent(this.bgTouchZone, function () {
            utils_1.trackUserInteract();
            if (_this.isDragged) {
                _this.isDragged = false;
                return;
            }
            _this.isOpen ? _this.Close() : _this.Open();
        });
        Helper_1.default.registerButtonEvent(this.titleBigTouchZone, function () {
            if (_this.isDragged) {
                _this.isDragged = false;
                return;
            }
            _this.isOpen ? _this.Close() : _this.Open();
        });
        if (this.interactive) {
            var mouseDown_1 = false;
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_START, function (event) {
                _this.isDragged = false;
                mouseDown_1 = true;
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                if (!mouseDown_1)
                    return;
                var delta = event.getDelta();
                var newY = _this.node.y + delta.y;
                if (newY < QuestsContainerParams.CLOSE_Y || newY > QuestsContainerParams.OPEN_Y) {
                    return;
                }
                _this.node.y = newY;
                if (_this.isOpen) {
                    if (_this.node.y < QuestsContainerParams.OPEN_Y - QuestsContainerParams.DRAG_THRESHOLD) {
                        mouseDown_1 = false;
                        _this.Close();
                        _this.isDragged = true;
                    }
                }
                else {
                    if (_this.node.y > QuestsContainerParams.CLOSE_Y + QuestsContainerParams.DRAG_THRESHOLD) {
                        mouseDown_1 = false;
                        _this.Open();
                        _this.isDragged = true;
                    }
                }
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_END, function (event) {
                mouseDown_1 = false;
                _this.onTouchEnd();
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
                mouseDown_1 = false;
                _this.onTouchEnd();
            });
        }
        this.onStateChange();
    };
    CompQuestsContainer.prototype.onTouchEnd = function () {
        if (this.isOpen) {
            if (this.node.y >= QuestsContainerParams.CLOSE_Y + QuestsContainerParams.DRAG_THRESHOLD) {
                this.Open();
                this.isDragged = true;
            }
        }
        else {
            if (this.node.y <= QuestsContainerParams.OPEN_Y - QuestsContainerParams.DRAG_THRESHOLD) {
                this.Close();
                this.isDragged = true;
            }
        }
    };
    CompQuestsContainer.prototype.Open = function () {
        this.isOpen = true;
        this.titleBigTouchZone.active = true;
        this.bgTouchZone.height = QuestsContainerParams.BG_TOUCH_ZONE_OPEN_HEIGHT;
        cc.tween(this.node)
            .to(0.25, { position: cc.v3(0, QuestsContainerParams.OPEN_Y, 0) })
            .start();
        this.scrollView.height = QuestsContainerParams.MASK_OPEN;
        this.mask.height = QuestsContainerParams.MASK_OPEN;
        this.body.height = QuestsContainerParams.MASK_OPEN;
        this.scrollBar.height = QuestsContainerParams.MASK_OPEN;
    };
    CompQuestsContainer.prototype.Close = function () {
        var _this = this;
        this.isOpen = false;
        this.titleBigTouchZone.active = false;
        this.bgTouchZone.height = QuestsContainerParams.BG_TOUCH_ZONE_CLOSE_HEIGHT;
        this.scrollView.getComponent(cc.ScrollView).scrollToTop();
        cc.tween(this.node)
            .to(0.25, { position: cc.v3(0, QuestsContainerParams.CLOSE_Y, 0) })
            .call(function () {
            _this.scrollView.height = QuestsContainerParams.MASK_CLOSE;
            _this.mask.height = QuestsContainerParams.MASK_CLOSE;
            _this.body.height = QuestsContainerParams.MASK_CLOSE + 150;
            _this.scrollBar.height = QuestsContainerParams.MASK_CLOSE;
        })
            .start();
    };
    CompQuestsContainer.prototype.onStateChange = function () {
        var _this = this;
        this.content.removeAllChildren();
        var dataToUse = R.pipe(
        // R.filter(
        //     (quest: any) => R.includes(quest.name, GameDefine.questsToShow)
        // ),
        R.map(function (data) {
            var name = data.name, addTurn = data.addTurn;
            var level = -1;
            if (name === 'MO_GAME') {
                level = Math.floor(_this.props.login.loginStreak / 7);
                level = level < 4 ? level : 4;
            }
            return __assign(__assign({}, data), { addTurn: level >= 0 ? R.values(addTurn)[level] : addTurn, btnCB: exports.btnCallBacks[name] });
        }), R.sort(R.ascend(function (data) {
            var done = data.done, max = data.max;
            var value = 0;
            value += done >= max ? 1000 : 0;
            return value;
        })))(this.props.quests.data);
        dataToUse.forEach(function (data) {
            var name = data.name, displayName = data.displayName, description = data.description, addCoin = data.addCoin, addTurn = data.addTurn, done = data.done, max = data.max, deeplink = data.deeplink, btnCB = data.btnCB;
            _this.addItem(done, max, displayName, description, addCoin, addTurn, deeplink, btnCB, name);
        });
    };
    CompQuestsContainer.prototype.addItem = function (progress, max, name, description, coin, ticket, deeplink, btnCB, questCode) {
        if (btnCB === void 0) { btnCB = null; }
        var newQuest = cc.instantiate(this.questPrefab);
        this.content.addChild(newQuest);
        newQuest.getComponent(CompQuest_1.default).init(progress, max, name, description, coin, ticket, deeplink, btnCB, questCode);
    };
    __decorate([
        property(cc.Prefab)
    ], CompQuestsContainer.prototype, "questPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "bgTouchZone", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "titleBigTouchZone", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "body", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], CompQuestsContainer.prototype, "scrollBar", void 0);
    __decorate([
        property(cc.Boolean)
    ], CompQuestsContainer.prototype, "interactive", void 0);
    return CompQuestsContainer;
}(SingletonNode_1.default()));
exports.CompQuestsContainer = CompQuestsContainer;
var mapStateToProps = function (state) { return ({
    quests: state.quests,
    login: state.login
}); };
var mapDispatchToAction = function (dispatch) { return ({
    pushPage: function (payload) {
        return dispatch(SliceApp_1.pushPage(payload));
    },
    popPage: function () { return dispatch(SliceApp_1.popPage()); },
}); };
exports.default = connect_1.default(mapStateToProps, mapDispatchToAction)(CompQuestsContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvQ29tcFF1ZXN0c0NvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUJBQTJCO0FBQzNCLDhDQUF5QztBQUN6QywwQ0FBaUU7QUFDakUscURBQTJHO0FBQzNHLHdEQUFtRDtBQUNuRCwwQ0FBcUM7QUFHckMseUNBQW9DO0FBSXBDLDZDQUFzRTtBQUtoRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLHFCQVFKO0FBUkQsV0FBSyxxQkFBcUI7SUFDdEIsd0VBQWEsQ0FBQTtJQUNiLDJFQUFlLENBQUE7SUFDZix1RkFBb0IsQ0FBQTtJQUNwQiw2RUFBZSxDQUFBO0lBQ2YsK0VBQWdCLENBQUE7SUFDaEIsNkdBQStCLENBQUE7SUFDL0IsZ0hBQWlDLENBQUE7QUFDckMsQ0FBQyxFQVJJLHFCQUFxQixLQUFyQixxQkFBcUIsUUFRekI7QUFFRCxJQUFZLGtCQVlYO0FBWkQsV0FBWSxrQkFBa0I7SUFDMUIsdUZBQWtCLENBQUE7SUFDbEIsbUVBQVEsQ0FBQTtJQUNSLG1FQUFRLENBQUE7SUFDUixpRUFBTyxDQUFBO0lBQ1AsMkVBQVksQ0FBQTtJQUNaLHVFQUFVLENBQUE7SUFDVixxRUFBUyxDQUFBO0lBQ1QsNkVBQWEsQ0FBQTtJQUNiLG1FQUFRLENBQUE7SUFDUixpRUFBTyxDQUFBO0lBQ1AsNERBQUksQ0FBQTtBQUNSLENBQUMsRUFaVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQVk3QjtBQUVELElBQVksUUFhWDtBQWJELFdBQVksUUFBUTtJQUNoQiwrQkFB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Q0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzREQUNlO0lBMkt4QywwQkFBQztDQXRNRCxBQXNNQyxDQXRNd0MsdUJBQWEsRUFBdUIsR0FzTTVFO0FBdE1ZLGtEQUFtQjtBQXdNaEMsSUFBTSxlQUFlLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsQ0FBQztJQUMzQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07SUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0NBQ3JCLENBQUMsRUFINEMsQ0FHNUMsQ0FBQTtBQUNGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFxQixJQUFLLE9BQUEsQ0FBQztJQUNwRCxRQUFRLEVBQUUsVUFBQyxPQUFvQztRQUMzQyxPQUFBLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQTNCLENBQTJCO0lBQy9CLE9BQU8sRUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLGtCQUFPLEVBQUUsQ0FBQyxFQUFuQixDQUFtQjtDQUNyQyxDQUFDLEVBSnFELENBSXJELENBQUE7QUFDRixrQkFBZSxpQkFBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vc3JjL2FwcC9jb25uZWN0XCI7XG5pbXBvcnQgc3RvcmUsIHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zcmMvYXBwL3N0b3JlXCI7XG5pbXBvcnQgeyBFQXBwUGFnZXMsIElQYWdlV2l0aEVmZmVjdCwgUEFHRV9TSE9XX0VGRkVDVCwgcG9wUGFnZSwgcHVzaFBhZ2UgfSBmcm9tIFwiLi4vc3JjL2ZlYXR1cmVzL1NsaWNlQXBwXCI7XG5pbXBvcnQgU2luZ2xldG9uTm9kZSBmcm9tIFwiLi4vdXRpbHMvU2luZ2xldG9uTm9kZVwiO1xuaW1wb3J0IEhlbHBlciBmcm9tIFwiLi4vdXRpbHMvSGVscGVyXCI7XG5pbXBvcnQgQVBJRGVmaW5lIGZyb20gXCIuLi9zcmMvYXBwL0FQSURlZmluZVwiO1xuaW1wb3J0IHdzZ3cgZnJvbSBcIi4uL3NyYy9hcHAvd3Nnd1wiO1xuaW1wb3J0IENvbXBRdWVzdCBmcm9tICcuL0NvbXBRdWVzdCc7XG5pbXBvcnQgeyBtb2NrUXVlc3RzRGF0YSB9IGZyb20gJy4uL3NyYy9tb2NrRGF0YSc7XG5pbXBvcnQgR2FtZURlZmluZSBmcm9tICcuLi9zcmMvY29tbW9uL0dhbWVEZWZpbmUnO1xuaW1wb3J0IHsgUGFnZUhvbWUgfSBmcm9tICcuLi9QYWdlcy9QYWdlSG9tZSc7XG5pbXBvcnQgeyByYW5kb21TdHJpbmcsIHRyYWNrVXNlckludGVyYWN0IH0gZnJvbSAnLi4vc3JjL2NvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBjaGVja1Jld2FyZFBvcHVwIH0gZnJvbSAnLi4vc3JjL2NvbW1vbi9jb21tb24nO1xuaW1wb3J0IHsgc3luY1F1ZXN0cyB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9TbGljZVF1ZXN0cyc7XG5pbXBvcnQgeyB1c2VyUHJvZmlsZSB9IGZyb20gJy4uL2NvbW1vbi9Vc2VyUHJvZmlsZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gUXVlc3RzQ29udGFpbmVyUGFyYW1zIHtcbiAgICBPUEVOX1kgPSAtNTY4LFxuICAgIENMT1NFX1kgPSAtMTMxNyxcbiAgICBEUkFHX1RIUkVTSE9MRCA9IDE1MCxcbiAgICBNQVNLX09QRU4gPSA3NDAsXG4gICAgTUFTS19DTE9TRSA9IDI3MCxcbiAgICBCR19UT1VDSF9aT05FX09QRU5fSEVJR0hUID0gMTAwLFxuICAgIEJHX1RPVUNIX1pPTkVfQ0xPU0VfSEVJR0hUID0gMTAwMCxcbn1cblxuZXhwb3J0IGVudW0gRGFpbHlRdWVzdFRhYk5hbWVzIHtcbiAgICBTRVRUSU5HX0FORF9VUERBVEUsXG4gICAgQ0hFQ0tfSU4sXG4gICAgU0VMRkNBUkUsXG4gICAgTElGRUJPWCxcbiAgICBWSUVUVEVMX1BMVVMsXG4gICAgQ09OTkVDVElPTixcbiAgICBDSEVDS19PVVQsXG4gICAgRU5URVJUQUlOTUVOVCxcbiAgICBTSE9QUElORyxcbiAgICBTSEFSSU5HLFxuICAgIFRPVVIsXG59XG5cbmV4cG9ydCBlbnVtIE1pc3Npb25zIHtcbiAgICBNT19HQU1FID0gJ01PX0dBTUUnLFxuICAgIE1PX0dBTUVfTEFOX0RBVSA9ICdNT19HQU1FX0xBTl9EQVUnLFxuICAgIFhBQ19USFVDX1RIT05HX1RJTiA9ICdYQUNfVEhVQ19USE9OR19USU4nLFxuICAgIENISUFfU0VfR0FNRSA9ICdDSElBX1NFX0dBTUUnLFxuICAgIFRIQU1fUVVBTl9HVUlfVElFVF9LSUVNID0gJ1RIQU1fUVVBTl9HVUlfVElFVF9LSUVNJyxcbiAgICBUSEFNX1FVQU5fVklfUEFZX05PVyA9ICdUSEFNX1FVQU5fVklfUEFZX05PVycsXG4gICAgVEhBTV9RVUFOX0RBVV9UVV9TQVZFX05PVyA9ICdUSEFNX1FVQU5fREFVX1RVX1NBVkVfTk9XJyxcbiAgICBUSEFNX1FVQU5fRUFTWVZBWSA9ICdUSEFNX1FVQU5fRUFTWVZBWScsXG4gICAgVEhBTV9RVUFOX1RJRU5fTUFUX1hPQVlfVk9ORyA9ICdUSEFNX1FVQU5fVElFTl9NQVRfWE9BWV9WT05HJyxcbiAgICBUSEFNX1FVQU5fTVVBX1RSVU9DX1RSQV9TQVUgPSAnVEhBTV9RVUFOX01VQV9UUlVPQ19UUkFfU0FVJyxcbiAgICBMSUVOX0tFVF9USEUgPSAnTElFTl9LRVRfVEhFJyxcbiAgICBDT05HX0RPTkdfU1VDX0tIT0UgPSAnQ09OR19ET05HX1NVQ19LSE9FJ1xufVxuXG5leHBvcnQgY29uc3QgTWlzc2lvbnNCdXR0b25UZXh0ID0ge1xuICAgIFtNaXNzaW9ucy5YQUNfVEhVQ19USE9OR19USU5dOiAnWMOhYyB0aOG7sWMnLFxuICAgIFtNaXNzaW9ucy5MSUVOX0tFVF9USEVdOiAnTGnDqm4ga+G6v3QnLFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fR1VJX1RJRVRfS0lFTV06ICdUaGFtIHF1YW4nLFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fVklfUEFZX05PV106ICdUaGFtIHF1YW4nLFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fREFVX1RVX1NBVkVfTk9XXTogJ1RoYW0gcXVhbicsXG4gICAgW01pc3Npb25zLlRIQU1fUVVBTl9FQVNZVkFZXTogJ1RoYW0gcXVhbicsXG4gICAgW01pc3Npb25zLlRIQU1fUVVBTl9USUVOX01BVF9YT0FZX1ZPTkddOiAnVGhhbSBxdWFuJyxcbiAgICBbTWlzc2lvbnMuVEhBTV9RVUFOX01VQV9UUlVPQ19UUkFfU0FVXTogJ1RoYW0gcXVhbicsXG4gICAgW01pc3Npb25zLkNPTkdfRE9OR19TVUNfS0hPRV06ICdUaGFtIGdpYScsXG4gICAgW01pc3Npb25zLkNISUFfU0VfR0FNRV06ICdDaGlhIHPhursnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYXNrIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb2ludDogbnVtYmVyO1xuICAgIGlzQ29tcGxldGVkOiBib29sZWFuO1xuICAgIGdpZnRJZDogQXJyYXk8bnVtYmVyPjtcbn1cblxuZXhwb3J0IGNvbnN0IGJ0bkNhbGxCYWNrcyA9IHtcbiAgICBbTWlzc2lvbnMuVEhBTV9RVUFOX0RBVV9UVV9TQVZFX05PV106ICgpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZVNhdmVub3csIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pKVxuICAgIH0sXG4gICAgW01pc3Npb25zLlRIQU1fUVVBTl9WSV9QQVlfTk9XXTogKCkgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChwdXNoUGFnZSh7IHBhZ2U6IEVBcHBQYWdlcy5QYWdlUGF5bm93LCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KSlcbiAgICB9LFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fR1VJX1RJRVRfS0lFTV06ICgpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZUd1aVRpZXRLaWVtLCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KSlcbiAgICB9LFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fRUFTWVZBWV06ICgpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocHVzaFBhZ2UoeyBwYWdlOiBFQXBwUGFnZXMuUGFnZUVhc3l2YXksIGVmZmVjdDogUEFHRV9TSE9XX0VGRkVDVC5MRUZUIH0pKVxuICAgIH0sXG4gICAgW01pc3Npb25zLlRIQU1fUVVBTl9USUVOX01BVF9YT0FZX1ZPTkddOiAoKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VUaWVuTWF0LCBlZmZlY3Q6IFBBR0VfU0hPV19FRkZFQ1QuTEVGVCB9KSlcbiAgICB9LFxuICAgIFtNaXNzaW9ucy5USEFNX1FVQU5fTVVBX1RSVU9DX1RSQV9TQVVdOiAoKSA9PiB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hQYWdlKHsgcGFnZTogRUFwcFBhZ2VzLlBhZ2VNdWFUcnVvYywgZWZmZWN0OiBQQUdFX1NIT1dfRUZGRUNULkxFRlQgfSkpXG4gICAgfSxcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBRdWVzdHNDb250YWluZXIgZXh0ZW5kcyBTaW5nbGV0b25Ob2RlPENvbXBRdWVzdHNDb250YWluZXI+KCkge1xuICAgIHByb3BzOiBSb290U3RhdGVcbiAgICBhY3Rpb25zOiBhbnk7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBxdWVzdFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBiZ1RvdWNoWm9uZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHRpdGxlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgdGl0bGVCaWdUb3VjaFpvbmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJvZHk6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHNjcm9sbFZpZXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgc2Nyb2xsQmFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBwdWJsaWMgaW50ZXJhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0RyYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBJc09wZW4oKSB7IHJldHVybiB0aGlzLmlzT3BlbjsgfVxuXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFiSW5kZXg6IG51bWJlciA9IERhaWx5UXVlc3RUYWJOYW1lcy5TRVRUSU5HX0FORF9VUERBVEU7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICBIZWxwZXIucmVnaXN0ZXJCdXR0b25FdmVudCh0aGlzLmJnVG91Y2hab25lLCAoKSA9PiB7XG4gICAgICAgICAgICB0cmFja1VzZXJJbnRlcmFjdCgpXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5DbG9zZSgpIDogdGhpcy5PcGVuKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgSGVscGVyLnJlZ2lzdGVyQnV0dG9uRXZlbnQodGhpcy50aXRsZUJpZ1RvdWNoWm9uZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuQ2xvc2UoKSA6IHRoaXMuT3BlbigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICBsZXQgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJnVG91Y2hab25lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1vdXNlRG93biA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYmdUb3VjaFpvbmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VzZURvd24pIHJldHVybjtcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1kgPSB0aGlzLm5vZGUueSArIGRlbHRhLnk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3WSA8IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5DTE9TRV9ZIHx8IG5ld1kgPiBRdWVzdHNDb250YWluZXJQYXJhbXMuT1BFTl9ZKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IG5ld1k7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgUXVlc3RzQ29udGFpbmVyUGFyYW1zLk9QRU5fWSAtIFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5EUkFHX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnkgPiBRdWVzdHNDb250YWluZXJQYXJhbXMuQ0xPU0VfWSArIFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5EUkFHX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5iZ1RvdWNoWm9uZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJnVG91Y2hab25lLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55ID49IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5DTE9TRV9ZICsgUXVlc3RzQ29udGFpbmVyUGFyYW1zLkRSQUdfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5PcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDw9IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5PUEVOX1kgLSBRdWVzdHNDb250YWluZXJQYXJhbXMuRFJBR19USFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgT3BlbigpIHtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRpdGxlQmlnVG91Y2hab25lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmdUb3VjaFpvbmUuaGVpZ2h0ID0gUXVlc3RzQ29udGFpbmVyUGFyYW1zLkJHX1RPVUNIX1pPTkVfT1BFTl9IRUlHSFQ7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5PUEVOX1ksIDApIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuaGVpZ2h0ID0gUXVlc3RzQ29udGFpbmVyUGFyYW1zLk1BU0tfT1BFTjtcbiAgICAgICAgdGhpcy5tYXNrLmhlaWdodCA9IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5NQVNLX09QRU47XG4gICAgICAgIHRoaXMuYm9keS5oZWlnaHQgPSBRdWVzdHNDb250YWluZXJQYXJhbXMuTUFTS19PUEVOO1xuICAgICAgICB0aGlzLnNjcm9sbEJhci5oZWlnaHQgPSBRdWVzdHNDb250YWluZXJQYXJhbXMuTUFTS19PUEVOO1xuICAgIH1cblxuICAgIENsb3NlKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlQmlnVG91Y2hab25lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnVG91Y2hab25lLmhlaWdodCA9IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5CR19UT1VDSF9aT05FX0NMT1NFX0hFSUdIVDtcblxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMjUsIHsgcG9zaXRpb246IGNjLnYzKDAsIFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5DTE9TRV9ZLCAwKSB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5oZWlnaHQgPSBRdWVzdHNDb250YWluZXJQYXJhbXMuTUFTS19DTE9TRTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2suaGVpZ2h0ID0gUXVlc3RzQ29udGFpbmVyUGFyYW1zLk1BU0tfQ0xPU0U7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmhlaWdodCA9IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5NQVNLX0NMT1NFICsgMTUwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsQmFyLmhlaWdodCA9IFF1ZXN0c0NvbnRhaW5lclBhcmFtcy5NQVNLX0NMT1NFO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFUb1VzZSA9IFIucGlwZShcbiAgICAgICAgICAgIC8vIFIuZmlsdGVyKFxuICAgICAgICAgICAgLy8gICAgIChxdWVzdDogYW55KSA9PiBSLmluY2x1ZGVzKHF1ZXN0Lm5hbWUsIEdhbWVEZWZpbmUucXVlc3RzVG9TaG93KVxuICAgICAgICAgICAgLy8gKSxcbiAgICAgICAgICAgIFIubWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUsIGFkZFR1cm4gfSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgbGV0IGxldmVsID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdNT19HQU1FJykge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IE1hdGguZmxvb3IodGhpcy5wcm9wcy5sb2dpbi5sb2dpblN0cmVhayAvIDcpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IGxldmVsIDwgNCA/IGxldmVsIDogNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgYWRkVHVybjogbGV2ZWwgPj0gMCA/IFIudmFsdWVzKGFkZFR1cm4pW2xldmVsXSA6IGFkZFR1cm4sXG4gICAgICAgICAgICAgICAgICAgIGJ0bkNCOiBidG5DYWxsQmFja3NbbmFtZV0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBSLnNvcnQoUi5hc2NlbmQoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRvbmUsIG1heCB9ID0gZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IGRvbmUgPj0gbWF4ID8gMTAwMCA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICkodGhpcy5wcm9wcy5xdWVzdHMuZGF0YSk7XG5cbiAgICAgICAgZGF0YVRvVXNlLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGlzcGxheU5hbWUsIGRlc2NyaXB0aW9uLCBhZGRDb2luLCBhZGRUdXJuLCBkb25lLCBtYXgsIGRlZXBsaW5rLCBidG5DQiB9ID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbShkb25lLCBtYXgsIGRpc3BsYXlOYW1lLCBkZXNjcmlwdGlvbiwgYWRkQ29pbiwgYWRkVHVybiwgZGVlcGxpbmssIGJ0bkNCLCBuYW1lKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRJdGVtKFxuICAgICAgICBwcm9ncmVzczogbnVtYmVyLFxuICAgICAgICBtYXg6IG51bWJlcixcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBjb2luOiBudW1iZXIsXG4gICAgICAgIHRpY2tldDogbnVtYmVyLFxuICAgICAgICBkZWVwbGluazogc3RyaW5nLFxuICAgICAgICBidG5DQjogRnVuY3Rpb24gPSBudWxsLFxuICAgICAgICBxdWVzdENvZGU6ICcnLFxuICAgICkge1xuICAgICAgICBjb25zdCBuZXdRdWVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucXVlc3RQcmVmYWIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobmV3UXVlc3QpO1xuXG4gICAgICAgIG5ld1F1ZXN0LmdldENvbXBvbmVudChDb21wUXVlc3QpLmluaXQocHJvZ3Jlc3MsIG1heCwgbmFtZSwgZGVzY3JpcHRpb24sIGNvaW4sIHRpY2tldCwgZGVlcGxpbmssIGJ0bkNCLCBxdWVzdENvZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiAoe1xuICAgIHF1ZXN0czogc3RhdGUucXVlc3RzLFxuICAgIGxvZ2luOiBzdGF0ZS5sb2dpblxufSlcbmNvbnN0IG1hcERpc3BhdGNoVG9BY3Rpb24gPSAoZGlzcGF0Y2g6IEFwcERpc3BhdGNoKSA9PiAoe1xuICAgIHB1c2hQYWdlOiAocGF5bG9hZDogRUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0KSA9PlxuICAgICAgICBkaXNwYXRjaChwdXNoUGFnZShwYXlsb2FkKSksXG4gICAgcG9wUGFnZTogKCkgPT4gZGlzcGF0Y2gocG9wUGFnZSgpKSxcbn0pXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb0FjdGlvbikoQ29tcFF1ZXN0c0NvbnRhaW5lcilcbiJdfQ==