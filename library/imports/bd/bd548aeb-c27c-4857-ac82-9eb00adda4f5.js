"use strict";
cc._RF.push(module, 'bd548rrwnxIV6yCnrAK3aT1', 'SliceDeeplinks');
// scripts/src/features/SliceDeeplinks.ts

"use strict";
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDeeplinks = exports.DeeplinkTypesToName = exports.EDeeplinkTypes = void 0;
var R = require("ramda");
var toolkit_1 = require("@reduxjs/toolkit");
var EDeeplinkTypes;
(function (EDeeplinkTypes) {
    EDeeplinkTypes[EDeeplinkTypes["CLOSE_GAME"] = 0] = "CLOSE_GAME";
    EDeeplinkTypes[EDeeplinkTypes["BUY_TURN"] = 1] = "BUY_TURN";
    EDeeplinkTypes[EDeeplinkTypes["XAC_THUC_THONG_TIN"] = 2] = "XAC_THUC_THONG_TIN";
    EDeeplinkTypes[EDeeplinkTypes["OPEN_VOUCHER"] = 3] = "OPEN_VOUCHER";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_GUI_TIET_KIEM"] = 4] = "THAM_QUAN_GUI_TIET_KIEM";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_VI_PAY_NOW"] = 5] = "THAM_QUAN_VI_PAY_NOW";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_DAU_TU_SAVE_NOW"] = 6] = "THAM_QUAN_DAU_TU_SAVE_NOW";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_EASYVAY"] = 7] = "THAM_QUAN_EASYVAY";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_TIEN_MAT_XOAY_VONG"] = 8] = "THAM_QUAN_TIEN_MAT_XOAY_VONG";
    EDeeplinkTypes[EDeeplinkTypes["THAM_QUAN_MUA_TRUOC_TRA_SAU"] = 9] = "THAM_QUAN_MUA_TRUOC_TRA_SAU";
})(EDeeplinkTypes = exports.EDeeplinkTypes || (exports.EDeeplinkTypes = {}));
exports.DeeplinkTypesToName = (_a = {},
    _a[EDeeplinkTypes.CLOSE_GAME] = 'CLOSE_GAME',
    _a[EDeeplinkTypes.BUY_TURN] = 'BUY_TURN',
    _a[EDeeplinkTypes.XAC_THUC_THONG_TIN] = 'XAC_THUC_THONG_TIN',
    _a[EDeeplinkTypes.OPEN_VOUCHER] = 'OPEN_VOUCHER',
    _a[EDeeplinkTypes.THAM_QUAN_GUI_TIET_KIEM] = 'THAM_QUAN_GUI_TIET_KIEM',
    _a[EDeeplinkTypes.THAM_QUAN_VI_PAY_NOW] = 'THAM_QUAN_VI_PAY_NOW',
    _a[EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW] = 'THAM_QUAN_DAU_TU_SAVE_NOW',
    _a[EDeeplinkTypes.THAM_QUAN_EASYVAY] = 'THAM_QUAN_EASYVAY',
    _a[EDeeplinkTypes.THAM_QUAN_TIEN_MAT_XOAY_VONG] = 'THAM_QUAN_TIEN_MAT_XOAY_VONG',
    _a[EDeeplinkTypes.THAM_QUAN_MUA_TRUOC_TRA_SAU] = 'THAM_QUAN_MUA_TRUOC_TRA_SAU',
    _a);
var initDeeplinksState = {
    data: (_b = {},
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.CLOSE_GAME]] = 'viettelpay://back',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.BUY_TURN]] = 'viettelpay://paypointtet2022',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.XAC_THUC_THONG_TIN]] = 'viettelpay.onelink.me://action/c=XACTHUCTHONGTINVT&t=WEBVIEW1',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.OPEN_VOUCHER]] = 'viettelpay.onelink.me://action/c=URBOX_SCR&t=URBOX',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_GUI_TIET_KIEM]] = 'viettelpay.onelink.me://action/c=TKBAOVIET&t=FINANCE16',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_VI_PAY_NOW]] = 'viettelpay.onelink.me://action/c=FELOANCRDT&t=LOAN_CRD_FE',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_DAU_TU_SAVE_NOW]] = 'viettelpay.onelink.me://action/c=SAVENOW&t=WEBVIEW1',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_EASYVAY]] = 'https://viettelpay.onelink.me/2dRm/easyvay4',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_TIEN_MAT_XOAY_VONG]] = 'https://viettelpay.onelink.me/2dRm/tmxv01',
        _b[exports.DeeplinkTypesToName[EDeeplinkTypes.THAM_QUAN_MUA_TRUOC_TRA_SAU]] = 'viettelpay://action/c=AMIGO&t=WEBVIEW1&',
        _b),
};
var deeplink = toolkit_1.createSlice({
    name: 'deeplink',
    initialState: initDeeplinksState,
    reducers: {
        syncDeeplinks: function (state, _a) {
            var payload = _a.payload;
            state.data = __assign(__assign({}, state.data), R.reject(R.equals(''))(payload));
        },
    },
});
exports.syncDeeplinks = deeplink.actions.syncDeeplinks;
exports.default = deeplink.reducer;

cc._RF.pop();