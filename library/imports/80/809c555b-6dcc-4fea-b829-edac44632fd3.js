"use strict";
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