"use strict";
cc._RF.push(module, '7926cCvNwlOmYfeTu9ZuQ5a', 'SliceApp');
// scripts/src/features/SliceApp.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEffect = exports.popPopup = exports.pushPopup = exports.popToPage = exports.pushPageFromMenu = exports.popPage = exports.pushPage = exports.EAppPopups = exports.EAppPages = exports.PAGE_SHOW_EFFECT = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var SoundMgr_1 = require("../../common/SoundMgr");
var PAGE_SHOW_EFFECT;
(function (PAGE_SHOW_EFFECT) {
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["APPEAR"] = 0] = "APPEAR";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["SCALE"] = 1] = "SCALE";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["FADE"] = 2] = "FADE";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["LEFT"] = 3] = "LEFT";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["RIGHT"] = 4] = "RIGHT";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["UP"] = 5] = "UP";
    PAGE_SHOW_EFFECT[PAGE_SHOW_EFFECT["DOWN"] = 6] = "DOWN";
})(PAGE_SHOW_EFFECT = exports.PAGE_SHOW_EFFECT || (exports.PAGE_SHOW_EFFECT = {}));
var EAppPages;
(function (EAppPages) {
    EAppPages["PageHome"] = "PageHome";
    EAppPages["PageRules"] = "PageRules";
    EAppPages["PageBuyTurn"] = "PageBuyTurn";
    EAppPages["PageInventory"] = "PageInventory";
    EAppPages["PageReward"] = "PageReward";
    EAppPages["PageSavenow"] = "PageSavenow";
    EAppPages["PageWeeklyPrizeHistory"] = "PageWeeklyPrizeHistory";
    EAppPages["PagePaynow"] = "PagePaynow";
    EAppPages["PageGuiTietKiem"] = "PageGuiTietKiem";
    EAppPages["PageEasyvay"] = "PageEasyvay";
    EAppPages["PageTienMat"] = "PageTienMat";
    EAppPages["PageMuaTruoc"] = "PageMuaTruoc";
})(EAppPages = exports.EAppPages || (exports.EAppPages = {}));
var EAppPopups;
(function (EAppPopups) {
    EAppPopups["PopupCompleteQuest"] = "PopupCompleteQuest";
    EAppPopups["PopupConfirmDoQuest"] = "PopupConfirmDoQuest";
    EAppPopups["PopupDailyLogin"] = "PopupDailyLogin";
    EAppPopups["PopupNewUserReward"] = "PopupNewUserReward";
    EAppPopups["PopupError"] = "PopupError";
    EAppPopups["PopupSpinError"] = "PopupSpinError";
    EAppPopups["PopupOutOfTicket"] = "PopupOutOfTicket";
    EAppPopups["PopupBuyTurn"] = "PopupBuyTurn";
    EAppPopups["PopupBuyWeeklyTicket"] = "PopupBuyWeeklyTicket";
    EAppPopups["PopupBuyWeeklyTicketSuccess"] = "PopupBuyWeeklyTicketSuccess";
    EAppPopups["PopupDailySpinCapping"] = "PopupDailySpinCapping";
    EAppPopups["PopupExitGame"] = "PopupExitGame";
    EAppPopups["PopupReward"] = "PopupReward";
    EAppPopups["PopupGoToVoucher"] = "PopupGoToVoucher";
    EAppPopups["PopupIdleTooLong"] = "PopupIdleTooLong";
    EAppPopups["PopupLostConnection"] = "PopupLostConnection";
    EAppPopups["PopupSaveNowOverloaded"] = "PopupSaveNowOverloaded";
    EAppPopups["PopupBuyTurnSuccess"] = "PopupBuyTurnSuccess";
    EAppPopups["PopupWeeklyWinner"] = "PopupWeeklyWinner";
    EAppPopups["PopupUpdateInfo"] = "PopupUpdateInfo";
    EAppPopups["PopupErrorReload"] = "PopupErrorReload";
    EAppPopups["PopupSpinSuccess"] = "PopupSpinSuccess";
    EAppPopups["PopupLeaderboard"] = "PopupLeaderboard";
})(EAppPopups = exports.EAppPopups || (exports.EAppPopups = {}));
var initAppState = {
    pageStack: [EAppPages.PageHome],
    currentPage: EAppPages.PageHome,
    effectType: PAGE_SHOW_EFFECT.APPEAR,
    tutorial: false,
    popups: [],
    popupEffect: false,
};
var app = toolkit_1.createSlice({
    name: 'app',
    initialState: initAppState,
    reducers: {
        pushPage: function (state, _a) {
            var payload = _a.payload;
            if (state.currentPage != payload) {
                if (typeof payload == 'object') {
                    state.pageStack.push(payload.page);
                    state.effectType = payload.effect || PAGE_SHOW_EFFECT.APPEAR;
                }
                else {
                    state.pageStack.push(payload);
                }
                state.currentPage = state.pageStack[state.pageStack.length - 1];
            }
        },
        popPage: function (state) {
            state.pageStack.pop();
            state.effectType = PAGE_SHOW_EFFECT.RIGHT;
            if (state.pageStack.length <= 0) {
                state.pageStack.push(EAppPages.PageHome);
            }
            state.currentPage = state.pageStack[state.pageStack.length - 1];
        },
        pushPageFromMenu: function (state, _a) {
            var payload = _a.payload;
            if (state.currentPage != payload) {
                state.pageStack.push(payload);
                state.currentPage = payload;
                state.effectType = PAGE_SHOW_EFFECT.LEFT;
            }
        },
        popToPage: function (state, _a) {
            var payload = _a.payload;
            if (state.currentPage != payload) {
                var page = void 0;
                if (typeof payload == 'object') {
                    page = payload.page;
                    state.effectType = payload.effect || PAGE_SHOW_EFFECT.APPEAR;
                }
                else {
                    page = payload;
                }
                var index = state.pageStack.indexOf(page);
                if (index < 0)
                    index = state.pageStack.indexOf(EAppPages.PageHome);
                if (index >= 0)
                    state.pageStack = state.pageStack.slice(0, index + 1);
                state.currentPage = state.pageStack[state.pageStack.length - 1];
            }
        },
        pushPopup: function (state, _a) {
            var payload = _a.payload;
            SoundMgr_1.default.playSfx(SoundMgr_1.default.Instance.SFX_POPUP);
            console.log('pushpopup', payload);
            if (state.popups.length > 0 &&
                state.popups[state.popups.length - 1] != payload) {
                state.popups.push(payload);
            }
            else if (state.popups.length == 0) {
                state.popups.push(payload);
            }
        },
        popPopup: function (state, _a) {
            var payload = (_a === void 0 ? null : _a).payload;
            if (state.popups.length > 0) {
                if (payload) {
                    state.popupEffect = payload;
                }
                state.popups.pop();
            }
        },
        removeEffect: function (state) {
            // state.popupEffect = false
        },
    },
});
exports.pushPage = (_a = app.actions, _a.pushPage), exports.popPage = _a.popPage, exports.pushPageFromMenu = _a.pushPageFromMenu, exports.popToPage = _a.popToPage, exports.pushPopup = _a.pushPopup, exports.popPopup = _a.popPopup, exports.removeEffect = _a.removeEffect;
exports.default = app.reducer;

cc._RF.pop();