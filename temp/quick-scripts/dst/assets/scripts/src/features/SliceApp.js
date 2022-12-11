
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZUFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTZFO0FBRTdFLGtEQUE0QztBQUU1QyxJQUFZLGdCQVFYO0FBUkQsV0FBWSxnQkFBZ0I7SUFDMUIsMkRBQU0sQ0FBQTtJQUNOLHlEQUFLLENBQUE7SUFDTCx1REFBSSxDQUFBO0lBQ0osdURBQUksQ0FBQTtJQUNKLHlEQUFLLENBQUE7SUFDTCxtREFBRSxDQUFBO0lBQ0YsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFSVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQVEzQjtBQUNELElBQVksU0FhWDtBQWJELFdBQVksU0FBUztJQUNuQixrQ0FBcUIsQ0FBQTtJQUNyQixvQ0FBdUIsQ0FBQTtJQUN2Qix3Q0FBMkIsQ0FBQTtJQUMzQiw0Q0FBK0IsQ0FBQTtJQUMvQixzQ0FBeUIsQ0FBQTtJQUN6Qix3Q0FBMkIsQ0FBQTtJQUMzQiw4REFBaUQsQ0FBQTtJQUNqRCxzQ0FBeUIsQ0FBQTtJQUN6QixnREFBbUMsQ0FBQTtJQUNuQyx3Q0FBMkIsQ0FBQTtJQUMzQix3Q0FBMkIsQ0FBQTtJQUMzQiwwQ0FBNkIsQ0FBQTtBQUMvQixDQUFDLEVBYlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFhcEI7QUFDRCxJQUFZLFVBd0JYO0FBeEJELFdBQVksVUFBVTtJQUNwQix1REFBeUMsQ0FBQTtJQUN6Qyx5REFBMkMsQ0FBQTtJQUMzQyxpREFBbUMsQ0FBQTtJQUNuQyx1REFBeUMsQ0FBQTtJQUN6Qyx1Q0FBeUIsQ0FBQTtJQUN6QiwrQ0FBaUMsQ0FBQTtJQUNqQyxtREFBcUMsQ0FBQTtJQUNyQywyQ0FBNkIsQ0FBQTtJQUM3QiwyREFBNkMsQ0FBQTtJQUM3Qyx5RUFBMkQsQ0FBQTtJQUMzRCw2REFBK0MsQ0FBQTtJQUMvQyw2Q0FBK0IsQ0FBQTtJQUMvQix5Q0FBMkIsQ0FBQTtJQUMz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QztRQUNELFFBQVEsRUFBUixVQUFTLEtBQUssRUFBRSxFQUEwQztnQkFBeEMsT0FBTyxvQkFBNkIsSUFBSSxjQUFqQztZQUN2QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7aUJBQzVCO2dCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUE7YUFDbkI7UUFDSCxDQUFDO1FBQ0QsWUFBWSxZQUFDLEtBQUs7WUFDaEIsNEJBQTRCO1FBQzlCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQTtBQUVBLFFBQUEsUUFBUSxJQURHLEtBUVQsR0FBRyxDQUFDLE9BQU8sZ0JBTmIsUUFBQSxPQUFPLGVBQ1AsUUFBQSxnQkFBZ0Isd0JBQ2hCLFFBQUEsU0FBUyxpQkFDVCxRQUFBLFNBQVMsaUJBQ1QsUUFBQSxRQUFRLGdCQUNSLFFBQUEsWUFBWSxtQkFDQztBQUNmLGtCQUFlLEdBQUcsQ0FBQyxPQUFPLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi8uLi9jb21tb24vRXZlbnRzJ1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gJy4uLy4uL2NvbW1vbi9Tb3VuZE1ncidcbmltcG9ydCB7IElVc2VyUHJvZmlsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9Vc2VyUHJvZmlsZSdcbmV4cG9ydCBlbnVtIFBBR0VfU0hPV19FRkZFQ1Qge1xuICBBUFBFQVIsXG4gIFNDQUxFLFxuICBGQURFLFxuICBMRUZULFxuICBSSUdIVCxcbiAgVVAsXG4gIERPV04sXG59XG5leHBvcnQgZW51bSBFQXBwUGFnZXMge1xuICBQYWdlSG9tZSA9ICdQYWdlSG9tZScsXG4gIFBhZ2VSdWxlcyA9ICdQYWdlUnVsZXMnLFxuICBQYWdlQnV5VHVybiA9ICdQYWdlQnV5VHVybicsXG4gIFBhZ2VJbnZlbnRvcnkgPSAnUGFnZUludmVudG9yeScsXG4gIFBhZ2VSZXdhcmQgPSAnUGFnZVJld2FyZCcsXG4gIFBhZ2VTYXZlbm93ID0gJ1BhZ2VTYXZlbm93JyxcbiAgUGFnZVdlZWtseVByaXplSGlzdG9yeSA9ICdQYWdlV2Vla2x5UHJpemVIaXN0b3J5JyxcbiAgUGFnZVBheW5vdyA9ICdQYWdlUGF5bm93JyxcbiAgUGFnZUd1aVRpZXRLaWVtID0gJ1BhZ2VHdWlUaWV0S2llbScsXG4gIFBhZ2VFYXN5dmF5ID0gJ1BhZ2VFYXN5dmF5JyxcbiAgUGFnZVRpZW5NYXQgPSAnUGFnZVRpZW5NYXQnLFxuICBQYWdlTXVhVHJ1b2MgPSAnUGFnZU11YVRydW9jJyxcbn1cbmV4cG9ydCBlbnVtIEVBcHBQb3B1cHMge1xuICBQb3B1cENvbXBsZXRlUXVlc3QgPSAnUG9wdXBDb21wbGV0ZVF1ZXN0JyxcbiAgUG9wdXBDb25maXJtRG9RdWVzdCA9ICdQb3B1cENvbmZpcm1Eb1F1ZXN0JyxcbiAgUG9wdXBEYWlseUxvZ2luID0gJ1BvcHVwRGFpbHlMb2dpbicsXG4gIFBvcHVwTmV3VXNlclJld2FyZCA9ICdQb3B1cE5ld1VzZXJSZXdhcmQnLFxuICBQb3B1cEVycm9yID0gJ1BvcHVwRXJyb3InLFxuICBQb3B1cFNwaW5FcnJvciA9ICdQb3B1cFNwaW5FcnJvcicsXG4gIFBvcHVwT3V0T2ZUaWNrZXQgPSAnUG9wdXBPdXRPZlRpY2tldCcsXG4gIFBvcHVwQnV5VHVybiA9ICdQb3B1cEJ1eVR1cm4nLFxuICBQb3B1cEJ1eVdlZWtseVRpY2tldCA9ICdQb3B1cEJ1eVdlZWtseVRpY2tldCcsXG4gIFBvcHVwQnV5V2Vla2x5VGlja2V0U3VjY2VzcyA9ICdQb3B1cEJ1eVdlZWtseVRpY2tldFN1Y2Nlc3MnLFxuICBQb3B1cERhaWx5U3BpbkNhcHBpbmcgPSAnUG9wdXBEYWlseVNwaW5DYXBwaW5nJyxcbiAgUG9wdXBFeGl0R2FtZSA9ICdQb3B1cEV4aXRHYW1lJyxcbiAgUG9wdXBSZXdhcmQgPSAnUG9wdXBSZXdhcmQnLFxuICBQb3B1cEdvVG9Wb3VjaGVyID0gJ1BvcHVwR29Ub1ZvdWNoZXInLFxuICBQb3B1cElkbGVUb29Mb25nID0gJ1BvcHVwSWRsZVRvb0xvbmcnLFxuICBQb3B1cExvc3RDb25uZWN0aW9uID0gJ1BvcHVwTG9zdENvbm5lY3Rpb24nLFxuICBQb3B1cFNhdmVOb3dPdmVybG9hZGVkID0gJ1BvcHVwU2F2ZU5vd092ZXJsb2FkZWQnLFxuICBQb3B1cEJ1eVR1cm5TdWNjZXNzID0gJ1BvcHVwQnV5VHVyblN1Y2Nlc3MnLFxuICBQb3B1cFdlZWtseVdpbm5lciA9ICdQb3B1cFdlZWtseVdpbm5lcicsXG4gIFBvcHVwVXBkYXRlSW5mbyA9ICdQb3B1cFVwZGF0ZUluZm8nLFxuICBQb3B1cEVycm9yUmVsb2FkID0gJ1BvcHVwRXJyb3JSZWxvYWQnLFxuICBQb3B1cFNwaW5TdWNjZXNzID0gJ1BvcHVwU3BpblN1Y2Nlc3MnLFxuICBQb3B1cExlYWRlcmJvYXJkID0gJ1BvcHVwTGVhZGVyYm9hcmQnLFxufVxuZXhwb3J0IGludGVyZmFjZSBJUGFnZVdpdGhFZmZlY3Qge1xuICBwYWdlOiBFQXBwUGFnZXNcbiAgZWZmZWN0PzogUEFHRV9TSE9XX0VGRkVDVFxufVxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xuICBwYWdlU3RhY2s6IEVBcHBQYWdlc1tdXG4gIGN1cnJlbnRQYWdlOiBFQXBwUGFnZXNcbiAgZWZmZWN0VHlwZTogUEFHRV9TSE9XX0VGRkVDVFxuICB0dXRvcmlhbDogQm9vbGVhblxuICBwb3B1cHM6IEVBcHBQb3B1cHNbXVxuICBwb3B1cEVmZmVjdD86IGJvb2xlYW5cbn1cbmNvbnN0IGluaXRBcHBTdGF0ZTogSUFwcFN0YXRlID0ge1xuICBwYWdlU3RhY2s6IFtFQXBwUGFnZXMuUGFnZUhvbWVdLFxuICBjdXJyZW50UGFnZTogRUFwcFBhZ2VzLlBhZ2VIb21lLFxuICBlZmZlY3RUeXBlOiBQQUdFX1NIT1dfRUZGRUNULkFQUEVBUixcbiAgdHV0b3JpYWw6IGZhbHNlLFxuICBwb3B1cHM6IFtdLFxuICBwb3B1cEVmZmVjdDogZmFsc2UsXG59XG5jb25zdCBhcHAgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhcHAnLFxuICBpbml0aWFsU3RhdGU6IGluaXRBcHBTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBwdXNoUGFnZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0Pikge1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnRQYWdlICE9IHBheWxvYWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgc3RhdGUucGFnZVN0YWNrLnB1c2gocGF5bG9hZC5wYWdlKVxuICAgICAgICAgIHN0YXRlLmVmZmVjdFR5cGUgPSBwYXlsb2FkLmVmZmVjdCB8fCBQQUdFX1NIT1dfRUZGRUNULkFQUEVBUlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnBhZ2VTdGFjay5wdXNoKHBheWxvYWQpXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBzdGF0ZS5wYWdlU3RhY2tbc3RhdGUucGFnZVN0YWNrLmxlbmd0aCAtIDFdXG4gICAgICB9XG4gICAgfSxcbiAgICBwb3BQYWdlKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5wYWdlU3RhY2sucG9wKClcbiAgICAgIHN0YXRlLmVmZmVjdFR5cGUgPSBQQUdFX1NIT1dfRUZGRUNULlJJR0hUXG4gICAgICBpZiAoc3RhdGUucGFnZVN0YWNrLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIHN0YXRlLnBhZ2VTdGFjay5wdXNoKEVBcHBQYWdlcy5QYWdlSG9tZSlcbiAgICAgIH1cbiAgICAgIHN0YXRlLmN1cnJlbnRQYWdlID0gc3RhdGUucGFnZVN0YWNrW3N0YXRlLnBhZ2VTdGFjay5sZW5ndGggLSAxXVxuICAgIH0sXG4gICAgcHVzaFBhZ2VGcm9tTWVudShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RUFwcFBhZ2VzPikge1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnRQYWdlICE9IHBheWxvYWQpIHtcbiAgICAgICAgc3RhdGUucGFnZVN0YWNrLnB1c2gocGF5bG9hZClcbiAgICAgICAgc3RhdGUuY3VycmVudFBhZ2UgPSBwYXlsb2FkXG4gICAgICAgIHN0YXRlLmVmZmVjdFR5cGUgPSBQQUdFX1NIT1dfRUZGRUNULkxFRlRcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvcFRvUGFnZShzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RUFwcFBhZ2VzIHwgSVBhZ2VXaXRoRWZmZWN0Pikge1xuICAgICAgaWYgKHN0YXRlLmN1cnJlbnRQYWdlICE9IHBheWxvYWQpIHtcbiAgICAgICAgbGV0IHBhZ2VcbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcGFnZSA9IHBheWxvYWQucGFnZVxuICAgICAgICAgIHN0YXRlLmVmZmVjdFR5cGUgPSBwYXlsb2FkLmVmZmVjdCB8fCBQQUdFX1NIT1dfRUZGRUNULkFQUEVBUlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2UgPSBwYXlsb2FkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gc3RhdGUucGFnZVN0YWNrLmluZGV4T2YocGFnZSlcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSBzdGF0ZS5wYWdlU3RhY2suaW5kZXhPZihFQXBwUGFnZXMuUGFnZUhvbWUpXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSBzdGF0ZS5wYWdlU3RhY2sgPSBzdGF0ZS5wYWdlU3RhY2suc2xpY2UoMCwgaW5kZXggKyAxKVxuICAgICAgICBzdGF0ZS5jdXJyZW50UGFnZSA9IHN0YXRlLnBhZ2VTdGFja1tzdGF0ZS5wYWdlU3RhY2subGVuZ3RoIC0gMV1cbiAgICAgIH1cbiAgICB9LFxuICAgIHB1c2hQb3B1cChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248RUFwcFBvcHVwcz4pIHtcbiAgICAgIFNvdW5kTWdyLnBsYXlTZngoU291bmRNZ3IuSW5zdGFuY2UuU0ZYX1BPUFVQKTtcbiAgICAgIGNvbnNvbGUubG9nKCdwdXNocG9wdXAnLCBwYXlsb2FkKVxuICAgICAgaWYgKFxuICAgICAgICBzdGF0ZS5wb3B1cHMubGVuZ3RoID4gMCAmJlxuICAgICAgICBzdGF0ZS5wb3B1cHNbc3RhdGUucG9wdXBzLmxlbmd0aCAtIDFdICE9IHBheWxvYWRcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5wb3B1cHMucHVzaChwYXlsb2FkKVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5wb3B1cHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgc3RhdGUucG9wdXBzLnB1c2gocGF5bG9hZClcbiAgICAgIH1cbiAgICB9LFxuICAgIHBvcFBvcHVwKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxib29sZWFuPiA9IG51bGwpIHtcbiAgICAgIGlmIChzdGF0ZS5wb3B1cHMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIHN0YXRlLnBvcHVwRWZmZWN0ID0gcGF5bG9hZFxuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcHVwcy5wb3AoKVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRWZmZWN0KHN0YXRlKSB7XG4gICAgICAvLyBzdGF0ZS5wb3B1cEVmZmVjdCA9IGZhbHNlXG4gICAgfSxcbiAgfSxcbn0pXG5leHBvcnQgY29uc3Qge1xuICBwdXNoUGFnZSxcbiAgcG9wUGFnZSxcbiAgcHVzaFBhZ2VGcm9tTWVudSxcbiAgcG9wVG9QYWdlLFxuICBwdXNoUG9wdXAsXG4gIHBvcFBvcHVwLFxuICByZW1vdmVFZmZlY3QsXG59ID0gYXBwLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGFwcC5yZWR1Y2VyXG4iXX0=