
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/src/features/SliceDeeplinks.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NyYy9mZWF0dXJlcy9TbGljZURlZXBsaW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBMEI7QUFDMUIsNENBQTZFO0FBSTdFLElBQVksY0FXWDtBQVhELFdBQVksY0FBYztJQUN4QiwrREFBVSxDQUFBO0lBQ1YsMkRBQVEsQ0FBQTtJQUNSLCtFQUFrQixDQUFBO0lBQ2xCLG1FQUFZLENBQUE7SUFDWix5RkFBdUIsQ0FBQTtJQUN2QixtRkFBb0IsQ0FBQTtJQUNwQiw2RkFBeUIsQ0FBQTtJQUN6Qiw2RUFBaUIsQ0FBQTtJQUNqQixtR0FBNEIsQ0FBQTtJQUM1QixpR0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBWFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFXekI7QUFFWSxRQUFBLG1CQUFtQjtJQUM5QixHQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUcsWUFBWTtJQUN6QyxHQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUcsVUFBVTtJQUNyQyxHQUFDLGNBQWMsQ0FBQyxrQkFBa0IsSUFBRyxvQkFBb0I7SUFDekQsR0FBQyxjQUFjLENBQUMsWUFBWSxJQUFHLGNBQWM7SUFDN0MsR0FBQyxjQUFjLENBQUMsdUJBQXVCLElBQUcseUJBQXlCO0lBQ25FLEdBQUMsY0FBYyxDQUFDLG9CQUFvQixJQUFHLHNCQUFzQjtJQUM3RCxHQUFDLGNBQWMsQ0FBQyx5QkFBeUIsSUFBRywyQkFBMkI7SUFDdkUsR0FBQyxjQUFjLENBQUMsaUJBQWlCLElBQUcsbUJBQW1CO0lBQ3ZELEdBQUMsY0FBYyxDQUFDLDRCQUE0QixJQUFHLDhCQUE4QjtJQUM3RSxHQUFDLGNBQWMsQ0FBQywyQkFBMkIsSUFBRyw2QkFBNkI7UUFDNUU7QUFLRCxJQUFNLGtCQUFrQixHQUFvQjtJQUMxQyxJQUFJO1FBQ0YsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUcsbUJBQW1CO1FBQ3JFLEdBQUMsMkJBQW1CLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFHLDhCQUE4QjtRQUM5RSxHQUFDLDJCQUFtQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFHLCtEQUErRDtRQUN6SCxHQUFDLDJCQUFtQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBRyxvREFBb0Q7UUFDeEcsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsSUFBRyx3REFBd0Q7UUFDdkgsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsSUFBRywyREFBMkQ7UUFDdkgsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBRyxxREFBcUQ7UUFDdEgsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBRyw2Q0FBNkM7UUFDdEcsR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQUMsSUFBRywyQ0FBMkM7UUFDL0csR0FBQywyQkFBbUIsQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUMsSUFBRyx5Q0FBeUM7V0FDN0c7Q0FDRixDQUFBO0FBQ0QsSUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQztJQUMzQixJQUFJLEVBQUUsVUFBVTtJQUNoQixZQUFZLEVBQUUsa0JBQWtCO0lBQ2hDLFFBQVEsRUFBRTtRQUNSLGFBQWEsWUFBQyxLQUFLLEVBQUUsRUFBVztnQkFBVCxPQUFPLGFBQUE7WUFDNUIsS0FBSyxDQUFDLElBQUkseUJBQ0wsS0FBSyxDQUFDLElBQUksR0FDVixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDbkMsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQTtBQUVBLFFBQUEsYUFBYSxHQUNYLFFBQVEsQ0FBQyxPQUFPLGVBQUE7QUFDcEIsa0JBQWUsUUFBUSxDQUFDLE9BQU8sQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuLi8uLi9jb21tb24vRXZlbnRzJ1xuaW1wb3J0IHsgSVVzZXJQcm9maWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1VzZXJQcm9maWxlJ1xuXG5leHBvcnQgZW51bSBFRGVlcGxpbmtUeXBlcyB7XG4gIENMT1NFX0dBTUUsXG4gIEJVWV9UVVJOLFxuICBYQUNfVEhVQ19USE9OR19USU4sXG4gIE9QRU5fVk9VQ0hFUixcbiAgVEhBTV9RVUFOX0dVSV9USUVUX0tJRU0sXG4gIFRIQU1fUVVBTl9WSV9QQVlfTk9XLFxuICBUSEFNX1FVQU5fREFVX1RVX1NBVkVfTk9XLFxuICBUSEFNX1FVQU5fRUFTWVZBWSxcbiAgVEhBTV9RVUFOX1RJRU5fTUFUX1hPQVlfVk9ORyxcbiAgVEhBTV9RVUFOX01VQV9UUlVPQ19UUkFfU0FVLFxufVxuXG5leHBvcnQgY29uc3QgRGVlcGxpbmtUeXBlc1RvTmFtZSA9IHtcbiAgW0VEZWVwbGlua1R5cGVzLkNMT1NFX0dBTUVdOiAnQ0xPU0VfR0FNRScsXG4gIFtFRGVlcGxpbmtUeXBlcy5CVVlfVFVSTl06ICdCVVlfVFVSTicsXG4gIFtFRGVlcGxpbmtUeXBlcy5YQUNfVEhVQ19USE9OR19USU5dOiAnWEFDX1RIVUNfVEhPTkdfVElOJyxcbiAgW0VEZWVwbGlua1R5cGVzLk9QRU5fVk9VQ0hFUl06ICdPUEVOX1ZPVUNIRVInLFxuICBbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX0dVSV9USUVUX0tJRU1dOiAnVEhBTV9RVUFOX0dVSV9USUVUX0tJRU0nLFxuICBbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX1ZJX1BBWV9OT1ddOiAnVEhBTV9RVUFOX1ZJX1BBWV9OT1cnLFxuICBbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX0RBVV9UVV9TQVZFX05PV106ICdUSEFNX1FVQU5fREFVX1RVX1NBVkVfTk9XJyxcbiAgW0VEZWVwbGlua1R5cGVzLlRIQU1fUVVBTl9FQVNZVkFZXTogJ1RIQU1fUVVBTl9FQVNZVkFZJyxcbiAgW0VEZWVwbGlua1R5cGVzLlRIQU1fUVVBTl9USUVOX01BVF9YT0FZX1ZPTkddOiAnVEhBTV9RVUFOX1RJRU5fTUFUX1hPQVlfVk9ORycsXG4gIFtFRGVlcGxpbmtUeXBlcy5USEFNX1FVQU5fTVVBX1RSVU9DX1RSQV9TQVVdOiAnVEhBTV9RVUFOX01VQV9UUlVPQ19UUkFfU0FVJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGVlcGxpbmtzU3RhdGUge1xuICBkYXRhOiBSZWNvcmQ8YW55LCBhbnk+LFxufVxuY29uc3QgaW5pdERlZXBsaW5rc1N0YXRlOiBJRGVlcGxpbmtzU3RhdGUgPSB7XG4gIGRhdGE6IHtcbiAgICBbRGVlcGxpbmtUeXBlc1RvTmFtZVtFRGVlcGxpbmtUeXBlcy5DTE9TRV9HQU1FXV06ICd2aWV0dGVscGF5Oi8vYmFjaycsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuQlVZX1RVUk5dXTogJ3ZpZXR0ZWxwYXk6Ly9wYXlwb2ludHRldDIwMjInLFxuICAgIFtEZWVwbGlua1R5cGVzVG9OYW1lW0VEZWVwbGlua1R5cGVzLlhBQ19USFVDX1RIT05HX1RJTl1dOiAndmlldHRlbHBheS5vbmVsaW5rLm1lOi8vYWN0aW9uL2M9WEFDVEhVQ1RIT05HVElOVlQmdD1XRUJWSUVXMScsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuT1BFTl9WT1VDSEVSXV06ICd2aWV0dGVscGF5Lm9uZWxpbmsubWU6Ly9hY3Rpb24vYz1VUkJPWF9TQ1ImdD1VUkJPWCcsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX0dVSV9USUVUX0tJRU1dXTogJ3ZpZXR0ZWxwYXkub25lbGluay5tZTovL2FjdGlvbi9jPVRLQkFPVklFVCZ0PUZJTkFOQ0UxNicsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX1ZJX1BBWV9OT1ddXTogJ3ZpZXR0ZWxwYXkub25lbGluay5tZTovL2FjdGlvbi9jPUZFTE9BTkNSRFQmdD1MT0FOX0NSRF9GRScsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX0RBVV9UVV9TQVZFX05PV11dOiAndmlldHRlbHBheS5vbmVsaW5rLm1lOi8vYWN0aW9uL2M9U0FWRU5PVyZ0PVdFQlZJRVcxJyxcbiAgICBbRGVlcGxpbmtUeXBlc1RvTmFtZVtFRGVlcGxpbmtUeXBlcy5USEFNX1FVQU5fRUFTWVZBWV1dOiAnaHR0cHM6Ly92aWV0dGVscGF5Lm9uZWxpbmsubWUvMmRSbS9lYXN5dmF5NCcsXG4gICAgW0RlZXBsaW5rVHlwZXNUb05hbWVbRURlZXBsaW5rVHlwZXMuVEhBTV9RVUFOX1RJRU5fTUFUX1hPQVlfVk9OR11dOiAnaHR0cHM6Ly92aWV0dGVscGF5Lm9uZWxpbmsubWUvMmRSbS90bXh2MDEnLFxuICAgIFtEZWVwbGlua1R5cGVzVG9OYW1lW0VEZWVwbGlua1R5cGVzLlRIQU1fUVVBTl9NVUFfVFJVT0NfVFJBX1NBVV1dOiAndmlldHRlbHBheTovL2FjdGlvbi9jPUFNSUdPJnQ9V0VCVklFVzEmJyxcbiAgfSxcbn1cbmNvbnN0IGRlZXBsaW5rID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnZGVlcGxpbmsnLFxuICBpbml0aWFsU3RhdGU6IGluaXREZWVwbGlua3NTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzeW5jRGVlcGxpbmtzKHN0YXRlLCB7IHBheWxvYWQgfSkge1xuICAgICAgc3RhdGUuZGF0YSA9IHtcbiAgICAgICAgLi4uc3RhdGUuZGF0YSxcbiAgICAgICAgLi4uUi5yZWplY3QoUi5lcXVhbHMoJycpKShwYXlsb2FkKVxuICAgICAgfTtcbiAgICB9LFxuICB9LFxufSlcbmV4cG9ydCBjb25zdCB7XG4gIHN5bmNEZWVwbGlua3Ncbn0gPSBkZWVwbGluay5hY3Rpb25zXG5leHBvcnQgZGVmYXVsdCBkZWVwbGluay5yZWR1Y2VyXG4iXX0=